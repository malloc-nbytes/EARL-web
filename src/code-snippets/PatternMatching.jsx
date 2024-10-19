export const patternMatchingExample1Src = `let x = 4;
let msg = "foo";

match x {
    1 -> { println("x is 1"); }
    2 | 3 -> { println("x is two or three"); }
    [1,2,3] when type(x) == "list" -> { println(x is a list and is [1,2,3]"); }
    4 when msg = "bar" -> { println("x is 4 with msg = bar"); }
    4 when msg = "foo" -> { println("x is 4 with msg = foo"); }
    _ when msg = "hello" -> { println("base case, 4 is something else and msg = hello"); }
    _ -> { println("base case, 4 is something else"); }
}`;

export const patternMatchingExample1Output = "x is 4 with msg = foo";

export const patternMatchingExample2Src = `let x = some(4);

match x {
    none -> {
        print("x is none");
    }
    some(3) -> {
        print("x is some 3");
    }
    some(k) when k % 2 == 1 -> {
        print("x is something and is odd");
    }
    some(k) -> {
        # This branch will execute.
        # \`k\` is the unwrapped value of \`x\`.
        print("x is: ", k);
        print(x.unwrap() == k);
    }
    some(_) -> {
        print("x is something");
    }
    _ -> {
        print("x is something else");
    }
}`;

export const patternMatchingExample2Output = `x is: 4
true`;
