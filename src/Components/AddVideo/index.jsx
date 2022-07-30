import React from "react";

import {AddVideoButton, AddIcon} from './styles'
import { VideoContext } from "../../Contexts/VideoContext";
import { useContext } from "react";

export default function AddVideo(){

    const {openModal} = useContext(VideoContext)

    return(
        <li>
            <AddVideoButton onClick={openModal}>
                <AddIcon/>
            </AddVideoButton>
        </li>
    )
}