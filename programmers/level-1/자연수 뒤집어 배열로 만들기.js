// https://programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
  return Array.from(String(n), Number).reverse();
}

// [...String(n)].map(Number).reverse() 이런 식으로도 풀 수 있다.