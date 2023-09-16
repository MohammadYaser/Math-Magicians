import { useEffect, useState } from 'react';

function Quote() {
  const [quoteData, setQuoteData] = useState({
    quote: 'Loading...',
    author: '',
    loading: true,
    error: null,
  });

  const {
    quote, author, loading, error,
  } = quoteData;

  useEffect(() => {
    const fetchData = async () => {
      const APP_URL = 'https://api.api-ninjas.com/v1/quotes';
      const APP_API_KEY = 'aQHetjM7fPp6GpfmgJe4mA==zGAdLfljeQtfgrXo';
      const QuoteCategory = 'health';

      try {
        const res = await fetch(`${APP_URL}?category=${QuoteCategory}`, {
          headers: { 'X-Api-Key': APP_API_KEY },
        });

        if (!res.ok) {
          throw new Error('There is an error with the network');
        }

        const resulData = await res.json();
        const { quote, author } = resulData[0];
        setQuoteData({
          quote, author, loading: false, error: null,
        });
      } catch (error) {
        setQuoteData({ ...quoteData, error: error.message });
      }
    };

    const fetchTimeout = setTimeout(fetchData, 1000);

    return () => clearTimeout(fetchTimeout);
  }, []);

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <div className="newLoading">Loading...</div>
      ) : (
        <div className="newQuote">
          <h2>Health Quote</h2>
          <h3 className="blkQuote">
            &#34;
            {quote}
            &#34; by
            {' '}
            <span className="author">{author}</span>
          </h3>
        </div>
      )}
    </>
  );
}

export default Quote;
