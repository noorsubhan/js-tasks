
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
   quote:`"Try the key of success"`,
   person:`Subhan Noor`
},{
    quote:`"Successful people are not gifted; they just work hard, then succeed on purpose." `,
    person:`G.K. Nielson`

},{
    quote:`"The only thing standing between you and outrageous success is continuous progress." `,
    person:`Dan Waldschmidt` 
},{
    quote:`" I never dreamt of success. I worked for it"`,
    person:`Estée Lauder`
},{
    quote:`" Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come"`,
    person:`Dwayne Johnson`
},
];

 btn.addEventListener('click' , function(){

let random = Math.floor(Math.random() *  quotes.length);
quote.innerText = quotes[random].quote;
person.innerText = quotes[random].person;

})
