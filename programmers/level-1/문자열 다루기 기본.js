// https://programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
  return (s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s);
}

/*
 *
 * /^\d{6}$|^\d{4}$/.test(s) 이렇게 풀 수도 있다.
 * 
 */