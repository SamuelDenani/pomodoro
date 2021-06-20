import React from 'react'

import Counter from '../../components/Counter'

import { Container, Title } from './styles'
import { defaultTheme } from '../../styles/theme'

interface HeaderProps {
  background?: keyof typeof defaultTheme.backgrounds
}

const Header: React.FC<HeaderProps> = ({ background = 'timer' }) => {
  return (
    <Container background={background}>
      <Title>Pomodoro Counter</Title>
      <Counter />
    </Container>
  )
}

export default Header
