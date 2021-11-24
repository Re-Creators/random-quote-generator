import styled from "styled-components";
import "./App.css";
import AuthorQutes from "./components/AuthorQutes";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import RandomQuotes from "./components/RandomQuotes";

function App() {
  const [quote, setQuote] = useState(null);
  const [showRandomQuotes, setShowRandomQuotes] = useState(true);

  const generateQuote = useCallback(async () => {
    const { data } = await axios.get(
      "https://quote-garden.herokuapp.com/api/v3/quotes/random"
    );
    setShowRandomQuotes(true);
    setQuote(data.data[0]);
  }, []);

  useEffect(() => {
    generateQuote();
  }, [generateQuote]);

  return (
    <div className="App">
      <StyledButton onClick={generateQuote}>
        random
        <span className="material-icons icon">autorenew</span>
      </StyledButton>
      {showRandomQuotes ? (
        <RandomQuotes
          quote={quote}
          changeQuote={() => setShowRandomQuotes((oldVal) => !oldVal)}
        />
      ) : (
        <AuthorQutes author={quote.quoteAuthor} />
      )}
    </div>
  );
}

export default App;

const StyledButton = styled.button`
  align-self: end;
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-right: 100px;
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 250ms ease;
  font-size: 18px;

  @media (max-width: 768px) {
    margin-right: 20px;
  }

  &:active {
    transform: translateY(2px);
  }

  span {
    font-size: 18px;
    margin-left: 4px;
  }
`;
