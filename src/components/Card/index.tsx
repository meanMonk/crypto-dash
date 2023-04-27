import React from 'react'
import styled from 'styled-components';
import coinImage from 'assets/coin.png';
import arrowDown from 'assets/arrow-down.svg';
import arrowUp from 'assets/arrow-up.svg';

import {
  Small, SubHeading, SubTitle, Title,
  Media, Content, Column, Line, Row, Icon
} from 'components';
import { useAppSelector } from 'app/hooks';
import { selectCoinDetail } from 'reedux/slices/coin.slice';
interface Props {
  id: string | undefined
  name: string | undefined
  symbol: string | undefined
}

const CardContainer = styled.div`
  box-sizing: border-box;
  min-width: 301px;
  min-height: 213px;
  background: ${props => props.theme.colors.gray25};
  border: 1px solid ${props => props.theme.colors.background};
  border-radius: 4.5561px;
  width: 30%;
  margin: 20px 0px;
  padding: 24px 26px;
  display: flex;
  gap: 10px;
`;

const Indicator = styled('span') <{ up?: boolean }>`
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 20px;
  height: 10px;
  background-image: url(${({ up }) => up ? arrowUp : arrowDown});
`

const Card = ({
  id,
  name,
  symbol
}: Props) => {

  const detail = useAppSelector(selectCoinDetail);

  const { market_data } = detail || {};

  const up = market_data?.price_change_percentage_24h_in_currency?.usd > 0;

  return (
    <CardContainer>
      <Media>
        <Icon src={detail?.image?.large || coinImage} />
      </Media>
      <Content>
        <Column>
          <Title>{name}</Title>
          <SubTitle uppercase={true} color="helpText">{symbol}</SubTitle>
        </Column>
        <Column>
          <SubHeading color="danger">
            {market_data?.current_price?.usd} {' '}
            <Small color="danger" weight={600}>({parseFloat(market_data?.price_change_percentage_24h_in_currency?.usd).toFixed(2)}%)</Small>
            {' '}
            <Indicator up={up} />
          </SubHeading>
          <SubTitle uppercase={true} color="secondary">Change</SubTitle>
        </Column>
        <Line />
        <Column>
          <Column>
            <Small color="helpText">Circulating Supply</Small>
            <Title>{market_data?.max_supply}</Title>
          </Column>
          <Line />
          <Column>
            <Small color="helpText">Total Supply</Small>
            <Title>{market_data?.total_supply}</Title>
          </Column>
        </Column>
      </Content>
    </CardContainer>
  )
}

export default Card
