import React, { useEffect, useState, useContext, createContext } from 'react'
import axios from 'axios'




const useQuote = () => {
  const context = useContext(QuoteContext);
  if(context === undefined) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
}
const QuoteSvg = () => {
  return(
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m228-240 92-160q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T458-480L320-240h-92Zm360 0 92-160q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T818-480L680-240h-92ZM320-500q25 0 42.5-17.5T380-560q0-25-17.5-42.5T320-620q-25 0-42.5 17.5T260-560q0 25 17.5 42.5T320-500Zm360 0q25 0 42.5-17.5T740-560q0-25-17.5-42.5T680-620q-25 0-42.5 17.5T620-560q0 25 17.5 42.5T680-500Zm0-60Zm-360 0Z"/></svg>);
}
const X = () => {
  return(
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1"> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/> </svg>);
}
const QuoteMachine = () => {
  const {quote,fetchQuote} = useQuote();
  
  return(
  <main>
      <div id='quote-box'>
        <div className ='message'><QuoteSvg /><p id='text'>{quote.text}</p></div>
        <p id='author'>{quote.author}</p>
        <footer>
          <a id ='tweet-quote' href='twitter.com/intent/tweet' target='_top'><X /></a>
          <button onClick={fetchQuote}>New Quote</button></footer>
        
      </div>
  </main>
  );
}
const App = () => {
  return(
  <QuoteProvider>
 <QuoteMachine />     </QuoteProvider>);
}

export default App

