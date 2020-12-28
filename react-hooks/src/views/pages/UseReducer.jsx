import React from 'react';
import PageTitle from '../../components/layout/PageTitle/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle/SectionTitle';
import { initialState, reducer } from '../../store/config';
import { numberAdd2, numberMulti7, numberDividir25, numberParser } from '../../store/actions/number';
import { login } from '../../store/actions/user';

function UseReducer() {

    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <React.Fragment>
            <PageTitle pageTitle="Hook UseReducer" subTitle="Uma outra forma de ter estado em componentes funcionais" />
            <SectionTitle title="Exercício 01" />
            <a href="https://reactjs.org/docs/hooks-reference.html/#usereducer">Documentação</a>

            <div className="center">
                <span className="text">{state.user ? state.user : "Não tem Usuário"}</span>
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => login(dispatch)}>Login</button>
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => numberMulti7(dispatch)}>*7</button>
                    <button className="btn" onClick={() => numberDividir25(dispatch)}>/25</button>
                    <button className="btn" onClick={() => numberParser(dispatch)}>parser</button>
                </div>
            </div>
        </React.Fragment>
    );

}

export default UseReducer;