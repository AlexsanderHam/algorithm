// https://programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}

// pow 함수 대신 ** 연산자를 사용해서 풀 수도 있다.