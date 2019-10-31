import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import withAnalytics from '../src/hocs/withAnalytics'
import styled from 'styled-components'

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`

const Home = () => {
  return (
    <div>
      <Head>
        <title> Home </title>
      </Head>
      <img src="/static/taca.jpg" width="200" alt="taca"/>
      <Title> Home sweet Home </Title>
      <Link href="/users">
        <a> Usuários </a>
      </Link>
    </div>
  )
}

export default withAnalytics()(Home)