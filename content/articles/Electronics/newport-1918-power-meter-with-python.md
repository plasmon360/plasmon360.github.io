Title: Controlling Newport 1918 Power Meter with Python
Date: 2015-04-04 12:23
Author: juluribk
Category: Electronics 
Slug: newport-1918-power-meter-with-python
Status: published

![]({filename}/images/newport_1918_power_meter.jpg ""){.center}


Optical power meters in-conjunction with a detector are used to measure power from a laser source or monochromatic output. 

At work, we use [Newport 1918](http://www.newport.com/Optical-Power-Meter-High-Performance-Hand-Held-19/509478/1033/info.aspx "Newport 1918") power meter. This power meter comes with its own [software](http://www.newport.com/Optical-Power-Meter-High-Performance-Hand-Held-19/509478/1033/info.aspx#tab_Literature "software"). However, I was interested in controlling this instrument with python. 


I wrote a python module for communicating with this instrument. This python module contains higher level functions to communicate with [Newport 1918 power meter](http://www.newport.com/1918-R-HandHeld-Optical-Power-and-Energy-Meter/509478/1033/info.aspx#tab_Overview) on a Windows computer. It uses python library ctypes to access methods in the Newport's usbdll.dll driver.

<div class = "alert alert-primary">
<strong>Note:</strong> You can read the documentation and download the module from my <a href = https://github.com/plasmon360/python_newport_1918_powermeter>github account</a>
</div>


For connecting the hardware to the computer, see the [reference manual](http://assets.newport.com/webDocuments-EN/images/RevA1918-RPowerMeterUsersManual.pdf)
