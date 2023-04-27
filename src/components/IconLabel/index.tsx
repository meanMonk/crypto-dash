import { Column, Row } from 'components/Global'
import { Title, SubTitle } from 'components/Text'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  iconImage: string
  label: string
  symbol: string
  selected?: boolean
  children?: ReactNode
}

const IconLabelStyle = styled(Row)`
  gap: 10px;
  align-items: flex-start;
  padding: 10px 0 0 20px;
  width: calc(100% - 21px);
  img {
    margin-top: 4px;
  }

  cursor: pointer;
  &.active {
    background: ${({ theme }) => theme.colors.hover};
    border-right: 1px solid #5D6BCE;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.hover};
    border-right: 1px solid #5D6BCE;
  }
`

const IconLabel = ({
  children,
  iconImage,
  label,
  symbol,
  selected = false
}: Props) => {
  return (
    <>
      <IconLabelStyle className={selected ? 'active' : ''}>
        <Column>
          <img src={iconImage} alt={`${symbol}-img`} />
        </Column>
        <Column>
          <Title weight={500}>{label}</Title>
          <SubTitle uppercase={true} color="helpText">{symbol}</SubTitle>
        </Column>
      </IconLabelStyle>
    </>
  )
}

export default IconLabel
