import React, { useContext } from "react"
import { VideoContext } from "../../Contexts/VideoContext"
import {Container,ButtonArea, LikeButton, TrashButton, EditButton} from './styles'


export default function Video({id, title, link, hasLiked}){

    const {handleEdit, handleLike, handleDelete} = useContext(VideoContext)

 
    return(
        <li>
            <Container>
                {title}
                <a href={link} target="_blank" rel="noreferrer" >{link}</a>
                <ButtonArea>
                    <LikeButton onClick={()=>{handleLike(id)}} hasLiked={hasLiked}/>
                    <TrashButton onClick={()=>{handleDelete(id)}}/>
                    <EditButton onClick={()=>{handleEdit(id, title, link)}}/>      
                </ButtonArea>
            </Container>
        </li>
    )
}