import styled from 'styled-components';

export const GalleryList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-basis: calc((100% / 4) - 20px);
  margin-right: -20px;
  margin-bottom: -20px;
  margin-top: 20px;
  list-style: none;

  & li {
    margin-right: 20px;
    margin-bottom: 20px;
    background-color: beige;
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;
