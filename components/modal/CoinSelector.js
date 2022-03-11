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