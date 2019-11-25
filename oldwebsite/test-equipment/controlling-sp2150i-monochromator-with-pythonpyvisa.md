Title: Controlling SP2150i monochromator with Python/PyVisa
Date: 2014-09-19 18:28
Author: juluribk
Category: Test Equipment
Slug: controlling-sp2150i-monochromator-with-pythonpyvisa
Status: published

Monochromator is used in optics research where a narrow bandwidth of light is required to be illuminated on a sample. I work with Princeton Instruments Acton SP2150i and needed a python program to control it.

I found the manual [here](ftp://ftp.princetoninstruments.com/public/Manuals/Acton/SP-2150i.pdf) and on page 9-10, I saw the serial commands for various functions (such as changing filters, moving the grating, etc).

To control the instrument with my windows computer, I followed these steps:

**1) Connect a usb cable between SP2150 and a computer**  
I used the port "USB" and not the "USB hub".

**2) Installing the monochromator drivers and Monocontrol software:**

Turned on the monochromator and when prompted, I Installed Princeton Instruments VCP drivers (version 2.08.08). These drivers should be in Acton Monochromator Control Software installation Disk.  If the drivers are installed properly, you should see the monochromator as a Princeton Instruments Spectral device(COMx), in the device manager. x could be any number.

[![device\_manager\_1](http://juluribk.com/wp-content/uploads/2014/09/device_manager_11.png){.aligncenter width="575" height="414"}](http://juluribk.com/wp-content/uploads/2014/09/device_manager_11.png)

Before attempting to control the instrument with python/pyvisa, I checked if the computer can communicate with monochromator using  "MonoControl". See the installation instructions [here](ftp://ftp.princetoninstruments.com/public/Manuals/Acton/Monochromator_Control_Software_Manual.pdf) . Monocontrol allows for control of monochromator which will open a windows like this:

[![monocontrol1](http://juluribk.com/wp-content/uploads/2014/09/monocontrol1.png){.wp-image-1322 .aligncenter width="512" height="410"}](http://juluribk.com/wp-content/uploads/2014/09/monocontrol1.png)

If you cannot reach this stage, then there is some problem with drivers and need to be fixed before you can use python/pyvisa to control the instrument. Close this software if you want to use it with pyvisa.

**3) Install NI-VISA runtime **  
I downloaded the exe from National Instruments and installed it. This should provide the required visa32.dll

**4) Install python2.7 and Pyvisa **

You can install pyvisa using Pip

**5) Python code**

I wrote a module that can be used to control the monochromator using pyvisa commands. The module provides a class definition and some high level functions. For the line, "self.m=instrument('COM7', timeout = 10)", change 7 to the right com port number. The number should match the com port number shown in the device manager. This module can be loaded into other python codes and the high level functions can be used to write even higher level functions (for example, see the code after if \_\_name\_\_ == "\_\_main\_\_":) . The specifics of the code are valid for the set of filters,turrets and gratings I use in my instrument, but the program can be used for other cases with slight modifications. You can also download the code [here](http://juluribk.com/wp-content/uploads/2014/09/SP2150i.txt).

<em id="__mceDel"> \[cc lang="python"\]  
"""  
Created on Fri Sep 19 18:11:40 2014

@author: Bala Krishna Juluri  
"""

from visa import \*  
import time  
\#assumes connected with USB. Drivers are installed. Needs pyvisa for communication.  
\# There is no need to use visa write command for SP2150. because all commands are ask type (you write something and get a confirmation back saying OK)  
\# filter 1 is no filter  
\# filter 2 is in 320 nm long pass filter  
\# filter 3 is 590 long pass filter cutoff  
\# filter 4 is 715 long pass filter  
\# filter 5 is 1250 long pass filter  
\#filter 6 is block

class SP2150i():  
def \_\_init\_\_(self):  
\#self.m=instrument(get\_instruments\_list()\[0\])  
try:  
print get\_instruments\_list()  
self.m=instrument('COM7', timeout = 10) \#he default timeout is 5 sec, change the timeout if needed  
except:  
print "Check if monochromotor is connected to right COM port of instrument list (see control panel, hardward devices). Cannot connect to monochromator. Check connection. Check drivers"

def get\_nm(self):  
self.curr\_nm=self.m.ask\_for\_values('?NM')  
return self.curr\_nm

def get\_nm\_per\_min(self):  
self.curr\_nm\_min=self.m.ask\_for\_values('?NM/MIN')  
return self.curr\_nm\_min

def get\_serial\_model(self):  
self.serial\_no=self.m.ask\_for\_values('SERIAL')  
self.model\_no=self.m.ask\_for\_values('MODEL')  
return self.serial\_no,self.model\_no

def goto\_nm\_max\_speed(self,nm):  
self.m.ask('%0.2f GOTO' % nm)

def get\_turret(self):  
self.turret=self.m.ask\_for\_values('?TURRET')  
return self.turret

def get\_filter(self):  
self.filter=self.m.ask\_for\_values('?FILTER')  
time.sleep(2)  
return self.filter

def get\_grating(self):  
self.grating=self.m.ask\_for\_values('?GRATING')  
return self.grating

def set\_turret(self,num):  
if num &lt;=2:  
self.m.ask(str(int(num))+ ' TURRET')  
else:  
print "There is not turret with this input"

def set\_filter(self,num):  
if num &lt;=6:  
self.m.ask(str(int(num))+ ' FILTER')  
print "Filter changed and waiting with additional delay..."  
time.sleep(1) \# Additional delay, just in case.  
print "Done waiting"  
else:  
print "There is no filter with this input"

def set\_grating(self,num):  
if num&lt;=2:  
self.m.ask(str(int(num))+ ' GRATING')  
\#time.sleep(5) \# Additional delay, just in case  
else:  
print "There is no grating with this input"

def goto\_nm\_with\_set\_nm\_per\_min(self,nm,nm\_per\_min):  
self.m.ask('%0.2f NM/MIN' % nm\_per\_min)  
self.m.ask('%0.2f &gt;NM' % nm)  
char=0  
while char!=1:  
s=self.m.ask('MONO-?DONE')  
char=int(s\[2\])  
\#print "Current wavelength is "+ self.m.ask('?NM')  
time.sleep(.2)  
print "Scan done?: "+'yes' if char == 1 else 'No'  
self.m.ask('MONO-STOP')  
return self.m.ask\_for\_values('?NM')

if \_\_name\_\_ == "\_\_main\_\_":  
\#This part of the codes uses the SP2150i class to do a wavelength scan  
a=SP2150i()  
print a.get\_serial\_model()  
print a.get\_grating()  
print a.get\_filter()  
print a.get\_nm\_per\_min()  
print a.get\_nm()  
a.set\_grating(2) \# can only take 1 or 2 as input

start\_wave=500  
end\_wave=1000  
delta\_wave=20  
speed\_nm\_per\_min=2000  
a.set\_filter(2) \# this applies the 320 nm filter in the beginning  
for i in xrange(start\_wave,end\_wave,delta\_wave):  
print "----------------------------"  
print "Wavelength input is %0.2f nm" % i  
wave=a.goto\_nm\_with\_set\_nm\_per\_min(i,speed\_nm\_per\_min)

if i &lt;= 370 and i+delta\_wave &gt;= 370:  
a.set\_filter(2)

if i &lt;= 660 and i+delta\_wave &gt;= 660:  
a.set\_filter(3)

if i &lt;= 775 and i+delta\_wave &gt;= 775:  
a.set\_filter(4)

if i &lt;= 1300 and i+delta\_wave &gt;= 1300:  
a.set\_filter(5)

print "Wavelength output is "+str(wave\[0\])+ " nm"  
print "----------------------------"

print "Resetting the monochromator to home position"  
a.goto\_nm\_max\_speed(400)  
a.set\_filter(1)  
print "Position to home at " + str(a.get\_nm()\[0\]) + " nm"+ ' and filter has been reset to ' + str(a.get\_filter()\[0\])  
print "Monochromator scan done. Have a nice day!"

\[/cc\]
