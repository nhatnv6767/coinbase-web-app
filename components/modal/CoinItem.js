import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const CoinItem = ({
  token,
  sender,
  setAction,
  selectedToken,
  setSelectedToken,
  sanityTokens,
  thirdWebTokens,
}) => {

  const [balance, setBalance] = useState('Fetching...')
  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {
    const getBalance = async () => {
      let activeThirdWebToken

      thirdWebTokens.map((thirWebtoken) => {
        if (thirWebtoken.address === token.contractAddress) {
          activeThirdWebToken = thirWebtoken
        }
      })

      const balance = await activeThirdWebToken.balanceOf(sender)
      
      return await setBalance(balance.displayValue.split('.')[0])
    }
  })

  return (
    <Wrapper>
      <Main>
        <Icon>
          {/* <img src="" /> */}
        </Icon>
      </Main>
    </Wrapper>
  )
}

export default CoinItem

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.3rem;

  &:hover { 
    background-color: #0e0f14;
  }
`

const Main = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Icon = styled.div`
    margin-right: 1rem;
    height: 1.8rem;
    width: 1.8rem;
    border-radius: 50%;
    overflow: hidden;
    display: grid;
    place-items: center;

    & > img {
      height: 120%;
      width: 120%;
      object-fit: cover;
    }
`

const NameDetails = styled.div``

const Name = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
`

const Balance = styled.div``

const IsSelected = styled.div`
  margin-left: 0.5rem;
  color: #3773f5;
`

