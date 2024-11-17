export const withExampleSrc1 = `with x = 1 in
let my_var = x + 3;`;

export const withExampleSrc2 = `with b = true, s = none, c = 'a' in
let x, y, z = (b, s, c);`;

export const withExampleSrc3 = `with a = 1 in
with b = 2 in
let x = a+b;`;

export const withExampleSrc4 = `with dx = 10 in
for i in 0 to dx {
    println(i);
}`;
