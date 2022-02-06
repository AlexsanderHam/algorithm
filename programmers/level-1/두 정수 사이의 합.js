// https://programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
  let answer = 0;
  
  for (let i = Math.min(a, b), j = Math.max(a, b); i <= j; i++) {
      answer += i;
  }
  
  return answer;
}

// (a + b) * (Math.abs(b - a) + 1) / 2; 이런식으로 가우스의 덧셈을 활용해서 구할 수도 있다.