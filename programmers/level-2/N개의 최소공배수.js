// https://programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr) {
  let i = Math.max(...arr);
  
  while (arr.some(num => i % num !== 0)) i++;
  
  return i;
}

// 수학 공부를 하면 성능을 향상할 수 있지 않을까?