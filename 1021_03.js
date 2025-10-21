//예제 1
const id = "hello";
const pw = "1234";

const canLogin = id && pw ? "로그인 가능" : "로그인 불가";
console.log(canLogin);

//예제 2
let nickname = "";
const displayName = nickname || "게스트 닉네임";
console.log(displayName); 

//예제 3
const age = 17;
const msg = (age >= 18) && "입장" || "불가";
console.log(msg);

//예제 4
const name = "Kim";
const email = "";
const submitted = (name && email) ? "제출 완료" : "필수값 누락";
console.log(submitted); 

//예제 5
const age2 = 19;
const refCode = "ABCD";
const canJoin = (age2 >= 20) || refCode ? "참여 가능" : "참여 불가";
console.log(canJoin);

//예제 6
const loggedIn = false;

const button = loggedIn && "로그아웃 버튼" || "로그인 버튼";
console.log(button); 

//예제 7
const total = 52000;
const vip = true;
const shipping = (total >= 50000 && vip) ? 0 : 3000;
console.log(shipping);

//예제 8
const notificationOn = true;
const muted = false;

const message = (!notificationOn || muted)
  ? "알림이 비활성화됨"
  : "알림이 활성화됨";

console.log(message); // 

//예제 9
const checked = false;
const proceed = checked && "진행" || "체크 필요";
console.log(proceed);

//예제 10
const isEnabled = true;
const onClick = () => console.log("실행!");

isEnabled && onClick();