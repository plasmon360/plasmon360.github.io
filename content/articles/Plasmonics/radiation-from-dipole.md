Title: Radiation from an oscillating dipole
Date: 2010-01-14 19:26
Author: juluribk
Category: Plasmonics
Tags: electromagnetism, Matlab, Plasmonics
Slug: radiation-from-dipole
Status: published

The electric field from an oscillating dipole is given by:![](file:///C:/DOCUME%7E1/bxj139/LOCALS%7E1/Temp/moz-screenshot-1.jpg)![](http://upload.wikimedia.org/math/1/c/b/1cb95474b78138db05d3763ac2fcd75a.png "dipole_radiation"){.aligncenter width="527" height="52"}, where \[tex\]\\hat{r}\[/tex\] is the position vector, \[tex\] \\omega \[/tex\] is the frequency of dipole oscillation, \[tex\]\\textbf{p}\[/tex\] is the dipole moment. The two terms in the electric field consists of 1) near field (area near to the dipole) and 2) far field (area far from the dipole) contributions. Far field falls of as \[tex\]\\frac{1}{r}\[/tex\] and the near field falls of by \[tex\]\\frac{1}{r\^3}\[/tex\].

A beautiful simulation showing the electric field radiation from a dipole is shown below. This simulation is part of [Sophocles J. Orfanidis book on electromagnetic waves and antennas](http://www.ece.rutgers.edu/~orfanidi/ewa/).  For more details on 1) how the above equation is simplified by transforming into polar coordinates and 2) the matlab code to plot the field, see Example 14.5.1. in Chapter 14 of his book. Many thanks to Prof. Orfanidis for sharing these matlab codes.


Radiation from an oscillating dipole (Simulation done using Matlab code from Prof. Orfanidis book)
![]({filename}/images/dipmovie.gif "Animation")
