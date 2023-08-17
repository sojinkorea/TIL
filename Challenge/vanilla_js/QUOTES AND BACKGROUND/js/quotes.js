const quotes = [
  {
    quote: 'Only I can change my life. No one can do it for me.',
    author: 'Carol Burnett',
  },
  {
    quote: 'Life is a tragedy when seen in close - up, but a comedy in long - shot.',
    author: 'Charlie Chaplin',
  },
  {
    quote: 'The journey is the reward.',
    author: 'Steve Jobs',
  },
  {
    quote: 'Respect yourself and others will respect you.',
    author: 'Confucius',
  },
  {
    quote: 'The love of learning, the sequestered nooks, And all the sweet serenity of books.',
    author: 'Henry Wadsworth Longfellow',
  },
  {
    quote: 'Never read a book through merely because you have begun it.',
    author: 'John Witherspoon',
  },
  {
    quote: 'You create your opportunities by asking for them.',
    author: 'Patty Hansen',
  },
  {
    quote: 'Everything comes to him who hustles while he waits.',
    author: 'Thomas A. Edison',
  },
  {
    quote: 'He who has never hoped can never despair.',
    author: 'George Bernard Shaw',
  },
  {
    quote: 'Laughter is by definition healthy.',
    author: 'Doris Lessing',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
