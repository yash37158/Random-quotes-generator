
// async is being used to return a promise in js and if not returned then javascript automatically wraps it in a 
// promise which is resolved its value.
const newQuote = async() =>
{
    var url="https://type.fit/api/quotes";
    const response = await fetch(url);
    console.log(response);
    const allQuotes = await response.json();
    const index = Math.floor(Math.random()*allQuotes.length);

    const quote = allQuotes[index].text;
    const auth=allQuotes[index].author;

    if(auth==null)
    {
        author = "Anonymous";
    }

    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML="~  "+auth;

 
}
newQuote();
