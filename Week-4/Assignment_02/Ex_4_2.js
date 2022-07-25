//Create an object called Teacher derived from the Person and implement a method called teach
//which receives a string called subject, and prints out:
var Person = function() {};
//adding name in the function with help of prototype
Person.prototype.initialize = function(name)
{
    this.name = name;
}

Person.prototype.describe = function()
{
    return this.name;
}
//inheriting property from Person
var Teacher = function() {};
Teacher.prototype = new Person();

// creating a method called teach to print values.
Teacher.prototype.teach = function(subject)
{
    console.log(this.name + " is now teaching " + subject);
}

var a = new Teacher();

a.initialize("Suresh");
a.teach("English");