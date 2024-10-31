export const caseExample1Src = `let y = 1;

let case_example = case y of {
    8 = "hello";
    2 = none;
    1 = 43;
    _ = 1;
};

println(case_example); # prints 43`;

export const caseExample2Src = `let y = 5;

let base_case_example = case y of {
    1..=10 = 3;
    "foo" = 'a';
    _ = 99;
};

# prints 99 because none of the previous
# cases match what \`y\` is.
println(base_case_example);`;

