//입력한 나이에 따라 성인/미성년자 출력하기
/*01
const age = 25;
if (age >= 19) {
  console.log(`${age}세는 성인입니다.`);
} else {
  console.log(`${age}세는 미성년자입니다.`);
}
*/

/*02
const age = 15;
const message = age >= 19 ? `${age}세는 성인입니다.` : `${age}세는 미성년자입니다.`;
console.log(message);
*/

/*03
const ages = [14, 32];
for (let i = 0; i < ages.length; i++) {
  const age = ages[i];
  if (age >= 19) {
    console.log(`${age}세는 성인입니다.`);
  } else {
    console.log(`${age}세는 미성년자입니다.`);
  }
}
*/

//04
const ages = [14, 32];

for (const age of ages) {
  const message = age >= 19 ? `${age}세는 성인입니다.` : `${age}세는 미성년자입니다.`;
  console.log(message);
}