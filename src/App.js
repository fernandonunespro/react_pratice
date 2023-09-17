import { useState, useEffect } from 'react';
// import Nome from './components/Nome'

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState(() => {
    const tarefasStorage = localStorage.getItem('@tarefas');
    return tarefasStorage ? JSON.parse(tarefasStorage) : [];
  });

function handleRegister(Event) {
  Event.preventDefault();
  const novasTarefas = [...tarefas, input];
    setTarefas(novasTarefas);
    setInput('');
  }

  useEffect(()=>{
    localStorage.setItem('@tarefas', JSON.stringify(tarefas))
  });

return(
  <div>
    <h1>Cadastro de Tarefas</h1>

    <form onSubmit={handleRegister}>
      <label>Nome da tarefa: </label><br></br>
      <input placeholder='Digite uma tarefa' value={input} onChange={ (Event) => setInput(Event.target.value)}></input>
      <br></br>
      <br></br>
      <button type='submit'>Registrar</button>
    </form>

    <br></br>
    <br></br>

    <ul>
      {tarefas.map((tarefa, index) => (
        <li key={index}>{tarefa}
        </li>
      ))}
    </ul>
  </div>
)
}


//FORMULARIO DE REGISTRO SIMPLES 
/*function App(){
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [idade, setIdade] = useState('')

  const [user, setUser] = useState({})

function handleRegister(Event){
  Event.preventDefault();

  setUser({
    nome: nome,
    idade: idade,
    email: email
  })
}

  return(
    <div>
      <form onSubmit={handleRegister}>
        <h1>Cadastrando usuario</h1>

        <label>Nome:</label><br></br>
        <input placeholder='Digite seu nome' 
        value={nome} 
        onChange={ (Event) => setNome(Event.target.value)}>
        </input><br></br>

        <label>Email:</label><br></br>
        <input placeholder='Digite seu email'
        value={email} 
        onChange={ (Event) => setEmail(Event.target.value)}>
        </input><br></br>

        <label>Idade:</label><br></br>
        <input placeholder='Digite sua idade'
        value={idade} 
        onChange={ (Event) => setIdade(Event.target.value)}>
        </input><br></br>
        <br></br>
        <button type='submit'>Registrar</button>
      </form>

      <br></br>
      <div>
        <span>Bem vindo, {user.nome}</span><br></br>
        <span>Idade: {user.idade}</span><br></br>
        <span>Email: {user.email}</span><br></br>
      </div>
    </div>
  )
}
 ---------------------------------------------------------------------------------------------------*/

//FUNCAO PARA MUDAR O NOME AO CLICAR NO BOTAO
/*function App(){
  const [aluno, setAluno] = useState('Sujeito Programador')
  
  function changeName(nome){
    setAluno(nome)
  }

  return(
    <div>
      <h1>Componente App</h1>
      <Nome aluno="Isaque" idade={30}/>
      <h2>Ola, {aluno}</h2>
      <button onClick={ () => changeName ('Theo')}>Change name</button>
    </div>
  );
} */

export default App;

