// https://programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  let answer = new_id
      .toLowerCase()
      .replace(/[^a-z0-9\-_\.]/g, '')
      .replace(/\.+/g, '.')
      .replace(/(^\.*|\.*$)/, '')
      .replace(/^$/, 'a')
      .substr(0, 15)
      .replace(/\.*$/, '')
  while (answer.length <= 2) {
      answer += answer[answer.length - 1];
  }
      
  return answer;
}

/* 
 * 
 * 정규식에서 2개 이상은 {2,} 이런식으로 표현 가능
 * substr도 있지만 slice로도 활용 가능
 * 문자열을 채울 때 padEnd 함수 활용 가능
 * 문자열 채울 때 charAt, repeat 활용 가능
 * 
 */