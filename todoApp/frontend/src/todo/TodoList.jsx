import React from 'react';

export default function TodoList(props) {

    const renderRows = () => {
        const list = props.list || [];

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? "markedAsDone" : ""}>{todo.description}</td>
                <td>
                <button className="btn btn-success" onClick={() => props.handleMarkAsDone(todo)} hidden={todo.done}>
                        <i className="bi bi-check"></i>
                    </button>
                    <button className="btn btn-warning" onClick={() => props.handleMarkAsPading(todo)} hidden={!todo.done}>
                        <i className="bi bi-arrow-counterclockwise"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => props.handleRemove(todo._id)} hidden={!todo.done}>
                        <i className="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
        ));
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {
                    renderRows()
                }
            </tbody>
        </table>
    );
}