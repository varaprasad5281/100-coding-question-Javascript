import { fatFingers } from './fat-fingers';

describe('fatFingers', () => {
  it('fatFingers("The quick brown fox jumps over the lazy dog.") should return string.', () => {
    expect(typeof fatFingers('The quick brown fox jumps over the lazy dog.')).toBe('string');
  });

  it('fatFingers("The quick brown fox jumps over the lazy dog.") should return "The quick brown fox jumps over the lZY DOG.".', () => {
    expect(fatFingers('The quick brown fox jumps over the lazy dog.')).toBe(
      'The quick brown fox jumps over the lZY DOG.'
    );
  });

  it('fatFingers("The end of the institution, maintenance, and administration of government, is to secure the existence of the body politic, to protect it, and to furnish the individuals who compose it with the power of enjoying in safety and tranquillity their natural rights, and the blessings of life: and whenever these great objects are not obtained, the people have a right to alter the government, and to take measures necessary for their safety, prosperity and happiness.") should return "The end of the institution, mINTENnce, ND dministrTION OF GOVERNMENT, IS TO SECURE THE EXISTENCE OF THE BODY POLITIC, TO PROTECT IT, nd to furnish the individuLS WHO COMPOSE IT WITH THE POWER OF ENJOYING IN Sfety ND TRnquillity their nTURl rights, ND THE BLESSINGS OF LIFE: nd whenever these greT OBJECTS re not obtINED, THE PEOPLE Hve  RIGHT TO lter the government, ND TO Tke meSURES NECESSry for their sFETY, PROSPERITY nd hPPINESS.".', () => {
    const str =
      'The end of the institution, maintenance, and administration of government, is to secure the existence of the body politic, to protect it, and to furnish the individuals who compose it with the power of enjoying in safety and tranquillity their natural rights, and the blessings of life: and whenever these great objects are not obtained, the people have a right to alter the government, and to take measures necessary for their safety, prosperity and happiness.';
    expect(fatFingers(str)).toBe(
      'The end of the institution, mINTENnce, ND dministrTION OF GOVERNMENT, IS TO SECURE THE EXISTENCE OF THE BODY POLITIC, TO PROTECT IT, nd to furnish the individuLS WHO COMPOSE IT WITH THE POWER OF ENJOYING IN Sfety ND TRnquillity their nTURl rights, ND THE BLESSINGS OF LIFE: nd whenever these greT OBJECTS re not obtINED, THE PEOPLE Hve  RIGHT TO lter the government, ND TO Tke meSURES NECESSry for their sFETY, PROSPERITY nd hPPINESS.'
    );
  });

  it('fatFingers("abABaBabAb") should return BBbbB', () => {
    expect(fatFingers('abABaBabAb')).toBe('BBbbB');
  });

  it('fatFingers("ajLaTauaDWK") should return JlTUDWK', () => {
    expect(fatFingers('ajLaTauaDWK')).toBe('JlTUDWK');
  });

  it('fatFingers("mAaHaaWXAjAaSrAxkALAAIIAABaCS2NAcAAAF1xf36AWvd69AiVmAEB4a9aafAAQaAWAA4NtAFB4NZkGIAaUAATAtW2AoeAEada9HaT1YaUKJmAQtAAAAACVs0NuOAJ3AVaAAAAaAaTarAR19Jl3TAQUAfAOAATRZiaAAxXzcAmi4asKABA6qWKAAXPfAdAFZHAD9asAAQQ2AAAoAAhDXRangAQutak8IZqAV1A9I2tVaak6aZmGaqalELaAFPNzAAApaaAZDkAogGxaaAiWZC0AAJGAkAzQMA6aPFa1ADA6vMafArWpAviAAhDAAAODMAflSAAAAKI6Alrnv8eAkmaAJkamYAAAjafIDRKEulAAAAawRo2AUAKAhAAYANsjBg4qAXAAPnjnaIaAFAacMVeygAkcPAAuAA2lcXabXAeuZRpbhrrBAL5iaajX6AAaA3a8qoaAZO4") should return mHWXJsRxkliibCS2NCF1xf36wVD69iVmeb49fQW4Ntfb4nzKgiuttW2OEED9Ht1yUKJmqTCVs0NuOj3VTRR19Jl3TqufotrzIxXzcMI4sKb6qWKXPfDFZHd9sQQ2OHdxrngqUTk8IZqv19I2tVk6zMgqLelfpnZpzdKogGxIwzc0jgkZqm6pf1d6vMFrWpVIHdODMFLski6lrnv8eKMjKmYJfIDRKEulWrO2UkhYnSJbG4QXPnjnifCmvEYGkcPu2lcXBxeuZRpbhrrBl5IJx638qoZO4', () => {
    const str =
      'mAaHaaWXAjAaSrAxkALAAIIAABaCS2NAcAAAF1xf36AWvd69AiVmAEB4a9aafAAQaAWAA4NtAFB4NZkGIAaUAATAtW2AoeAEada9HaT1YaUKJmAQtAAAAACVs0NuOAJ3AVaAAAAaAaTarAR19Jl3TAQUAfAOAATRZiaAAxXzcAmi4asKABA6qWKAAXPfAdAFZHAD9asAAQQ2AAAoAAhDXRangAQutak8IZqAV1A9I2tVaak6aZmGaqalELaAFPNzAAApaaAZDkAogGxaaAiWZC0AAJGAkAzQMA6aPFa1ADA6vMafArWpAviAAhDAAAODMAflSAAAAKI6Alrnv8eAkmaAJkamYAAAjafIDRKEulAAAAawRo2AUAKAhAAYANsjBg4qAXAAPnjnaIaAFAacMVeygAkcPAAuAA2lcXabXAeuZRpbhrrBAL5iaajX6AAaA3a8qoaAZO4';
    expect(fatFingers(str)).toBe(
      'mHWXJsRxkliibCS2NCF1xf36wVD69iVmeb49fQW4Ntfb4nzKgiuttW2OEED9Ht1yUKJmqTCVs0NuOj3VTRR19Jl3TqufotrzIxXzcMI4sKb6qWKXPfDFZHd9sQQ2OHdxrngqUTk8IZqv19I2tVk6zMgqLelfpnZpzdKogGxIwzc0jgkZqm6pf1d6vMFrWpVIHdODMFLski6lrnv8eKMjKmYJfIDRKEulWrO2UkhYnSJbG4QXPnjnifCmvEYGkcPu2lcXBxeuZRpbhrrBl5IJx638qoZO4'
    );
  });
});
