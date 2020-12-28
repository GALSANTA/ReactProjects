import './Button.css'

interface Botao {
    value:string,
    nome:string,
    funcao: any,
    estado:any
}

export default function Button(props:Botao) {
    return(
        <button onClick={_=>{
            props.funcao(props.estado+" "+props.value)
        }}>{props.nome}</button>
    )
}