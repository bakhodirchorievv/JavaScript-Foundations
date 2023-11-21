// FUNCTIONS HOMEWORK
// FUNCTION HOMEWORK
function uzunlik(text) {
    if (typeof text === undefined || text === null || text === '""' || text === "") {
        console.log(0)
    }
    else if (text % 2 === 0 || text % 2 === 1 || text === "false" || text === false) {
        console.log("Bu string emas")
    }
    else {
        console.log(text.length)
    }

}

let a = prompt("So'z kiriting")

uzunlik(a);