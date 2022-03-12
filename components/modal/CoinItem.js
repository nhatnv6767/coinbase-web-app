import React from 'react'

const CoinItem = ({ 
    token,
    sender,
    setAction,
    selectedToken,
    setSelectedToken,
    sanityTokens,
    thirdWebTokens,
}) => {
  return (
    <div>{sanityTokens[0].name}</div>
  )
}

export default CoinItem