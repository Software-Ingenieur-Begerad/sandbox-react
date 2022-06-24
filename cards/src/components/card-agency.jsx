import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardAgency = () => {
    /*store count as array in function component state*/
    /*initialise as empty array*/
    const [count, setCount] = useState(null);

    /*fetch count in a JavaScript function*/
    const getCount = async () => {
        try {
            /*TODO make route available using config*/
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            const count = await axios.get(
                'https://www.v1gtfs.delfi.api.swingbe.de/table-agency-count'
            );

            /*set state*/
            setCount(count.data[0]['count']);
        } catch (err) {
            console.log('err.message: ' + err.message);
        }
    };

    /*this hook is run after a DOM update. Changing state migh result in an infinite loop*/
    useEffect(() => {
    /*effect goes here*/

        /*hook need to be placed in body of the function component in which it is used*/
        getCount();

    /*use an empty dependency array to ensure the hook is running only once*/
    /*TODO study dependency array: https://reactjs.org/docs/hooks-effect.html*/
    }, []);
    if(count){
	return(
	    <>
		<p>Card Agency</p>
		<p>count: {count}</p>
	    </>
	);
    }else{
	return(
	    <>
		<p>Card Agency</p>
		<p>loading...</p>
	    </>
	);
    }
};
export default CardAgency;
