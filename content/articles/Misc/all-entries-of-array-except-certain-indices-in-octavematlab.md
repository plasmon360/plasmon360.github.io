Title: All entries of array except certain indices in octave/matlab
Date: 2011-12-07 18:14 
Author: juluribk 
Category: Misc
Tags: Matlab, octave 
Slug: all-entries-of-array-except-certain-indices-in-octavematlab
Status: published

In Octave or Matlab, some times one needs to eliminate certain elements in an array.

For example, if

    #!matlab
    a = [10,20,30,40,50,60];

and suppose I want to create a matrix "b" such that it has all the elements of "a" except 20 and 40. This can be achieved by:

    #!matlab
    b = a(1:end~=2&1:end~=4);

The result is:

    #!matlab
    b = 10 30 50 60 
   

