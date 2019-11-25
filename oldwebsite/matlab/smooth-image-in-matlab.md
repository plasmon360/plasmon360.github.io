Title: Smooth image in matlab
Date: 2010-01-10 01:25
Author: juluribk
Category: Matlab
Tags: graphs, Matlab
Slug: smooth-image-in-matlab
Status: published

In matlab, sometimes I prefer to plot a image for mesh data instead of surf and use view(2) (view(2) gives the top view of the surface plot). However,  
`imagesc(x,y,z) shading 'interp' `{lang="matlab"}  
does not work. This problem can be solved by using:  
`pcolor(x,y,z) shading 'interp' set(gca,'TickDir','out')`{lang="matlab"}

.
