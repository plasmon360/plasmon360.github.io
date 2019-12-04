Title: Doorbell with NRF24L01 and Arduino
Date: 2015-05-29 13:30
Author: juluribk
Category: Electronics
Slug: doorbell-with-nrf24l01-and-arduino
Status: published



My current apartment does not have a doorbell (Its strange but it is true). I went ahead and built a doorbell using two arduino pro-minis and two NRF24L01 transceivers. The melody to be played when a guest presses a button can also be controlled. I have four melodies programmed in.

Here it is in full action:

<iframe width="100%" height="100%" src="https://www.youtube.com/embed/wOZX-KPf5XA" frameborder="0" allowfullscreen></iframe>

Here are some details:

**Remote** 

The schematic for the remote is shown below. The remote is configured to run on 2 AAA batteries and goes to sleep mode most of the time and then wakes up when a guest presses the button. This button press is transmitted to an NRF24L01 receiver on the doorbell by a NRF24L01 tranmisster. I decreased the overall current to 65 microA by removing the LED on the arduino pro mini and used [rocket](https://github.com/rocketscream/Low-Power) library's sleep functions. This arduino pro mini was running at 3.3V and 8 MHz. Could have gone even further in current reduction by removing the board regulator, but I was happy with 65 microAmps. For AAA batteries, assuming 1000 mAh capacity, it should last around 20 months.

Here are some pictures of the remote. I enclosed it in a eye wear case, which turned out to be a nice enclosure.

![]({filename}/images/doorbell_remote1.png){.center}

![]({filename}/images/doorbell_remote2.png){.center}

![]({filename}/images/doorbell_remote3.png){.center}


**Doorbell**  

The schematic for the doorbell is shown below. This circuit is powered by 9V adapter from AC mains, which is  converted to a 5V and 3.3V by [ICSA009](http://www.ebay.com/itm/ICSA009A-Stable-Step-Down-Power-Supply-Module-3-3V-5V-for-MB-102-Breadboard-/221584526129) breadboard adapter. I use 3.3V to power the arduino pro-mini and NRF2L01 receiver. Other than that, nothing fancy here, but I have four doorbell melodies on the arduino that can be chosen with a DIP switch. 

Connecting buzzer directly to the arduino resulted in very less volume since arduino could source much current, so I connected it to 5V supply with 2N3409 transitor. [The base of the transistor is controlled by an arduino pin in series with a 100 ohm resistor](http://bryanduxbury.com/2012/01/20/one-transistor-audio-amplifier-for-arduino-projects/). I placed the whole breadboard into a food storage container as a case.

Here are some photos of the final prototype.

![]({filename}/images/doorbell_1.jpg){.center}

![]({filename}/images/doorbell_2.jpg){.center}


<div class = "alert alert-primary">

<strong> Note :</strong> You can find my code at my <a href = "https://github.com/plasmon360/Arduino_NRF24L01_Doorbell_project"> github account</a>.

The same code should be uploaded to both remote and doorbell arduino's.
</div>
