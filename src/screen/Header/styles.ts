import styled from 'styled-components'
import { defaultTheme } from '../../styles/theme'

interface ContainerProps {
    background: keyof typeof defaultTheme.backgrounds
}

export const Container = styled.div<ContainerProps>`
  background-color: ${props => props.theme.backgrounds[props.background]};
  height: 100vh;
  padding: 80px 60px;
`

export const Title = styled.h1`
  font-size: 2.625rem;
  font-weight: 700;
  margin-bottom: 64px;
  text-align: center;
`
