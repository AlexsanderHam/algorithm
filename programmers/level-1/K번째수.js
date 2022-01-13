// https://programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  return commands.map(([startIndex, endIndex, index]) => {
    return array.slice(startIndex - 1, endIndex).sort((a, b) => a - b)[index - 1];
  });
}