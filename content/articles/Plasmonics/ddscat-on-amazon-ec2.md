Title: DDSCAT on amazon EC2
Date: 2015-09-03 21:37
Author: juluribk
Category: Plasmonics
Tags: DDSCAT
Slug: ddscat-on-amazon-ec2
Status: published

Amazon provides high performance computing capabilities through their EC2 service. You can find more information [here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

They provide a 750 hr free instance with their a [free-tier progra](http://aws.amazon.com/free/)m. If you want more resources, you can pay for it. See the [pricing](https://aws.amazon.com/ec2/pricing/), pricing seem very reasonable.

I wanted to see how easy it was to install ddscat and run some examples files.

Amazon allows to create an instance through their very easy-to-use web interface. I chose to install ubuntu amazon machine image on the instance.  While you are creating an instance you are allowed to create a key pair file and download it.  You will need that to connect to amazon instance through ssh client with this key

Fire up  terminal on a linux box and browse to the folder you have the key pair and issue these commands

    #!bash
    chmod 400 your-key-pair.pem

Make ssh connection with a command like this

    #!bash
    ssh -i your-key-pair.pem ubuntu@ec2-xx-xx-100-1.compute-1.amazonaws.com  

here "ec2-xx-xx-100-1.compute-1.amazonaws.com" is your public dns address

You should be able to log into the instance. If you get stuck, see detailed info at [how to connect to the instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-connect-to-instance-linux.html)

Update the package list from different repos with  
    
    #!bash
    sudo apt-get update

install these packages  

    #!bash
    sudo apt-get install gfortran gcc wget make

Make a directory for ddscat

    #!bash
    mkdir ddscat\_install  
    cd ddscat\_install

Download the source files and examples

    #!bash
    wget http://ddscat.wikidot.com/local--files/downloads/ddscat7.3.1\_150420.tgz  
    wget http://ddscat.wikidot.com/local--files/downloads/ddscat7.3.1\_examples\_150519.tgz

Unzip them

    #!bash
    tar -xzvf ddscat7.3.1\_150420.tgz

    tar -xzvf ddscat7.3.1\_examples\_150519.tgz

    rm \*.tgz

Go to the examples\_exp folder

    #!bash
    cd /examples\_exp

To compile ddscat executable and run the examples:  

    #!bash
    ./run\_examples

ddscat executabe file should be created in the src folder, which you can use for your own ddscat test cases.

To quit the ssh session, type  
`exit` in the command prompt

So as you see, the process is very simple.
