// https://programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  let width = 0;
  let height = 0;
  
  sizes.forEach(size => {
      width = Math.max(width, Math.max(...size));
      height = Math.max(height, Math.min(...size));
  });
  
  return width * height;
}