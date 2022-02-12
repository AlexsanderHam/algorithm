// https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  return x % Array.from(String(x), Number).reduce((prev, curr) => prev + curr) === 0;
}