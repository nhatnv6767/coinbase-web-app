import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaWallet } from 'react-icons/fa'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../lib/sanity'

const Transfer = ({ selectedToken, setAction, thirdWebTokens, walletAddress }) => {
    const [amount, setAmount] = useState()
    const [recipient, setRecipient] = useState('')

    useEffect(() => {
        console.log(selectedToken, '::fire')
        const url = imageUrlBuilder(client).image(selectedToken.logo).width(100).url()
        console.log(url)
    }, [])
    return (
        <Wrapper>
            <Amount>
                <FlexInputContainer>
                    <FlexInput
                        placeholder='0'
                        type='number'
                        value={amount}
                        onChange={e => setAmount(e.target.value)} />
                    <span>ETH</span>
                </FlexInputContainer>
                <Warning style={{ color: amount && '#0a0b0d' }}>
                    Amount is a required field
                </Warning>
            </Amount>

            <TransferForm>
                <Row>
                    <FieldName>To</FieldName>
                    <Icon>
                        <FaWallet />
                    </Icon>
                    <Recipient
                        placeholder='Address'
                        value={recipient}
                        onChange={e => setRecipient(e.target.value)}
                    />
                </Row>
                <Divider />
                <Row>
                    <FieldName>Pay with</FieldName>
                    <CoinSelectList>
                        <Icon>
                            <img
                                src="data:image/jpeg;base64,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"
                            />
                        </Icon>
                        <CoinName>Ethereum</CoinName>
                    </CoinSelectList>
                </Row>
            </TransferForm>
            <Row>
                <Continue>Continue</Continue>
            </Row>
            <Row>
                <BalanceTitle>ETH Balance</BalanceTitle>
                <Balance>1.2 ETH</Balance>
            </Row>
        </Wrapper>
    )
}

export default Transfer

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;
`

const Amount = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const FlexInputContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-end;

    & > span {
        font-size: 3rem;
        margin-bottom: 0.5rem;
        color: #3773f5;
    }
`

const FlexInput = styled.input`
    border: none;
    background: none;
    outline: none;
    color: white;
    font-size: 1.2rem;
    text-wrap: wrap;
    text-align: right;
    max-width: 45%;
    margin-right: 1rem;
    font-size: 4.5rem;
    color: #3773f5;

    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`

const Warning = styled.div`
    padding: 1rem 0 2rem 0;
    text-align: center;
    color: #8a919e;
`

const Divider = styled.div`
    border-bottom: 1px solid #282b2f;
`

const TransferForm = styled.div`
    border: 1px solid #282b2f;
    border-radius: 0.4rem;
`

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #8a919e;
    padding: 1rem 0;
    font-size: 1.2rem;
`

const FieldName = styled.div`
    flex: 0.5;
    padding-left: 2rem;
`

const Icon = styled.div`
    margin-right: 1rem;
    height: 1.8rem;
    width: 1.8rem;
    border-radius: 50%;
    overflow: hidden;
    display: grid;

    & > img {
        /* margin: -0.5rem 1rem; */
        height: 120%;
        width: 120%;
        object-fit: cover;
    }
`
// when type => style input
const Recipient = styled.input`
    flex: 1;
    border: none;
    background: none;
    outline: none;
    color: white;
    font-size: 1.2rem;
    text-wrap: wrap;
    margin-right: 0.5rem;
`

const CoinSelectList = styled.div`
    display: flex;
    flex: 1.3;
    height: 100%;

    &:hover {
        cursor: pointer;
    }
`

const CoinName = styled.div`
    flex: 1;
    border: none;
    background: none;
    outline: none;
    color: white;
    font-size: 1.2rem;
    text-wrap: wrap;
    margin-right: 0.5rem;
`

const Continue = styled.button`
    color: white;
    width: 100%;
    background-color: #3773f5;
    padding: 1rem;
    text-align: center;
    border-radius: 0.4rem;
    font-size: 1.2rem;

    &:hover {
        cursor: pointer;
        background-color: #4a80f6;
    }
`

const BalanceTitle = styled.div``
const Balance = styled.div``