import { Tarefa } from '../../components/Tarefa'
import { Container } from './style'

const tarefas = [
  {
    titulo: 'pagar a conta de internet',
    descricao: 'baixar a fatura no email',
    prioridade: 'urgente',
    status: 'concluida'
  },
  {
    titulo: 'ir para a academia',
    descricao: 'fazer treino b',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'estudar React',
    descricao: 'Assistir aula 32',
    prioridade: 'urgente',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como : &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
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

export default ListaDeTarefas
