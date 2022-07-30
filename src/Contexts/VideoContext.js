import { Children, createContext, useState } from "react";
import Form from "../Components/Form";
import { useAxios } from "../Hooks/useAxios";
import api from '../Services/api'

export const VideoContext = createContext();



export function VideoContextProvider({children}){


    const {data, mutate} = useAxios('videos')

    const [openFormModel, setFormModel] = useState(false)
    const [title, setTitle] = useState('')
    const [link, setLink] = useState('')
    const [videoId, setVideoId] = useState('')

    function handleTitle(e){
        setTitle(e.target.value)
    }

    function handleLink(e){
        setLink(e.target.value)

    }

    function openModal(){
        setFormModel(true)
     
    }

    function closeModal(){
        setFormModel(false)
        clearFormInput()
    }

    function handleFormSubmit(e){
        e.preventDefault()
        const video = { title, link, liked:false}

        if(videoId){

            api.put(`videos/${videoId}`, video);
            const updatedVideos = data.map(video =>{
                if( video.id === videoId){
                    return {...video, title,link}
                }
                return video
            })
         
            mutate(updatedVideos, false)
        }else{
            api.post('videos', video)

            const updatedVideos = [...data, video]
            mutate(updatedVideos, false)
        }
        setVideoId(false)
        closeModal()        
    }

    function handleLike(videoId){
        api.get(`videos/${videoId}`).then((data)=>{

            let video = data.data;
            video.liked = !video.liked;

            api.patch(`videos/${videoId}`, video);
        })
    
        
        const updatedVideos = data.map( (video) =>{
            
            if(video.id === videoId){
                return {...video, liked:!video.liked};
            }
            return video;

        })

        mutate(updatedVideos, false)
    }

    function handleDelete(videoId){
        api.delete(`videos/${videoId}`);

        const nonDeletedVideos = data.filter( video => (video.id !== videoId))
        mutate(nonDeletedVideos, false)
    }

    function handleEdit(videoId, videoTitle, videoLink){
        setTitle(videoTitle)
        setLink(videoLink)
        setVideoId(videoId)

        openModal()
    }

    function clearFormInput(){
        setLink('')
        setTitle('')
    }



    return(
        <VideoContext.Provider value={{
           openModal,
           closeModal,
           handleTitle,
           handleLink,
           handleFormSubmit,
           handleEdit,
           handleDelete,
           handleLike,
           title,
           link
        }}>
        {children}
        {openFormModel && <Form/>}
        </VideoContext.Provider>
    )
}