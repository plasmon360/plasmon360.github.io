Title: Dealing with plotting negative, zero and positive values in log scale
Date: 2016-03-30 10:00
Author: juluribk
Category: Misc
Tags: Python
Slug: dealing-with-plotting-negative-zero-and-positive-values-in-log-scale
Status: published

Sometimes you have to show positive, zero and negative number in log scale. However you cannot take log of negative numbers and zero. But one could approximate it with a log transform modulus as stated [here](http://blogs.sas.com/content/iml/2014/07/14/log-transformation-of-pos-neg.html).

In Python with numpy:

    #!python
    
    from numpy import sign, abs, log10  
    import matplotlib.pyplot as plt
   
    # Data varies in several magnitudes and has both positive, zero and negative numbers  
    x = [-10000,-1000,-100,-10,0,10,100,1000,10000]  
    # log modulus transform  
    x_log_modulus_transform= sign(x)*(log10(abs(x)+1))
    
    f, ax = plt.subplots(2, sharex=True)  
    ax[0].plot(x,'o')  
    ax[0].margins(x=0.12, y=0.2) # for better visualization of datapoints at the end of axis
    
    ax[1].plot(x_log_modulus_transform,'o')  
    ax[1].margins(x=0.12, y=0.2) # for better visualization of datapoints at the end of axis  
    ax[0].set_ylabel('x')  
    ax[1].set_ylabel('sign(x)*(log(|x|+1))')  
    plt.show()
    
![]({filename}/images/Negative_numbers_log_scale.png "Schematic")

