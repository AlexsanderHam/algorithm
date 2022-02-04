// https://programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
  return arr1.map((arr, i) => arr.map((value, j) => value + arr2[i][j]));
}