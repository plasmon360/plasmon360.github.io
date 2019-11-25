Title: Creating Energy Band Diagrams for Solar cells and LED
Date: 2017-09-11 10:42
Author: juluribk
Category: Publications
Slug: creating-energy-band-diagrams-for-solar-cells-and-led
Status: published

Energy band diagrams are used to visulize the electron and hole transport in Solar cells and LED. I want to quickly draw them and came up with a python module.

You can download the module at my[github repository](%20%20https://github.com/plasmon360/Energy-Band-diagram "github repository").

Here's an example on how to use this code.

\[cc lang='python'\]  
from Band\_diagram import metal, semiconductor, plot

\# \# Define the metals and semiconductors. Here wf is the work function of metals, cb is conduction band minimum and vb is valance band maximum wrt to vacuum level

ITO = metal(wf = -5.2, name= 'ITO')  
p\_nio = semiconductor(cb = -1.85, vb = -5.49, name = 'P-NIO')  
p3HT = semiconductor(cb = -3, vb = -5.0, name = 'P3HT')  
PCBM = semiconductor(cb = -4, vb = -6.5, name = 'PCBM')  
ZnO = semiconductor(cb = -4.2, vb = -7.5, name = 'ZnO')  
LiF\_Al = metal(wf=-3.7, name = 'LiF/Al')

\#\# Create the stack  
stack = \[ITO,p\_nio,p3HT,PCBM,ZnO,LiF\_Al\]

\#\# plot the stack and save it  
plot(stack, filepath = 'Images/Stack1.png')  
\[/cc\]

will result in

[![Energy Band diagram of organic solar cell](http://juluribk.com/wp-content/uploads/2017/09/Stack1.png){.aligncenter .size-full .wp-image-1742 width="640" height="480"}](http://juluribk.com/wp-content/uploads/2017/09/Stack1.png)
