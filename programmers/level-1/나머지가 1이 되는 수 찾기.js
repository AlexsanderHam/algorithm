// https://programmers.co.kr/learn/courses/30/lessons/87389

function solution(n) {
  let x = 1;
  
  while (n % ++x !== 1) {}
  
  return x;
}