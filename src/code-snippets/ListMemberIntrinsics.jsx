export const listAppend          = "append(arg1: any, arg2: any, ..., argN: any) -> unit";
export const listPop             = "pop(idx: int) -> unit";
export const listRev             = "rev() -> list";
export const listFilter          = "filter(cl: closure) -> list";
export const listForeach         = "foreach(cl: closure) -> unit";
export const listMap             = "map(cl: closure) -> list";
export const listFold            = "fold(cl: closure<el: any, acc: any>, acc: any) -> any";
export const listContains        = "contains(val: any) -> bool";
