// if .. if..else.. for.. for..of
// datatype = string, number, boolean, array, underfind, null
// function, length

//for문을 이용해서 numbers의 모든 숫자를 console에 찍기
/* const numbers = [32, 20, 5, 12, 0, 45]
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
} */

// 기본 변수
const numbers = [32, 20, 5, 12, 0, 45];
const str = 'Hello, World'; 

// 문제 1) 홀수만 출력하기
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
  }
}

// 문제 2) 길이 출력하기
console.log(`문자열의 길이는 ${str.length} 입니다.`);

// 문제 3) 총합 구하기
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(`총합은 ${total} 입니다.`);

// 문제41) 20 이상의 수의 개수 출력하기
let count = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 20) {
    count++;
  }
}
console.log(`20 이상의 숫자는 총 ${count}개 입니다.`);
