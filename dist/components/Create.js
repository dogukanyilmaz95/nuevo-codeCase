"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("../../node_modules/bootstrap/dist/css/bootstrap.css");
const react_router_dom_1 = require("react-router-dom");
const FormGroup = require("react-bootstrap/lib/FormGroup");
const ControlLabel = require("react-bootstrap/lib/ControlLabel");
const react_bootstrap_1 = require("react-bootstrap");
const Form = require("react-bootstrap/lib/Form");
const ButtonToolbar = require("react-bootstrap/lib/ButtonToolbar");
class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName: "",
            author: "",
            publisher: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e, value) {
        console.log(e);
        if (e == "bookName") {
            this.setState({
                bookName: value.target.value
            });
        }
        else if (e == "author") {
            this.setState({
                author: value.target.value
            });
        }
        else {
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
        }).then((res) => res.json()).then((res) => {
            this.setState({
                bookName: "",
                author: "",
                publisher: ""
            });
        });
    }
    render() {
        let cssStyle = { marginLeft: 200 };
        return (React.createElement(react_bootstrap_1.Well, null,
            React.createElement(Form, { horizontal: true },
                React.createElement(FormGroup, { controlId: "formBasicText" },
                    React.createElement(react_bootstrap_1.Col, { componentClass: ControlLabel, sm: 2 }, "Kitap Ad\u0131"),
                    React.createElement(react_bootstrap_1.Col, { sm: 5 },
                        React.createElement(react_bootstrap_1.FormControl, { type: "text", value: this.state.bookName, onChange: this.handleChange.bind(this, "bookName") }))),
                React.createElement(FormGroup, { controlId: "formBasicText1" },
                    React.createElement(react_bootstrap_1.Col, { componentClass: ControlLabel, sm: 2 }, "Yazar"),
                    React.createElement(react_bootstrap_1.Col, { sm: 5 },
                        React.createElement(react_bootstrap_1.FormControl, { type: "text", value: this.state.author, onChange: this.handleChange.bind(this, "author") }))),
                React.createElement(FormGroup, { controlId: "formBasicText2" },
                    React.createElement(react_bootstrap_1.Col, { componentClass: ControlLabel, sm: 2 }, "Yay\u0131n Evi"),
                    React.createElement(react_bootstrap_1.Col, { sm: 5 },
                        React.createElement(react_bootstrap_1.FormControl, { type: "text", value: this.state.publisher, onChange: this.handleChange.bind(this, "publisher") })))),
            React.createElement(ButtonToolbar, null,
                React.createElement(react_bootstrap_1.Button, null,
                    React.createElement(react_router_dom_1.Link, { to: { pathname: "/" } }, "Geri D\u00F6n")),
                React.createElement(react_bootstrap_1.Button, { type: "submit", style: cssStyle, onClick: this.onSave.bind(this) }, "Kaydet"))));
    }
}
exports.Create = Create;
//# sourceMappingURL=Create.js.map