Title: Controlling Rigol Dp832 with python
Date: 2015-05-08 17:08
Author: juluribk
Category: Electronics
Tags: Instrumentation, python
Slug: controlling-rigol-dp832-with-python
Status: published

DC power supplies are very handy for electronic projects. They help to apply bias/voltage to a device. Controlling it by a computer by a program is helpful in advanced projects where timing and accurate control is an issue. 

I got my hands on a RIGOL DP832 which is three channel (two 30V and one 5V) power supply and is programmable through SCPI commands. The device can be controlled by USB and rs232 (optionally by LAN). SCPI commands can be sent to the instruments using VISA interface. I used Python and pyvisa module to communicate with it. I wrote a class with basic functionality. Currently it has a console application and turning on and off at a  particular bias and current value on a specified channel.

You can add more methods to the class for advanced features. You can see those commands in the [programming manual](http://www.batronix.com/pdf/Rigol/ProgrammingGuide/DP800_ProgrammingGuide_EN.pdf).

<div class = "alert alert-primary">
<strong> Note: </strong> Download this gist from <a href = "https://gist.github.com/plasmon360/3204dc28deddeefe42d5"> my gihub </a>
</div>
   
    #!python 
    
    """
    Created on Sat Dec 21 13:57:32 2013
    
    @author: bjuluri
    Uses Pyvisa for commounication
    """
    from visa import *
    import time, sys
    
    
    class Rigoldp832():
        def __init__(self, usb_serial):
            try:
                self.instrument_list = get_instruments_list()
                self.usb_address = [elem for elem in self.instrument_list if (elem.find('USB') != -1 and elem.find(
                    usb_serial) != -1)]  # Search a instrument with USB and serial number in the instrument list
    
                if self.usb_address == [] :
                    self.status = "Not Connected"
                elif self.usb_address != []:
                    self.s = instrument(self.usb_address[0])
                    self.status = "Connected"
                    self.connected_with = 'USB'
            except VisaIOError:
                self.status = "Not Connected"
                print "Pyvisa is not able to find the connections"
    
    
        def mywrite(self, message):
            self.s.write(message)
            time.sleep(0.1)
            error = self.s.ask('SYST:ERR?')
            if error[0]:
                print message+' recieved. No error occured'
            else :
                print message+' recieved. An Error occured: '+ str(error)
    
        def reset(self):
            """resets the instrument, registers,buffers"""
            self.mywrite("*RST")
            time.sleep(0.2)
    
    
        def close_instrument(self):
            self.s.close()
    
        def set_bias(self, channel=1, i=0.1, i_protection_level=0.1, v=0.5):
            self.mywrite(':INST CH{channel}'.format(channel=int(channel)))
            self.mywrite(':CURR {i}'.format(i = i))
            self.mywrite(':CURR:PROT {i_level}'.format(i_level = i_protection_level))
            self.mywrite(':CURR:PROT:STAT ON')
            self.mywrite(':VOLT {0}'.format(v))
    
    
        def turn_off(self, channel = 1):
            self.mywrite(':OUTP CH{channel},OFF'.format(channel = channel))
    
        def turn_on(self, channel = 1):
            self.mywrite(':OUTP CH{channel},ON'.format(channel = channel))
    
        def console(self):
            """
            opens a console to send commands. See the commands in the user manual.
    
            """
            cmd = ''
            while cmd != 'exit()':
                cmd = raw_input('Rigol DP832 console, Type exit() to leave> ')
                if cmd.find('?') >= 0:
                    answer = self.s.ask(cmd)
                    print answer
                elif cmd.find('?') < 0 and cmd != 'exit()':
                    self.s.write(cmd)
            else:
                print "Exiting the Rigol DP832 console"
    
    
    if __name__ == "__main__":
        r = Rigoldp832(usb_serial='your_Serial_number')
        
    	#To start a console
    	#r.console()
        
    	# This will reset the instrument, apply a bias of 1 V wih 0.1A of protection current for 10 sec and then turn off
        r.reset()
        r.set_bias(channel=1, i=0.1, i_protection_level=0.2, v=1)
        r.turn_on(channel=1)
        time.sleep(10)
        r.turn_off(channel=1)
        r.close_instrument()

 
