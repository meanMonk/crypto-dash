import React from 'react'
import styled from 'styled-components';
import coinImage from 'assets/coin.png';
import arrowDown from 'assets/arrow-down.svg';
import arrowUp from 'assets/arrow-up.svg';

import {
  Small, SubHeading, SubTitle, Title,
  Media, Content, Column, Line, Row, Icon
} from 'components';
interface Props {

}

const CardContainer = styled.div`
  box-sizing: border-box;
  min-width: 301px;
  height: 213px;
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

const Card = (props: Props) => {

  return (
    <CardContainer>
      <Media>
        <Icon src={coinImage} />
      </Media>
      <Content>
        <Column>
          <Title>Bitcoin</Title>
          <SubTitle uppercase={true} color="helpText">BTC</SubTitle>
        </Column>
        <Column>
          <SubHeading color="danger">
            2280.66 {' '}
            <Small color="danger" weight={600}>(5.19%)</Small>
            {' '}
            <Indicator up={true} />
          </SubHeading>
          <SubTitle uppercase={true} color="secondary">Change</SubTitle>
        </Column>
        <Line />
        <Row>
          <Column>
            <Title>4324.75</Title>
            <Small color="helpText">Buy</Small>
          </Column>
          <Line horizontal={false} />
          <Column>
            <Title>4324.75</Title>
            <Small color="helpText">Sell</Small>
          </Column>
        </Row>
      </Content>
    </CardContainer>
  )
}

export default Card
