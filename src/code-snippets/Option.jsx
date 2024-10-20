export const optionExample1Src = `let x = none;
x = some(9);`;

export const optionExample2Src = `let x = some(8);
println(x.unwrap()); # prints 8
x = some('a');
println(x.unwrap()); # prints 'a'`;
