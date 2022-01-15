// https://programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  let answer = [];
  
  arr.reduce((before, num) => {
      if (before !== num) answer.push(num);
      
      return num;
  }, -1)
  
  return answer;
}

/*
 *
 * filter 함수로 index + 1 값과 다른 것만 반환할 수도 있다.
 * 
 */