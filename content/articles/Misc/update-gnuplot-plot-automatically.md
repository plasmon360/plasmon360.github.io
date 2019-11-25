Title: Update Gnuplot plot automatically
Date: 2010-01-07 23:18
Author: juluribk
Category: Free Software
Tags: gnuplot, graphs, Linux
Slug: update-gnuplot-plot-automatically
Status: published

To update gnuplot plot automatically. Run the command \[cc\]gnuplot gnuplot\_script.txt\[/cc\] in terminal. (note: for some unknown reason it does not work for me on cygwin xterm, however it works on linux terminals.)

gnuplot\_script looks like this:

\[cc lang="gnuplot"\]  
plot "data.dat" using 1:2 w lp  
replot  
pause -5  
reread  
\[/cc\]
