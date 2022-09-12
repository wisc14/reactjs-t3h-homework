// 8. Kiểm tra số n có toàn số lẻ tạo thành hay không?
// VD1: n=1234, output: ‘NO’
// VD2: n=135, output: ‘YES’
let n = 135
while (n !==0) {
    let i = n % 10;
    n = Math.floor(n/10);
    if (i % 2 !== 1){
        console.log("NO");
        break
    }
}
if (n == 0){
console.log("Yes");
}
