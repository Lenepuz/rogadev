$(function() {
  $(".typed").typed({
    strings: ["Nyetablerte <h2>webutviklere"],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 60,
    // time before typing starts
    startDelay: 1000,
    // backspacing speed
    backSpeed: 40,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: "html",
    // call when done callback function
    callback: function() {}
    // starting callback function before each string
  });
});
