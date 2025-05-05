export const indexExample1Src = `module MyModule

class MyClass [x: int] {
    let x = x;

    @pub fn getx() { return this.x; }

    @pub fn setx(x) { this.x = x; }

    fn do_nothing() {}
}

enum MyEnum {
    Item1,
    Item2
}

@pub fn sum(a, b) { return a + b; }

@pub @const let CONSTANT = 3;
`;

export const indexExample2Src = `module MyModule

### Class
class MyClass [x: int] {
    let x = x;

    ### Method
    @pub fn getx() { return this.x; }
    ### End

    ### Method
    @pub fn setx(x) { this.x = x; }
    ### End

    fn do_nothing() {}
}
### End

### Enum
enum MyEnum {
    Item1,
    Item2
}
### End

### Function
@pub fn sum(a, b) { return a + b; }
### End

### Variable
@pub @const let CONSTANT = 3;
### End
`;

export const indexExample3Src = `module MyModule

### Class
#-- Name: MyClass
#-- Parameter: x: int
#-- Description:
#--   Creates a new instance of MyClass.
class MyClass [x: int] {
    let x = x;

    ### Method
    #-- Name: getx
    #-- Returns: int
    #-- Description:
    #--   Get the value of x.
    @pub fn getx() { return this.x; }
    ### End

    ### Method
    #-- Name: setx
    #-- Parameter: x: int
    #-- Parameter: unused: any
    #-- Returns: unit
    #-- Description:
    #--   Internally set the member variable x
    #--   with the value that you provide and
    #--   do nothing with unused.
    @pub fn setx(x, unused) { this.x = x; }
    ### End

    fn do_nothing() {}
}
### End

### Enum
#-- Name: MyEnum
#-- Parameter: Item1: int
#-- Parameter: Item2: int
#-- Description:
#--   Items for my enum.
enum MyEnum {
    Item1,
    Item2
}
### End

### Function
#-- Name: sum
#-- Parameter: a: @const @ref int
#-- Parameter: b: int
#-- Returns: int
#-- Description:
#--   Sums a and b and returns it.
@pub fn sum(@const @ref a, b) { return a + b; }
### End

### Variable
#-- Name: CONSTANT
#-- Type: @pub @const int
#-- Description:
#--   My constant number.
@pub @const let CONSTANT = 3;
### End
`;

