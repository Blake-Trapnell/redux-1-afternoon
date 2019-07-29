import React, { Component } from "react";
import {Link} from "react-router-dom";
import store, {UPDATE_AUTHOR_FIRST, UPDATE_AUTHOR_LAST} from "../store";

class Author extends Component {
    constructor() {
        super()
        const reduxState = store.getState()
        this.state = {
            authorFirst: reduxState.authorFirst,
            authorLast: reduxState.authorLast
        }
    }
    saveChanges() {
        store.dispatch({
            type: UPDATE_AUTHOR_FIRST,
            payload: this.state.authorFirst
        })
        store.dispatch({
            type: UPDATE_AUTHOR_LAST,
            payload: this.state.authorLast
        })
    }
    render() {
        return (
            <div></div>
        )
    }
}
export default Author;