import React, { useState } from 'react'
import useCountdown from 'react-countdown-hook'

import { Container, ActionButton, ModeContainer, ModeButton } from './styles'

const defaultTime = 25 * 60 * 1000
const interval = 1000

const Counter: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [timeLeft, { start, pause, resume, reset }] = useCountdown(
    defaultTime,
    interval
  )

  const handleActionButtonClick = () => {
    !isRunning ? start() : pause()

    setIsRunning((prev) => !prev)
  }

  return (
    <Container>
      <ModeContainer>
        <ModeButton>work</ModeButton>
        <ModeButton>break</ModeButton>
      </ModeContainer>

      <span>{(timeLeft / 1000).toFixed(2) || '25:00'}</span>

      <ActionButton onClick={handleActionButtonClick}>
        {isRunning ? 'stop' : 'start'}
      </ActionButton>
    </Container>
  )
}

export default Counter
