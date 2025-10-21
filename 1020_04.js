function isWeekend(x) {
  const z = (x === "토" || x === "일") ? "주말" : "평일";
  console.log(`입력하신 ${x}요일은 ${z}입니다.`);
}

isWeekend("토"); 
isWeekend("수"); 
