import React, {Button} from "react";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Draft from "../components/draft/main";
import Navbar from "../components/NavBars/mainNavbar";
import TitleInfo from "../components/publish/titleInfo";
import GenreInfo from "../components/publish/genreInfo";
// import { Container } from "react-bootstrap";

function DraftPage() {
    return (
        <div>
            <Navbar />
            <Draft />
        </div>
    );
}

export default DraftPage;
