export const attributesExample1Src = `@world @pub
fn test_world() {
    # \`i\` will print since it is in the world scope.
    # The function is also marked as public so other
    # modules can have access to this function.
    println(i)
}

@pub
fn take_ref(@ref ptr) {
    ptr = ptr + 1;
}

let i = 1;
test_world();

@ref
let ptr = i;

ptr = ptr + 1;

assert(ptr == 2 && i == 2);

take_ref(i);

assert(i == 3);`;
