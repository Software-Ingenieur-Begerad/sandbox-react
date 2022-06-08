import React, {useState} from 'react';
import Hello from '../components/hello';
import ToggleButton from '../components/toggle-button';

const Home = () => {
    //handle state
    const [btnState,setBtnState]=useState(false);
    const toggle=()=>{
	setBtnState((btnState)=>!btnState);
    };
    const toggleBtn=<ToggleButton
			btnState={btnState}
			btnFalse="paging"
			btnTrue="all"
			descFalse=": content is devided into pages"
			descTrue=": content is presented all at once"
			btnOnClick={toggle}
		    />;

    //render
    return (
	<>
	    <h1>Home</h1>
	    <h2>(React.js Lambda Function Component)</h2>
	    <Hello msg="Hello World!" />
	    {toggleBtn}
	    {btnState?<div>all</div>:<div>paging</div>}
	</>
    );
}

export default Home
