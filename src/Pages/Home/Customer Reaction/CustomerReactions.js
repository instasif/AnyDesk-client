import React from 'react';
import Customer from './Customer';
import img1 from '../../../assets/people1.png';
import img2 from '../../../assets/people2.png';
import img3 from '../../../assets/people3.png';

const CustomerReactions = () => {

    const reactions = [
        {
            _id: 1,
            name: "Asif Hossain",
            location: 'Dhaka',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!',
            img: img1
        },
        {
            _id: 2,
            name: "Saleha Banu",
            location: 'Cumilla',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!',
            img: img2
        },
        {
            _id: 3,
            name: "Maleka Banu",
            location: 'Dhaka',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!',
            img: img3
        },
    ]

    return (
        <section className='my-16'>
            <div>
                <h4 className="text-xl text-orange-400 font-bold">Reacions</h4>
                <h2 className="text-4xl">What our customer says</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-6'>
                {
                    reactions.map( r => <Customer
                    key={r._id}
                    r={r}
                    />)
                }
            </div>
        </section>
    );
};

export default CustomerReactions;