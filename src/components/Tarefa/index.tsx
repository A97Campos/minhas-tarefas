import * as S from './style'

export const Tarefa = () => (
  <S.Card>
    <S.Titulo>Nome da Tarefa</S.Titulo>
    <S.Tag>importante</S.Tag>
    <S.Tag>pendente</S.Tag>
    <S.Descricao />
    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcoes>
  </S.Card>
)
