Title: Creating Energy Band Diagrams for Solar cells and LED
Date: 2017-09-11 10:42
Author: juluribk
Category: Misc
Tags: Python
Slug: Energy-band-diagrams-for-solar-cell-and-led
Status: published

Energy band diagrams are used to visulize the electron and hole transport in Solar cells and LED research. I want to quickly draw them and came up with a python module.


Here's an example on how to use this code.

    #!python
    from Band_diagram import metal, semiconductor, plot

    # Define the metals and semiconductors. Here wf is the work function of metals,
    # cb is conduction band minimum and vb is valance band maximum wrt to vacuum level

    ITO = metal(wf = -5.2, name= 'ITO')  
    p_nio = semiconductor(cb = -1.85, vb = -5.49, name = 'P-NIO')  
    p3HT = semiconductor(cb = -3, vb = -5.0, name = 'P3HT')  
    PCBM = semiconductor(cb = -4, vb = -6.5, name = 'PCBM')  
    ZnO = semiconductor(cb = -4.2, vb = -7.5, name = 'ZnO')  
    LiF_Al = metal(wf=-3.7, name = 'LiF/Al')

    ## Create the stack  
    stack = [ITO,p_nio,p3HT,PCBM,ZnO,LiF_Al]

    ## plot the stack and save it  
    plot(stack, filepath = 'Images/Stack1.png')  

will result in the following plot

![]({filename}/images/energy_band_diagram.png){.center}

You can download it at my [github repository](https://github.com/plasmon360/Energy-Band-diagram).
