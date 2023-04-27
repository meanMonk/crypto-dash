import React, { useEffect, useMemo, useState } from 'react'
import IconLabel from 'components/IconLabel';
import styled from 'styled-components';
import cointemplate from 'assets/cointemplate.svg'
import debouce from 'lodash.debounce'
import { Column, Input, Line, SubHeading } from 'components';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Coin, fetchCoinDetailAsync, selectCoin, selectCoinList } from 'reedux/slices/coin.slice';

interface Props {
  activeCoin: Coin | null
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

const Sidebar = ({
  activeCoin
}: Props) => {

  let coinList = useAppSelector(selectCoinList)
  const dispatch = useAppDispatch();

  const [searchTerm, setsearchTerm] = useState('');

  if (searchTerm !== '') {
    coinList = coinList.filter(({ symbol, name }) => name.toLowerCase().startsWith(searchTerm.toLowerCase()))
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
  
  const onSelectCoin = async (coin: any) => {
    dispatch(selectCoin(coin))
    await dispatch(fetchCoinDetailAsync(coin.id))
  }

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
                iconImage={cointemplate}
                name={name}
                currentId={activeCoin?.id}
                id={id}
                symbol={symbol}
                onSelect={onSelectCoin}
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
