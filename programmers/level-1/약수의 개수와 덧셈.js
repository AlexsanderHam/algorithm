// https://programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  let answer = 0;
  
  for (let i = left; i <= right; i++) {
      let divisorCount = 0;
      
      for (let j = 1; j <= i; j++) {
          if (i % j === 0) divisorCount++;
      }
      
      if (divisorCount % 2 === 0) {
          answer += i;
      } else {
          answer -= i;
      }
  }
  
  return answer;
}

/*
 *
 * 제곱근이 정수면 약수의 개수가 홀수인 것을 활용해서 풀 수도 있다.
 * Number.isInteger(Math.sqrt(i))
 * 
 */