export const functionDefinitionsExample1Src = `@world @pub
fn func1(@ref x, y: int, @ref @const z: real): real {
    x += 9; # x will be modified also outside of this function because of @ref
    return x + y + z;
}

fn func2() {
    return 1;
}

fn rev(@ref lst: list): unit {
    for i in 0 to len(lst)/2 {
        let t = lst[i];
        lst[len(lst)-i-1] = lst[i];
        lst[len(lst)-i-1] = t;
    }
}`;
