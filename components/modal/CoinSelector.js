import { useState } from 'react'
import styled from 'styled-components'


const CoinSelector = (
  {
    setAction,
    selectedToken,
    setSelectedToken,
    sanityTokens,
    thirdWebTokens,
    walletAddress,
  }
) => {
  return (
    <h2>Yo {walletAddress}</h2>
  )
}

export default CoinSelector

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  margin-top: 1rem;
`

const CoinList = styled.div`
  display: flex;
  flex-direction: column;
`