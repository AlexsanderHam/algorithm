// https://programmers.co.kr/learn/courses/30/lessons/12916

function solution(s){
  let answer = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() === 'p') answer--;
    if (s[i].toLowerCase() === 'y') answer++;
  }

  return answer === 0;
}

/*
 *
 * 정규표현식으로 개수를 구해서 풀 수도 있다.
 * 
 */