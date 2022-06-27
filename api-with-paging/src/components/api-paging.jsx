import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DropDownSelect from '../components/drop-down-select';
const selectOptions=[10,25,50,100,250,500,1000,2500,5000,10000];
import TableAry from '../components/table-ary';
const ApiPaging = () => {
    /*store and initialise data in function component state*/
    const [oset, setOset] = useState(1);
    const [limit, setLimit] = useState(selectOptions[2]);
    const [ary, setAry] = useState([]);

    /*fetch ary in a JavaScript function*/
    const fetch = async () => {
        try {
            /*TODO make route available using config*/
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
	    const address=`https://www.v1gtfs.delfi.api.swingbe.de/shapes-oset-limit?oset=${oset}&limit=${limit}`;
            const res = await axios.get(address);

            /*set state*/
            setAry(res.data);
        } catch (err) {
            console.log('err.message: ' + err.message);
        }
    };

    /*this hook is run after a DOM update. Changing state migh result in an infinite loop*/
    useEffect(() => {
    /*effect goes here*/

        /*hook need to be placed in body of the function component in which it is used*/
        fetch();

    /*use an empty dependency array to ensure the hook is running only once*/
    /*TODO study dependency array: https://reactjs.org/docs/hooks-effect.html*/
    }, [oset,limit]);
    const handleClickPrev=()=>{
	setOset((oset)=>oset>1?--oset:oset);
    };
    const handleClickNext=()=>{
	setOset((oset)=> ++oset);
    };
    const handleChangeLimit = (event) => {
        //console.log('event.target.value: '+event.target.value);
	setLimit((limit)=>event.target.value);
    };
    const select = (
	<DropDownSelect
	    name="Limit"
	    onChange={handleChangeLimit}
	    options={selectOptions}
	    defaultValue={selectOptions[2]}
	/>
    );
    /*element representing user-defined React component*/
    const table = <TableAry aryData={ary} />;

    return (
	<>
	    <p>ApiPaging</p>
	    <button
		onClick={handleClickPrev}
		autoFocus		
	    >prev</button>
	    <button
		onClick={handleClickNext}
	    >next</button>
	    {select}
	    {table}
	</>
    );
};
export default ApiPaging;
