const isPalindrom = (string) => {
  const stringLowerCase = string.toLowerCase().replaceAll(' ', '');
  let reverseString = '';
  for (let i = stringLowerCase.length - 1; i >= 0; i--) {
    reverseString += stringLowerCase.at(i);
  }
  return stringLowerCase === reverseString;
};
isPalindrom('ДовОд');
isPalindrom('Кекс');
isPalindrom('Лёша на полке клопа нашёл');

const extractFigures = (string) => {
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};
extractFigures('1 кефир, 0.5 батона');
extractFigures('а я томат');
extractFigures(2023);

const myPadStart = (string, minLength, pad) => {

  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }

  const tempPad = pad.slice(0, actualPad % pad.length);
  const tempRepeat = pad.repeat(actualPad / pad.length);

  return tempPad + tempRepeat + string;
};
myPadStart('q', 4, 'werty');
myPadStart('q', 4, 'we');

const checkLength = (string, length) => string.length <= length;
checkLength('проверяемая строка', 20);
