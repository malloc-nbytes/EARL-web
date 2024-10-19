export const bashCommandsExample1Src = `# Output goes directly to stdout
$"ls -lah";

# Output goes directly to stdout
let cmd = "echo \\"hello world\\n\\"";
$cmd;

$"ps aux | grep earl" |> let grepped;
println(grepped); # output of the bash command.

@pub
$"ps aux" |> let procs;
println(procs);

let x = "";
$"whoami" |> x;
println(x);

let lst = [""];
$"ls" |> lst[0];
println(lst);`;
