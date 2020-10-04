(function (window) {
    var hellowSpeaker = new Object();
    
    var speakWord = "Hello";

    hellowSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
      }

    window.hellowSpeaker = hellowSpeaker;

})(window); 