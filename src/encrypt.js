import CryptoJS from 'crypto-js';


export function encrypt(text, key) {
    try {
        return CryptoJS.AES.encrypt(text, key).toString();
    } catch (e) {
        console.log(e);
    }
}
