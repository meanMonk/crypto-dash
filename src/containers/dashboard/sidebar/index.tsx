import React, { useEffect, useMemo, useState } from 'react'
import IconLabel from 'components/IconLabel';
import styled from 'styled-components';
import coinImage from 'assets/coin.png'
import debouce from 'lodash.debounce'
import { Column, Input, Line, SubHeading } from 'components';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Coin, selectActiveCoin, selectCoin, selectCoinList } from 'reedux/slices/coin.slice';

interface Props {

}

const SidebarStyle = styled.div`
  border-right: 1px solid ${props => props.theme.colors.primary};
  width: 25%;
`
const SidebarAction = styled.div`
  width: 100%;

  > div {
    padding: 16px 20px;
    gap: 16px;
  }
`
const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  overflow: scroll;
  padding: 16px 0px;
  .diver {
    margin: 0px;
    width: 80%;
    margin: 0 auto;
  }
`

const Sidebar = (props: Props) => {

  let coinList = useAppSelector(selectCoinList)
  const activeCoin: Coin | null = useAppSelector(selectActiveCoin)
  const dispatch = useAppDispatch();

  const [searchTerm, setsearchTerm] = useState('');
  
  if (searchTerm !== '') {
    coinList = coinList.filter(({symbol, name}) => name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsearchTerm(e.target.value);
  };
  
  const debouncedOnChange = useMemo(() => {
    return debouce(handleChange, 300);
  }, []);
  
  useEffect(() => {
    return () => {
      debouncedOnChange.cancel();
    };
  });

  return (
    <SidebarStyle>
      <SidebarAction>
        <Column>
          <SubHeading weight="normal">
            Cryptos
          </SubHeading>
          <Input placeHolder='Search' onChange={debouncedOnChange} />
        </Column>
      </SidebarAction>
      <SidebarContent>
        <div style={{ width: '100%' }}>
          {(coinList || []).map(({ symbol, name, id }) => (
            <React.Fragment key={id}>
              <IconLabel
                iconImage={coinImage}
                name={name}
                currentId={activeCoin?.id}
                id={id}
                symbol={symbol}
                onSelect={(coin: any) => dispatch(selectCoin(coin))}
              />
              <Line className='diver' />
            </React.Fragment>
          ))}
        </div>
      </SidebarContent>
    </SidebarStyle>
  )
}

export default Sidebar
