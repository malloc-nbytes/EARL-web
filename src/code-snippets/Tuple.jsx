export const tupleExample1Src = `let tuple = (1, 'a', [1,2,3]);
tuple.foreach(|x| { println(x); });

let single_elem_tuple = (1,); # note the comma here
println(single_elem_tuple[0]);`;
