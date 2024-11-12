export const returnsExample1Src = `# using the \`return\` statement
fn f() {
    for i in 0 to 5 {
        if i == 5 {
            return i;
        }
    }
    return 0;
}

println(f()); # prints \`5\``;

export const returnsExample2Src = `# not using the \`return\` statement
fn f() {
    for i in 0 to 5 {
        if i == 5 {
            i;
        }
    }
    0;
}
println(f()); # prints \`5\``;

export const returnsExample3Src = `fn f() {
    for i in 0 to 5 {
        if i == 5 {
            # does not work
            _;

            # this also does not work
            unit();
        }
    }
    0;
}
println(f()); # prints \`0\``;

export const returnsExample4Src = `let lst = (1..=10).map(|k| { k * 2; });`

export const returnsExample5Src = `fn value() {
    return "hello";
}

fn does_nothing1() {
}

fn does_nothing2() {
    return _;
}

fn does_nothing3() {
    unit();
}

fn f() {
    for i in 0 to 5 {
        if i == 5 {
            # value();       # This WOULD return from the function because it returns \`str\` (non-unit type)
            let _ = value(); # This WILL NOT return from the function

            does_nothing1(); # Will not return because the function returns \`unit\`
            does_nothing2(); # Will not return because the function returns \`unit\`
            does_nothing3(); # Will not return because the function returns \`unit\`

            9;               # This WILL return
        }
    }
    let _ = 0;    # Will not return
    0;            # This WILL return
}
println(f()); # prints \`9\``;

