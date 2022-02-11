// https://programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
  const DAY_OF_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  
  return DAY_OF_WEEK[new Date(2016, a - 1, b).getDay()];
}