import React from 'react';
import Card from '../CARD';
import { useState } from 'react';
import UseFetch from '../../../Hooks/UseFetch';
import "./index.css"

const Cards = (props) => {
    const {basket, setbasket} = props.props
    console.log(basket,setbasket);
    const [data, setData] = useState([]);
    const [status, setStatus] = useState(false);
    const [loading, setLoading] = useState(true); 

    const url = 'http://localhost:5000/products';

    const Callback = (data) => {
        if (!status) {
            setData(data);
            setStatus(true);
            setLoading(false); 
        }
    };

    UseFetch(url, Callback);

    return (
        <>
        card
            <div className="">
               <div>
               {loading ? (
                    <div>Loading...</div>
                ) : (
                    data && data.map((item) => (
                        <Card key={item.id}  itemData = {{...item}} basket={{basket, setbasket}} />
                    ))
                )}
               </div>

                <div>
                    <h1>Basketim</h1>
                        
                </div>
            </div>
        </>
    );
}

export default Cards;
