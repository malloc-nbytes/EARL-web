export const replProgrammingExample1 = `0: let x = 1;
1: x;
2: [ENTER TO EVAL]
<unit> -> unit
1 -> int
0:`;

export const replProgrammingExample2 = `0: let x = 1;
1: [ENTER TO EVAL]
<unit> -> unit
0: x;
1: [ENTER TO EVAL]
1 -> int
0:`;

export const replProgrammingExample3 = `0: -(3 * (0.5 / float(2)) - 1);
1:  [ENTER TO EVAL]
0.25 -> float
0:`;

export const replProgrammingExample4 = `0: fn fib(n) {
1:      if n < 2 {
2:              return n;
3:      }
4:
5:      return fib(n-1)+fib(n-2);
6: }
7: class Point [x, y] {
8:      @pub
9:      let x = x;
10:
11:     @pub
12:     let y = y;
13:
14:     @pub
15:     fn sumxy() {
16:         return this.x + this.y;
17:     }
18: }
19: [ENTER TO EVAL]
<unit> -> unit
<unit> -> unit
0: Point(fib(10), fib(15));
1: [ENTER TO EVAL]
<Class Point { y = 610, x = 55 }> -> class
0:`;
