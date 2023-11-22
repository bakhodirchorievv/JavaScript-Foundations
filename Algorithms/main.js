//ALGORITHMS

// function range(archa) {
//   for (let a = 1; a <= archa; a++) {
//     let qator = ""
//     for (let b = 1; b <= archa; b++) {
//       if (b <= archa - a) {
//         qator = qator + "  "
//         } else {
//         qator = qator + " #"
//       }
//     }
//     console.log(qator)
    
//   }
// }
// let archa = +prompt("Son kiriting")
// range(archa)





// function range(son) {
//   for (let one = son; one >= 1; one--) {
//     let qator = ""
//     for (let two = son; two >= 1; two--) {
//       if (two > one ) {
//         qator = qator + " "
//       } else{
//         qator = qator + "#"
//       }
//     }
//     console.log(qator)
//   }
// }
// let son = prompt("Son kiriting")
// range(5)





// ALGORITHMS HOMEWORK

function range(archa) {
  for (let a = 1; a <= archa; a++) {
    let qator = ""
    for (let b = 1; b <= archa; b++) {
      if (b <= archa - a) {
        qator = qator + "0 "
      } else {
        qator = qator + "# "
      }
    }
    console.log(qator)
  }
}
let archa = +prompt("Son kiriting")
range(archa)
