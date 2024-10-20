export const dictionaryExample1Src = `let empty_set = Dict(int);

# Notice how all keys are strings
let s = {"foo": 1, "bar", 1..=10, "baz": some('a')};

println(s["foo"]);         # some(1)
println(s["bar"].unwrap()) # [1,2,3,4,5,6,7,8,9,10]
println(s["baz"].unwrap().unwrap()); # 'a'
println(s["invalid"]);     # none

s.insert("hello", 9);
println(s.has_key("hello") && s.has_key("bar")); # true
println(s.has_value(1));        # true

println(empty_set.has_key(3)); # false
empty_set.insert(3, [1,2,3]);
println(empty_set.has_key(3)); # true
println(empty_set[3]); # some([1,2,3])`;
