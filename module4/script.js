/*
Solution of assignment 4:
Expected output:
Hello Yaakov
Good Bye John
Good Bye Jenifer
Hello Gizem
Hello Sule
Hello Rabia
Hello Berk
Hello Orhan
*/

(function() {
    var names = ["Yaakov", "John", "Jenifer", "Elif", "Gizem", "Sule", "Rabia", "Berk", "Orhan", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();