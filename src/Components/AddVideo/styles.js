import styled from "styled-components";
import {MdOutlineAdd} from 'react-icons/md'

export const AddVideoButton = styled.button`
    list-style:none;
    border:5px dashed white;
    width:220px;
    height:220px;
    background-color: rgba(0,0,0,0.04);
    cursor:pointer;

    border-radius:20px;
    box-shadow: 0 0 10px rgba(0,0,0, 0.08);

    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
`

export const AddIcon = styled(MdOutlineAdd)`
    color:white;
    width: 64px;
    height:64px;
`;