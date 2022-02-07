// https://programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
  let totalPrice = 0;
  
  for (let i = 1; i <= count; i++) totalPrice += price * i;

  return Math.max(totalPrice - money, 0);
}

// return Math.max(price * count * (count + 1) / 2 - money, 0) 등차수열의 합을 활용하여 풀 수도 있다.