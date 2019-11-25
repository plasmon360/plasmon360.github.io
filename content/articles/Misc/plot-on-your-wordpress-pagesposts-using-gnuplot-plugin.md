Title: Plot on your wordpress pages/posts using gnuplot plugin
Date: 2010-01-13 10:12
Author: juluribk
Category: Publications
Tags: gnuplot, graphs, wordpress
Slug: plot-on-your-wordpress-pagesposts-using-gnuplot-plugin
Status: published

One can insert a gnuplot plot on any of the wordpress post/page by installing gnuplot plugin version 1.1 for wordpress available [here.](http://www.clker.com/blog/2008/07/18/gnuplot-wordpress-plugin-v11/)

NOTE: I am not sure whether this plugin can plot from a data file. If you any of you readers can do it, please let me know.

As of today, the search of this plugin on wordpress only shows version 1 of this plugin. However version 1.1 is more advanced as it does need gnuplot installed on your webserver.

To install this plugin:

1.  Copy the file ( [gnuplot plugin](http://www.clker.com/blog/wp-content/uploads/2008/07/gnuplot.phptxt) ) in you wp-content/plugins directory, and rename to .php instead of .phptxt.
2.  Create wp-content/cache directory, and make sure it is write able to the webserver
3.  Activate the plugin from the plugins tab inside wordpress

One can get a gnuplot plot like this:

\[gplot\]  
set size 1,0.7  
set dummy u,v  
unset key  
set parametric  
set view 60, 30, 1.1, 1.33  
set isosamples 50, 20  
set title "Interlocking Tori - PM3D surface with depth sorting"  
set urange \[ -3.14159 : 3.14159 \] noreverse nowriteback  
set vrange \[ -3.14159 : 3.14159 \] noreverse nowriteback  
set pm3d depthorder  
splot cos(u)+.5\*cos(u)\*cos(v),sin(u)+.5\*sin(u)\*cos(v),.5\*sin(v) with pm3d,\\  
1+cos(u)+.5\*cos(u)\*cos(v),.5\*sin(v),sin(u)+.5\*sin(u)\*cos(v) with pm3d  
\[/gplot\]

by inserting following code

\[cc lang="gnuplot"\]

\[gplot\]  
set size 1,0.7  
set dummy u,v  
unset key  
set parametric  
set view 60, 30, 1.1, 1.33  
set isosamples 50, 20  
set title "Interlocking Tori - PM3D surface with depth sorting"  
set urange \[ -3.14159 : 3.14159 \] noreverse nowriteback  
set vrange \[ -3.14159 : 3.14159 \] noreverse nowriteback  
set pm3d depthorder  
splot cos(u)+.5\*cos(u)\*cos(v),sin(u)+.5\*sin(u)\*cos(v),.5\*sin(v) with pm3d,\\  
1+cos(u)+.5\*cos(u)\*cos(v),.5\*sin(v),sin(u)+.5\*sin(u)\*cos(v) with pm3d  
\[/gplot\]

\[/cc\]
