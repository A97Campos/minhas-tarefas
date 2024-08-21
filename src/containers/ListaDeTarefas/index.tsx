import { useSelector } from 'react-redux'

import { Tarefa } from '../../components/Tarefa'
import { Container } from './style'

import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const estado = useSelector((state: RootReducer) => state.tarefas)

  return (
    <Container>
      <p>
        2 tarefas marcadas como : &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {estado.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
