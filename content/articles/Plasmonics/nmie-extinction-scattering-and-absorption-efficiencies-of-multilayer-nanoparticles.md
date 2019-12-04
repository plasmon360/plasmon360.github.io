Title: Nmie: Extinction, Scattering and Absorption efficiencies of multilayer nanoparticles
Date: 2010-05-11 21:37
Author: juluribk
Category: Plasmonics
Tags: electromagnetism, Free Software, Nanohub.org, Plasmonics, DDSCAT
Slug: nmie-extinction-scattering-and-absorption-efficiencies-of-multilayer-nanoparticles
Status: published

![](file:///C:/Users/Mengqian/AppData/Local/Temp/moz-screenshot-2.png)

\[caption id="attachment\_551" align="alignleft" width="300" caption="nmie tool on Nanohub.org. This tool calculates the extinction, scattering, and absorption efficiencies of single nanoparticle (1 layer),core-shell nanoparticle (2 layer) and nanomatryushka nanoparticle (3 layer) using MIE formulation. "\][![](http://juluribk.com/wp-content/uploads/2010/05/Screenshot-main1-300x215.png "nmie_screenshot"){.size-medium .wp-image-551 width="300" height="215"}](http://juluribk.com/wp-content/uploads/2010/05/Screenshot-main1.png)\[/caption\]

Since 2009, I have been a regular user of Nanohub.org. [www.Nanohub.org](www.nanohub.org)is a website that provides a platform for online simulation, research and teaching resources. Of interest is the ability to perform simulation online without installing software on your local computer. I envision that this type of cloud computing model will be the future of scientific computing.

Developers can use their Rappture toolkit ([nice video to learn Rappture toolkit](http://www.youtube.com/watch?v=bsJ8bzQQ6vw)) to write wrappers for codes that are written in Fortran, C or Matlab and enable an easy to use GUI for the executables. There are few tools for Plasmonics on nanohub which you can find on [my plasmonics resources](http://juluribk.com/2010/01/12/books-on-electromagnetics/) post.

We have developed a Rappture tool called nmie. This tool calculates the extinction, scattering, and absorption efficiencies of single nanoparticle (1 layer), core-shell nanoparticle (2 layer) and nanomatryushka nanoparticle (3 layer) using MIE formulation. The user can change the layer composition (metals- au/ag or dielectric) and the refractive index of the surrounding medium. He/She can also change the wavelength range of the calculation. One thing I like about nanohub tools is that you can do many simulation cases and compare with each other.

You can find the tool [here.](https://nanohub.org/resources/8228)To use this tool, you need to register first, which is free. :)

Technical details:

The engine is based on nmie code distributed by Dr. Nikolai Voshchinnikov http://www.astro.spbu.ru/staff/ilin2/SOFTWARE/nmie0.html. The nmie code can take layers more than 3, however I have used the code for three layers which is more common in plasmonics research. The recursive algorithm of Wu & Wang are used. Fore more details see

1\) Wu Z.P., Wang Y.P., Electromagnetic scattering for multilaered spheres using recursive algorithms, Radio Science 1991. V. 26. P. 1393-1401.

2\) Voshchinnikov N.V., Mathis J.S., Calculating Cross Sections of Composite Interstellar Grains, Astrophys. J. 1999. V. 526. 3) Johnson PB, Christy RW (1972) Phys Rev B 6,4370

The demo for this tool is here:  
<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="480" height="385" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><param name="src" value="http://www.youtube.com/v/Yp2_N1zj5oU&amp;hl=en_US&amp;fs=1&amp;"></param><param name="allowfullscreen" value="true"></param><embed type="application/x-shockwave-flash" width="480" height="385" src="http://www.youtube.com/v/Yp2_N1zj5oU&amp;hl=en_US&amp;fs=1&amp;" allowscriptaccess="always" allowfullscreen="true"></embed></object>

If you have any questions/comments/bugs on this tool, please let me know either at the nanohub website or here in the comments section.
