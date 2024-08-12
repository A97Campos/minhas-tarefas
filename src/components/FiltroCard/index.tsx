import * as S from '../style'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
}

export const FiltroCard = ({ ativo, contador, legenda }: Props) => (
  <S.Card ativo={ativo}>
    <S.Contador>{contador}</S.Contador>
    <S.Label>{legenda}</S.Label>
  </S.Card>
)
