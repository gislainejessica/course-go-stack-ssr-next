import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import withAnalytics from '../src/hocs/withAnalytics'

const Home = () => {
  return (
    <div>
      <Head>
        <title> Home </title>
      </Head>
      <img src="/static/taca.jpg" width="200" alt="taca"/>
      <h1> Home sweet Home </h1>
      <Link href="/users">
        <a> Usuários </a>
      </Link>
    </div>
  )
}

export default withAnalytics()(Home)