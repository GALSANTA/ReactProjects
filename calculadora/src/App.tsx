import React from 'react';
import Button from './components/Button';

import './App.css';

function App() {

  const [visor, setVisor] = React.useState("");

  function calcular(params: string) {

    let numeros: Array<string> = params.split(" ").filter(e => e !== "");


    let novoArray: Array<string> = new Array<string>();



    let op: string = "";

    for (let index = 0; index < numeros.length; index++) {
      if (ehOperacao(numeros[index])) {
        novoArray.push(op);
        novoArray.push(numeros[index]);
        op = "";
      } else if (index === numeros.length - 1) {
        novoArray.push(numeros[index]);
      } else {
        op += numeros[index];
      }
    }

    while (novoArray.length !== 1) {

      let p = pegaOperacaoPrioridade(novoArray);

      if (p !== undefined) {
        
        let result = realizarOperacao(p.operacao, novoArray[p.index - 1], novoArray[p.index + 1]);

        novoArray[p.index-1] = result;
        novoArray.splice(p.index, 2);
      }
    }

    setVisor(novoArray[0]);
  }


  function realizarOperacao(operador: string, num1: string, num2: string) {
    if (operador === "*") {
      return (parseInt(num1) * parseInt(num2)) + "";
    } else if (operador === "/") {
      return (parseInt(num1) / parseInt(num2)) + "";
    } else if (operador === "+") {
      return (parseInt(num1) + parseInt(num2)) + "";
    }
    return (parseInt(num1) - parseInt(num2)) + "";
  }

  interface OperacaoPriridade {
    operacao: string,
    index: number
  }

  function pegaOperacaoPrioridade(array: Array<String>) {

    let p: OperacaoPriridade = { operacao: "", index: 0 };

    for (let index = 0; index < array.length; index++) {
      if (array[index] === "%") {
        p = { operacao: "/", index }
        return p;
      }
    }

    for (let index = 0; index < array.length; index++) {
      if (array[index] === "x") {
        p = { operacao: "*", index }
        return p;
      }
    }

    for (let index = 0; index < array.length; index++) {
      if (array[index] === "+") {
        p = { operacao: "+", index }
        return p;
      }
    }

    for (let index = 0; index < array.length; index++) {
      if (array[index] === "-") {
        p = { operacao: "-", index }
        return p;
      }
    }
  }
  function ehOperacao(op: string) {
    if (op === "x" || op === "+" || op === "%" || op === "-") return true;
    return false
  }
  return (
    <React.Fragment>
      <div className="visor">
        {visor}
      </div>
      <div className="flex-container">
        <div className="content">
          <Button value={"1"} nome={"1"} funcao={setVisor} estado={visor} />
          <Button value={"2"} nome={"2"} funcao={setVisor} estado={visor} />
          <Button value={"3"} nome={"3"} funcao={setVisor} estado={visor} />
          <Button value={"4"} nome={"4"} funcao={setVisor} estado={visor} />
          <Button value={"5"} nome={"5"} funcao={setVisor} estado={visor} />
          <Button value={"6"} nome={"6"} funcao={setVisor} estado={visor} />
          <Button value={"7"} nome={"7"} funcao={setVisor} estado={visor} />
          <Button value={"8"} nome={"8"} funcao={setVisor} estado={visor} />
          <Button value={"9"} nome={"9"} funcao={setVisor} estado={visor} />
          <Button value={"0"} nome={"0"} funcao={setVisor} estado={visor} />
          <Button value={""} nome={"c"} funcao={setVisor} estado={""} />
          <Button value={""} nome={"="} funcao={calcular} estado={visor} />
        </div>

        <div className="content-op">
          <Button value={"+"} nome={"+"} funcao={setVisor} estado={visor} />
          <Button value={"-"} nome={"-"} funcao={setVisor} estado={visor} />
          <Button value={"x"} nome={"x"} funcao={setVisor} estado={visor} />
          <Button value={"%"} nome={"%"} funcao={setVisor} estado={visor} />
        </div>
      </div>

    </React.Fragment>

  );
}

export default App;
