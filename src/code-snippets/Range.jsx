export const rangeExample1Src = `1..5; # expands to [1, 2, 3, 4]
1..=5; # expands to [1, 2, 3, 4, 5]
'a'..'d'; # expands to ['a', 'b', 'c'];
'a'..='d'; # expands to ['a', 'b', 'c', 'd'];
(1..=10).rev().filter(|x| { return x%2 == 0; }); # expands to [10, 8, 6, 4, 2]`;
