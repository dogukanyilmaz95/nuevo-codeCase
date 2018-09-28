import * as React from "react";
import * as ReactDOM from "react-dom";
import {HashRouter, Switch, Route} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'

import {Index} from "./components/Index";
import {Create} from "./components/Create";
import Detail from "./components/Detail";
library.add(fas);


ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact={true} path="/" component={Index}></Route>
            <Route path="/Create" component={Create}></Route>
            <Route path="/Detail" component={Detail}></Route>
        </Switch>
    </HashRouter>,
    document.getElementById("example")
);