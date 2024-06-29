import React, {useEffect, useState} from 'react';
import './styles/index.scss';
import {HomePage} from "2_pages/homePage";
import {RequestManager} from "6_shared/api/apiEndpoints/movieApi";

interface FormData {
    key: string;
    value: string;
}

const App = () => {


    return (
        <div className='app'>
            <div>
                <HomePage/>
            </div>
        </div>
    );
};

export default App;