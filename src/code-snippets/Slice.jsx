export const sliceExample1Src = `let lst = [1, 2, 3, 4, 5];
println(lst[0:3]); # prints [1, 2, 3]
println(lst[:4]);  # prints [1, 2, 3, 4]
println(lst[_:4]); # prints [1, 2, 3, 4]
println(lst[0:0]); # prints []
println(lst[3:]);  # prints [4, 5]
println(lst[3:_]); # prints [4, 5]
println(lst[:]);   # prints [1, 2, 3, 4, 5]
println(lst[_:_]); # prints [1, 2, 3, 4, 5]

let sl = 1:3;
println(lst[sl]);  # prints [2,3]`;
