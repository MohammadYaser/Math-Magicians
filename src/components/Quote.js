import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [newQuote, setNewQuote] = useState(null);
  const [quoteLoading, setQuoteLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = 'aQHetjM7fPp6GpfmgJe4mA==zGAdLfljeQtfgrXo';
      const quoteCategory = 'health';

      try {
        const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${quoteCategory}`, {
          headers: {
            'X-Api-Key': API_KEY,
          },
        });

        if (!res.ok) {
          throw new Error('There is problem with the Network');
        }

        const resultData = await res.json();
        const randIndex = Math.floor(Math.random() * resultData.length);
        const randomQuote = resultData[randIndex];
        setNewQuote(randomQuote);
        setQuoteLoading(false);
      } catch (error) {
        setError(error.message);
        setQuoteLoading(false);
      }
    };

    if (!newQuote) {
      fetchData();
    }
  }, [newQuote]);

  if (quoteLoading) {
    return <div className="newLoading">Loading...</div>;
  }

  if (error) {
    return (
      <div className="newError">
        Error:
        {error}
      </div>
    );
  }

  if (newQuote) {
    return (
      <div className="newQuote">
        <h2>Health Quote</h2>
        <blockquote className="blkQuote">{newQuote.quote}</blockquote>
        <p>
          -
          {newQuote.author}
        </p>
      </div>
    );
  }

  return null;
};

export default Quote;
