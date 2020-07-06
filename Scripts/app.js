"use strict";

// IIFE
(function()
{
    function Start()
    {
        let heesoo = new objects.Person("Heesoo", 21);
        heesoo.saysHello();
    }
    
    window.addEventListener("load", Start);

})();