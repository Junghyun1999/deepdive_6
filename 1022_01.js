//모닝미션 아래 문제를 풀고, 결과 캡쳐 후 good-morning 인사하기

//for문을 이용해서, number의 원소 합을 구하시오
const numbers = [3, 17, 21, 30, 9]
let result = 0;

for (let i = 0; i < 5; i++) {
  result = result + numbers[i]; //재할당
}

console.log(`${numbers}의 총 합은 ${result} 입니다.`)
