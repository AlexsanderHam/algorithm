// https://programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  return phone_number.substring(phone_number.length - 4).padStart(phone_number.length, '*');
}

// return phone_number.replace(/\d(?=\d{4})/g, '*');