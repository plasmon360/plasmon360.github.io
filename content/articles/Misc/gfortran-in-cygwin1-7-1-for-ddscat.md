Title: GFortran in Cygwin1.7.1 for DDSCAT
Date: 2010-01-06 16:25
Author: juluribk
Category: Free Software
Tags: Cygwin, DDSCAT
Slug: gfortran-in-cygwin1-7-1-for-ddscat
Status: published

For DDSCAT 7 users, the makefile needs gfortran. On window os, Gfortran can be installed in Cygwin 1.7.1 by installing "GCC4-fortran" package. It installs a exe file named "gfotran-4.exe" in the "xyz\\cygwin\\bin". So my makefile compiler options are as follows:

\[cc lang="fortran"\]  
\# 1.  gfortran compiler  
\#     sp + no MKL + no OpenMP + no MPI  
\# define the following:  
PRECISION    = dp  
CXFFTMKL.f    = cxfft3\_mkl\_fake.f90  
CXFFTMKL.o    = cxfft3\_mkl\_fake.o  
MKLM        =  
DOMP        =  
OPENMP        =  
MPI.f        = mpi\_fake.f90  
MPI.o        = mpi\_fake.o  
DMPI        =  
FC        = gfortran-4  
FFLAGS        = -O2  
LFLAGS         =  
\[/cc\]
