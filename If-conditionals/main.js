// let number = prompt("Juft son kiriting")
// number = number % 2
// if (number == 0) {
//     console.log("To'g'ri juft son")
// } else  if (number != 0) {
//     console.log("Bu son juft emas")
// }



let second = prompt("Son kiriting")

if (second % 3 == 0 && second % 5 == 0) {
    console.log("Bu son 5ga ham 3ga ham qoldiqsiz bo'linadi")
} else if (second % 3 == 0) {
    console.log("Bu son faqat 3ga bo'linadi")
} else if (second % 5 == 0) {
    console.log("Bu son faqat 5ga bo'linadi")
} else {
    console.log("Bu son 3ga ham 5ga ham bo'linmaydi")
 }