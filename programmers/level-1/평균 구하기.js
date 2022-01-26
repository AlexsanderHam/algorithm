// https://programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
  return arr.reduce((acc, curr) => acc + (curr / arr.length), 0);
}