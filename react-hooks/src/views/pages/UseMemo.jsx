import React from 'react';
import PageTitle from '../../components/layout/PageTitle/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle/SectionTitle';

function sum(a, b) {
    const future = Date.now() + 2000;

    while (Date.now() < future) {}
    return parseInt(a) + parseInt(b);
}

function UseMemo() {

    const [n1, setN1] = React.useState(0);
    const [n2, setN2] = React.useState(0);
    const [n3, setN3] = React.useState(0);

   const result = React.useMemo(()=>sum(n1, n2), [n1, n2]);

    return(
        <React.Fragment>
            <PageTitle pageTitle="Hook UseMemo" subTitle="Retorna um valor memorizado!" />
            <SectionTitle title="Exercício 01" />
            <a href="https://reactjs.org/docs/hooks-reference.html/#usememo">Documentação</a>
            <div className="center">
                <input type="number" className="input" value={n1} onChange={(e)=>setN1(e.target.value)}/>
                <input type="number" className="input" value={n2} onChange={(e)=>setN2(e.target.value)}/>
                <input type="number" className="input" value={n3} onChange={(e)=>setN3(e.target.value)}/>
                <span className="text">{result}</span>
            </div>
        </React.Fragment>
    );
}

export default UseMemo;