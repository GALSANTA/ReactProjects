import React from 'react';
import PageTitle from '../../components/layout/PageTitle/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle/SectionTitle';

function calcularFatorial(number) {
    const n = parseInt(number);
    if (n < 0) return -1;
    if (n === 0) return 1;
    return calcularFatorial(n-1) * n;
}

function imparOuPar(number) {
    const n = parseInt(number);
    if (n % 2 === 0) return true;
    return false;
}

function UseEffect() {

    const [number, setNumber] = React.useState(0);
    const [fatorial, setFatorial] = React.useState(0);
    const [number2, setNumber2] = React.useState(1); 
    const [parImpar, setParImpar] = React.useState(1);

    React.useEffect(function() {
        setFatorial(calcularFatorial(number));
    }, [number]);

    React.useEffect(function() {
        if (imparOuPar(number2)) setParImpar("Par");
        else setParImpar("Impar");
    }, [number2]);

    return (
        <React.Fragment>
            <PageTitle pageTitle="Hook UseEffect" subTitle="Permite executar efeitos colaterais em componentes funcionais" />
            <a href="https://reactjs.org/docs/hooks-reference.html/#useeffect">Documentação</a>
            <SectionTitle title="Exercício 01" />
            <div className="center">
                <span className="text">Fatorial</span>
                <span className="text">{fatorial === -1 ? "Não possível": fatorial }</span>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercício 02" />
            <div className="center">
            <span className="text">Impar ou Par</span>
                <span className="text">{parImpar}</span>
                <input type="number" className="input" value={number2} onChange={e => setNumber2(e.target.value)} />
            </div>
        </React.Fragment>

    );
}

export default UseEffect;