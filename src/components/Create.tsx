import * as React from "react";
import axios from 'axios';
import {BooksEntity} from "../Model/booksEntity";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import {Link} from 'react-router-dom';
import * as FormGroup from "react-bootstrap/lib/FormGroup";
import * as ControlLabel from "react-bootstrap/lib/ControlLabel";
import {Alert, Button, Clearfix, Col, FormControl, HelpBlock, Row, Well} from "react-bootstrap";
import * as Label from "react-bootstrap/lib/Label";
import * as Form from "react-bootstrap/lib/Form";
import * as ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";

interface State {
    bookName: string;
    author: string;
    publisher: string;
}

interface Props {
}

export class Create extends React.Component<any, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            bookName: "",
            author: "",
            publisher: "",

        };
        this.handleChange = this.handleChange.bind(this);

    }


    handleChange(e: any, value: any) {
        console.log(e);
        if (e == "bookName") {
            this.setState({
                bookName: value.target.value
            });
        } else if (e == "author") {
            this.setState({
                author: value.target.value
            });
        } else {
            this.setState({
                publisher: value.target.value
            });
        }

    }


    onSave() {
        fetch("http://5bab6163ecc1a70014306adf.mockapi.io/books", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                bookName: this.state.bookName,
                author: this.state.author,
                publisher: this.state.publisher
            })
        }).then((res) => res.json()).then(
            (res) => {
                this.setState({
                    bookName: "",
                    author: "",
                    publisher: ""
                });
            }
        )


    }

    render() {
        let cssStyle = {marginLeft: 200};
        return (
            <Well>
                <Form horizontal>
                    <FormGroup controlId="formBasicText">
                        <Col componentClass={ControlLabel} sm={2}>
                            Kitap Adı
                        </Col>
                        <Col sm={5}>
                            <FormControl
                                type="text"
                                value={this.state.bookName}
                                onChange={this.handleChange.bind(this, "bookName")}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formBasicText1">
                        <Col componentClass={ControlLabel} sm={2}>
                            Yazar
                        </Col>
                        <Col sm={5}>
                            <FormControl
                                type="text"
                                value={this.state.author}
                                onChange={this.handleChange.bind(this, "author")}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formBasicText2">
                        <Col componentClass={ControlLabel} sm={2}>
                            Yayın Evi
                        </Col>
                        <Col sm={5}>
                            <FormControl
                                type="text"
                                value={this.state.publisher}
                                onChange={this.handleChange.bind(this, "publisher")}
                            />
                        </Col>
                    </FormGroup>
                </Form>

                <ButtonToolbar>
                    <Button>
                        <Link to={{pathname: "/"}}>Geri Dön</Link>
                    </Button>

                    <Button type="submit" style={cssStyle} onClick={this.onSave.bind(this)}>Kaydet</Button>
                </ButtonToolbar>
            </Well>
        );
    }
}