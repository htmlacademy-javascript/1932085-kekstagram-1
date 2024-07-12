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

// известно колво этажей в здании и колво квартир на этаже, определить номер парадной и этаж по номеру квартиры
const findFloorAndEntrance = (flat, totalFloors, flatsOnFloor) => {
  let entranceNumber = 1;
  let floorNumber;
  if (flat <= totalFloors * flatsOnFloor) {
    floorNumber = Math.ceil(flat / flatsOnFloor);
  } else {
    entranceNumber = Math.ceil(flat / (totalFloors * flatsOnFloor));
    floorNumber = Math.ceil((flat % (totalFloors * flatsOnFloor)) / flatsOnFloor);
  }
  return ({
    flatNumber: flat,
    entrance: entranceNumber,
    floor: floorNumber
  });
};
//console.log(findFloorAndEntrance(20, 5, 4));
const { flatNumber, entrance, floor } = findFloorAndEntrance(20, 5, 4);
console.log(`квартира ${flatNumber} парадная ${entrance} этаж ${floor}`);

//найти сумму всех чисел от 1 до 1000 , которые /3 и /5
const summarize = (max, x, y) => {
  let total = 0;
  let list = [];
  for (let i = 1; i < max; i++) {
    if (i % x === 0 || i % y === 0) {
      list.push(i);
      total += i;
    }
  }
  console.log(list);
  return total;
};
summarize(10, 3, 5); // выводим и сам массив для проверки и сумму его членов

/* Техническое задание
Есть массив symbols, в котором хранится алфавит (буквы и другие символы).
Есть массив encodedSymbols, в котором хранится зашифрованное сообщение.
Каждый элемент этого массива — это индекс символа из массива symbols.
Программа дешифровки должна переводить элементы из массива с шифровкой (encodedSymbols)
в символы из массива алфавита (symbols) и склеивать из них расшифрованную строку. Эту строку запиши в переменную decodedMessage.
*/
// Алфавит
let symbols = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' ', '.', ',', '—', '!'];

// Закодированное сообщение
let encodedSymbols = [18, 38, 46, 62, 66, 50, 33, 41, 66, 49, 48, 38, 58, 62, 68, 66, 48, 37, 42, 47, 66, 50, 33, 41, 66, 49, 48, 51, 49, 42, 67];

let decodedMessage = '';  // Раскодированное сообщение

for (let i = 0; i <= encodedSymbols.length - 1; i++) {
  decodedMessage += symbols[encodedSymbols[i]];
};


// сумма четных Фибонначчи с 1 до 4 мио

// 1 2 3 5 8 13 21 34 55 89 144 /// 2 - 8- 34 144 = 188

/*
const getFibEvenSum = (max) => {
  let numbers = [];
  numbers[0] = 1;
  numbers[1] = 2;
  let totalEven = 0;

  for (let i = 2; i < max; i++) {
    numbers.push((numbers[i] = numbers[i - 2] + numbers[i - 1]));

  }
  return numbers;
};
getFibEvenSum(11);


const getSumEvenFib = (max) => {
  let total = 0;
  for (let i = 0; i < max; i++) {
    if (i > 2) {
      console.log(total += (i - 2) + (i - 1));
    };
  }
  return total;
}
getSumEvenFib(11);*/

// сумма четных Фибонначчи с 1 до 4 мио
// 1 2 3 5 8 13 21 34 55 89 144 233 377 610/// 2 - 8- 34 144 610 = 798*/
//                                   10-44

const getFibEvenSum = (max) => {
  let numbers = [];
  numbers[0] = 1;
  numbers[1] = 2;
  let totalEven = 0;
  for (let i = 2; i < max; i++) {
    numbers.push((numbers[i] = numbers[i - 2] + numbers[i - 1]));
    if (numbers[i] % 2 === 0) {
      totalEven += numbers[i];
    }
  };
  console.log(numbers);
  return totalEven + numbers[1];
};
getFibEvenSum(15); //в ряду фибоначчи добавляет повторно последнее число и в сумме ошибается на 2 единицы

//делители 13195 - 5 7 13 29. какой наибольший делитель 600851475143?

const getLargestPrimeFactor = (number) => {
  let primeFactors = [];
  let largestPrimeFactor;
  for (let i = 0; i <= number - 1; i++) {
    if (number % i === 0) {
      primeFactors.push(i);
      largestPrimeFactor = primeFactors[primeFactors.length - 1];
    }
  }
  console.log(primeFactors);
  return largestPrimeFactor;
}
getLargestPrimeFactor(13195);// при 600851475143;  пишет таймаут еррор

/*
Техническое задание
Мяу! Я провожу тренировки и хочу понять, пройду ли квалификацию.
В течение тренировки я делаю несколько прыжков, и собираю длины прыжков в массив attempts.
Программа должна выбрать три лучших прыжка, а затем посчитать среднее значение этих трёх прыжков и записать его в переменную averageBest.
Квалификационное значение хранится в переменной qualificationDistance.
Если среднее от лучших трёх прыжков больше квалификационного значения,
то я прошёл квалификацию и переменная qualified должна содержать true. Если квалификация не пройдена, то в qualified должно быть false.
*/
let qualificationDistance = 200;
let attempts = [120, 150, 160, 201, 203, 180, 202];
let qualified = false;
let averageBest = 0;

for (let i = 0; i <= attempts.length - 2; i++) {
  let minvalue = attempts[i];
  for (j = i + 1; j <= attempts.length - 1; j++) {
    if (attempts[j] < minvalue) {
      minValue = attempts[j];
      let swap = attempts[i];
      attempts[i] = minValue;
      attempts[j] = swap;

    }
  }
}
console.log(attempts);
averageBest = Math.round((attempts[attempts.length - 1] + attempts[attempts.length - 2] + attempts[attempts.length - 3]) / 3);
console.log(averageBest);
if (averageBest > qualificationDistance) { qualified = true }; // не прошла проверку 1 из 4х и выстраивает массив не совсем по порядку.

//массивы и обьекты - сортировка имен по убыванию возраста
const persons = [{
  name: 'Ivan',
  age: 34,
  isActive: true
}, {
  name: 'Maria',
  age: 54,
  isActive: true
}, {
  name: 'Semeon',
  age: 134,
  isActive: false
}
  , {
  name: 'Dan',
  age: 20,
  isActive: true
}];

const getAgeInOrder = (arr) => {
  return arr.sort((x, y) => y.age - x.age).
    map((element) => element.name);
}

console.log(getAgeInOrder(persons));
/* Техническое задание

Мяу! Мне нужна программа, которая подсчитает полезность и результативность игроков на основе их статистики. Оформи код в виде функции getStatistics с одним параметром — массивом игроков.

Каждый футболист в этом массиве описывается объектом с тремя полями: имя (свойство name), забитые голы (свойство goals) и голевые пасы (свойство passes).

Функция должна возвращать этот же массив, в котором каждому игроку добавлены ещё два поля: коэффициент полезности по Кексу® (свойство coefficient) и результативность (свойство percent).

Коэффициент полезности считается так: умножаем голы игрока на 2 (потому что я считаю, что голы важнее всего) и прибавляем к этому значению все голевые пасы футболиста.

Результативность (процент забитых мячей футболиста от результата всей команды) считаем так: находим сумму голов всех игроков и выясняем, сколько процентов от этого числа забил каждый футболист. Округляй значение с помощью Math.round.

*/
/* const players = [
   {
      name: 'Ivan',
      goals: 2,
      passes: 3,

     },
     {
      name: 'Poops',
      goals: 4,
      passes: 2,
     },
      {
      name: 'Durik',
      goals: 6,
      passes: 3,
     }
    ] это мы руками создали моковые данные по игрокам, а ниже автоматическое с выбором рандомного числа для значения*/
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
//это рандомное значение числа из диапазона без проверки уникальности
/* рандомный элт массива

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length-- - 1)];*/

const names = ['Debil', 'Urod', 'Maniac', 'Ped', 'Degenerat']

const PLAYERS_COUNT = 5;
const players = [];
for (let i = 1; i <= PLAYERS_COUNT; i++) {
  players.push({
    name: names[getRandomInteger(0, names.length - 1)],
    goals: getRandomInteger(0, 10),
    passes: getRandomInteger(0, 30)
  })
}

const getStatistics = (arr) => {
  let sumGoals = 0;
  for (let i = 0; i < arr.length; i++) {
    sumGoals += arr[i].goals;
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i].coefficient = arr[i].goals * 2 + arr[i].passes;
    arr[i].percent = Math.round((arr[i].goals / sumGoals) * 100);
  }
  return arr;
}
getStatistics(players)


/*
Мяу! Допиши за меня конфигуратор. Я создал объект house и задал ему несколько свойств: rooms (количество комнат), floors (этажи), material (материал для стен), coefficient (средняя площадь каждой комнаты).

Ещё я завёл мапу materialPrice, в которой записал стоимость каждого возможного материала для строительства.

Добавь в объект два метода: calculateSquare, который будет возвращать площадь дома, и calculatePrice, который будет возвращать стоимость строительства.

Площадь считай так: умножь количество комнат на коэффициент и число этажей в доме.

Цена строительства — произведение площади и стоимости материала дома.

*/

const materialPrice = {
  'wood': 1000,
  'stone': 1500,
  'brick': 2000,
};

const house = {
  rooms: 10,
  floors: 5,
  material: 'wood',
  coefficient: 10.5,
  calculateSquare: function () {
    const square = this.rooms * this.coefficient * this.floors;
    return square;
  },

  calculatePrice: function () {
    const totalPrice = this.calculateSquare() * materialPrice[this.material];
    return totalPrice;
  }
};
console.log(house.calculatePrice())

/*Напиши программу-переводчик.Создай функцию translate с двумя параметрами.
Первый параметр — строка со словом на русском языке,которое нужно перевести на английский.
Второй параметр — объект с данными, в котором хранится перевод слов.
Функция должна возвращать строку вида: 'понедельник по-английски: monday'.
*/
const daysOfWeek = {
  'понедельник': 'monday',
  'вторник': 'tuesday',
  'среда': 'wednesday',
  'четверг': 'thursday',
  'пятница': 'friday',
  'суббота': 'saturday',
  'воскресенье': 'sunday'
};
const translate = (russianWord, translationToEnglish) => {
  return russianWord + ' по-английски: ' + translationToEnglish[russianWord];
}
translate('понедельник', daysOfWeek)

/* написать функцию генератор для получения уникальных идентификаторов*/

function createIdGenerator() {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}
const generatePhotoId = createIdGenerator();
console.log(generatePhotoId());
console.log(generatePhotoId());
console.log(generatePhotoId());

