"use strict";

// Define the name of the namespace or "module"
let objects;

(function(objects)
{
    class Person
    {
        // properties

        // name properties
        get Name()
        {
            return this.m_name;
        }

        set Name(value)
        {
            this.m_name = value;
        }

        //Age properties
        get Age()
        {
            return this.m_age;
        }
        
        set Age(value)
        {
            this.m_age = value;
        }

        // construnctor
        constructor(name, age)
        {
            this.Name = name;
            this.Age = age;
        }

        // methods
        saysHello()
        {
            console.log(`${this.Name} says Hello!`);
        }
    }


    objects.Person = Person;


}(objects || (objects = {})));


