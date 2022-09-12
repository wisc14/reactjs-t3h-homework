// 4. Viết chương trình in ra các số là nguyên tố trong khoảng 1 đến n?
// VD: n = 10, output: 2 3 5 7
let n = 10;

for (let i = 0; i <= n; i++) {
    let flag = true;
    if (i < 2) {
        flag = false;
    }
    for (let index = 2; index <= Math.sqrt(i); index++) {
        if (i % index === 0) {
            flag = false;
            break;
        }
        else flag = true;
    }
    if (flag == false) {
        console.log(`${i}khong phai snt`);
    } else console.log(i);
}
