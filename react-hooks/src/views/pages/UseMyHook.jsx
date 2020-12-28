import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import PageTitle from '../../components/layout/PageTitle/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle/SectionTitle';

function UseMyHook() {

    const [count, inc, dec] = useCounter();
    const url = "http://files.cod3r.com.br/curso-react/estados.json";
    const response = useFetch(url);

    function show(states) {
        return states.map(state => <li>{state.nome} - {state.sigla}</li>)
    }

    return (
        <React.Fragment>
            <PageTitle pageTitle="Hook UseMyHook" subTitle="Vamos aprender a criar o nosso próprio hook" />
            <SectionTitle title="Exercício 01" />
            <a href="https://reactjs.org/docs/hooks-custom.html">Documentação</a>

            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => dec()}>
                        -1
                    </button>
                    <button className="btn" onClick={() => inc()}>
                        +1
                    </button>
                </div>
            </div>
            <div className="center">
                <ul>
                    {response.data ? show(response.data): false}
                </ul>
            </div>
            <SectionTitle title="Exercício 02" />
        </React.Fragment>
    );
}

export default UseMyHook;