"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const axios_1 = require("axios");
require("../../node_modules/bootstrap/dist/css/bootstrap.css");
const react_bootstrap_1 = require("react-bootstrap");
const react_router_dom_1 = require("react-router-dom");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.bookList = () => {
            let data = this.state.books;
            let componentArr = [];
            for (let i = 0; i < data.length; i++) {
                componentArr.push(React.createElement("tr", { key: data[i].id },
                    React.createElement("th", { scope: "row" }, i + 1),
                    React.createElement("td", null, data[i].bookName),
                    React.createElement("td", null, data[i].author),
                    React.createElement("td", null, data[i].publisher),
                    React.createElement("td", null,
                        React.createElement("button", { className: "btn btn-outline- btn-sm" },
                            React.createElement(react_router_dom_1.Link, { to: { pathname: "/Detail", hash: data[i].id } }, "Detay")))));
            }
            return (componentArr);
        };
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
        return React.createElement("div", null,
            React.createElement(react_bootstrap_1.Button, { className: "btn btn-block" },
                React.createElement(react_router_dom_1.Link, { to: { pathname: "/Create" } }, "Yeni Kitap Kay\u0131t")),
            React.createElement("table", { className: "table table-hover" },
                React.createElement("thead", null,
                    React.createElement("tr", { key: "searchHeader" },
                        React.createElement("th", { scope: "col" },
                            "Arama : ",
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "search" })),
                        React.createElement("th", { scope: "col" },
                            React.createElement("input", { onChange: this.searchOnTable.bind(this, "BookName"), className: "form-control", placeholder: "Kitap ad\u0131 ile" })),
                        React.createElement("th", { scope: "col" },
                            React.createElement("input", { onChange: this.searchOnTable.bind(this, "Author"), className: "form-control", placeholder: "Yazar ile" })),
                        React.createElement("th", { scope: "col" },
                            React.createElement("input", { onChange: this.searchOnTable.bind(this, "Publisher"), className: "form-control", placeholder: "Yay\u0131n evi ile" })),
                        React.createElement("th", { scope: "col" })),
                    React.createElement("tr", { key: "header", className: "table-active" },
                        React.createElement("th", { scope: "col" }, "#"),
                        React.createElement("th", { scope: "col" }, "Kitap Ad\u0131"),
                        React.createElement("th", { scope: "col", onClick: this.sortOnTable.bind(this, "Author") },
                            "Yazar",
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "sort" })),
                        React.createElement("th", { scope: "col", onClick: this.sortOnTable.bind(this, "Publisher") },
                            "Yay\u0131n Evi",
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "sort" })),
                        React.createElement("th", { scope: "col" }, "Detay"))),
                React.createElement("tbody", null, this.bookList())));
    }
    handleShow() {
        this.setState({ show: true });
    }
    handleHide() {
        this.setState({ show: false });
    }
    componentWillMount() {
        axios_1.default.get("http://5bab6163ecc1a70014306adf.mockapi.io/books")
            .then(res => {
            this.setState({
                books: res.data
            });
            this.bookList();
        });
    }
    searchOnTable(itemType, value) {
        let inputItem = value.currentTarget.value.toLowerCase();
        if (inputItem == "") {
            this.componentWillMount();
        }
        else if (itemType == "BookName") {
            let newData = this.state.books.filter(v => v.bookName.toLowerCase().includes(inputItem));
            this.setState({ books: newData });
        }
        else if (itemType == "Author") {
            let newData = this.state.books.filter(v => v.author.toLowerCase().includes(inputItem));
            this.setState({ books: newData });
        }
        else if (itemType == "Publisher") {
            let newData = this.state.books.filter(v => v.publisher.toLowerCase().includes(inputItem));
            this.setState({ books: newData });
        }
    }
    ;
    sortOnTable(itemType, value) {
        if (itemType == "Author") {
            if (this.state.sortOfAuthor == null || this.state.sortOfAuthor == false) {
                let newData = this.state.books.sort((a, b) => a.author.localeCompare(b.author));
                this.setState({
                    books: newData,
                    sortOfAuthor: true
                });
            }
            else {
                let newData = this.state.books.sort((a, b) => a.author.localeCompare(b.author)).reverse();
                this.setState({
                    books: newData,
                    sortOfAuthor: false
                });
            }
        }
        else {
            if (this.state.sortOfPublisher == null || this.state.sortOfPublisher == false) {
                let newData = this.state.books.sort((a, b) => a.publisher.localeCompare(b.publisher));
                this.setState({
                    books: newData,
                    sortOfPublisher: true
                });
            }
            else {
                let newData = this.state.books.sort((a, b) => a.publisher.localeCompare(b.publisher)).reverse();
                this.setState({
                    books: newData,
                    sortOfPublisher: false
                });
            }
        }
    }
    ;
}
exports.Index = Index;
//# sourceMappingURL=Index.js.map