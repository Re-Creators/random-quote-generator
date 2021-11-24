import Quote from "./Quote";
import styled from "styled-components";

function RandomQuotes({ quote, changeQuote }) {
  return (
    <StyledQuoteContainer>
      {quote && (
        <>
          <Quote marginTop={150} quote={quote.quoteText} />
          <Author onClick={() => changeQuote()}>
            <span className="author">{quote.quoteAuthor}</span>
            <span className="genre">{quote.quoteGenre}</span>
            <span className="material-icons icon">arrow_right_alt</span>
          </Author>
        </>
      )}
    </StyledQuoteContainer>
  );
}

export default RandomQuotes;

const StyledQuoteContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;

  @media (max-width: 1024px) {
    width: 50%;
  }
`;

const Author = styled.div`
  padding-left: 50px;

  width: 100%;
  padding: 20px 18px;
  color: white;
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  position: relative;
  cursor: pointer;
  color: black;
  transition: all 500ms ease;

  &:hover {
    background-color: #333333;

    .author {
      color: white;
    }

    .icon {
      display: block;
    }
  }

  .author {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    transition: all 500ms ease;
  }

  .genre {
    font-size: 14px;
    color: #828282;
  }

  .icon {
    color: white;
    display: none;
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
