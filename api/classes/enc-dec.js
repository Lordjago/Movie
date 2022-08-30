import CryptoJS from "crypto-js";

import {} from "dotenv/config";

class EncryptDecrypt {
  static encrypt = (value) => {
    return CryptoJS.AES.encrypt(value, "process.env.SECRET_KEY").toString();
  };

  static decrypt = (value) => {
    let bytes = CryptoJS.AES.decrypt(value, "process.env.SECRET_KEY");
    return bytes.toString(CryptoJS.enc.Utf8);
  };
}

let data = EncryptDecrypt.encrypt("Adegoke6jago12wereqw35");
console.log(data);
console.log(EncryptDecrypt.decrypt(data));
