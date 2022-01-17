import React from 'react';
import styled from 'styled-components';

const DisplayFinishedBooks = ({book}) => {
      const {title, author, coverImageUrl, publishedAt, newsChannel, synopsis} = book;
      return (
            <>
                  <OneBook>
                        <div>
                              <img src={coverImageUrl} width="300px" height="250px" />
                        </div>
                        <Info>
                              <h2>{title}</h2>
                              <h3>Author: {author}</h3>
                              <h3>Media: {newsChannel}</h3>
                              <p>{synopsis.slice(0, 500)}...</p>
                              <h5>Published Date: {publishedAt}</h5>
                        </Info>
                  </OneBook>
            </>
      );
};

const OneBook = styled.div`
      width:100%;
      padding: 50px;
      display: flex;
      border: 1px solid grey;
      margin: 10px 0px;
`;

const Info = styled.div`
      padding:0px 20px;
`;

export default DisplayFinishedBooks;