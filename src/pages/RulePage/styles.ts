import styled from 'styled-components'

export const Container = styled.ul`
  padding: 150px 60px 100px 60px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 750px) {
    padding: 150px 10px 100px 40px;
  }

  & > li {
    display: inline;
    width: 100%;
  }

  & > li + li {
    margin-top: 10px;
  }
`
