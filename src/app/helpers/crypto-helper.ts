import * as CryptoJS from 'crypto-js';

const key = 'ba71b724-051e-4462-9155-94d564862587';

export function encrypt(data: string): string {
    return CryptoJS.AES.encrypt(data, key).toString();
}

export function decrypt(data: string): string {
    return CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8);
}