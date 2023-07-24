# SoftUni-BG---Basics-with-JavaScript-jul-2023

///////////////////////////////////////////////////////////////////////////
🚨 1. == (две равни знаци) - Сравнение на СТОЙНОСТИ:

Този оператор сравнява две стойности и връща true (истина), ако те са равни, без да проверява типа на стойностите.
Например: 5 == "5" е true, защото сравняваме стойността 5 със стринг "5", и те са равни в смисъл на стойност, без значение от типа.
🚨 2. === (три равни знаци) - Строго сравнение на СТОЙНОСТИ и ТИПОВЕ:

Този оператор сравнява две стойности и техните типове и връща true (истина), ако и стойностите и типовете им са равни.
Например: 5 === "5" е false, защото тук типовете на стойностите са различни - числов тип за 5 и стрингов тип за "5".
/////////////////////////////////////////////////////////////////////////////

🚨В JavaScript, условните конструкции if, if-else, и else се използват за изпълнение на код в зависимост от изразеното условие.

if: Използва се за проверка на едно условие и изпълнение на код, ако това условие е истина (true). Ако условието е лъжа (false), кодът в тялото на if блока се пропуска, и програмата продължава със следващия блок код.

if-else: Използва се, когато искаме да проверим едно условие и да изпълним един блок код, ако то е истина (true), и друг блок код, ако то е лъжа (false). Тук точно един от двата блока код се изпълнява, в зависимост от резултата на условието.

else: Използва се за изпълнение на код, когато предходното условие в if или if-else блок се оказва лъжа (false). Той не се използва самостоятелно, а винаги се комбинира с if или if-else.

ПРИМЕР: 🚨 🚨 🚨

if (условие1) {
// Код, който ще се изпълни, ако условие1 е вярно
} else if (условие2) {
// Код, който ще се изпълни, ако условие2 е вярно
} else if (условие3) {
// Код, който ще се изпълни, ако условие3 е вярно
}
// може да има повече "else if" клаузи, а също и "else" клауза
else {
// Код, който ще се изпълни, ако нито едно от горните условия не е вярно
}
///////////////////////////////////////////////////////////////////////

// 💥 ЛОГИЧЕСКИ ОПЕРАТОРИ
// • Оператори, които комбинират или изключват условия
// • Връщат булев резултат(true или false)
// "&&" - И (Вярност на двете условия)
// - && - И - проверява изпълнението на няколко условия едновременно
// "||" - ИЛИ (Вярност на едното или на другото условие)
// - || - Проверява дали е изпълнено поне едно измежду няколко условия
// "!" - ОТРИЦАНИЕ (Отрицание на условие)

// Math.floor(); Rounds the number down - Закръгля числото надолу
//////////////////
// Math.ceil(); Rounds the number up - Закръгля числото на горе
////////////////////////////////////////////////////////////////
Math.abs() Този метод връща абсолютната стойност (винаги положителната стойност) на дадено число.
Math.pow() се използва за повдигане на число на зададена степен. Той връща резултата от изчислението на числото, повдигнато на степен.
пример:
//Math.pow(base, exponent);

 <!-- console.log(Math.pow(2, 3)); // Извежда: 8 (2 на степен 3)
 console.log(Math.pow(4, 0.5)); // Извежда: 2 (квадратен корен от 4)
 console.log(Math.pow(3, -2)); // Извежда: 0.1111111111111111 (1 / 3 на степен -2) -->

.charAt() в JavaScript се използва за да вземете символа (символите) на определена позиция от низ (string). Връща символа на посочената позиция.

<!-- string.charAt(index) -->

string е низът, от който искаме да вземем символа, а index е позицията на символа, който искаме да вземем. Позициите в низовете се броят от 0 до дължината на низа - 1.

<!-- const str = "Hello";
console.log(str.charAt(0)); // Извежда: "H"
console.log(str.charAt(1)); // Извежда: "e"
console.log(str.charAt(4)); // Извежда: "o"
console.log(str.charAt(10)); // Извежда: "" (празен низ, защото няма символ на позиция 10 в "Hello") -->

Ако подадената позиция е извън валидния диапазон на индексите на низа (например по-голяма от дължината на низа), .charAt() ще върне празен низ ("").
