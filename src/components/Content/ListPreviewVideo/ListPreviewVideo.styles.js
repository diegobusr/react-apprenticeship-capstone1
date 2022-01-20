import styled from 'styled-components';

export const CustomDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

  .loading {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 40px;

    img {
      width: 200px;
    }

    h2 {
      font-size: 1.1em;
    }
  }
`;
