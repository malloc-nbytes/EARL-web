export const classesExample1Src = `# This class takes no arguments for the
# constructors and is also not public,
# so other modules cannot use this class.

class NoPassesArgs [] {
    let x: int = 1;
    let y = 2;

    @pub
    fn print() {
        # The use of \`this\` keyword is optional.
        # Because this function is marked as @pub,
        # it is visible to the outside.
        print(this.x, y);
    }
}`

export const classesExample2Src = `# This class is marked as @pub, so it is
# visible to other modules.
@pub
class Point [x: int, y, name: str] {
    # Because this is public, you can access
    # it directly from outside the class.
    @pub
    let x, y = (x, y);

    @pub
    let desc = "A point class"

    let name: str = name;

    # Function not marked as @pub so
    # it does is not visible outside
    # of this class.
    fn helper() {
        println("in helper");
    }

    @pub
    fn set_x(newx: int) {
        this.x = newx
    }

    @pub
    fn show() {
        print(this.x);
        print(this.y);
        print(this.name);
        print(this.desc);
    }
}`;

export const classesExample3Src = `@pub
class Stack [init: list] {

    ### THIS HAPPENS FIRST ######
    # You could just assign \`init\` to \`lst\` here,
    # but for this example, this is done in the constructor.
    let lst = [];
    let sz = 0;
    ############################


    ### THIS HAPPENS SECOND #######
    # The constructor gets called
    # right after class instantiation.
    fn constructor() {
        for i in 0..len(init) {
            this.push(init[i]);
        }
    }
    ###############################

    @pub
    fn push(x: any) {
        this.lst.append(x);
        this.sz = this.sz+1;
    }

    @pub
    fn pop() {
        this.lst.pop(this.sz-1);
        this.sz = this.sz-1;
    }
}`;

