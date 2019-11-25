Title: Surface Plasmons (SP's)
Date: 2010-01-08 19:14
Author: juluribk
Category: Free Software, Plasmonics, Publications
Tags: animation, Plasmonics
Slug: surface-plasmons-animation
Status: published

\[caption id="attachment\_263" align="aligncenter" width="300"\][![](http://juluribk.com/wp-content/uploads/2010/01/test_water_mark.gif "Surface plasmon simulation"){.size-full .wp-image-263 width="300" height="120"}](http://juluribk.com/wp-content/uploads/2010/01/test_water_mark.gif) Propagation of surface plasmons\[/caption\]

Surface plasmons (SP's) are electromagnetic waves that propagate at the interface between metals (such as Ag, Au ) and dielectric material. Here I have simulated the propagation of surface plasmons on Ag-air interface, the color indicates the magnitude of electric field (blue for positive and red for negative).  I have used MEEP  (a FDTD program that solves for Maxwells equations on numerical grid) to simulate these electric field distribution of these special waves. The source for SP's is a point dipole and is placed at the center. It is easier to excite SP's in numerical simulation, however to excite them in an experiment, one has to use tricks to match the momentum.  In this simulation, one can also see strong localization of these waves at the interface. This form of localization and propagation characteristics have attracted attention of researchers in engineering, physics and chemistry communities. Few applications include integerated circuits driven by light, sensing, energy harvesting, nanolithography etc.

[UPDATE:]{style="color: #ff0000;"} You can download my [meep code here](http://juluribk.com/wp-content/uploads/2010/01/Metal-dielectric_interface-_web1.zip). The zip file also contains code to obtain dispersion relation of surface plasmon modes using MEEP. Let me know if you have any questions.
