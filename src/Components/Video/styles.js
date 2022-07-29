import styled from "styled-components";
import {IoTrashBin, IoThumbsUp, IoPencil} from 'react-icons/io5'

export const Container = styled.div`
    list-style:none;
    border:5px dashed white;
    width:220px;
    height:220px;
    background-color: white;


    border-radius:20px;
    box-shadow: 0 0 10px rgba(0,0,0, 0.08);

    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;

    a {
        border-left: 3px solid #bbbbbb;
        padding-left: 10px;
        max-width: 230px;
        color: #999999;
        font-style: italic;
        align-self: flex-start;

        white-space:nowrap;
        overflow:hidden;
        text-overflow: ellipsis;
    }
`;

export const ButtonArea = styled.div`
    display:flex;
    width:100%;
    justify-content: space-around;

    svg{
        width:16px;
        height:16px;
    }
`;



export const LikeButton = styled(IoThumbsUp)`
        cursor:pointer;
        color: ${(props)=>(props.hasLiked ? "green" : "black")}
`;
export const EditButton = styled(IoPencil)`
        cursor:pointer;
`;
export const TrashButton = styled(IoTrashBin)`
        cursor:pointer;
`;