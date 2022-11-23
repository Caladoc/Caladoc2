var speakWord2 = "Hello";
function helloSpeaker(name) {
  console.log(speakWord2 + " " + name);
}
var speakWord = "Good Bye";
(function () {
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === "j") {
      byeSpeaker(names[i]);
    } else {
      helloSpeaker(names[i]);
    }
  }
  function byeSpeaker(name) {
    console.log(speakWord + " " + name);
  }
})();
