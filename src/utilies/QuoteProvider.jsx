import { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteContext from './QuoteContext';

const QuoteProvider = (props) => {

    const [quote, setQuote] = useState('');

    const fetchQuote = async () => {
        const response = await axios.get('https://api.quotable.io/random');
        setQuote({
            content: response.data.content,
            author: response.data.authorSlug
        });
    }
    useEffect(() => {
        fetchQuote();
    },[]);
    return(
        <QuoteContext.Provider value={{quote,fetchQuote}}>
            {props.children}
        </QuoteContext.Provider>
    );
}

export default QuoteProvider;