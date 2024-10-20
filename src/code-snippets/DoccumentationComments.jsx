export const doccumentationCommentsExample1Src = `#-- This is my enum.
enum MyEnum {
    Item1,
    Item2,
    Item3,
}

#-- A point class, takes integers
#-- \`x\` and \`y\`.
class Point [x, y] {}

#-- Name: sum
#-- Param: x: int
#-- Param: y: int
#-- Returns: int
#-- Description: Takes integers \`a\` and \`b\` and sums them.
fn sum(a, b) {
    return a+b;
}

#-- This is my var
let my_var = 3;

#-- This is the current user
#-- of this machine.
$"whoami" |> let me;

println(help(MyEnum));
println(help(Point));
println(help(sum));
println(help(my_var));
println(help(me));`;
