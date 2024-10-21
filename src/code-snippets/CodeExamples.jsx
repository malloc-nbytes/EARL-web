export var helloWorldExample = {}

helloWorldExample.EARLSrc = `module Main

println("Hello World!");`;

export var twosumExample = {}

twosumExample.EARLSrcBruteForce = `fn twosum_brute_force(lst, t) {
    for i in 0 to len(lst)-1 {
        for j in i to len(lst) {
            if lst[i] + lst[j] == t {
                # Returning \`some(tuple<int, int>)\` to keep
                # this function's return types consistent.
                return some((i, j));
            }
        }
    }

    return none;
}`;

twosumExample.EARLSrcDict = `fn twosum_optimized(lst, t) {
    let found = Dict(int);

    for i in 0 to len(lst) {
        let compliment = t - lst[i];

        if found[compliment] {
            return some((found[compliment].unwrap(), i));
        }

        # Insert the pair into the dictionary.
        found.insert(lst[i], i);
    }

    return none;
}`;

twosumExample.EARLSrcMain = `let lst, t = (1..=5, 4);

let result1 = twosum_brute_force(lst, t);
let result2 = twosum_optimized(lst, t);

if result1 {
    println(f"found {t} in twosum_brute_force at: ", result1.unwrap());
}
else {
    println(f"could not find {t} in twosum_brute_force");
}

if result2 {
    println(f"found {t} in twosum_optimized at: ", result2.unwrap());
}
else {
    println(f"could not find {t} in twosum_optimized");
}`;

twosumExample.EARLSrcFullCode =
    `module Main\n\n`
    + twosumExample.EARLSrcDict + `\n\n`
    + twosumExample.EARLSrcBruteForce + `\n\n`
    + twosumExample.EARLSrcMain;

export var lsLahExample = {}

lsLahExample.bashSrc = `files=$(ls -lah)

echo "$files" | while read -r line; do
    # Skip the header
    if [[ "$line" =~ ^total ]]; then
        continue
    fi

    permissions=$(echo "$line" | awk '{print $1}')
    filename=$(echo "$line" | awk '{print $9}')

    echo "Permissions: $permissions - File: $filename"
done`;

lsLahExample.EARLSrc = `$"ls -lah" |> let files;

foreach f in files.split("\\n")[1:] {
    let parts = f.split(" ");
    let permissions, filename = (parts[0], parts.back());
    println(f"Permissions: {permissions} - File: {filename}");
}`;

