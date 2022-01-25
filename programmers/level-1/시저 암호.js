// https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  const UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz';
  
  return s
      .replace(/[a-z]/g, (s) => LOWER_CASE[(LOWER_CASE.indexOf(s) + n) % LOWER_CASE.length])
      .replace(/[A-Z]/g, (s) => UPPER_CASE[(UPPER_CASE.indexOf(s) + n) % UPPER_CASE.length])
}