// 9. Kiểm tra n có phải là số đối xứng?
// VD1: n=1242343, output: ‘NO’
// VD2: n = 123676321, output: ‘YES’
let n = 123454321;
n = n.toString();
let reverseNum = n.split("").reverse().join("");

let flag = false;
if (reverseNum === n){
    flag = true;
}

if (flag == true){
    console.log("YES");
}else{
    console.log("No");
}