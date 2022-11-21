import { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component{
    render(){
        return(
            <ul>
                {this.compareDocumentPosition.todos.map(todo => <Todo key = {todo.id}{...todo}/>)}
            </ul>
        )
    }
}