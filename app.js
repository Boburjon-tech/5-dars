// // for-1: k va n butun sonlari berilgan (n > 0). k sonini n marta chiqaruvchi programma tuzilsin.

let k = +prompt("k soniga qiymat kiriting:");
let n = +prompt("n soniga qiymat kiriting:");

for (let i = 0; i < n; i++) {
    console.log(k);
}

// // for-2 : Bir kg konfetning narxi berilgan (haqiqiy son). 0.1, 0.2, …, 0.9, 1 kg konfetni narxini chiqaruvchi programma tuzilsin.

let price_candy = +prompt("1 kg konfet narxini kiriting:");

for (let i = 0.1; i <= 1; i+=0.1) {

    console.log(`${i}kg konfet narxi:`, (price_candy*i).toFixed(2));
}

// // for-3:  n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin. 
// // S = n^2 +(n+1)^2+(n+2)^2 + ... +(2*n)^2


let n_ = +prompt("n soniga qiymat bering:");
let S = 0;
for (let i = n_; i<=n_; i++) {
    S+=(n_+i)**2;
}
console.log(`Natija: ${S};`);

// // for-4:  N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin. 
// // 1^N+2^(N-1) + ...+ N^1
// // Input: N = 5;
// // 1 ^ 5 + 2 ^ 4 + 3 ^ 3 + 4 ^ 2 + 5 ^ 1
// // Output: 65

let N = +prompt("n soniga qiymat bering:");
let S_ = 0;
for (i=1; i <= 5; i++) {
    S_+= N ** i;
    N--;
}
console.log(`Natija: ${S_};`);

// // for-5: A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin. Bunda har bir son o'zining qiymaticha chiqarilsin. Ya'ni 3 soni 3 marta chiqariladi.

let A = +prompt("a soniga qiymat bering:");
let B = +prompt("b soniga qiymat bering,(a sonidan katta qiymat kiriting):");

for (i = A; i <= B; i++) {
    for (j=0; j<i; j++) {
        console.log(i);
    }
}

// // for-6: Sonning bo’luvchilarini topish;

let son = +prompt("son kiriting:");

for (i=1; i<=son; i++) {

    if (son%i==0) {
        console.log(i);
    }
}

// // while-1:  N va K butun musbat sonlari berilgan. Faqat ayirish va qo'shish amallarini ishlatib N sonini K soniga bo'lgandagi qoldiq va butun qismini aniqlovchi programma tuzilsin.

let D = +prompt("N soniga qiymat bering:");
let H = +prompt("K soniga qiymat bering:");
let kop_d=0;
let qol_h=0;
for (let i = D; i>0; i+=0) {
    
    if (i>=H) {
        kop_d+=1;
        
    } else if (i<H){
        qol_h+=i;
    
    }
    i-=H;
}
// console.log(`butun:${kop_d}; qoldiq: ${qol_h};`);

// // while-2: 2 sonining qandaydir darajasini bildiruvchi n butun soni berilgan (n > 0). n = 2^k ni aniqlovchi programma tuzilsin.
// // Input: 128
// // Output: 7

let two_del = +prompt("2ning darajasi bolgan son kiriting:");
let sum_two_del = 0;
for (let i = two_del; i!=1; i/=2) {
    if (i%2==0) {
        sum_two_del++;
    }else {
        console.log("bu son ikkining darajasi bo'la o'lmaydi");
        break;
    }
}
console.log(sum_two_del);

// // for-7:  a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma tuzilsin. (a va b xam chiqarilsin);

let e = +prompt("a soniga qiymat bering:");
let y = +prompt("b soniga qiymat kiriting:");
let sum_a_b = 0;

for (let i=e; i<=y; i++) {
    console.log(i);
    sum_a_b++;
}
console.log(sum_a_b,"ta son mavjud");


// // for-8 :  a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b dan tashqari) kamayish tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi progma tuzilsin;

let e_ = +prompt("a soniga qiymat bering:");
let y_ = +prompt("b soniga qiymat kiriting:");
let sum_a_b_ = 0;

for (let i=y_-1; i>e_; i--) {
    console.log(i);
    sum_a_b_++;
}
console.log(sum_a_b_,"ta son mavjud");

