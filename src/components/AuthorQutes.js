import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Quote from "./Quote";

function AuthorQutes({ author }) {
  const [quotes, setQuotes] = useState();

  useEffect(() => {
    async function fetchQuotes() {
      const { data } = await axios.get(
        `https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`
      );

      setQuotes(data.data);
    }
    fetchQuotes();
  }, [author]);
  return (
    <StyledContainer>
      {quotes && (
        <StyledQuotes>
          <h2> {author}</h2>
          {quotes.map((quote) => (
            <Quote key={quote.id} quote={quote.quoteText} marginTop={80} />
          ))}
        </StyledQuotes>
      )}
    </StyledContainer>
  );
}

export default AuthorQutes;

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledQuotes = styled.div`
  width: 30%;

  @media (max-width: 768px) {
    width: 50%;

    h2 {
      font-size: 20px;
    }
  }

  h2 {
    text-align: left;
  }
`;
