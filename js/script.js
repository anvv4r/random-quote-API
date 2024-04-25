const loadQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    quoteElement.innerHTML = `"${data.content}"`;
    authorElement.innerHTML = `- ${data.author}`;
}  
loadQuote();  