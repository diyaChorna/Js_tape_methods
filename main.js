// Завдання 1
// Користувач вводить текст в prompt. Потрібно порахувати і вивести кількість пробілів, які були введені.

// let string = 'Hello my world';
// let position = 0;
// while(true){
//       let result = string.indexOf(' ',position);
//       if(result === -1) break;
//       console.log(result);
//       position = result +1;
// }

// Завдання 2
// Користувач вводить email. Потрібно перевірити дані на правильність введення. Правильно введений email - це той, в якому міститься символ @. Крім того символ @ не може бути на початку тексту або в кінці.
// Приклад правильно введених даних:
// student@ukr.net
// Приклад не правильно введених даних:
// @student.ukr.net
// student.ukr.net@
// student.ukr.net

// let email = "jkhg@fddfghj";
// let position = 0;
// let number = 0;
// while(true){
//       let result = email.indexOf('@',position);
//       if(result === -1){
//             break;
//       }
//       else{
//             console.log(result);
//             number++;
//             console.log(number);
//             position = result +1;
//             let start = email.startsWith('@');
//             let end = email.endsWith('@');
//             if(number>1){
//                   console.log('Email are wrong');
//                   break;
//             }
//             else if(start == true){
//                   console.log('Email is wrong');
//                   break;
//             }
//             else if(end == true){
//                   console.log('Email is wrong');
//                   break;
//             }
//             else{
//                   console.log('Email is right');
//             }
//       }
// }

// Завдання 3
// Людина вводить текст, в якому міститься слово html (html може зустрічатись в тексті декілька разів). Потрібно, вивести в консолі загальну кількість слів html у введеному тексті.
// Приклад роботи:
// Користувач вводить: “Text html javascript html css” – в консоль виводиться 2.

// let text = 'fghjkhtml htmljdfhtml'
// let count = 0;
// let position = 0;
// while(true){
//       let indexOf = text.indexOf('html', position);
//       position = indexOf + 1;
//       if(indexOf ==-1){
//             console.log(`Count = ${count}`);
//             break;
//       }
//       else{
//             console.log(indexOf);
//             count++;
//       }
// }

// Завдання 4
// Користувач вводить URL адреса в prompt в форматі http або https. Виведіть тільки ім'я домена без префіксів http://, https:// в консолі.
// Приклад роботи:
// Користувач вводить: “https://www.google.com” – в консоль виводиться www.google.com.
// Користувач вводить: “http://www.w3schools.com” – в консоль виводиться w3schools.com.

let text = 'https://www.google.com';
let check = text.startsWith('https');
if(check == true){
      let cut = text.substring(8);
      console.log(cut);
}
else{
      let check2 = text.startsWith('http');
      console.log(check2);
      if(check2 == true){
            let cut = text.substring(7);
            console.log(cut);
      }
      else{
            console.log(`Email is wrong`);
      }
}
