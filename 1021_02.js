//animals라는 변수에 동물이름을 5가지 입력하여 배열변수를 만들고, 3번째 동물 이름을 출력하시오

const animals = ['rabbit', 'tiger', 'puppy', 'cow', 'lion'];
    console.log(animals[2]);

for (const animal of animals) {
    console.log(animal);
} 

/*
for(초기화 ; 조건식 ; 증감식 ) {
    실행문
}
*/



//0부터 5까지를 출력하겠다.
/*
for(let i=0; i < 5; i++) {
    console.log(i)
}
    */

//넘버링 붙여서
for(let i=0; i < 5; i++) {
    let print = `${i + 1}. ${animals[i]}`;
    console.log(print);
}


/*
let a = 1;
a = a + 1; //2
a = a +1; //3
a += 1 //4
a += 3 // a = a+3 축약식
a ++ // -> a = a + 1;
*/