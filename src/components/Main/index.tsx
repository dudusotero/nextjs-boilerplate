import type { FC } from 'react'

import type { IMain } from './types'
import * as S from './styles'

const Main: FC<IMain> = ({
  title = 'NextJS Boilerplate',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt='Image of an atom with a text next to it written "React Avançado".'
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="A developer sitting in front of a screen with some codes on it."
      />
    </S.Wrapper>
  )
}

export default Main
