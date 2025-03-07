import React from 'react';
import Navbar from '../../components/header/Header';
import Question from '../Question/Question'; 
import PriceList from '../PriceList/PriceList';

const Price = () => {
    
    return (
        <>
        <Navbar/>
           <PriceList />
        <Question/>
        </>
    );
};

export default Price;