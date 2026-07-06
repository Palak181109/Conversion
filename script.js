const params = new URLSearchParams(window.location.search);
const type = params.get("type");

const heading = document.getElementById("heading");
const badge1 = document.getElementById("badge1");
const badge2 = document.getElementById("badge2");

//To complete the required changes.

const conversions = {
    "dec-bin": {
        title: "Decimal to Binary",
        from: "10",
        to: "2"
    },
    "bin-dec": {
        title: "Binary to Decimal",
        from: "2",
        to: "10"
    },
    "dec-oct": {
        title: "Decimal To Octal",
        from: "10",
        to: "8"
    },
    "dec-hex": {
        title: "Decimal To Hexadecimal",
        from: "10",
        to: "16"
    },
    "oct-bin": {
        title: "Octal to Binary",
        from: "8",
        to: "2"
    },
    "oct-dec": {
        title: "Octal to Decimal",
        from: "8",
        to: "10"
    },
    "bin-oct": {
        title: "Binary To Octal",
        from: "2",
        to: "8"
    },
    "bin-hex": {
        title: "Binary To Hexadecimal",
        from: "2",
        to: "16"
    },
    "hex-bin": {
        title: "Hexadecimal to Binary",
        from: "16",
        to: "2"
    },
    "hex-dec": {
        title: "Hexadecimal to Decimal",
        from: "16",
        to: "10"
    },
    "hex-oct": {
        title: "Hexadecimal to Octal",
        from: "16",
        to: "8"
    }, 
    "oct-hex": {
        title: "Octal to Hexadecimal",
        from: "8",
        to: "16"
    },  
};

const current = conversions[type];

heading.innerHTML = current.title;

badge1.innerHTML = current.from;

badge2.innerHTML = current.to;

//To Navigate to the right page.

function BinaryToDecimal(){
    window.location.href="converter.html?type=bin-dec";
}

function OctalToDecimal(){
    window.location.href="converter.html?type=oct-dec";
}

function HexadecimalToDecimal(){
    window.location.href="converter.html?type=hex-dec";
}

function DecimalToBinary(){
    window.location.href="converter.html?type=dec-bin";
}

function OctalToBinary(){
    window.location.href="converter.html?type=oct-bin";
}

function HexadecimalToBinary(){
    window.location.href="converter.html?type=hex-bin";
}

function DecimalToOctal(){
    window.location.href="converter.html?type=dec-oct";
}

function BinaryToOctal(){
    window.location.href="converter.html?type=bin-oct";
}

function HexadecimalToOctal(){
    window.location.href="converter.html?type=hex-oct";
}

function DecimalToHexadecimal(){
    window.location.href="converter.html?type=dec-hex";
}

function BinaryToHexadecimal(){
    window.location.href="converter.html?type=bin-hex";
}

function OctalToHexadecimal(){
    window.location.href="converter.html?type=oct-hex";
}

//To check if the Number is valid.

function isDec(num){
    return /^[0-9]+$/.test(num);
}

function isBin(num){
    return /^[0-1]+$/.test(num);
}

function isOctal(num){
    return /^[0-7]+$/.test(num);
}

function isHex(num){
    return /^[0-9A-Fa-f]+$/.test(num);
}

//Hex number conversion.

function change(digit) {
    digit = digit.toUpperCase();

    if (digit === "A") return 10;
    if (digit === "B") return 11;
    if (digit === "C") return 12;
    if (digit === "D") return 13;
    if (digit === "E") return 14;
    if (digit === "F") return 15;
}

function changes(rem){
    
    if (rem === 10) return "A";
    if (rem === 11) return "B";
    if (rem === 12) return "C";
    if (rem === 13) return "D";
    if (rem === 14) return "E";
    if (rem === 15) return "F";

}

//Intermediate Logics.
function changeBD(num){
        let len=num.length;
        let sum=0;

        for(let digit of num){
            let n=Number(digit);
            sum=sum+n*Math.pow(2,len-1);
            len--;
        }
        return sum;
}

function changeOD(num){
        let len=num.length;
        let sum=0;

        for(let digit of num){
            let n=Number(digit);
            sum=sum+n*Math.pow(8,len-1);
            len--;
        }

        return sum;
}

function changeHD(num){
    let len=num.length;
        let sum=0;

        for(let digit of num){

            if (digit >= "0" && digit <= "9"){
            let n=Number(digit);
            sum=sum+n*Math.pow(16,len-1);
            len--;
            }
            else{
                let n=change(digit);
                sum=sum+n*Math.pow(16,len-1);
                len--;
            }
        }
        
        return sum;
}

function changeDB(num){
    if(num === 0) {
        return 0;}

    let bin=""

    while(num>0){
        let rem=num%2;
        bin=rem+bin;
        num=Math.floor(num/2);
    }

    return bin;
}

function changeDO(num){
    if(num === 0) {
        return 0;}

    let oct=""

    while(num>0){
        let rem=num%8;
        oct=rem+oct;
        num=Math.floor(num/8);
    }

    return oct;
}

function changeDH(num){
    if(num === 0) {
        return 0;}

    let hex=""

    while(num>0){
        let rem=num%16;
        if(rem<10){
            hex=rem+hex;
        }
        else{
            let r=changes(rem);
            hex=r+hex;
        }
        num=Math.floor(num/16);
    }

    return hex;
}

//Conversion.

function ResBinDec(){
    let num = document.getElementById("input").value;

    if(isBin(num)){
        let sum=changeBD(num);
        document.getElementById("result-box").innerHTML = sum;  
    }
    else{
        document.getElementById("result-box").innerHTML = "Enter a valid number";
    }
}

function ResOctDec(){
    let num=document.getElementById("input").value;

    if(isOctal(num)){
        let sum=changeOD(num);
        document.getElementById("result-box").innerHTML = sum;
    }
    else{
        document.getElementById("result-box").innerHTML = "Enter a valid number";
    }
}

function ResHexDec(){
    let num=document.getElementById("input").value;

    if(isHex(num)){
        let sum=changeHD(num);
        document.getElementById("result-box").innerHTML = sum;
    }
    else{
        document.getElementById("result-box").innerHTML = "Enter a valid number";
    }
}

function ResDecBin(){
    let num = Number(document.getElementById("input").value); 
    if(isDec(num)){
        let bin=changeDB(num);
        document.getElementById("result-box").innerHTML = bin;
    }
    else{
        document.getElementById("result-box").innerHTML = "Enter a Valid number";
    }
}

function ResOctBin(){
    let num=document.getElementById("input").value;

    if(isOctal(num)){
        let sum=changeOD(num);
        let bin=changeDB(sum);
        document.getElementById("result-box").innerHTML=bin;
    }

    else{
        document.getElementById("result-box").innerHTML="Enter a valid number";
    }

}

function ResHexBin(){
let num=document.getElementById("input").value;

    if(isHex(num)){
        let sum = changeHD(num);
        let bin = changeDB(sum);
        document.getElementById("result-box").innerHTML=bin;
    }

    else{
        document.getElementById("result-box").innerHTML="Enter a valid number";
    }

}

function ResDecOct(){
    let num=document.getElementById("input").value;
    if(isDec(num)){
        let oct=changeDO(num);
        document.getElementById("result-box").innerHTML=oct;
    }
    else{
        document.getElementById("result-box").innerHTML="Enter a Valid number.";
    }
}

function ResBinOct(){
    let num=document.getElementById("input").value;
    if(isBin(num)){
        let sum=changeBD(num);
        let oct=changeDO(sum);
        document.getElementById("result-box").innerHTML=oct;
    }
    else{
        document.getElementById("result-box").innerHTML="Enter a Valid number.";
    }
}

function ResHexOct(){
    let num=document.getElementById("input").value;
    if(isHex(num)){
        let sum=changeHD(num);
        let oct=changeDO(sum);
        document.getElementById("result-box").innerHTML=oct;
    }
    else{
        document.getElementById("result-box").innerHTML="Enter a Valid number.";
    }
}

function ResDecHex(){
    let num=document.getElementById("input").value;
    if(isDec(num)){
        let sum=changeDH(num);
        document.getElementById("result-box").innerHTML=sum;
    }
    else{
        document.getElementById("result-box").innerHTML="Enter a Valid number.";
    }
}

function ResBinHex(){
    let num=document.getElementById("input").value;
    if(isHex(num)){
        let sum=changeBD(num);
        let hex=changeDH(sum);
        document.getElementById("result-box").innerHTML=hex;
    }
    else{
        document.getElementById("result-box").innerHTML="Enter a Valid number.";
    }
}

function ResOctHex(){
    let num=document.getElementById("input").value;
    if(isHex(num)){
        let sum=changeOD(num);
        let hex=changeDH(sum);
        document.getElementById("result-box").innerHTML=hex;
    }
    else{
        document.getElementById("result-box").innerHTML="Enter a Valid number.";
    }
}

//Choice of functions.

function convert() {

    switch(type) {
        case "bin-dec":
            ResBinDec();
            break;
        
        case "oct-dec":
            ResOctDec();
            break;

        case "hex-dec":
            ResHexDec();
            break;

        case "dec-bin":
            ResDecBin();
            break;

        case "hex-bin":
            ResHexBin();
            break;

        case "oct-bin":
            ResOctBin();
            break;
        
        case "bin-oct":
            ResBinOct();
            break;

        case "dec-oct":
            ResDecOct();
            break;

        case "hex-oct":
            ResHexOct();
            break;

        case "bin-hex":
            ResBinHex();
            break;

        case "oct-hex":
            ResOctHex();
            break;

        case "dec-hex":
            ResDecHex();
            break;

      
            ResHexOct();
            break;
    }
}