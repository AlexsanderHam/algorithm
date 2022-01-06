// https://programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];
    const matchCount = lottos.filter(num => win_nums.includes(num)).length;
    const zeroCount = lottos.filter(num => num === 0).length;
    
    return [rank[matchCount + zeroCount], rank[matchCount]];
}