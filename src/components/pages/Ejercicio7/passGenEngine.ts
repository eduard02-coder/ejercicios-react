function generatePassword(
  length = 4,
  includeLowerCase = true,
  includeUpperCase = true,
  includeNumbers = true,
  includeSpecialChars = true,
): string | null {
  if (length < 4) {
    return null;
  }

  if (
    !includeLowerCase &&
    !includeUpperCase &&
    !includeNumbers &&
    !includeSpecialChars
  ) {
    return null;
  }

  const random = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const pickUp = (str: string) => {
    const max = str.length;
    return str[random(max)];
  };

  const shuffleString = (str: string): string => {
    // 1. Convert the string to an array of characters
    let arr = str.split('');

    // 2. Apply the Fisher-Yates shuffle algorithm
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }

    // 3. Join the array back into a string
    return arr.join('');
  };

  const lowerCaseLetters = 'qwertyuiopasdfghjklzxcvbnm';
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*()_+-=[]{}|;\':",./<>?`~\\';

  let charSet: string[] = [];
  let myPassword = '';

  if (includeLowerCase) {
    myPassword = myPassword.concat(pickUp(lowerCaseLetters));
    charSet.push(lowerCaseLetters);
  }

  if (includeUpperCase) {
    myPassword = myPassword.concat(pickUp(upperCaseLetters));
    charSet.push(upperCaseLetters);
  }

  if (includeNumbers) {
    myPassword = myPassword.concat(pickUp(numbers));
    charSet.push(numbers);
  }

  if (includeSpecialChars) {
    myPassword = myPassword.concat(pickUp(specialChars));
    charSet.push(specialChars);
  }

  const lengthDifference = length - myPassword.length;
  const charSetLength = charSet.length;

  for (let i = 0; i < lengthDifference; i++) {
    myPassword = myPassword.concat(pickUp(charSet[random(charSetLength)]));
  }

  return shuffleString(myPassword);
}

export default generatePassword;
