const quotes = [
    "LIARA",
    "Gnarly, radical, on the block I'm magical🤪💯🔊🔥🗣❗️",
    "sakura",
    "hi, im blessed",
    "Accept everything just the way it is",
    "Resentment and complaint are appropiate for neither oneself nor others",
    "Do not under any circumstances, depend on a partial feeling",
    "Whats the use of knowledge; If not to apply it?"

];

function getQuotes() {
    const quoteElem = document.getElementById('quotes');

    console.log('loading quotes');
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(quote);
    quoteElem.innerHTML = quote;
}