

var firstTyped = new Typed(".first-text", {
    strings: [
        ' <span class="small-text">Console.WriteLine(&quot;Hello there</span><br><span class="large-text">I\'m Ufuk Coskun</span><br >'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: false,  
    smartBackspace: true,
    cursorChar: "",  
    onComplete: function () {
        startMultipleTextTyping();
    }
});

function startMultipleTextTyping() {
    var multipleTyped = new Typed(".multiple-text", {
        strings: ["Software Developer&quot;);", "Data Scientist&quot;);", "Game Developer&quot;);"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,  
        smartBackspace: true,
    });
}







