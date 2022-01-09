// https://programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  return absolutes.reduce((acc, curr, index) => {
    return acc + (signs[index] ? curr : -curr);
  }, 0);
}