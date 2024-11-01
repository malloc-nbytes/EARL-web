export const enumerationsExample1Src = `import "external-enum.rl" almost

@pub
enum MyPubEnum {
    El1,     # contains 0
    El2 = 2, # contains 2
    El3,     # contains 3
    El4 = 9, # contains 9
    El5,     # contains 10
    El6,     # contains 11
}

let my_enum_el = MyPubEnum.El2;
println(my_enum_el, ' ', MyPubEnum.El5); # prints \`2 10\`
println(ExternalEnum::MyEnum.Item3); # prints the enum element from "external-enum.rl"`;

export const enumerationsExample2Src = `let x = [1,2,3];

# All values are must be explicit if datatypes other
# than integers are used.
enum MixedEnum {
    El1 = 0,
    El2 = "hello",
    El3 = some(some('a')),
    El4 = x
}`;
