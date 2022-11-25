import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <section className='my-16'>
        <div>
            <h4 className="text-xl text-orange-400 font-bold">Categories</h4>
        </div>
        <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-6'>
            {
                categories.map( category => <Category
                key={category.id}
                category={category}
                /> )
            }
        </div>
    </section>
    );
};

export default Categories;