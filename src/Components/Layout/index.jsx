import Header from "../Header";
import React from "react";
import { Container } from "./style";
import Footer from "../Footer";
import VideoList from "../VideoList";

export default function Layout(){

    return(
        <Container>
            <Header/>
            <VideoList/>
            <Footer/>
        </Container>
    )
}