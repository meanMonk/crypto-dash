import styled from "styled-components"

export const Media = styled.div`
  display: flex;
  align-items: flex-start;
`
export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`
export const Line = styled('div') <{ horizontal?: boolean }>`
  width: ${({ horizontal = true }) => horizontal ? '100%' : '1px'};
  height: ${({ horizontal = true }) => !horizontal ? '100%' : '1px'};
  margin: ${({ horizontal = true }) => horizontal ? '12px 0px' : '0px 12px'};
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.background};
  border-width: ${({ horizontal = true }) =>  horizontal? '1px 0 0 0': '0 0 0 1px'};
`

export const Row = styled('div')`
  display: flex;
  width: 100%;
`
export const Column = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`