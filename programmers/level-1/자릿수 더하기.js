// https://programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
    return String(n).split('').reduce((acc, curr) => acc + Number(curr), 0);
}

/*
 *
 * String(n).split('') 대신 [...String(n)] 이렇게 쓸 수도 있다.
 * 
 */