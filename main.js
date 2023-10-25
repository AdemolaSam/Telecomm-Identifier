document.addEventListener("DOMContentLoaded", ()=> {
    let phoneNumberInput = document.querySelector('input')
    let select = document.querySelector('select');
    const btn = document.querySelector('button');
    let image = document.querySelector('img');

    // Telephone Carrier objects 
    let mtn = {
        pattern: /^(70[36]|80[36]|90[36]|81[0346]|91[36])$/,
        logo: "logos/mtn.png",
    }
    
    let glo = {
        pattern: /^(70[5]|80[57]|905|915)$/,
        logo: "logos/glo.png",
    }
    
    let airtel = {
        pattern: /^(70[18]|80[28]|812|90[1247]|91[12])$/,
        logo: "logos/airtel.png",
    }
    
    let _9mobile = {
        pattern: /^(809|81[78]90[89])$/,
        logo: "logos/9mobile.png",
    }
    // Array of telecom carriers
    const telcomArr = [mtn, glo, airtel, _9mobile]

    // Event to verify the phone number carrier
    phoneNumberInput.addEventListener("input", verify)

    function verify(){
        phoneNumber = phoneNumberInput.value.replace(/ /g, "").trim()
        if (phoneNumber.startsWith("+234")){
            phoneNumberInput.maxLength = "14" // Ensures the length of number inputted is limited to 14 characters
            for (let i = 0; i < telcomArr.length; i++) {
                if(telcomArr[i].pattern.test(phoneNumber.slice(4, 7))){
                    image.src = telcomArr[i].logo
                }
            } 
        } else if (phoneNumber.startsWith("0")){
            phoneNumberInput.maxLength = "11" // Ensures the phone number's length does not exceed 11
            for (let i = 0; i < telcomArr.length; i++) {
                if(telcomArr[i].pattern.test(phoneNumber.slice(1, 4))){
                    image.src = telcomArr[i].logo
                }
            }
        } else if(phoneNumber == ""){
            image.src = "logos/default.png"
        } else {
           image.src = "logos/unknown.png"
           console.log("UNKNOWN Carrier")
        }       
    } 
})