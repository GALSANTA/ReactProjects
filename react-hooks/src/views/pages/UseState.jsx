import React from 'react';
import PageTitle from '../../components/layout/PageTitle/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle/SectionTitle';

function UseState() {

    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState("Inicial...");

    return (
        <React.Fragment>
            <PageTitle pageTitle="Hook UseState" subTitle="Estado em componentes funcionais" />
            <a href="https://pt-br.reactjs.org/docs/hooks-state.html">Documentação</a>
            <SectionTitle title="Exercício 01" />
            <div className="center">
                <span className="text">
                    {count}
                </span>
                <div>
                    <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
                    <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
                    <button className="btn" onClick={() => setCount(current => current + 1000)}>1000</button>
                </div>
            </div>

            <SectionTitle title="Exercício 02" />
            <span className="text">{name}</span>
            <input type="text" className="input" value={name} onChange={e => setName(e.target.value)}/>
        </React.Fragment>
    );
}

export default UseState;