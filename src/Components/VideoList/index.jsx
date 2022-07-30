import React, { useEffect, useState } from "react";
import AddVideo from "../AddVideo";
import Video from "../Video";
import {Container, VideoListWrapper} from './styles'
import api from "../../Services/api";

import { useAxios } from "../../Hooks/useAxios";

export default function VideoList(){


    const {data} = useAxios('videos')


    return(
        <Container>
            <VideoListWrapper>
                {
                    data?.map(video =>{
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