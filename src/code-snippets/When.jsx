export const whenExampleSrc1 = `when x = 1 in
let my_var = x + 3;`;

export const whenExampleSrc2 = `when b = true, s = none, c = 'a' in
let x, y, z = (b, s, c);`;

export const whenExampleSrc3 = `when a = 1 in
when b = 2 in
let x = a+b;`;

export const whenExampleSrc4 = `when dx = 10 in
for i in 0 to dx {
    println(i);
}`;
