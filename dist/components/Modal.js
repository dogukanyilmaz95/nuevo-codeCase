"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const react_1 = require("react");
class BooksModal extends react_1.Component {
    constructor(props) {
        super(props);
        this.onChange = (type, event) => {
            let state = {};
            let value = event.target.value;
            // state[type] = value;
            // this.setState(state);
            //
            // if (this.props.onChangeInput) {
            //     this.props.onChangeInput(type, value);
            // }
        };
        this.close = () => {
        };
        this.state = {
            bookName: "",
            author: "",
            publisher: "",
        };
    }
    render() {
        if (!this.props.open) {
            return null;
        }
        let show = this.props.open ? "block" : "none";
        return (React.createElement("div", { className: "modal", role: "dialog", style: { display: show }, "aria-labelledby": "ModalLabel", "aria-hidden": "true" },
            React.createElement(react_bootstrap_1.Modal.Dialog, { role: "document" },
                React.createElement(react_bootstrap_1.Modal.Header, null,
                    React.createElement(react_bootstrap_1.Modal.Title, null, this.props.title),
                    React.createElement(react_bootstrap_1.Button, { className: "close", "data-dismiss": "modal", "aria-label": "Close", onClick: this.close },
                        React.createElement("span", { "aria-hidden": "true" }, "\u00D7"))),
                React.createElement(react_bootstrap_1.Modal.Body, null,
                    React.createElement("div", { className: "input-group-sm" },
                        React.createElement("span", { className: "input-group-addon" }, "Book Name *"),
                        React.createElement("input", { type: "text", className: "form-control", value: this.state.bookName, onChange: this.onChange.bind(this, "name") })),
                    React.createElement("div", { className: "input-group-sm" },
                        React.createElement("span", { className: "input-group-addon" }, "Author *"),
                        React.createElement("input", { type: "text", className: "form-control", value: this.state.author, onChange: this.onChange.bind(this, "surname") })),
                    React.createElement("div", { className: "input-group-sm" },
                        React.createElement("span", { className: "input-group-addon" }, "Publisher *"),
                        React.createElement("input", { type: "text", className: "form-control", value: this.state.publisher, onChange: this.onChange.bind(this, "email") }))),
                React.createElement(react_bootstrap_1.Modal.Footer, null,
                    React.createElement(react_bootstrap_1.Button, { className: "btn btn-secondary", "data-dismiss": "modal" }, "LAAPT")))));
    }
}
exports.default = BooksModal;
//# sourceMappingURL=Modal.js.map