Title: Calculating molarity, weight concentration from absorbance value for plasmonic nanoparticles in solution
Date: 2018-06-20 10:50
Author: juluribk
Category: Plasmonics
Slug: calculating-molarity-weight-concentration-from-absorbance-value-for-plasmonic-nanoparticles-in-solution
Status: published

It is common to measure the peak absorbance of the plasmonic nanoparticles in solution and then get the following:

1.   Molarity (moles/liter)
2.  Number of particles per ml
3.   Weight concentration (ug/ml)

I wrote a small python function to extract these parameters.  The following inputs are needed for the function

1.  d_nm :   diameter of the particle in nanoparticle
2.  od :  peak OD measured from the absorbance plot
3.  path_length_cm :  cuvette length in centimeter
4.  density_g_per_cm3 :  for gold it is 19.28, for silver it is 10.49
5.  molar_Extinction_perM_percm :  Molar extinction coefficient extracted from [here](https://www.sigmaaldrich.com/technical-documents/articles/materials-science/nanomaterials/gold-nanoparticles.html).
6.  This can extracted from measuring absorbance at different concentrations and then fitting a linear line. the slope will be molar extinction coefficient

Here is the code.
<iframe src="https://trinket.io/embed/python/f1353652f2?start=result" width="100%" height="656" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
