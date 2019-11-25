Title: Hacking Weighing Scale to Upload Weight to Plotly using Raspberry Pi
Date: 2015-04-11 12:44
Author: juluribk
Category: Test Equipment
Tags: python
Slug: hacking-weighing-scale-to-upload-weight-to-plotly-using-raspberry-pi
Status: published

![Weighing scale](http://juluribk.com/wp-content/uploads/2015/04/Picture7.png){.aligncenter .size-full .wp-image-1512 width="902" height="228"}

I have been interested in monitoring and keep track of my weight. In the past, I have used phone apps for this purpose, works OK but I was thinking of reading weight information using some microcontroller from my weighing scale and upload the data to an online database. That means that microcontroller should connect to my wi-fi connection at home and upload the data. I have seen some projects online that use an arduino for this purpose. They use arduino to serially send information to computer. The information on the computer can be potentially sent to an online database. One could also upload data directly from arduino to internet using a wifi shield, but this makes it more expensive. I was therefore more inclined towards Raspberry pi because it connects to wifi easily and can read data from weighing scale. I was also inclined in programming in python on raspberry pi rather than C, which I am not very proficient.

Choice of weighing scale: I looked around some projects online and found a weighing scale here (<http://fivevolt.blogspot.com/2011/01/hacking-scale-to-add-zigbee-goodness.html>) that seemed easy to get data from by reading the LED signals. I bought the same model for around 20 bucks at my local target. The first thing I notice after opening this scale was that it did not look similar to what was described at fivevolt blog. I did not see the four transistors and HC164 of which the author talks about in his blog. May be the manufacturer changed the design or they have different versions of it. I was disappointed.

The PCB on the weighing scale had a epoxy covered region, which I presume is the microcontroller and it is connected to a big chip on the board. I looked at the name of the big chip on the pcb board and I can barely read TM1628. A simple google search revealed that it was an LED controller for the led display. The led display has four grids (digits). Each of this digit is a 8 segment display . TM1628 controls which grids and segments were to be lit or not (HI or LOW) . So I can see 12 wires going from LED controller to LED display ( four for grids and 8 for the 7 segment display). I could figure out which wires correspond to which grid and which segment and tried to solder wires. But that meant I have to read 12 digital signals (Hi or Low) using raspberry pi GPIO. This also looks very ugly too. So I decided to take a different route instead.

A close inspection revealed that the microcontroller onboard was sending instructions to TM1628 with SPI protocol. So I intercept the voltage pulses (3.3V) using Raspberry Pi as shown in figure below. SPI bus consists of master and slave and has four lines in between them, which are MOSI, MISO, SCLK and SS (for more information see https://learn.sparkfun.com/tutorials/serial-peripheral-interface-spi).  In this case, the TM1628 is the slave and the microcontroller on board is the master. The slave does not send any data to the microcontroller so there is no MISO line. SCLK is the clock signal. MOSI and SS line are referred as DIO and STB respectively in the TM1628 manual.

\[caption id="attachment\_1521" align="aligncenter" width="780"\][![Picture1](http://juluribk.com/wp-content/uploads/2015/04/Picture11-1024x698.png){.wp-image-1521 .size-large width="780" height="532"}](http://juluribk.com/wp-content/uploads/2015/04/Picture11.png) Schematic of the hacked weighing scale\[/caption\]

 

 

After intercepting the STB, SCLK and DIO with raspberry pi as shown in the above figure, I used bitscope () to read these signals. A type pattern looks like this:

[![Picture2](http://juluribk.com/wp-content/uploads/2015/04/Picture2-1024x576.png){.aligncenter .size-large .wp-image-1502 width="780" height="439"}](http://juluribk.com/wp-content/uploads/2015/04/Picture2.png)

Each green line in the DIO contains data that is synced to STB and SCLK. When I zoom on the each green line I see the following:

[![Picture3](http://juluribk.com/wp-content/uploads/2015/04/Picture3-1024x577.png){.aligncenter .size-large .wp-image-1503 width="780" height="440"}](http://juluribk.com/wp-content/uploads/2015/04/Picture3.png)

Bits of data are being sent out in the DIO line at the rising edge of the clock signal.To decode these bytes, I wrote a python program ([source code link at the bottom of this post]{style="color: #ff0000;"}) that would capture those bits very fast using [PIGPIO](http://abyz.co.uk/rpi/pigpio/python.html) library. When I just step on the weighing scale and get down, weighing scale displayed “0.0” for some time and then the display turns off. I was able to get the bytes for this action and start to decode according to the TM1628 manual. Below are the bytes being sent and the decoded information for the action of just stepping on and stepping of the weighing scale.

[![Order of commands being sent](http://juluribk.com/wp-content/uploads/2015/04/Picture4-1024x866.png){.aligncenter .size-large .wp-image-1504 width="780" height="660"}](http://juluribk.com/wp-content/uploads/2015/04/Picture4.png)

Command 1 and command 2 prepare the display. Command3 helps in preparing the grid/digit. It can be seen from the above figure, once a grid is prepared, a character is being written to that grid/digit. This process starts from the first grid and ends at the fifth grid. This cycle repeats many times. The cycle repeats so fast that we think the display is not changing.  I used the following cheat sheets for decoding the above data bytes. Following table is for command 3 where a certain grid/digit has to being chosen.

[![Grid command](http://juluribk.com/wp-content/uploads/2015/04/Picture6.png){.aligncenter .wp-image-1506 width="790" height="268"}](http://juluribk.com/wp-content/uploads/2015/04/Picture6.png)

Following table is the bytes for displaying a certain character on a certain grid/digit

[![Decoding the bytes on weighing scale](http://juluribk.com/wp-content/uploads/2015/04/Picture5.png){.aligncenter .wp-image-1505 width="714" height="790"}](http://juluribk.com/wp-content/uploads/2015/04/Picture5.png)

Once I understood the commands being sent and how to interpret them, i wrote a python code that uses [PIGPIO](http://abyz.co.uk/rpi/pigpio/python.html) to read these commands. I also added the capability to select a user with a rotary switch and assign weight information. A user can be guest, myself or my wife. Weight information is written to a file. Finally I also added code to upload the file to plotly for visualization.

This is my final product

 

\[caption id="attachment\_1510" align="aligncenter" width="596"\][![IMG\_20150411\_120429](http://juluribk.com/wp-content/uploads/2015/04/IMG_20150411_120429.jpg){.wp-image-1510 width="596" height="447"}](http://juluribk.com/wp-content/uploads/2015/04/IMG_20150411_120429.jpg) Hacked Weighing scale and control box\[/caption\]

\[caption id="attachment\_1511" align="aligncenter" width="622"\][![IMG\_20150411\_120439](http://juluribk.com/wp-content/uploads/2015/04/IMG_20150411_120439.jpg){.wp-image-1511 width="622" height="467"}](http://juluribk.com/wp-content/uploads/2015/04/IMG_20150411_120439.jpg) Housing for Raspberry pi and Rotarty switch\[/caption\]

[Below is the youtube video of how the program works (without plotly integration)  
<iframe src="https://www.youtube.com/embed/KuFBi6P7Lm8" width="420" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>  
Below is an image of my weight on plotly since last year. I am still overweight :(  
](http://juluribk.com/wp-content/uploads/2015/04/Picture7.png)[[![plotly\_image](http://juluribk.com/wp-content/uploads/2015/04/plotly_image.png){.aligncenter .wp-image-1507 width="727" height="464"}](http://juluribk.com/wp-content/uploads/2015/04/plotly_image.png)]{style="color: #ff0000;"}

[ [P[ython Source code can be downloaded here](https://gist.github.com/plasmon360/ab314441efec4c7b4298).]{style="text-decoration: underline;"}]{style="color: #ff0000;"} {#python-source-code-can-be-downloaded-here. style="text-align: center;"}
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 
