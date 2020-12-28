import React from 'react';
import PageTitle from '../../components/layout/PageTitle/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle/SectionTitle';

function merge(value1, value2) {
    let retorno = "";
    const arr = (value1 + value2);
    let flag = true;
    let cont = 0;

    while (retorno.length !== arr.length) {
        if (flag) {
            retorno += value1[cont];
            flag = false;
        } else {
            cont--;
            retorno += value2[cont];
            flag = true;
        }

        cont++;
    }

    return retorno;
}

function UseRef() {

    const [value1, setValue1] = React.useState("");
    const count = React.useRef(0);

    const [value2, setValue2] = React.useState("");

    const myInput1 = React.useRef(null);
    const myInput2 = React.useRef(null);

    React.useEffect(function () {
        count.current++;
        myInput2.current.focus();
    }, [value1]);


    React.useEffect(function () {
        count.current++;
        myInput1.current.focus();
    }, [value2]);

    return (
        <React.Fragment>
            <PageTitle pageTitle="Hook UseRef" subTitle="Retorna um objeto multável com propriedade .current" />
            <a href="https://reactjs.org/docs/hooks-reference.html/#useref">Documentação</a>
            <SectionTitle title="Exercício 01" />
            <div className="center">
                <span className="text">Valor: {count.current}</span>
                <span className="text">{merge(value1, value2)}</span>
                <input type="text" className="input"
                    ref={myInput1}
                    value={value1} onChange={(e) => setValue1(e.target.value)} />
            </div>
            <SectionTitle title="Exercício 02" />
            <div className="center">
                <input type="text" className="input"
                    ref={myInput2}
                    value={value2} onChange={(e) => setValue2(e.target.value)} />
            </div>
        </React.Fragment>
    );
}

export default UseRef;