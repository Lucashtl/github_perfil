import { useState, useEffect } from "react";

const Formulario = () => {
    let [MateriaA, setMateriaA] = useState(0);
    let [MateriaB, setMateriaB] = useState(0);
    let [MateriaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');

    useEffect(() =>{
        console.log('O nome mudou');
    }, [nome])

    useEffect(() =>{
        console.log('A nota mudou para:'+ MateriaA);
    }, [MateriaA, MateriaB , MateriaC])

    useEffect(() =>{
        console.log('o componente iniciou')
        return() =>{
            console.log('o componente finalizou')
        }
    }, [])

    const alteraNome = (evento) =>{

        setNome(estadoAnterior => {

            return evento.target.value;
        })
    }

    const retornaMedia = () => {
        const soma = parseInt(MateriaA) + parseInt(MateriaB) + parseInt(MateriaC);
        const media = soma / 3;
        console.log(soma)

        if (media >= 7) {
            return (
                <p>
                    Olá {nome}, Você foi aprovado
                </p>
            )
        } else {
            return (
                <p>
                    Olá  {nome}, Você foi reprovado
                </p>
            )
        }
    }

    return (
        <form >
            <input type="text" placeholder="digite seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota maxíma matéia A" onChange={({target}) => setMateriaA(target.value)} />
            <input type="number" placeholder="Nota maxíma matéia B" onChange={evento => setMateriaB(evento.target.value)} />
            <input type="number" placeholder="Nota maxíma matéia C" onChange={evento => setMateriaC(evento.target.value)} />
            {retornaMedia(0)}


        </form>
    )

}

export default Formulario;