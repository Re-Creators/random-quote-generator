import styled from "styled-components";

function Quote({ marginTop, quote }) {
  return (
    <StyledContainer style={{ marginTop: marginTop }}>
      <p>“{quote}”</p>
    </StyledContainer>
  );
}

export default Quote;

const StyledContainer = styled.div`
  width: 100%;
  a {
    text-decoration: none;
  }

  p {
    font-size: 24px;
    text-align: left;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: -50px;
      width: 6px;
      background-color: #f7df94;
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;
