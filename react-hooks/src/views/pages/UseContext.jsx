import React, { useContext } from 'react';
import PageTitle from '../../components/layout/PageTitle/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle/SectionTitle';

import { DataContext } from '../../data/DataContext';
import { AppContext } from '../../data/Store';

function UserContext() {

    const context = useContext(DataContext);

    const context2 = useContext(AppContext)

    function addNumber(delta) {
        context.setState({
            ...context.state,
            number: context.state.number + delta
        });
    }

    return (
        <React.Fragment>
            <PageTitle pageTitle="Hook UseContext" subTitle="Aceita um objeto de contexto e retorna o valor atual do contexto" />
            <SectionTitle title="Exercício 01" />
            <a href="https://reactjs.org/docs/hooks-reference.html/#usecontext">Documentação</a>

            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>
                <div>
                    <button className="btn" onClick={()=>addNumber(-1)}>-1</button>
                    <button className="btn" onClick={()=>addNumber(+1)}>+1</button>
                </div>
            </div>

            <SectionTitle title="Exercício 02" />
            <div className="center">
                <span className="text">{context2.number}</span>
                <span className="text">{context2.text}</span>
                <div>
                    <button className="btn" onClick={()=>context2.setNumber(context2.number - 1)}>-1</button>
                    <button className="btn" onClick={()=>context2.setNumber(context2.number + 1)}>+1</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default UserContext;