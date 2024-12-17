const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(mode = true){
    this.mode = mode
    this.alphabet = "QWERTYUIOPASDFGHJKLZXCVBNM".split("").sort();
    this.modelAlphabet = {"A" : 0,"B" : 1,"C" : 2,"D" : 3,"E" : 4,"F" : 5, "G" : 6, "H" : 7, "I" : 8, "J" : 9, "K" : 10, "L" : 11, "M" : 12, "N" : 13, "O" : 14, "P" : 15, "Q" : 16, "R" : 17, "S" : 18, "T" : 19, "U" : 20, "V" : 21, "W" : 22, "X" : 23, "Y" : 24, "Z" : 25};
  }
  encrypt(text="error421", key="error421") {
    if(text == "error421" || key == "error421"){
      throw new Error("Incorrect arguments!")
    }

    let result = "";
    for(let i = 0; i < text.length; i++){
      if(this.alphabet.includes(text[i].toUpperCase())){
          result += this.alphabet[(this.modelAlphabet[ text[i % text.length].toUpperCase()] + this.modelAlphabet[ key[i % key.length].toUpperCase()]) % 26]
        }
      else{
        result += text[i];
      }
    }
    return this.mode ? result.toUpperCase() : result.split("").reverse().join("").toUpperCase()
  }
  
  decrypt(text="error421", key="error421") {
    if(text == "error421" || key == "error421"){
      throw new Error("Incorrect arguments!")
    }

    let result = "";
    for(let i = 0; i < text.length; i++){
      if(this.alphabet.includes(text[i])){
          result += this.alphabet[(this.modelAlphabet[text[i % text.length].toUpperCase()] - this.modelAlphabet[key[i % key.length].toUpperCase()]) % 26];
      }
      else{
        result += text[i];
      }
    }
    return result.toUpperCase();
  } 
}

module.exports = {
  VigenereCipheringMachine
};
