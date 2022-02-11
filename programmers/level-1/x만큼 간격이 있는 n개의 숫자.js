// https://programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
  return Array.from(new Array(n), (_, i) => (i + 1) * x);
}