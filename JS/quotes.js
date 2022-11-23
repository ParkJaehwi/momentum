const quotes = [
  {
    quote: "생각하는 대로 살지 않으면 결국에는 사는 대로 생각하게 된다.",
    author: "Paul Bourget",
  },
  {
    quote: "중요한건 어떻게 시작했는가가 아니라 어떻게 끝내는가 이다.",
    author: "Andrew Matthews",
  },
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한 바퀴 돌 수 있다.",
    author: "Samuel Johnson",
  },
  {
    quote:
      "행복의 한 쪽 문이 닫히면 다른 쪽 문이 열린다. 그러나 흔히 우리는 닫혀진 문을 오랫동안 보기 때문에 우리를 위해 열려 있는 문을 보지 못한다.",
    author: "Helen Keller",
  },
  {
    quote: "행복은 습관이다. 그것을 몸에 지녀라.",
    author: "L. Ron Hubbard",
  },
  {
    quote:
      "인간이 불행한 이유는 자신이 행복하다는 사실을 모르기 때문이다. 단지 그뿐이다.",
    author: "Fyodor Dostoevsky",
  },
  {
    quote:
      "믿음은 네 생각이 된다, 네 생각은 네 말이 된다, 네 말은 네 행동이 된다, 네 행동은 네 습관이 된다, 네 습관은 네 가치가 된다, 네 가치는 네 운명이 된다.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "네가 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.",
    author: "Henry Ford",
  },
  {
    quote: "피할수 없으면 즐겨라",
    author: "Robert Elliott",
  },
  {
    quote:
      "절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
    author: "L. Ron Hubbard",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
