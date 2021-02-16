class Bork {
    // Новый синтакс - Property initializer syntax
    name = 'bork'; /* свойство экземпляра */

    getName = () => {
        return this.name;
    };

    // Статическое свойство класса
    static staticProperty = 'babel is cool';

    // Статическая функция класса
    static staticFunction = function() {
        return Bork.staticProperty;
    };
}

let bork = new Bork;

//Property initializers отсутствуют в прототипе (__proto__).
console.log(bork.__proto__.getName); // > undefined

console.log(bork.getName());

console.log(Bork.staticFunction());
