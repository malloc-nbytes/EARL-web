export const closureCXXExample1Src = `std::function<int(int, int)> sum_and_modify_b = [&](int a, int &b) -> int {
    std::cout << "in sum" << std::endl;
    b *= 2;
    return a+b;
}

std::function<int(void)> loop = [](void) -> void {
    for (int i = 0; i < 10; ++i)
        std::cout << i << std::endl;
}

std::vector<int> v = {1,2,3,4,5};
v.for_each(v.begin(), v.end(), [](int k) { std::cout << k << std::endl; });`;

export const closureExample1Src = `let sum_and_modify_b = |a, @ref b| {
    println("in sum");
    b *= 2;
    return a+b;
}

let loop = |_| {
    foreach i in 0..10 {
        println(i);
    }
}

let v = [1,2,3,4,5];
v.foreach(|k| { println(k); });`;

export const closureExample2Src = `fn take_sum_closure(f, a, b) {
    f(a, b);
}

let msg = "hello world";
let hello = |_| {
    print(msg);
};

let sum = |a, b| {
    print("in sum");
    return a+b;
};

hello();

print(take_sum_closure(sum, 1, 2));`;
