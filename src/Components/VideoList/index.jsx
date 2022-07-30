import React, { useEffect, useState } from "react";
import AddVideo from "../AddVideo";
import Video from "../Video";
import {Container, VideoListWrapper} from './styles'
import api from "../../Services/api";

export default function VideoList(){

    const [videos, setVideos] = useState([])
    useEffect(()=>{
        api.get('videos').then((res)=>{
        
            setVideos(res.data)
        })

       // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <Container>
            <VideoListWrapper>
                {
                    videos?.map(video =>{
                        return <Video  key={video.id} id={video.id} 
                        title={video.title}
                        link={video.link}
                        hasLiked={video.liked}
                        />
                    })
                }

                <AddVideo/>
            </VideoListWrapper>
        </Container>
    )
}