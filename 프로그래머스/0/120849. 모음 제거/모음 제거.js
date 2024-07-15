      function solution(my_string) {
        var answer = "";
        answer = my_string.replaceAll("a", "");
        answer = answer.replaceAll("e", "");
        answer = answer.replaceAll("i", "");
        answer = answer.replaceAll("o", "");
        answer = answer.replaceAll("u", "");
        return answer;
      }