'''
The code below shows how to convert measured absobance to Molarity (moles of particle/1L of solvent), NPS_per_ml, weight concentration
'''

import math


def calc_from_molarity(d_nm=17, peak_od=0.93, path_length_cm=1,
                       density_g_per_cm3=19.28,
                       molar_Extinction_perM_percm=3.68E8):
    '''
    d_nm # diameter of the particle
    od # peak OD measured from the absorbance plot
    path_length_cm # cuvette length
    density_g_per_cm3 # for gold it is 19.28, for silver it is 10.49
    molar_Extinction_perM_percm # Molar extinction coefficient extracted from
    https://www.sigmaaldrich.com/technical-documents/articles/materials-science/nanomaterials/gold-nanoparticles.html
    This can extracted from measuring absorbance at different concentrations and then fitting a linear line. the slope will be molar extinction coefficient
    '''
    print('Input parameters :')

    print('Diameter of particle: {} nm'.format(d_nm))
    print('Density of metal: {} g/cm\^2'.format(density_g_per_cm3))
    print('Measured peak_OD: {}'.format(peak_od))
    print('Cuvvette path length: {} cm'.format(path_length_cm))
    print(
        'Assumed Molar Extinction : {:.2E} (M-1Cm-1)'.format(molar_Extinction_perM_percm))

    print('Output parameters :')

    # Beer-Lambert Law
    C_M = peak_od / (path_length_cm * molar_Extinction_perM_percm)
    print(
        'Concentration of Nanoparticles (M, moles of particles/1L of solvent) : {:.3E}'.format(C_M))

    # convert molarity to NPS/ml ( Nanoparticles per ml), here Molarity refers to N Nps per 1000 ml
    NPS_per_ml = C_M * 6.0221409e+23 / 1000
    print('Nanoparticles per ml : {:.3E}'.format(NPS_per_ml))

    # Calculate weight of each Particle
    np_weight_g = math.pi * ((d_nm / 2.0) * 1E-7) ** 3 * density_g_per_cm3
    print('Weight of each particle (g) : {:.3E}'.format(np_weight_g))

    # Convert Molarity (moles of particles/1L of solvent) to weight_concentration_ug_ml
    weight_concentration_ug_per_ml = NPS_per_ml * (4.0 / 3) * np_weight_g * 1E6
    print(
        'Weight_concentration (ug/ml) : {:.3f}'.format(weight_concentration_ug_per_ml))

print(calc_from_molarity (d_nm=17, peak_od=0.93, path_length_cm=1,
                                                               density_g_per_cm3=19.28,
                                                               molar_Extinction_perM_percm=3.68E8))
