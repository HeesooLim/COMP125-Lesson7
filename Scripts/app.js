"use strict";

// IIFE
(function()
{
    function Start()
    {
        let heesoo = new objects.Student("Heesoo", 21, "ABC12344");
        heesoo.saysHello();
        heesoo.Studies();

        console.log(heesoo);

        let teacher = {
        name: "HESO",
        ID: "ABC12345",
        age: 20,
        Teaches: function()
        {
            console.log(`${teacher.name} is teaching`);
        }
    };

        teacher.Teaches();

        console.log(teacher);
    }
    
    
    window.addEventListener("load", Start);

})();