import React from 'react'
import styled from 'styled-components'

const Sidebar = () => {
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar

const Wrapper = styled.div`
    height: calc(100vh);
    border-right: 1px solid #282b2f;
    width: calc(22rem - 16px - 16px);
    padding: 0 1rem;
`

const LogoContainer = styled.div`
    margin: 1.5rem 0;
`

const Logo = styled.div`
    width: 44%;
    object-fit: contain;
    margin-left: 1.5rem;
`