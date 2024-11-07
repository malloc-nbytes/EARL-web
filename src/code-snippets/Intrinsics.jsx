export const printDef            = "print(arg1: any, arg2: any, ..., argN: any) -> unit";
export const printlnDef          = "println(arg1: any, arg2: any, ..., argN: any) -> unit";
export const helpDef             = "help(id: <identifier>) -> str";
export const copyDef             = "copy(value: any) -> any";
export const sinDef              = "sin(arg: real) -> float";
export const cosDef              = "cos(arg: real) -> float";
export const setFlagDef          = "set_flag(flag: str) -> unit";
export const unsetFlagDef        = "unset_flag(flag: str) -> unit";
export const inputDef            = "input(arg1: any, arg2: any, ..., argN: any) -> str";
export const intDef              = "int(arg: int|float|str|bool) -> int";
export const floatDef            = "float(arg: int|float|str) -> float";
export const strDef              = "str(arg: int|float|str|bool|option) -> str";
export const boolDef             = "bool(arg: int|float|str) -> bool";
export const tupleDef            = "tuple(arg0: any, arg1: any, ..., argN: any) -> tuple";
export const listDef             = "list(arg0: any, arg1: any, ..., argN: any) -> list";
export const dictDef             = "Dict(ty: TypeKW) -> Dict<ty>";
export const assertDef           = "assert(arg1: bool, arg2: bool, ..., argN: bool) -> unit";
export const lenDef              = "len(arg: list|str|tuple) -> int";
export const someDef             = "some(arg: any) -> option<any>";
export const typeDef             = "type(arg: any) -> str";
export const typeofDef           = "typeof(arg: any) -> TypeKW";
export const argvDef             = "argv() -> list";
export const openDef             = "open(fp: str, mode: str) -> file";
export const unimplementedDef    = "unimplemented(arg1, arg2, ..., argN) -> unit";
export const datetimeDef         = "datetime() -> time";
export const sleepDef            = "sleep(nanos: int) -> unit";
export const envDef              = "env(variable: str) -> str";
export const initSeedDef         = "init_seed(seed: int) -> unit";
export const randomDef           = "random() -> int";
export const observeDef          = "observe(var: <identifier>, callback: FunctionRef(any) -> unit | closure<any> -> unit) -> unit";