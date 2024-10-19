export const forLoopsExample1Src = `for i in 0 to 5 {
    print(i);
} # prints 01234

for i in 5 to 0 {
    print(i);
} # prints 543210

let lst = [1,2,3];
for i in 0 to len(lst) {
    print(lst[i]);
} # prints 123

for i in len(lst)-1 to 0 {
    print(lst[i]);
} # prints 321`;
