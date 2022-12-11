import './App.css';
import {useEffect, useState} from 'react'
import AtividadeForm from './components/AtividadeForm.jsx';
import AtividadeLista from './components/AtividadeLista.jsx';

let initialStateAtividades = []

function App() {
  const [index, setIndex] = useState(0);
  const [atividades, setAtividades] = useState(initialStateAtividades);
  const [atividade, setAtividade] = useState({id: 0});

  useEffect(()=>{
    atividades.length <= 0 ? setIndex(1) : setIndex(Math.max.apply(Math, atividades.map((item) => item.id)) + 1)
  },[atividades]);

  function adicionarAtividade(atividade){
    setAtividades([...atividades, {...atividade, id: index}]);
  }
  function atualizarAtividade(atividade){
    setAtividades(atividades.map(item => item.id === atividade.id ? atividade : item));
    setAtividade({id : 0})
  }
  function cancelarAtividade(){
    setAtividade({id : 0})
  }
  function deletarAtividade(id){
    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
    setAtividades([...atividadesFiltradas]);
  }
  function pegarAtividade(id){
    const atividade = atividades.filter(atividade => atividade.id === id);
    setAtividade(atividade[0])
  }

  return (
    <>
      <AtividadeForm
        adicionarAtividade={adicionarAtividade}
        atividadeSelecionada={atividade}
        atividades={atividades}
        atualizarAtividade={atualizarAtividade}
        cancelarAtividade={cancelarAtividade}
      />
      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
        pegarAtividade={pegarAtividade}
      />
    </>
    
  );
}

export default App;
