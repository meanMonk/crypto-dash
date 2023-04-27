import React from 'react'
import IconLabel from 'components/IconLabel';
import styled from 'styled-components';
import coinImage from 'assets/coin.png'
import { Column, Input, Line, SubHeading, SubTitle } from 'components';

interface Props {
  
}

const SidebarStyle = styled.div`
  border-right: 1px solid ${props => props.theme.colors.primary};
  width: 20%;
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
  
  const onChange = (e: any) => {
    console.log(e.target.value);
  }
  
  return (
    <SidebarStyle>
        <SidebarAction>
          <Column>
            <SubHeading weight="normal">
              Cryptos
            </SubHeading>
          <Input placeHolder='Search' onChange={onChange} />
          </Column>
        </SidebarAction>
        <SidebarContent>
          <div style={{width: '100%'}}>
          {[1, 2, 3, 5, 6, 7].map((i) => (
              <React.Fragment key={i}>
                <IconLabel
                  key={i}
                  iconImage={coinImage}
                  label="Bitcoin"
                  symbol="btc"
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
