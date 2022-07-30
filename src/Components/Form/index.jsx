
import { useContext } from "react";
import { VideoContext } from "../../Contexts/VideoContext";
import {
    Overlay,
    Container,
    Header,
    CloseIcon,
    FormContainer,
    FormMain,
    InputGroup,
    Footer,
    CheckIcon,
  } from "./styles";


export default function Form(){

    const {closeModal, handleTitle, handleLink,handleFormSubmit, title, link} = useContext(VideoContext)
    return(
        <Overlay>
            <Container>
                <Header>
                    <button type="button" onClick={closeModal}>
                        <CloseIcon/>
                    </button>

                </Header>
                <FormContainer>
                    <FormMain>
                        <InputGroup>
                            <label htmlFor="title">title</label>
                            <input id="title" type="text" value={title} onChange={handleTitle}/>
                        </InputGroup>
                        <InputGroup>
                        <label htmlFor="link">link</label>
                        <input id="link" type="text" value={link}  onChange={handleLink}/>
                        </InputGroup>
                    </FormMain>
                    <Footer>
                    <button type="submit" onClick={handleFormSubmit}>
                        <CheckIcon/>
                    </button>
                    </Footer>
                </FormContainer>
            </Container>
        </Overlay>
    )
}