import React from 'react';
import { Helmet } from 'react-helmet';
import gif from '../resources/book-gif.gif'
import styled from 'styled-components'


const BookContainer = styled.div`
  
  width: 100vw;
  height: 100vh;

  background: rgb(240, 253, 54);
  
  display: flex;
  
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  
  img {
    padding: 0 5vw;
    width: 30vw;
    max-height: 100vh;
  }
  
  div {
    padding: 0 5vw;
    width: 30vw;
    
    h2 {
      font-family: Work Sans, sans-serif;
      font-size: 3rem;
      font-weight: 800;
      color: rgb(46, 117, 255);
      
    }

    p {
      font-family: Work Sans, sans-serif;
      font-size: 1.5rem;
      font-weight: 400;
      color: rgb(41, 199, 145);
      text-decoration: underline;
      transition: all 0.2s ease;
      cursor: pointer;
      
      &:hover {
        transform: translateY(-2px);
      }
    }
  }
  
  > p {
    position: absolute;
    font-family: Work Sans, sans-serif;
    bottom: 10px;
    right: 40px;
    color: rgb(46, 117, 255);
    font-size: 1.2rem;
  }
  
  @media (max-width: 1000px) {
    height: -webkit-fill-available;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    
    img {
      max-height: 30vh;
      max-width: 75vw;
      padding: 5vh 0;
    }
    
    div {
      padding: 0;
      width: 75vw;
      
      h2 {
        font-size: 2.5rem;
      }
      
      p {
      
      }
    }
    
  }
  
`


export default function IndexPage() {
  
  return (
    <BookContainer>
      <Helmet>
        <title>10 Minutes Today</title>
      </Helmet>
      <img src={gif} />
      <div>
        <h2>10 minutes a day.
          <br/>That's all it takes.</h2>
        <p onClick={() => window.location.href = "https://www.youtube.com/watch?v=6ibCtsHgz3Y"}>find out more.</p>
      </div>
      {/*<p>Made with love.</p>*/}
      
    </BookContainer>
  );
}
