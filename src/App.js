import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Functional from "./components/Functionalprops";
import Class from "./components/Classprops";
import Home from "./components/Home";
import State from "./components/State";
import Event from "./components/Event";
import Hooks from "./components/Lifecyclehooks";
import Bind from "./components/Bind";
import Refs from "./components/Refs";
import Hoc from "./components/Hoc";
import Httpaccessget from "./components/Httpaccessget";
import Httpaccesspost from "./components/Httpaccesspost";
import SetState from "./components/SetState";
import ForceUpdate from "./components/ForceUpdate";
import ReactDOMfindDOMNode from "./components/ReactDOMfindDOMNode";
import { Switch, Route, Link } from "react-router-dom";
import Main from './components/Namespace';

function App() {
    const Name=()=>(
        <Main title="Parent function"></Main>
    )
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/functional">
                                    FunctionalProps
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/class">
                                    ClassProps
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/state">
                                    State
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/event">
                                    EventHandling
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/hooks">
                                    Hooks
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/bind">
                                    Bind
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/refs">
                                    Refs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/hoc">
                                    Hoc
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/httpaccessget">
                                    HTTPAccessGET
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/httpaccesspost">
                                    HTTPAccessPOST
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/setstate">
                                    SetState
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/forceupdate">
                                    ForceUpdate
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/reactdomfinddomnode"
                                >
                                    ReactDOMfindDOMNode
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/namespace">
                                    Namespace   
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/functional">
                    <Functional name="Rahul" />
                    <Functional name="Abhiram" />
                    <Functional name="Gayal" />
                    <Functional name="Aiswarya" />
                    <Functional name="Athira" />
                </Route>
                <Route path="/class">
                    <Class id="1" />
                    <Class id="2" />
                    <Class id="3" />
                    <Class id="4" />
                    <Class id="5" />
                </Route>
                <Route path="/state">
                    <State />
                </Route>
                <Route path="/event">
                    <Event />
                </Route>
                <Route path="/hooks">
                    <Hooks />
                </Route>
                <Route path="/bind">
                    <Bind />
                </Route>
                <Route path="/refs">
                    <Refs />
                </Route>
                <Route path="/hoc">
                    <Hoc />
                </Route>
                <Route path="/httpaccessget">
                    <Httpaccessget />
                </Route>
                <Route path="/httpaccesspost">
                    <Httpaccesspost />
                </Route>
                <Route path="/setstate">
                    <SetState />
                </Route>
                <Route path="/forceupdate">
                    <ForceUpdate />
                </Route>
                <Route path="/reactdomfinddomnode">
                    <ReactDOMfindDOMNode />
                </Route>
                <Route path="/namespace">
                    <Name />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
