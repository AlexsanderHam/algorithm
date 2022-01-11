// https://programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  const isEven = s.length % 2 === 0;
  const startIndex = Math.ceil(s.length / 2) - 1;
  const endIndex = startIndex + (isEven ? 2 : 1);
  
  return s.substring(startIndex, endIndex);
}