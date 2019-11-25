Title: Installing Meep 1.2 on ubuntu
Date: 2013-07-20 18:50
Author: juluribk
Category: Plasmonics, Researc
Tags: electromagnetism, FDTD, MEEP, Plasmonics
Slug: installing-meep-1-2-on-ubuntu
Status: published

Pre-compiled Meep binaries for meep1.1 exist for Ubuntu distribution. This makes it very easy to install meep on ubuntu using “apt-get install” command or from the ubuntu software center. However recently, Meep developers have release meep1.2 which has more functions compared to meep1.1. I have recently installed meep1.2 from source on ubuntu 12.04 using the instructions shown at <http://ab-initio.mit.edu/wiki/index.php/Meep_Installation>.

I have root access to my computer, so I installed all the libraries/bin files in their default location (i.e, libraries go in /usr/local/lib, programs in /usr/local/bin, etc)

These are the steps I followed:

1\) To avoid any complications, I uninstalled meep1.1 and meep-openmpi, which were installed earlier on my ubuntu system from the software center.

**2) Setting the environmental variables:**  
export LDFLAGS="-L/usr/local/lib"  
export CPPFLAGS="-I/usr/local/include"  
export LD\_LIBRARY\_PATH="/usr/local/lib:\$LD\_LIBRARY\_PATH"

3\) I installed G77, gfortran, f77, g++ and make packages on my system. I installed g++ and make using “sudo apt-get install build-essential”. Some of the packages might have been pre-installed.

4)**Installing blas and lapack**

As said at <http://ab-initio.mit.edu/wiki/index.php/Meep_Installation>, Openblas at <http://xianyi.github.io/OpenBLAS/> should install both blas and lapack libraries. I downloaded the tar file from the website and extracted it. Then I cd’ed into that folder and issued a “make” command. I had some problems with “make” command as it was using f77 for compiling and was throwing an error. After some search, I found that “make FC=gfortran NO\_AFFINITY=1 USE\_OPENMP=1” solves this problem. This resulted in “libopenblas.a” in /usr/local/lib folder.

**5) Installing Harminv**  
I downloaded the tar file from <http://ab-initio.mit.edu/wiki/index.php/Harminv>. Extracted the tar file and cd’ed into it. I installed the harminv using ./configure, make and sudo make commands as said at " title="http://ab-initio.mit.edu/wiki/index.php/Harminv"&gt;http://ab-initio.mit.edu/wiki/index.php/Harminv\_installation This resulted in “libharminv.a”. Harminv required blas and lapack installed.

**6) Installing Guile**  
This was simple. I used the command “sudo apt-get install guile-2.0” and “sudo apt-get install guile-2.0-dev”

**7) Installing libctl**  
Downloaded the tar file, extracted it, cd’ed into it. I followed ./configure, make and sudo make commands as told on at <http://ab-initio.mit.edu/wiki/index.php/Libctl> and after the process I saw libctl.a in the /usr/local/lib folder.

**8) Installing hdf5**  
I downloaded the hdf5 tar file from [hdf5-1.8.8 source page](http://www.hdfgroup.org/ftp/HDF5/releases/hdf5-1.8.8/src). I used 1.8.8 version (no special reason for this version). Extracted the tar file. Cd’ed into the folder and use “./configure, make, make install” . It took a while for this to complete. At the end, I saw all the libraries, executables and include files were placed in “hdf5” sub-folder. I saw “bin”,”include”,”share”,”lib” inside this sub-folder. I figured they should be placed at default locations so I issued following commands inside the hdf5-1.8.6 folder  
sudo cp hdf5/bin/\* /usr/local/bin/  
sudo cp hdf5/lib/\* /usr/local/lib/  
sudo cp hdf5/include/\* /usr/local/include/  
sudo cp hdf5/share/\* /usr/local/share/  
By the end of the process, I saw libhdf5.a in the /usr/local/lib. I did not enable MPI parallel I/O support in hdf5.

**9) Installing meep**  
I downloaded the tar file from [meep downloaded page](http://ab-initio.mit.edu/wiki/index.php/Meep_download) and then extracted it. Then I cd’ed into that folder and issued “./configure” command. I had no errors as guile, libctl, harminv, hdf5 libraries were all available. See my [configure\_log\_file](http://juluribk.com/wp-content/uploads/2013/07/configure_log_file.txt). Then “make” and then “sudo make install” commands were issued. I did not enabled parallel version for this post. This resulted in meep executable in “/usr/local/bin” folder. I renamed it to meep12 (sudo mv /usr/local/bin/meep meep12) so that I know that it is running meep1.2 and not to confuse with meep1.1.  Now I opened a new terminal and issued “/usr/local/bin/meep12” to run meep1.2. you should see:  
“GNU Guile 2.0.5-deb+1-1  
Copyright (C) 1995-2012 Free Software Foundation, Inc.  
Guile comes with ABSOLUTELY NO WARRANTY; for details type \`,show w'.  
This program is free software, and you are welcome to redistribute it  
under certain conditions; type \`,show c' for details.  
Enter \`,help' for help.  
”

In future, I will post some meep examples that use the added functionalities of meep1.2. Stay tuned!
