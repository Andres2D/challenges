import { Settings } from '../interfaces/password';
import { alphabet, numbers, symbols } from '../constants/constants';
import { getRandom } from './random';

export const generatePassword = (settings: Settings): string => {

  const passwordBase = generateArrays(settings);
  let password: any[] = [];

  Array.from({length: settings.length}).forEach((_, index: number) => {
    passwordBase.forEach((option: string[] | number[]) => {
      password.push(option[index]);
    }); 
  });

  password = password.slice(0, settings.length);

  return password.join('');
}

const generateArrays = (settings: Settings): Array<string[] | number[]> => {

  const resultArray = [];

  if(settings.hasLowercase) {
    const sortedArray = sortArrayRandomly(
      alphabet.map(letter => letter.toLowerCase()));
    resultArray.push(sortedArray.slice(0, settings.length));
  }
  
  if(settings.hasNumbers) {
    const sortedArray = sortArrayRandomly(numbers);
    resultArray.push(sortedArray.slice(0, settings.length));
  }
  
  if(settings.hasSymbols) {
    const sortedArray = sortArrayRandomly(symbols);
    resultArray.push(sortedArray.slice(0, settings.length));
  }
  
  if(settings.hasUppercase) {
    const sortedArray = sortArrayRandomly(alphabet.map(letter => letter.toUpperCase()));
    resultArray.push(sortedArray.slice(0, settings.length));
  }

  return resultArray;
}

const sortArrayRandomly = (array: string[] | number[]): string[] | number[] => {
  
  let arrayLength = array.length;
  while (arrayLength != 0) {

    let randomIndex = getRandom(arrayLength);
    arrayLength--;

    [array[arrayLength], array[randomIndex]] = [
      array[randomIndex], array[arrayLength]];
  }

  return array;
}
