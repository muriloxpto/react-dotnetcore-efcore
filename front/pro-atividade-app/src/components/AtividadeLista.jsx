import React from 'react';
import Atividade from './Atividade.jsx';

export default function AtividadeLista(props){
    return(
        <div className="mt-3">
            {props.atividades.map(atividade => (
                <Atividade
                    key={atividade.id}
                    atividade={atividade}
                    deletarAtividade={props.deletarAtividade}
                    pegarAtividade={props.pegarAtividade}
                />
            ))}
        </div>
    );
}