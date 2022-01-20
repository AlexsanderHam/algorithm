// https://programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
  let before = 0;
  let current = 1;
  
  for (let i = 2; i <= n; i++) {
    const temp = ((current % 1234567) + (before % 1234567)) % 1234567;
    
    before = current;
    current = temp;
  }
  
  return current;
}