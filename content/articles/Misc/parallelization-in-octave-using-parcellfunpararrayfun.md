Title: Parallelization in Octave using parcellfun/pararrayfun
Date: 2012-03-09 13:27
Author: juluribk
Category: Free Software
Tags: octave
Slug: parallelization-in-octave-using-parcellfunpararrayfun
Status: published

My computer has many processors and I would like to run some octave scripts so that all the processors are being used.  
One can use octave function called "[pararrayfun](http://octave.sourceforge.net/general/function/pararrayfun.html)" for this purpose. This function is part of "general" package on octave-forge.

On my ubuntu 11.10, I used "sudo apt-get install octave-general" to install this package and ran the following script

\[cc lang='matlab'\]  
1; \# this is kept to Prevent Octave from thinking that this is a function file:

close all;  
clear all;

function y=test(a,b)  
y=sin(a)+cos(b)  
endfunction

num\_process=8

a\_test\_inputs=\[0:3.14/20:3.14\];  
b\_test\_inputs=\[0:3.14/20:3.14\]\*2;

tic ();  
tt\_par= pararrayfun(num\_process,@test,(a\_test\_inputs),(b\_test\_inputs));  
parallel\_elapsed\_time = toc ()

tic ();  
tt\_ser= test((a\_test\_inputs),(b\_test\_inputs));  
serial\_elapsed\_time = toc ()

plot(a\_test\_inputs,tt\_par,'-o',a\_test\_inputs,tt\_ser,'-s');  
legend('Parallel result','Serial result');

disp(sprintf('Elapsed time during serial computation is %e',serial\_elapsed\_time))  
disp(sprintf('Elapsed time during parallel computation is %e',parallel\_elapsed\_time))

\[/cc\]
