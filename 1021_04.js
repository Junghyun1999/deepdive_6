//for 반복문을 활용한 예제 5
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log('합:', sum); 

for (let i = 1; i <= 9; i++) {
  console.log(`3 x ${i} = ${3 * i}`);
}

const numbers = [1,2,3,4,5,6];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) console.log(numbers[i]); 
}

for (let i = 5; i >= 1; i--) {
  console.log(i);
}

const numbers2 = [3, 17, 21, 30, 9];
let total = 0;
for (let i = 0; i < numbers2.length; i++) {
  total += numbers2[i];
}
console.log(`총합: ${total}`);

//for..of 구문을 활용한 예제 5
const fruits = ['사과', '바나나', '포도'];
for (const f of fruits) {
  console.log(f);
}

const text = 'KDT';
for (const ch of text) {
  console.log(ch);
}

const nums = [1, 2, 3, 4, 5];
let sum2 = 0;
for (const n of nums) {
  sum2 += n;
}
console.log(sum2); 

const names = ['지현', '민수', '하늘'];
for (const name of names) {
  console.log(`안녕하세요, ${name}님!`);
}

const scores = [45, 60, 85, 90];
for (const score of scores) {
  if (score >= 60) {
    console.log(`${score}점 → 합격`);
  } else {
    console.log(`${score}점 → 불합격`);
  }
}

 

