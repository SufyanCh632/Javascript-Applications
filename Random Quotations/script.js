window.onload = function()
{
    getRandomQuotationsReady();
}

function getRandomQuotationsReady()
{
    var btn = document.getElementById("btn");
    btn.onclick = function()
    {
        var randomQuotesArray = [
            "Keep your friends close.",
            "True friends stab you in the front.",
            "All that glitters are not gold.",
            "Be the person everyone admire.",
            "Live with your own style.",
            "Give up that things you can't do.",
            "Peace begins with smile.",
            "True Love never ends.",
            "Marks don't define intelligence.",
            "Be your own role model."
        ];

        var randomQuote = document.getElementById("randomQuote");

        var rand = Math.floor(Math.random()*10);

        randomQuote.textContent = "\""+randomQuotesArray[rand]+"\"";
    }
}
