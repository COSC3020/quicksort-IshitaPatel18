[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ZLHpg3lN)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make qicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

My answer:

For the worst case scenario to occur, for this specific implementation, it would be 
an input in reversed order because the pivot point is lo/the first element, so
each element in the array would need to be moved. The for loop and the while loop 
have an iteration that goes for the length of the input and because it is nested
it will become $n^2$ as n number of elements have to move n amount of times. So the 
$\Theta$ bound for worst case runtime is $\Theta(n^2)$.
