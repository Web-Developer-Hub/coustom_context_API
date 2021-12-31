import React from 'react';
import { useContext } from 'react';
import { MyCoustomContext } from '../../App';
import BestSell from './BestSell';

const BestSeller = () => {
    const courses = useContext(MyCoustomContext);
    const bestseller = courses.filter((data) => data.position === 'Bestseller');

    return (
        <div className='main'>
            <h2 className='cards'>Best Seller: {bestseller.length}</h2>
            <div className='cards'>
                {
                    bestseller.map((best) => <BestSell data={best}></BestSell>)
                }
            </div>
        </div>
    );
};

export default BestSeller;