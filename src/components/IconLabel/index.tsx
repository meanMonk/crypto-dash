import { Column, Row } from 'components/Global'
import { Title, SubTitle } from 'components/Text'
import React, { ReactNode } from 'react'
import { Coin } from 'reedux/slices/coin.slice'
import styled from 'styled-components'
interface Props {
  iconImage: string
  id: string
  currentId?: string
  name: string
  symbol: string
  selected?: boolean
  children?: ReactNode
  onSelect: (a: Coin) => void
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
  id,
  currentId,
  name,
  symbol,
  onSelect
}: Props) => {
  return (
    <IconLabelStyle
      onClick={() => onSelect({
        name,
        symbol,
        id
      })}
      className={currentId === id ? 'active' : ''}>
      <Column>
        <img src={iconImage} alt={`${symbol}-img`} />
      </Column>
      <Column>
        <Title weight={500}>{name}</Title>
        <SubTitle uppercase={true} color="helpText">{symbol}</SubTitle>
      </Column>
    </IconLabelStyle>
  )
}

export default IconLabel
