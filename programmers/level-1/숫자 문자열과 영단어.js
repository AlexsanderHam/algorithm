// https://programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let answer = s;

  numbers.forEach((number, index) => {
    answer = answer.replace(new RegExp(number, 'g'), index);
  });

  return Number(answer);
}