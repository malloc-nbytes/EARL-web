export const tryCatchExample1Src = `let x = 1;
try {
    x = 1;
}
println(x); # x is 1
`;

export const tryCatchExample2Src = `let x = 1;
try {
    x = 1;
} catch {
    x = 2;
}

println(x); # x is 1`;

export const tryCatchExample3Src = `let x = 1;
try {
    "foo" + 1; # error here
    x = 1;
} catch {
    x = 2;
}

println(x); # x is 2`;

export const tryCatchExample4Src = `let x = 1;
try {
    "foo" + 1; # error here
    x = 1;
} catch e {
    println(e); # prints the error message
    x = 2;
}

println(x); # x is 2`;

export const tryCatchExample5Src = `let x = 1;
try {
    "foo" + 1; # error here
    x = 1;
} catch _ { # you can also do this to discard the error message
    x = 2;
}

println(x); # x is 2`;



