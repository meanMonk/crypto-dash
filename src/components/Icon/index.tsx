import React, { ReactNode } from 'react'
import styled from 'styled-components'
interface Props {
  src: string
  children?: ReactNode
}

const IconStyle = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background: #FFEFD8;

  img {
    width: 20px;
    height: 20px;
  }
`

export const Icon = ({ src }: Props) => {
  return (
    <IconStyle>
      <img src={src} />
    </IconStyle>
  )
}


