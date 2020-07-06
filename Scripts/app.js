"use strict";

// IIFE
(function()
{

    /*
    // STEP 1 - create class closure (IIFE)
    let Person = (function()
    {

        
        // STEP 3 - Define some properties

        // Name Property
        Object.defineProperty(Person.prototype, "Name",            
            {                
                get: function() 
                {
                    return this.m_name;
                },
                set: function(value)
                {
                    this.m_name = value;
                },
                enumerable: false,
                configurable: true
            }                
        );

        // Age Property
        Object.defineProperty(Person.prototype, "Age",
            {
                get: function()
                {
                    return this.m_age;
                },
                set: function(value)
                {
                    this.m_age = value;
                },
                enumerable: false,
                configurable: true
            }
        );

        // STEP 2 - create a constructor
        function Person(name, age)
        {
            // properties
            this.Name = name;
            this.Age = age;
        }

        
        // STEP 4 -  Define some methods (method notation)
        Person.prototype.saysHello = function()
        {
            console.log(`${this.Name} says Hello`);
        }


        // STEP 5 - you must return the Person constructor
        return Person;

    }());
    */

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


    function Start()
    {
        let heesoo = new Person("Heesoo", 21);
        heesoo.saysHello();
    }
    
    window.addEventListener("load", Start);

})();