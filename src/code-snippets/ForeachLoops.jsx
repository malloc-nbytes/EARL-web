export const foreachLoopsExample1Src = `foreach i in 0..5 {
    print(i);
} # prints 12345

let iterable = [9,4,2];
foreach i in iterable {
    print(i);
} # prints 942

foreach i in (0..5).rev() {
    print(i);
} # prints 43210

foreach i in 0..len(iterable) {
    print(i);
} # prints 012

foreach i, j in [(1,2), (3,4), (5,6)] {
    print(i, ' ', j);
}

# DICTIONARY EXAMPLE
let dict = {"foo": 1, "bar": true, "baz": 3.2};
foreach key, value in dict {
    print(f"key: {key}, value: {value}");
}

foreach @ref i in iterable { # REF EXAMPLE
    i = 9;
}
println(iterable); # prints [9, 9, 9]

foreach @const @ref i in "foo" {
    print(i);
} # prints foo

foreach i in 'a'..'d' {
    print(i);
} # prints abc

let s = "bar";
foreach i in s {
    print(i);
} # prints bar`;
