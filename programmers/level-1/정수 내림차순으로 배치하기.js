// https://programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
  return Number([...String(n)].sort().reverse().join(''));
}

// 여기에서 성능까지 고려하면 문자보단 숫자로 해결하는게 더 낫다.