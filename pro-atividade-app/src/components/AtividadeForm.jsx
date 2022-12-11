import {useState, useEffect} from 'react';

const atividadeInicial = {
    id: 0,
    titulo: '',
    prioridade: 0,
    descricao: ''
}

export default function AtividadeForm(props) {
    const [atividade, setAtividade] = useState(atividadeAtual());

    useEffect(()=>{
        if(props.atividadeSelecionada.id !== 0){
            setAtividade(props.atividadeSelecionada)
        }
    },[props.atividadeSelecionada]);

    const inputTextHandler = (e) => {
        const {name, value} = e.target;
        setAtividade({...atividade, [name]:value})
    }

    function atividadeAtual(){
        if(props.atividadeSelecionada.id !== 0){
            return props.atividadeSelecionada;
        }else{
            return atividadeInicial;
        }
    }
    const handleCancelar = (e) => {
        e.preventDefault();
        props.cancelarAtividade();
        setAtividade(atividadeInicial);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(props.atividadeSelecionada.id !== 0)
            props.atualizarAtividade(atividade)
        else
            props.adicionarAtividade(atividade);
        setAtividade(atividadeInicial)
    }

    return (
        <>
            <h1>Atividades {atividade.id !== 0 ? atividade.id : ''}</h1>
            <form className='row g-3' onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="titulo" className="form-label">Título</label>
                    <input
                        id="titulo"
                        type="text"
                        className='form-control'
                        name='titulo'
                        value={atividade.titulo}
                        onChange={inputTextHandler}
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor='prioridade' className="form-label">Prioridade</label>
                    <select
                        id="prioridade"
                        name='prioridade'
                        className="form-select"
                        value={atividade.prioridade}
                        onChange={inputTextHandler}
                    >
                        <option defaultValue={0}>Selecionar...</option>
                        <option value={1}>Baixa</option>
                        <option value={2}>Normal</option>
                        <option value={3}>Alta</option>
                    </select>
                </div>
                <div className="col-md-12">
                    <label htmlFor="descricao" className="form-label">Descrição</label>
                    <textarea
                        id="descricao"
                        type="text"
                        className='form-control'
                        name='descricao'
                        value={atividade.descricao}
                        onChange={inputTextHandler}
                    />
                <hr />
                </div>
                <div className="col-12 mt-0">
                    {
                        atividade.id === 0 ?
                        <button type="submit" className="btn btn-primary"><i className='fas fa-plus me-2'></i> Atividade</button>
                        :
                        <>
                            <button type="submit" className="btn btn-success me-2">
                                <i className='fas fa-plus me-2'></i>
                                Salvar
                            </button>
                            <button type="submit" className="btn btn-warning" onClick={handleCancelar}>
                                <i className='fas fa-plus me-2'></i>
                                Cancelar
                            </button>
                        </>
                    }
                </div>
            </form>
        </>
    );
}