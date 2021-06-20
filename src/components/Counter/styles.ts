import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 24px 0 48px;
`

export const ModeContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 22px;

  > button + button {
    margin-left: 62px;
  }
`

export const ModeButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 28px;
  outline: none;
`

export const ActionButton = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 6px;
  color: #f55b56;
  cursor: pointer;
  font-size: 28px;
  font-weight: 600;
  height: 48px;
  outline: none;
  width: 240px;
`
