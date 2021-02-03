import type { FC } from 'react'
import Image from 'next/image'

import type { IMain } from './Main.types'
import * as S from './Main.styles'

export const Main: FC<IMain> = ({
  title = 'NextJS Boilerplate',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <Image
          src="/img/logo.svg"
          alt='Image of an atom with a text next to it written "React Avançado".'
          layout="responsive"
          height={56}
          width={256}
        />
      </S.LogoWrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.IllustrationWrapper>
        <Image
          src="/img/hero-illustration.svg"
          alt="A developer sitting in front of a screen with some codes on it."
          layout="responsive"
          height={373}
          width={427}
        />
      </S.IllustrationWrapper>
    </S.Wrapper>
  )
}
