import React from 'react';
import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import axios from 'axios';

const URL = "http://localhost:3003/api/todos";

export default class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { description: "", list: [] };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPading = this.handleMarkAsPading.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.refresh();
    }

    refresh(description = "") {
        const search = description ? `${description}` : ``;
        axios.get(`${URL}/${search}`)
        .then(resp => this.setState({...this.state, description: "", list: resp.data}));
    }

    handleRemove(id) {
        axios.delete(URL+"/"+id).then((resp)=>{
            this.refresh();
        });
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value });
    }

    handleAdd() {
        const description = this.state.description;
        axios.post("http://localhost:3003/api/todos", {description})
        .then(resp => this.refresh());
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
        .then(resp => this.refresh());
    }

    handleMarkAsPading(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
        .then(resp => this.refresh());
    }

    handleSearch() {
        this.refresh(this.state.description);
    }
    
    render() {
        return(
            <div>
                <PageHeader name="Tarefas" small="cadastro" />
                <TodoForm 
                description={this.state.description} 
                handleAdd={this.handleAdd} 
                handleChange={this.handleChange}
                handleSearch={this.handleSearch}
                />
                <TodoList 
                list={this.state.list}
                handleRemove={this.handleRemove}
                handleMarkAsDone={this.handleMarkAsDone}
                handleMarkAsPading={this.handleMarkAsPading}
                />
            </div>
        );
    }
}