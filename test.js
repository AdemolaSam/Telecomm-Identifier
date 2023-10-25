// let mtnPattern = /^(70[36]|80[36]|90[36]|81[0346]|91[36])$/
// let gloPattern = /^(70[5]|80[57]|905|915)$/
// let airtelPattern = /^(70[18]|80[28]|812|90[1247]|91[12])$/
// let _9mobilePattern = /^(809|81[78]90[89])$/


let mtn = {
    pattern: /^(70[36]|80[36]|90[36]|81[0346]|91[36])$/,
    logo: "mtn.png",
}

let glo = {
    pattern: /^(70[5]|80[57]|905|915)$/,
    logo: "glo.png",
}

let airtel = {
    pattern: /^(70[18]|80[28]|812|90[1247]|91[12])$/,
    logo: "airtel.png",
}

let _9mobile = {
    pattern: /^(809|81[78]90[89])$/,
    logo: "9mobile.png",
}

const telcomArr = [mtn, glo, airtel, _9mobile]




function verify(input){
    if (input.startsWith("+234")){
        for (let i = 0; i < telcomArr.length; i++) {
            if(telcomArr[i].pattern.test(input.slice(4, 7))){
                console.log(telcomArr[i].logo)
                console.log("startswith +234")
            }
        }
        
    } else if (input.startsWith("0")){
        for (let i = 0; i < telcomArr.length; i++) {
            if(telcomArr[i].pattern.test(input.slice(1, 4))){
                console.log(telcomArr[i].logo)
                console.log("startswith 0")
            }
        }
    } else {
        console.log("UNKNOWN")
    }
        
}

// console.log(verify("+2348124"))

// console.log(glo.pattern)

let x = "    air  te  l"

switch (x){
    case "glo":
        console.log("glo")
        break;
    case "airtel":
        console.log("airtel")
        break;
    case "9mobile":
        console.log("9mobile")
        break;
    default:
        console.log("unknown")
}

let p = " 0234"
let q = "0245"

console.log(p.startsWith("0"), q.startsWith(""))