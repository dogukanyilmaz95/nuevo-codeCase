"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
class Detail extends react_1.Component {
    constructor(props) {
        super(props);
        this.createTable = () => {
            let componentArr = [];
            componentArr.push(React.createElement("tr", { key: this.state.id },
                React.createElement("td", null, this.state.id),
                React.createElement("td", null, this.state.bookName),
                React.createElement("td", null, this.state.author),
                React.createElement("td", null, this.state.publisher)));
            return componentArr;
        };
        this.state = {
            id: "",
            bookName: "",
            author: "",
            publisher: "",
        };
    }
    render() {
        return React.createElement("div", null,
            React.createElement("table", { className: "table table-hover" },
                React.createElement("thead", null,
                    React.createElement("tr", { key: "header", className: "table-active" },
                        React.createElement("th", { scope: "col" }, "ID"),
                        React.createElement("th", { scope: "col" }, "Kitap Ad\u0131"),
                        React.createElement("th", { scope: "col" },
                            "Yazar",
                            React.createElement("i", { className: "fa fa-cloud" })),
                        React.createElement("th", { scope: "col" }, "Yay\u0131n Evi"))),
                React.createElement("tbody", null, this.createTable())),
            React.createElement(react_bootstrap_1.Button, { className: "btn btn-block" },
                React.createElement(react_router_dom_1.Link, { to: { pathname: "/" } }, "Geri D\u00F6n")));
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
        });
    }
}
exports.default = Detail;
//# sourceMappingURL=Detail.js.map