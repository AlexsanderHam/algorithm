// https://programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  const SUM_FROM_ZERO_TO_NINE = 45;
  const sumOfArrayItems = numbers.reduce((acc, curr) => acc + curr);
  
  return SUM_FROM_ZERO_TO_NINE - sumOfArrayItems;
}