// https://programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
  const numOfOne = n.toString(2).replace(/0/g, '').length;
  
  while (true) {
    if ((++n).toString(2).replace(/0/g, '').length === numOfOne) return n;
  }
}