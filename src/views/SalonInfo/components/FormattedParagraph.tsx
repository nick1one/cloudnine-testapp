import styled from "styled-components";

export const FormattedParagraph = styled.p`
  font-family: "HelveticaNeue", sans-serif;
  font-size: 15px;
  font-weight: 300;
  color: #202020;

  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      border-bottom: solid 2px #eeeeee;
      color: #666;
    }
  }
`;
