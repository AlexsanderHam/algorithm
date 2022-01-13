// https://programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  return a.reduce((acc, curr, index) => acc + curr * b[index], 0);
}