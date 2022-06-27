import React from 'react';
import PropTypes from 'prop-types';
import Entry from './table-entry';
import Head from './table-head';

/*the simplest way to define a component is to write a JavaScript function*/
/*destructure props object*/
function TableAry ({ aryData }) {
    const handleAryData = () => {
        if (aryData) {
            //iterate over array
            return aryData.map((item, index) => {
                return (
                    <Entry
                        shape_id={item.shape_id}
                        shape_pt_lat={item.shape_pt_lat}
                        shape_pt_lon={item.shape_pt_lon}
                        shape_pt_sequence={item.shape_pt_sequence}
                        key={index}
                    />
                );
            });
        } else {
            console.log('aryData NOT available');
            return <p>loading...</p>;
        }
    };

    /*return a React element*/
    return (
        <>
            <table>
                <thead>
                    <Head />
                </thead>
                <tbody>{handleAryData()}</tbody>
            </table>
        </>
    );
}
TableAry.propTypes = {
    aryData: PropTypes.array
};
export default TableAry;
