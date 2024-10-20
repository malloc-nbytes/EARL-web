export const foreverLoopsExample1Src =`loop {
    println("foo");
} # will never end

let i = 0;
loop {
    if i == 5 { break; }
}

loop {
    if i == 10 { return; }
}`;
