import React from "react";
import Upload from "../components/uploadwork";
import Navbar from "../components/navbar";
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
