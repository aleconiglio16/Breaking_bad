import React, { useState, useEffect } from "react";
import Quote from "./componets/Quote";

const initialQuote={
  text:"Quote",
  author:"Author",
}

function App() {

  const [quote, setQuote] = useState(initialQuote);
  const [loading, setLoading] = useState(false)

  const updateQuote = async () => {

    setLoading(true);
    const url = "https://www.breakingbadapi.com/api/quote/random";
    const res = await fetch(url);
    const [data] = await res.json()
  

     setQuote({
       text: data.quote,
       author: data.author
     })

     setLoading(false);
  }

  useEffect(() => {
    
    updateQuote();

  }, []) 


  return (
    <div className="app">
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg" alt="logo"/>
      <button onClick={() => updateQuote()}>Get Another</button>

      {loading ? <h1>Cargando...</h1> : <Quote quote={quote}/> }

 
    </div>
  );
}

export default App;
