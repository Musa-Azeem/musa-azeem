document.addEventListener("DOMContentLoaded", () => {
    const quote = document.getElementById('quote_text');
    const cite = document.getElementById('quote_cite');
    updateQuote();

    async function updateQuote() {
        // Fetch a random quote from the Quotable API
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        console.log('got it')
        if (response.ok) {
            // Update DOM elements
            quote.textContent = data.content;
            cite.textContent = "- " + data.author;
        } else {
            quote.textContent = "loading ...";
            console.log(data);
        }
    }

    // "Love all, trust a few, do wrong to none." -William Shakespeare
    // "The message I’m sending to myself — I can’t change the world until I change myself first." - Kendrik Lamar
    // "They’re gonna try to tell you no, shatter all your dreams. But you gotta get up, and go and think of better things.” - Mac Miller
    // “Good things come in good time.” - Wiz Khalifa.
    // “Live your life, live it right. Be different, do different things.” - Kendrick Lamar.
    // "Just trust yourself, then you will know how to live." - Johann Wolfgang von Goethe
    // "Life's challenges are not supposed to paralyze you, they're supposed to help you discover who you are." - Bernice Reagon
});