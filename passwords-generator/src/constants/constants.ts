import { SettingsInputMap } from "../interfaces/password";

export const alphabet: string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
export const numbers: number[] = [0,1,2,3,4,5,6,7,8,9];
export const symbols: string[] = ['~','`','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}',']','|',':',';','"','<',',','>','.','?','/'];

export const settingsList: SettingsInputMap[] = [
  {
    key: 'hasLowercase',
    label: 'With lowercase'
  },
  {
    key: 'hasUppercase',
    label: 'With uppercase'
  },
  {
    key: 'hasNumbers',
    label: 'With numbers'
  },
  {
    key: 'hasSymbols',
    label: 'With symbols'
  }
];
