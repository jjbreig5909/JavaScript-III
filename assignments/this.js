/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window binding is when "this" refers to the Javascript global object itself. 
* 2. Implicit binding is one of the most common uses for "this". It is used to refer to the object that a function lives inside of.
* 3. New binding uses "this" as a generic placeholder so that you can use constructors to create new objects. Because it is generic it can take on the identity of whatever new object is specified. 
* 4. Explicit binding is what occurs whenever using .call, .apply, or .bind on a function. In this useage it provides the context for all of the other parameters that go into the function. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding
const jeffsObject = {
    name: 'Jeff',
    favoriteColor: "blue",
    sayHello: function () {
        console.log(`${this.name}'s favorite color is ${this.favoriteColor}`);
    }
};

jeffsObject.sayHello();
// Principle 3

// code example for New Binding
function BookTitle(title) {
    this.newTitle = title;
    this.read = function () {
        console.log(`This is the tale of ${this.newTitle}`);
    };
}

const jeffsFave = new BookTitle(`Ender's Game`);
const jeffsSecondFave = new BookTitle(`Eragon`);

jeffsFave.read();
// Principle 4

// code example for Explicit Binding
jeffsFave.read.apply(jeffsSecondFave) //The difference between .call and .apply has to do with the type of arguments they accept. .call accepts an argument list, .apply accepts a single array of arguments.