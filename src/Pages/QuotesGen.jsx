import React, { useEffect, useState } from 'react'

function getRandomQuote(quotes){
    return quotes[Math.floor(Math.random() * quotes.length)];
}

const QuotesGen = () => {
    const [quotes,setQuotes] = useState([]);
    const [quote,setQuote] = useState(null);

    useEffect(() =>{
        fetch('https://type.fit/api/quotes').then((res) => res.json()).then((json)=>{
            setQuotes(json);
            setQuote(json[0]);
        });
    },[]);

    function getNewQuote(){
       setQuote(getRandomQuote(quotes));
    }
  return (
<>
<div>Project 3 : Quote Generator</div>
    <section>
        <button onClick={getNewQuote}>New Quote</button>
        <h3>
            <span>"</span>
            {quote?.text}
        </h3>
        <i>- {quote?.author}</i>
    </section>
</>
  )
}

export default QuotesGen;