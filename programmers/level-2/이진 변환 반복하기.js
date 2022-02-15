// https://programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  let transformCount = 0;
  let removedZeroCount = 0;
  
  while (s !== '1') {
    s = s.replace(/0/g, () => {
      removedZeroCount++;
      
      return '';
    });
    
    s = s.length.toString(2);
    transformCount++;
  }
  
  return [transformCount, removedZeroCount];
}