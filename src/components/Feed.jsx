import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { yt_api } from "../data"
import { valueconvert } from '../data';
import moment from 'moment/moment';



function Feed({ shrink, category }) {
    const [data, setData] = useState([]);
    const fetchData = async () => {

        const videoUrl =  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${yt_api}`;
        await fetch(videoUrl).then(res => res.json()).then(vdata => setData(vdata.items));

    }
    useEffect(() => {
        fetchData();
    }, [category]);

    return (
        <div className={`w-[100%] flex flex-wrap ${shrink ? "ml-[80px]" : "ml-[225px]"} gap-3 mt-3 mr-3`}>

            {data.map((item, index) => {
    
                return (
                    <div key={index} className='flex-1 grow-[30%] min-w-[300px] max-w-[350px]'>
                        <Link to={`/video/${item.snippet.categoryId}/${item.id}`}> <img className='w-full rounded-lg inline-block cursor-pointer h-[180px] object-cover' src={`${item.snippet.thumbnails.high.url}`} alt="" /></Link>
                        <div className='flex gap-2 mt-2'>
                            <img className='w-[50px] h-[50px] shrink-0 rounded-full object-cover' src={`${item.snippet.thumbnails.medium.url}`} alt="" />
                            <div>
                                <h2 className='font-bold'>{item.snippet.title}</h2>
                                <p >{item.snippet.channelTitle}</p>
                                <p>{valueconvert(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                            </div>
                        </div>
                    </div>
                )

            })}











        </div>
    )
}

export default Feed