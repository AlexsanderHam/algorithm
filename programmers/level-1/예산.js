// https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  return d.sort((a, b) => a - b).reduce((count, price) => count + ((budget -= price) >= 0), 0);
}