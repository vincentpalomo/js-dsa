// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

// Example 1:

// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".

// Example 2:

// Input: command = "G()()()()(al)"
// Output: "Gooooal"

// Example 3:

// Input: command = "(al)G(al)()()G"
// Output: "alGalooG"

// Constraints:

//     1 <= command.length <= 100
//     command consists of "G", "()", and/or "(al)" in some order.

const interpret = function (command) {
  // command = command.replaceAll('()', 'o');
  // command = command.replaceAll('(al)', 'al');

  // return command;

  let result = '';

  for (let i = 0; i < command.length; i++) {
    if (command.slice(i, i + 2) === '()') {
      result += 'o';
      i++;
    } else if (command.slice(i, i + 4) === '(al)') {
      result += 'al';
      i += 3;
    } else {
      result += command[i];
    }
  }

  return result;
};

const result = interpret('G()()()()(al)'); // Output: "Gooooal"
console.log(result);

const result2 = interpret('(al)G(al)()()G');
console.log(result2);
