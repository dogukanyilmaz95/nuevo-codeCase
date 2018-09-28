import * as React from "react"
import {Link} from "react-router-dom";
import {Component} from "react";
import axios from "axios";
import {Button} from "react-bootstrap";

interface State {
    id: string;
    bookName: string;
    author: string;
    publisher: string;
}

interface Props {

}

export default class Detail extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            id: "",
            bookName: "",
            author: "",
            publisher: "",
        }

    }

    render() {
        return <div>
            <table className="table table-hover">
                <thead>
                <tr key="header" className="table-active">
                    <th scope="col">ID</th>
                    <th scope="col">Kitap Adı</th>
                    <th scope="col">Yazar
                        <i className="fa fa-cloud"/></th>
                    <th scope="col">Yayın Evi</th>
                </tr>
                </thead>
                <tbody>{this.createTable()}</tbody>
            </table>
            <Button className="btn btn-block">
                <Link to={{pathname: "/"}}>Geri Dön</Link>
            </Button>
        </div>
    }


    componentWillMount() {
        fetch("http://5bab6163ecc1a70014306adf.mockapi.io/books/" + window.location.hash.slice(9, window.location.hash.length), {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': '´´application/json',
            }
        }).then((res) => res.json())
            .then((res) => {
                this.setState({
                    id: res.id,
                    bookName: res.bookName,
                    author: res.author,
                    publisher: res.publisher,
                });
                this.createTable();
            })

    }

    createTable = () => {

        let componentArr = [];
        componentArr.push(
            <tr key={this.state.id}>
                <td>{this.state.id}</td>
                <td>{this.state.bookName}</td>
                <td>{this.state.author}</td>
                <td>{this.state.publisher}</td>
            </tr>
        );

        return componentArr;
    }

}