import React from 'react';
import PageTitle from '../../components/layout/PageTitle/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle/SectionTitle';

function UseCallback() {
    
    const [count, setCount] = React.useState(0);

    const inc = React.useCallback(function(delta) {
        setCount(current => current + delta);
    }, [setCount]);

    return(
        <React.Fragment>
              <PageTitle pageTitle="Hook UseCallback" subTitle="Retorna uma função memorizada" />
              <SectionTitle title="Exercício 01" />
            <a href="https://reactjs.org/docs/hooks-reference.html/#usecallback">Documentação</a>

              <div className="center">
                  <span className="text">{count}</span>
                  <UseCallbackButtons inc={inc}/>
              </div>
        </React.Fragment>
    );
}

export default UseCallback;



function UseCallbackButtons1(props) {
    console.log("Renderizou UseCallbackButtons");
    return(
        <div>
            <button className="btn" onClick={()=>props.inc(6)}>+6</button>
            <button className="btn" onClick={()=>props.inc(12)}>+12</button>
            <button className="btn" onClick={()=>props.inc(18)}>+18</button>
        </div>
    );
}

const UseCallbackButtons = React.memo(UseCallbackButtons1);