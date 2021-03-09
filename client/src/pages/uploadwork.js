import React, {Button} from "react";
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/nav'
import Upload from "../components/uploadwork/main";
import Navbar from "../components/NavBars/mainNavbar";
import TitleInfo from "../components/uploadwork/titleInfo";
import GenreInfo from "../components/uploadwork/genreInfo";

function uploadwork() {
    return (
        <div>
            <Navbar />
            <Upload>
            <Card>
                <Card.Header>
                    <Nav variant="pills" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link href="#first">Title</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">Genre</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <TitleInfo></TitleInfo>
                <GenreInfo></GenreInfo>
                <Button variant="primary">Publish</Button>
                </Card>
            </Upload>
        </div>
    );
}

export default uploadwork;
