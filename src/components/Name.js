import React, {Component} from "react";
import {Link} from "react-router-dom"
import store, {UPDATE_NAME, UPDATE_CATEGORY} from "../store"


class Name extends Component {
    constructor() {
        super() 
        const reduxState = store.getState()
        this.state ={ 
            name: reduxState.name,
            category: reduxState.category
        }
    }
    saveChanges() {
        store.dispatch({
            type: UPDATE_NAME,
            payload: this.State.name
        })
        store.dispatch({
            type: UPDATE_CATEGORY,
            payload: this.state.category
        })
    }
    render() {
        return(
            
        )
    }
}
    export default Name;