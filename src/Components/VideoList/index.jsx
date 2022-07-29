import React from "react";
import AddVideo from "../AddVideo";
import Video from "../Video";
import {Container, VideoListWrapper} from './styles'

export default function VideoList(){


    return(
        <Container>
            <VideoListWrapper>
                <Video id={1} title="Tittle test" link="www.google.com.br/" liked={false}/>

                <AddVideo/>
            </VideoListWrapper>
        </Container>
    )
}