// https://programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  return s.split(' ').map(word => (
      word.split('').map((char, index) => (
          index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
      )).join('')
  )).join(' ');
}