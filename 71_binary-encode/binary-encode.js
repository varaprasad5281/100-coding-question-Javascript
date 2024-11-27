export const binaryEncode=(textString)=> {
    let binaryString = '';
    for (let i = 0; i < textString.length; i++) {
      const char = textString[i];
      const asciiCode = char.charCodeAt();
      const binary = asciiCode.toString(2).padStart(8, '0');
      binaryString += binary+' ';
    }
    return binaryString.trim();
  }
  
  