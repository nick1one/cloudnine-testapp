import styled from "styled-components";

export const FormattedParagraph = styled.p`
  color: #202020;
  font-family: "HelveticaNeue", sans-serif;
  font-size: 15px;
  font-weight: 300;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      border-bottom: solid 2px #eee;
      color: #666;
    }
  }
`;
