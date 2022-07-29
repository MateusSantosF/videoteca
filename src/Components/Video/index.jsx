import React from "react"
import {Container,ButtonArea, LikeButton, TrashButton, EditButton} from './styles'


export default function Video({id, title, link, liked}){

    return(
        <li>
            <Container>
                {title}
                <a href={link} target="_blank" rel="noreferrer" >{link}</a>
                <ButtonArea>
                    <LikeButton hasLiked={liked}/>
                    <TrashButton/>
                    <EditButton/>
          
                </ButtonArea>
            </Container>
        </li>
    )
}