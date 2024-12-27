// Caesar cipher function
function caesarCipher(text, shift, encrypt = true) {
    if (!encrypt) shift = -shift; // Reverse shift for decryption
    shift = ((shift % 26) + 26) % 26; // Ensure shift is within bounds
  
    return text
      .split("")
      .map((char) => {
        if (char.match(/[A-Za-z]/)) {
          const base = char.charCodeAt(0) >= 97 ? 97 : 65;
          return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
        }
        return char; // Non-alphabetic characters remain unchanged
      })
      .join("");
  }
  
  // Encrypt function
  function encrypt() {
    const text = document.getElementById("plainText").value;
    const shift = parseInt(document.getElementById("shiftEncrypt").value);
    // alert(text);
    if (text && !isNaN(shift)) {
      const result = caesarCipher(text, shift, true);
      document.getElementById("cipherTextEncrypt").textContent = result;
    } else {
      document.getElementById("cipherTextEncrypt").textContent = "Please provide valid input.";
    }
  }
  
  // Decrypt function
  function decrypt() {
    const text = document.getElementById("cipherText").value;
    const shift = parseInt(document.getElementById("shiftDecrypt").value);
  
    if (text && !isNaN(shift)) {
      const result = caesarCipher(text, shift, false);
      document.getElementById("plainTextDecrypt").textContent = result;
    } else {
      document.getElementById("plainTextDecrypt").textContent = "Please provide valid input.";
    }
  }
