Title: Controlling Rigol Dp832 with python
Date: 2015-05-08 17:08
Author: juluribk
Category: Publications, Test Equipment
Tags: Instrumentation, python
Slug: controlling-rigol-dp832-with-python
Status: published

DC power supplies are very handy for electronic projects. They help to apply bias to a devicve. Controlling it by a computer by a program is helpful in advanced projects where timing and accurate control is an issue. I got my hands on a RIGOL DP832 which is three channel (two 30V and one 5V) power supply and is programmable through SCPI commands. The device can be controlled by USB and rs232 (optionally by LAN). SCPI commands can be sent to the instruments using VISA interface. I used Python and pyvisa module to communicate with it. I wrote a class with basic functionality. Currently it has a console application and turning on and off at a  particular bias and current value on a specified channel.

You can add more methods to the class for advanced features. You can see those commands in the [programming manual](http://www.batronix.com/pdf/Rigol/ProgrammingGuide/DP800_ProgrammingGuide_EN.pdf).

You can find my gist underneath or [[download from here.](https://gist.github.com/plasmon360/3204dc28deddeefe42d5)]{style="text-decoration: underline; color: #ff0000;"}

<p>
<script src="https://gist.github.com/plasmon360/3204dc28deddeefe42d5.js"></script>
</p>
 
