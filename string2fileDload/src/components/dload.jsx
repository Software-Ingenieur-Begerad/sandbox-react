import React from 'react';
function Download(){
    
    const dloadFile = () => {
	const element = document.createElement("a");
	const inputElem=document.getElementById('dloadInput');
	let inputValue=null;
	if(typeof inputElem !== 'undefined' && inputElem !== null) {
	    inputValue=inputElem.value;
	    const file = new Blob([inputValue], {type: 'text/plain'});
	    element.href = URL.createObjectURL(file);
	    element.download = "dloadFile.csv";
	    document.body.appendChild(element);
	    //TODO Verify:Required for this to work in FireFox?
	    element.click();
	}
    }
    return(
	<div>
            <input
		id="dloadInput"
		name="dloadInput"
		placeholder="insert text"
		text="text"
		type="text"
	    />
            <button onClick={dloadFile}>
		Download
	    </button>
	</div>
    );
}

export default Download;
