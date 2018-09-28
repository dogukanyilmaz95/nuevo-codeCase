import * as React from "react";
import axios from 'axios';
import {BooksEntity} from "../Model/booksEntity";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import {Button} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


interface State {
    books: BooksEntity[];
    data: BooksEntity[];
    searchInput: string;
    sortOfAuthor: boolean;
    sortOfPublisher: boolean;
    show: boolean;

}

interface Props {
}


export class Index extends React.Component<any, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            books: [],
            data: [{
                id: "",
                bookName: "",
                author: "",
                publisher: ""
            }],
            searchInput: "",
            sortOfAuthor: null,
            sortOfPublisher: null,
            show: null
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }


    render() {

        // @ts-ignore
        return <div>
            <Button className="btn btn-block">
                <Link to={{pathname: "/Create"}}>Yeni Kitap Kayıt</Link>
            </Button>
            <table className="table table-hover">
                <thead>
                <tr key="searchHeader">
                    <th scope="col">Arama : <FontAwesomeIcon icon="search"/></th>
                    <th scope="col">
                        <input onChange={this.searchOnTable.bind(this, "BookName")} className="form-control"
                               placeholder="Kitap adı ile"></input>
                    </th>
                    <th scope="col">
                        <input onChange={this.searchOnTable.bind(this, "Author")} className="form-control"
                               placeholder="Yazar ile"></input>

                    </th>
                    <th scope="col">
                        <input onChange={this.searchOnTable.bind(this, "Publisher")} className="form-control"
                               placeholder="Yayın evi ile"></input>

                    </th>
                    <th scope="col"></th>
                </tr>
                <tr key="header" className="table-active">
                    <th scope="col">#</th>
                    <th scope="col">Kitap Adı</th>
                    <th scope="col" onClick={this.sortOnTable.bind(this, "Author")}>Yazar
                        <FontAwesomeIcon icon="sort"/></th>
                    <th scope="col" onClick={this.sortOnTable.bind(this, "Publisher")}>Yayın Evi
                        <FontAwesomeIcon icon="sort"/></th>
                    <th scope="col">Detay</th>
                </tr>
                </thead>
                <tbody>{this.bookList()}</tbody>
            </table>

        </div>;
    }

    handleShow() {
        this.setState({show: true});
    }

    handleHide() {
        this.setState({show: false});
    }

    componentWillMount() {
        axios.get("http://5bab6163ecc1a70014306adf.mockapi.io/books")
            .then(res => {
                this.setState({
                    books: res.data
                });
                this.bookList();
            })
    }

    bookList = () => {
        let data = this.state.books;
        let componentArr = [];

        for (let i = 0; i < data.length; i++) {
            componentArr.push(
                <tr key={data[i].id}>
                    <th scope="row">{i + 1}</th>
                    <td>{data[i].bookName}</td>
                    <td>{data[i].author}</td>
                    <td>{data[i].publisher}</td>
                    <td>
                        <button className="btn btn-outline- btn-sm">
                            <Link to={{pathname: "/Detail", hash: data[i].id}}>Detay</Link>

                        </button>
                    </td>
                </tr>
            )
        }

        return (componentArr);
    };

    searchOnTable(itemType: any, value: any) {
        let inputItem = value.currentTarget.value.toLowerCase();

        if (inputItem == "") {
            this.componentWillMount();
        } else if (itemType == "BookName") {
            let newData = this.state.books.filter(v => v.bookName.toLowerCase().includes(inputItem));
            this.setState({books: newData})
        } else if (itemType == "Author") {
            let newData = this.state.books.filter(v => v.author.toLowerCase().includes(inputItem));
            this.setState({books: newData})
        } else if (itemType == "Publisher") {
            let newData = this.state.books.filter(v => v.publisher.toLowerCase().includes(inputItem));
            this.setState({books: newData})
        }


    };

    sortOnTable(itemType: any, value: any) {
        if (itemType == "Author") {
            if (this.state.sortOfAuthor == null || this.state.sortOfAuthor == false) {
                let newData = this.state.books.sort((a, b) => a.author.localeCompare(b.author));
                this.setState({
                    books: newData,
                    sortOfAuthor: true
                });
            } else {
                let newData = this.state.books.sort((a, b) => a.author.localeCompare(b.author)).reverse();
                this.setState({
                    books: newData,
                    sortOfAuthor: false
                });
            }
        } else {
            if (this.state.sortOfPublisher == null || this.state.sortOfPublisher == false) {
                let newData = this.state.books.sort((a, b) => a.publisher.localeCompare(b.publisher));
                this.setState({
                    books: newData,
                    sortOfPublisher: true
                });
            } else {
                let newData = this.state.books.sort((a, b) => a.publisher.localeCompare(b.publisher)).reverse();
                this.setState({
                    books: newData,
                    sortOfPublisher: false
                });
            }
        }

    };

}