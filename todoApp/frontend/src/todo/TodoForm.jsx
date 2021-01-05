import React from 'react';

export default function TodoForm(props) {
    const keyHeandler = (e) => {
        if (e.key === "Enter") {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === "Escape") {
            props.handleClear();
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-9 col-md-10">
                    <input id="description" type="text" 
                    className="form-control" 
                    placeholder="Adicione uma tarefa" 
                    onChange={props.handleChange} 
                    onKeyUp={keyHeandler}
                    value={props.description}/>

                </div>
                <div className="col-sx-12 col-sm-3 col-md-2">
                    <button className="btn btn-primary" onClick={props.handleAdd}>
                        <i className="bi bi-plus"></i>
                    </button>
                    <button className="btn btn-primary" onClick={props.handleSearch}>
                        <i className="bi bi-search"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}