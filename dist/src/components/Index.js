"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const axios_1 = require("axios");
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            selection: []
        };
        this.changeSelection = this.changeSelection.bind(this);
    }
    changeSelection() {
        console.log(this);
    }
    render() {
        return React.createElement("h1", null);
    }
    componentWillMount() {
        axios_1.default.get("http://5bab6163ecc1a70014306adf.mockapi.io/books")
            .then(res => {
            this.setState({
                books: res.data
            });
            console.log(res);
        });
    }
}
exports.Index = Index;
//# sourceMappingURL=Index.js.map