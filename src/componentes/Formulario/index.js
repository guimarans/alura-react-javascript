import {useState} from 'react';
import Botao from '../Botao';
import CampoTexto from '../CompoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';


const Formulario = (props) => {
    const times = [
        '',
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ];

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');


    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('Form foi submetido => ', nome, cargo, imagem, time);
        props.aoColaboradorCadastrado({
            nome, cargo, imagem, time
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    obrigatorio={true}
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    obrigatorio={true}
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    label="Time" 
                    items={times} 
                    obrigatorio={true}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}

                />
                <Botao> Criar card </Botao>
            </form>
        </section>
    )
}

export default Formulario;