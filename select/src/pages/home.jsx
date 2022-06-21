import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DropDownSelect from '../components/drop-down-select';

const Home = () => {
    //handle state
    const [list, setList] = useState([]);
    const [chosenValue, setChosenValue] = useState('');
    /*fetch data in a JavaScript function*/
    const getData = async () => {
        try {
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            const rsp = await axios.get('http://universities.hipolabs.com/search?country=United+Kingdom');

            /*set state*/
            setList(rsp.data);
        } catch (err) {
            console.log('err.message: ' + err.message);
        }
    };

    /*this hook is run after a DOM update. Changing state migh result in an infinite loop*/
    /*hook need to be placed in body of the function component in which it is used*/
    useEffect(() => {
	/*effect goes here*/
	getData();
	/*use an empty dependency array to ensure the hook is running only once*/
	/*TODO study dependency array: https://reactjs.org/docs/hooks-effect.html*/
    }, []);

    return (
	<>
	    <DropDownSelect name="University" options={list}/>
	</>
    );
}

export default Home
