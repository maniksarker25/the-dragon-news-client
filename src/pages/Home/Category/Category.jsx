import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../NewsCart/NewsCart';
import useTitle from '../../../hooks/useTitle';

const Category = () => {
    const {id} = useParams();
    useTitle('Home')
    // console.log(id)
    const categoryNews = useLoaderData();
    // console.log(categoryNews)
    return (
        <div>
            {id && <h1>This category news:{categoryNews.length}</h1>}
            {
                categoryNews.map(news => <NewsCart key={news._id} news={news}></NewsCart>)
            }
        </div>
    );
};

export default Category;