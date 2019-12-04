Title: Scattering / extinction / absorption cross-sections of silver nanowires (infinite cylinders) using meep
Date: 2011-06-01 14:06
Author: juluribk
Category: Plasmonics
Tags: electromagnetism, FDTD, MEEP, octave, photonics, Plasmonics
Slug: scattering-extinction-absorption-cross-sections-of-silver-nanowires-infinite-cylinders-using-meep
Status: published

Particles scatter and absorb electromagnetic radiation. One often needs to compare the amount of scattering/absorption/extinction for particles of different shapes, composition, sizes and incident light properties (polarization, frequency and angle). In this regard, the concept of cross-sections comes into picture. There are three types of cross-sections, 1) scattering 2) absorption and 3) extinction. All of them have units of area, \$m\^2\$, and provide a measure to quantify scattering/absorption process. Here using MEEP I calculate the crossections of silver nanowires and compare them with numerical solution ([code from Bohren and Hauffman book](http://onlinelibrary.wiley.com/doi/10.1002/9783527618156.app4/pdf)).

\[caption id="attachment\_862" align="aligncenter" width="400"\][![](http://juluribk.com/wp-content/uploads/2011/06/cylinders_meepvsanalytical.png "plasmonic cylinder cross-sections meep vs analytical"){.size-full .wp-image-862 width="400" height="300"}](http://juluribk.com/wp-content/uploads/2011/06/cylinders_meepvsanalytical.png) Comparison of meep results with analytical results for silver nanowires\[/caption\]

 

To achieve this, I wrote a meep code that performs a 2D simulation (x-y) with the cylinder axis along z axis with sources and monitors places as shown below. The source is a line source which travels along y direction and has polarization with electric field along x axis (along radius). I also use mirror-symmetries anti-symetry along X direction (which reduces the simulation time by half). PML layers are used on all sides. Calculation of cross-sections involves creating multiple 1-d flux monitors and running multiple simulations as shown below.

[Here is my project file.](http://juluribk.com/wp-content/uploads/2011/06/silver_cylinder_gray_comp_no_fft.zip). You would need ubuntu like system with meep and octave installed. Shell script will do all the work.

I have also shared the [project at github.](https://github.com/juluribk/Meep_cylinder_scattering_project)

[![](http://juluribk.com/wp-content/uploads/2011/06/Picture3-300x252.png "simulation set up"){.aligncenter .size-medium .wp-image-1014 width="300" height="252"}](http://juluribk.com/wp-content/uploads/2011/06/Picture3.png)[![](http://juluribk.com/wp-content/uploads/2011/06/simulation_steps-300x99.png "simulation_steps"){.aligncenter .size-medium .wp-image-1013 width="300" height="99"}](http://juluribk.com/wp-content/uploads/2011/06/simulation_steps.png)
