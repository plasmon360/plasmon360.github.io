Title: Surface plasmon dispersion relation for thin metal films
Date: 2011-12-07 21:12
Author: juluribk
Category: Plasmonics
Tags: electromagnetism, octave, Plasmonics
Slug: surface-plasmon-dispersion-relation-for-thin-metal-films
Status: published

\[latexpage\]

A thin metal film in dielectric (also known as dielectric-metal-dielectric configuration) can support surface plasmons that are different in nature to the ones observed in thick metal-dielectric interfaces. Unlike, a single mode that is observed in thick metal film, thin metal films exhibit two types of modes for the same wavevector due to excitation and interaction of surface plasmons on both sides of the film. One mode (L+) is at higher energy and other (L-) is at a lower energy. The high energy has anti-symmetric field distribution whereas the low energy one has symmetric field distribution. The dispersion relations of these modes can be obtained by applying appropriate boundary conditions and solving Maxwell equations ([page 25 of Raether book on Surface plasmons](http://paper.gentilemathieu.free.fr/_L1988Raether%20Surface%20Plasmons.pdf)).

The dispersion relations (energy of different modes as function of complex wavevector, \$k\_x\^{'}(\\omega)+ik\_x\^{''}(\\omega)\$) are given by the solutions of :

\$\\omega\^+: L+= \\epsilon\_1k\_{z2}+\\epsilon\_2k\_{z1} \\tanh\\left \[ \\frac{-ik\_{z1}d}{2}\\right \]=0\$

\$\\omega\^-: L-= \\epsilon\_1k\_{z2}+\\epsilon\_2k\_{z1} \\coth\\left \[ \\frac{-ik\_{z1}d}{2}\\right \]=0\$,

Where \$\\epsilon\_1\$ and \$\\epsilon\_2\$ represent the dielectric functions of dielectric and metal respectively, \$d\$ is the thickness of metal film, \$\\omega\^+\$ is frequency of high energy mode, \$\\omega\^-\$ is frequency of low energy mode, \$k\_{z1,z2}=\\sqrt{\\epsilon\_{1,2}\\left\[ \\frac{\\omega}{c}\\right \]\^2-(k\_x\^{'}(\\omega)+ik\_x\^{''}(\\omega))\^2}\$.

What does solving these equations mean? if one considers one mode, say \$L+\$ mode, for a certain \$\\omega\^+\$, there exists a particular \$k\_x\^{'}\$ and \$k\_x\^{''}\$ that will make the above left hand side of L+ equation equal to zero. How do we get those special \$k\$? Unfortunately, there is no exact solution to this, to solve them, one has to use numerical techniques such as Nelder-Mead minimization algorithm that does unconstrained minimization. The algorithm works cleverly by searching for \$k\_{z1,z2}\$ at a particular \$\\omega\$, such that \$L+\$ and \$L-\$ will be minimum (in this case as close to zero as possible).

I have used "fmins" function in octave to solve these dispersion relations. Fmins function in octave can be obtained by installing [octave-optmin package](http://octave.sourceforge.net/optim/). On Ubuntu use "sudo apt-get install octave-optim" in your terminal. Documentation of fmins function is given [here](http://octave.sourceforge.net/optim/function/fmins.html).

The numerical solution of dispersion relation for a sample configuration is shown below and qualitatively matches with a figure 5 in this [paper.](http://arxiv.org/pdf/cond-mat/0611257) I have not plotted the dispersion relation with imaginary part of wave-vector to simplify the case.

\[caption id="attachment\_912" align="aligncenter" width="300" caption="Numerical solution to thin films surface plasmon dispersion obtained by unconstrained minimization algorithm"\][![](http://juluribk.com/wp-content/uploads/2011/12/dmd_analytical_web1-300x300.png "Numerical solution to thin films surface plasmon dispersion"){.size-medium .wp-image-912 width="300" height="300"}](http://juluribk.com/wp-content/uploads/2011/12/dmd_analytical_web1.png)\[/caption\]

Below is the octave code written for octave3.2 and **has not been checked in matlab**.

\[cc lang='matlab'\]  
%% Octave script to solve the dispersion relations of surface  
%% plasmons propagating on a thin film embedded in dielectric media.  
%% Written by Bala Krishna Juluri (www.juluribk.com), Dec-6-2011.  
%% Requires octave-optim package and octave3.2 or greater.

%% A note on units. The code is written in normalized units.  
%% All length units are normalized to lambda\_p (frequency corresponding to plasma frequency).  
%%By normalizing to lambda\_p, the dispersion curves become independent of material.

clear all;  
close all;  
c=1;% velocity of light in vacuum in normalized units.  
wp=1;% plasma frequency of metal in normalized units, this will also make kp=1, as kp=wp/c;  
d=0.3;% thickness of metal film in normalized units.  
% One normalized length unit is equal to 212.99 nm for silver and 377 nm for gold. This is because,  
% 1) for silver, plasma frequency is 8.85e15 1/sec , so the plasma wavelength = 212.99 nm  
% 2) for copper, plasma frequency is 5e15 1/sec, so the plasma wavelength = 377 nm  
% so if d (thickness of the film) is 0.3 in normalized units, it means that in real units,  
%% it is equal to 0.3\*212.99nm of silver or 0.3\*377nm for gold.

epsd=1;\# dielectric of surrounding.  
tol=1e-10;\# Relative size of simplex for fmins function

%creates a non-unifom density of points of w  
a=linspace(0.01,3,100);b=1-exp(-a); w=b/max(b)\*1.25; % creates a non-uniform density of frequencies  
%%from 0 to \~1.3 at which real and complex wavevectors will be calculated.

%%finds the solutions using fmins  
for j=1:length(w)  
epsm=1-(wp/w(j))\^2; \# The code uses Drude model for material and assumes no losses. plasma\_frequency (omega\_p) =1,

\#Define first mode  
Lp=@(kx)abs(epsm\*(sqrt(epsd\*(w(j)/c)\^2-(kx(1)+i\*kx(2))\^2))+epsd\*(sqrt(epsm\*(w(j)/c)\^2-(kx(1)+i\*kx(2))\^2))\*tanh(-0.5\*i\*(sqrt(epsm\*(w(j)/c)\^2-(kx(1)+i\*kx(2))\^2))\*d));  
\#solve for first mode using Nelder-Mead technique  
\[kx\_Lp(j,:)\] = fmins(Lp,\[1.5; 0.25\],\[0,tol\]); \# 1.5 and 0.25 are the initial quesses for kx(1) and kx(2)

\#Define other mode  
Lm=@(kx)abs(epsm\*(sqrt(epsd\*(w(j)/c)\^2-(kx(1)+i\*kx(2))\^2))+epsd\*(sqrt(epsm\*(w(j)/c)\^2-(kx(1)+i\*kx(2))\^2))\*coth(-0.5\*i\*(sqrt(epsm\*(w(j)/c)\^2-(kx(1)+i\*kx(2))\^2))\*d));  
\#solve for other mode using Nelder-Mead technique  
\[kx\_Lm(j,:)\] = fmins(Lm,\[1.5; 0.25\],\[0,tol\]);\# 1.5 and 0.25 are the initial quesses for kx(1) and kx(2)  
end

%Plotting and printing section  
putenv("GNUTERM",'wxt')  
plot(abs(kx\_Lp(:,1)),w,'ro',abs(kx\_Lm(:,1)),w,'rs');  
xlabel('Real(kx) /k\_p')  
ylabel('w/w\_p')  
legend('L+','L-','location','SouthEast')  
title('Analytical solution to metal thin-film surface plasmon dispersion relation')  
xlim(\[0,3\]);  
print('dmd\_analytical\_web.png','-dpng','-r200','-S600,600');  
\[/cc\]
