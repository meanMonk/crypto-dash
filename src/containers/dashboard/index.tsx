import coinImage from 'assets/coin.png';
import { Heading } from 'components';
import Card from 'components/Card';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from './sidebar';
import { useAppDispatch } from 'app/hooks';
import { fetchCoinAsync } from 'reedux/slices/coin.slice';


const Page = styled.div`
  display: flex;
  margin: 0 auto;
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primary};
  min-height: 100vh;
`;

const PageContent = styled.div`
  width: 100%;
  padding: 16px 24px;
  margin: 0 auto;
`

const CryptoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: space-around;
  align-items: space-around;
  overflow: scroll;
`

const PageTitle = styled.div`
  display: flex;
  gap: 5px;
  margin-left: 20px;
  align-items: center;
  
  img {
    height: 16px;
    width: 16px;
  }
  
  p {
    margin: 0;
  }
`

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCoinAsync());
  }, [dispatch])

  return (
    <Page>
      <Sidebar />
      <PageContent>
        <PageTitle>
          <img src={coinImage} alt="coin" />
          <Heading>My Cryptos</Heading>
        </PageTitle>
        <CryptoList>
          {
            [1, 2, 4, 4, 5, 6].map((i) => (
              <Card key={i}></Card>
            ))
          }
        </CryptoList>
      </PageContent>
    </Page>
  )
}

export default Dashboard
