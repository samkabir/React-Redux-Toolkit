import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { addToReadingList, removeFromDiscoveryList } from '../../../../redux/slice/bookSlice';

const DisplayBooks = ({book}) => {
      const dispatch = useDispatch();
      const {title, author, coverImageUrl, pageCount, publisher, synopsis} = book;
      return (
            <div>
                  <OneBook>
                        <div>
                              <img src={coverImageUrl} width="300px" height="450px" />
                        </div>
                        <Info>
                              <h2>{title}</h2>
                              <h3>Author: {author}</h3>
                              <h3>Publisher: {publisher}</h3>
                              <p>{synopsis.slice(0, 500)}...</p>
                              <h5>Page Count: {pageCount}</h5>
                        </Info>
                        <AddIcon>
                              <button onClick={() => { dispatch(addToReadingList(book)); dispatch(removeFromDiscoveryList(book)); }} title="Add to Reading List"><AddCircleIcon style={{fontSize: '40px', display:'flex'}}/></button>
                        </AddIcon>
                  </OneBook>
            </div>
      );
};

const AddIcon = styled.div`
      > button {
            background-color: transparent;
            border-radius:30px;
            cursor: pointer;
      }
`;

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

export default DisplayBooks;