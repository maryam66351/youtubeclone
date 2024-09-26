import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaShareSquare } from "react-icons/fa";
import { BsFillSaveFill } from "react-icons/bs";
import { useState } from 'react';
import { yt_api } from '../data'
import { valueconvert } from '../data'
import moment from 'moment/moment';


function VideoPage() {
    const { categoryId, id } = useParams();
    const [videoId, setVideoId] = useState(null);
    const [channel, setChannel] = useState(null);
    const [comments, setComments] = useState([]);
    const [recommended, setRecommended] = useState([]);
    //  fetching video data
    const fetchDataById = async () => {
        const vid_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${yt_api}`;
        const response = await fetch(vid_url);
        const data = await response.json();
        setVideoId(data.items[0]);
    };
    // fetching channel data based on the current video
    const fChannelData = async () => {
        const channelAPI = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId.snippet.channelId}&key=${yt_api}`;
        const res = await fetch(channelAPI);
        const json = await res.json();
        setChannel(json.items[0]);

        // fetching comments
        const commnets_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${id}&key=${yt_api}`
        await fetch(commnets_url).then(res => res.json()).then(data => setComments(data.items));
    }
    // Fetching recommended video
    const fetchRecommended = async () => {
        const recommended_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${categoryId}&key=${yt_api}`;
        await fetch(recommended_url).then(res => res.json()).then(data => setRecommended(data.items));

    };



    useEffect(() => {
        fetchDataById();
    }, [id]);

    useEffect(() => {
        fChannelData();
    }, [videoId]);
    useEffect(() => {
        fetchRecommended();
    }, []);
    return (
        <>
            {videoId && (<div className='w-full flex pt-3' >
                <div className='w-[70%] ml-4 '>
                    <iframe className='w-full h-[80vh] rounded-lg' src={`https://www.youtube.com/embed/${id}?autoplay=1`} ></iframe>
                    <h2 className='text-2xl font-semibold mt-2'>{videoId ? videoId.snippet.title : "Title Here"}</h2>
                    <div className='flex justify-between'>
                        <p>{valueconvert(videoId.statistics.viewCount)} &bull; {moment(videoId.snippet.publishedAt).fromNow()}</p>
                        <div className='flex p-2 items-center gap-2'>
                            <AiFillLike className='text-2xl text-gray-600 cursor-pointer' /> <span>{valueconvert(videoId.statistics.likeCount)}</span>
                            <AiFillDislike className='text-2xl text-gray-600 cursor-pointer' /><span>5</span>
                            <FaShareSquare className='text-2xl text-gray-600 cursor-pointer' />
                            <BsFillSaveFill className='text-2xl text-gray-600 cursor-pointer' />
                        </div>
                    </div>

                    <hr className='h-[2px] bg-gray-400 w-full' />

                    {channel && (
                        <div className='flex justify-between items-center'>
                            <div className='flex mt-4' >
                                <img className='w-12 h-12 rounded-full object-cover' src={channel.snippet.thumbnails.default.url} alt="" />
                                <div className='ml-2'>
                                    <h2 className='font-bold'>{videoId.snippet.channelTitle}</h2>
                                    <p>{valueconvert(channel.statistics.subscriberCount)} Subscribers</p>
                                </div>
                            </div>
                            <p className='bg-red-500 px-10 py-1 rounded-sm text-white cursor-pointer'>Subscribe</p>
                        </div>
                    )}

                    <div className='mt-3 ml-20'>
                        <p>{videoId.snippet.description.slice(0, 250)}</p>
                        <hr className='h-[2px] bg-gray-400 w-full my-4' />
                        <p className='font-bold'>{valueconvert(videoId.statistics.commentCount)} Comments</p>

                        {comments.map((data, index) => {
                            return (
                                <div key={index} className='flex mt-4' >
                                    <img className='w-12 h-12 rounded-full object-cover' src={data.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                                    <div className='ml-2'>
                                        <h2 className='font-bold'>{data.snippet.topLevelComment.snippet.authorDisplayName}</h2>
                                        <p>{data.snippet.topLevelComment.snippet.textDisplay}</p>
                                        <div className='flex py-2 items-center gap-2'>
                                            <AiFillLike className='text-xl text-gray-600 cursor-pointer' /> <span>{valueconvert(data.snippet.topLevelComment.snippet.likeCount)}</span>
                                            <AiFillDislike className='text-xl text-gray-600 cursor-pointer' /><span></span></div>
                                    </div>
                                </div>
                            )
                        })}


                    </div>



                </div>


                <div className='w-[30%] ml-4'>
                  {recommended.map((data, index)=>{
                    return(
                        <div key={index} className='flex w-full mb-2'>
                        <Link to={`/video/${data.snippet.categoryId}/${data.id}`}> <img className='cursor-pointer w-[240px] min-w-[240px]' src={data.snippet.thumbnails.medium.url} alt="" /></Link>
                        <div className='ml-2'>
                            <h2 className='font-bold text-sm'>{data.snippet.title}</h2>
                            <p >{data.snippet.channelTitle}</p>
                            <p>{valueconvert(data.statistics.viewCount)} views</p>
                        </div>
                    </div>
                    )
                  })}
                </div>
            </div>)}




        </>
    )
}

export default VideoPage