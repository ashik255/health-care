import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import NewsShow from '../NewsShow/NewsShow';
import LoadNews from './../../../fakedata/newsdata.json'

const News = () => {

   const [news,setNews]=useState([]);


    useEffect( () => {

    setNews(LoadNews);
    }
    ,[])
    return (
        <Row id='blogs' xs={1} md={2} className="g-4 m-3">
             
            {
                news.map(data =><NewsShow
                    key ={data.key}
                    news={data}
                ></NewsShow>)
            }
       
        </Row>
    );
};

export default News;