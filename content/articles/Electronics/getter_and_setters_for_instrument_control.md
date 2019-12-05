Title: Improving code using getters and setters in Python
Date: 2019-12-04 18:28
Author: juluribk
Category: Electronics 
Slug: Improving code with getters and setters in python 
Status: published

As I was migrating blog posts from my wordpress website to pelican based static website, I noticed an old python code written for communicating and controlling a [Princeton Instruments Acton SP2150i Monochromator]({filename}controlling-sp2150i-monochromator-with-pythonpyvisa.md).

As I looked at the code, I noticed methods in the class such as `get_nm()` and `set_nm()`. I was not aware of the functionality of getters and setters in Python when I was writing that code. Since then, I have been using getters and setters occasionally and thought everyone using Python should be knowing about them.

Lets simply the original code to only few methods and implement getters and setters functionality.


    #!python
    from visa import *
    import time
    
    class SP2150i():
        def __init__(self):
            try:
                print get_instruments_list()
                self.m=instrument('COM7', timeout = 10) #he default timeout is 5 sec, change the timeout if needed
            except:
                print "Check if monochromotor is connected to right COM port of instrument list."
    
        def get_filter(self):
            self.filter=self.m.ask_for_values('?FILTER')
            time.sleep(2)
            return self.filter
    
        def set_filter(self,num):
            if num <=6:
                self.m.ask(str(int(num))+ ' FILTER')
                print "Filter changed and waiting with additional delay..."
                time.sleep(1) # Additional delay, just in case.
                print "Done waiting"
            else:
                print "There is no filter with this input"
    
    if __name__ == "__main__":
        #Create a object of the monochromator class
        a=SP2150i()

        # request the filter currently used
        print a.get_filter()

        # set the filter 
        a.set_filter(2) # this applies the 320 nm filter in the beginning

There are many filters in the instrument and one can get the current filter number or set a different filter number. 

The `get_filter(self)` method returns an attribute `self.filter` by calling `ask_for_values` pyvisa method. 

`self.filter` holds the current filter value. `set_filter(num)` uses pyvisa's 'ask' method (think of ask here as writing to instrument) to set the filter to a different number. In this method I also check to make sure filter 'num' be always less than 6.

When the user needs the functionality of getting the current filter in the instrument or setting the filter to different type, he has to use lengthy `a.get_filter()` and `a.set_filter(num = x)` methods. 

It would be better if the user can access the current filter by typing `a.filter` and it should return the current filter num. This can be achieved by using a "property" decorator. The "property" decorator makes a method behave like an attribute. So if I added "property" decorator to `def filter(self): ... `, then when user prints or accesses `a.filter` then it executes `a.filter()` method. In this method, we can write our logic to get the current filter in the monochromator.

It would be also better if the  user can use `self.filter = 3`, which will set the filter to 3. This can be achieved with "filter.setter" decorator on top of `def filter(self,num):` method. 

So the new code is as follows. 

    #!python
    from visa import *
    import time 
 
    class SP2150i():
        def __init__(self,port):
            try:
                self.port = port
                self.m=instrument(self.port, timeout = 10) #he default timeout is 5 sec, change the timeout if needed
            except:
                print "Check if monochromotor is connected to right COM port" 
    

        @property #Read this as `by adding a property decorator on this mthod, when object.filter is accessed, object.filter() is returned`
        def filter(self):
            time.sleep(2)
            return self.m.ask_for_values('?FILTER')

        @filter.setter #Reads this as `by adding filter.settter decorator, when object.filter = num is executed, object.filter(num) is returned`
        def filter(self,num):
            if num <=6:
                self.m.ask(str(int(num))+ ' FILTER')
                print "Filter changed and waiting with additional delay..."
                time.sleep(1) # Additional delay, just in case.
                print "Done waiting"
            else:
                raise ValueError("There is no filter with this input")
       
    if __name__ == "__main__":
        #Create a object of the monochromator class
        a=SP2150i(port = 'COM7')

        # set the filter to 2
        a.filter = 2 
        
        # get the filter currently being used. This will return 2
        print a.filter 

        # set the filter to unacceptable number
        a.filter = 100 # this will raise an exception.

The getters and setters functionality is very useful to protect an attribute (data encapsulation). I don't think in this particular code, we need to declare `self._filter` (protected attribute) because the value of `self.filter` is always being set by instrument or returned by instrument. User does not have access to it through the object directly. In the case, where we indeed need data protection, we should do `self._filter` as suggested [here on stackoverflow](https://stackoverflow.com/a/36943813/1753919). In this answer, you can also see an additional deleter decorator being used for a different purpose.

There are many areas where the code can be improved. Some of them are:

- Better documentation of each method and class
- Instead of putting the burden on user to specify the com port number. We can get the com port number by asking all serially connected instruments for their serial id and see which one matches the user given serial number.
- Writing a threaded version so this monochromator execution does not block main thread
- Instead of thread use coroutines aka asyncio?

but thats for an another day.

