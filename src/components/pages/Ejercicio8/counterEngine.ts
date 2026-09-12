function replaceChars(text: string, chartSet: string, by: string): string {
  let cleanText = text;
  for (let char of chartSet) {
    cleanText = cleanText.replaceAll(char, by);
  }

  return cleanText;
}

function cleanList(list: string[]): string[] {
  let newList: string[] = [];

  for (let elem of list) {
    if (elem.length) {
      newList.push(elem);
    }
  }

  return newList;
}

function countLetters(list: string[]): number {
  let n = 0;
  for (let elem of list) {
    n += elem.length;
  }
  return n;
}

function counter(inputText: string) {
  const specialChars = '!@#$%^&*()_+-=[]{}|;\':",./<>?`~\\';
  const lineReturnChars = '\n\r\u2028\u2029';
  let wordList: string[];
  let nWords: number;
  let nLetters: number;
  let cleanText;

  cleanText = replaceChars(inputText, lineReturnChars, ' ');
  cleanText = replaceChars(cleanText, specialChars, '');

  wordList = cleanText.split(' ');
  wordList = cleanList(wordList);

  nWords = wordList.length;
  nLetters = countLetters(wordList);

  return {
    letters: nLetters,
    words: nWords,
  };
}

export default counter;
