export const modulesExample1Src = `module MyMath

# Function is marked as @pub to make it
# accessible to other modules.
@pub
fn sum(a, b) {
    return a+b;
}`;

export const modulesExample2Src = `module Main

import "my-math.rl";

let s = MyMath::sum(1, 2);`;
