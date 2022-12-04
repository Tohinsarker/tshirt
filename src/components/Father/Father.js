import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Myson from '../Myson/Myson';

const Father = ({house}) => {
    return (
        <div>
            <h2>Father</h2>
            <section className='flex'>
                <Myself house={house}></Myself>
                <Myson house={house}></Myson>
                <Brother house={house}></Brother>
            </section>
        </div>
    );
};

export default Father;