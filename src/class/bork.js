class Bork {
    //Property initializer syntax
    instanceProperty = "bork";
    boundFunction = () => {
        return this.instanceProperty;
    };

    //Static class properties
    static staticProperty = "babelIsCool";
    static staticFunction = function() {
        return Bork.staticProperty;
    };
}

let myBork = new Bork;

//Property initializers are not on the prototype.
console.log(myBork.__proto__.boundFunction); // > undefined

console.log(myBork.boundFunction.call(undefined));

console.log(Bork.staticFunction());
