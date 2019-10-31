import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'

const  User = ({users}) => {
  return (
    <div>
      <Head>
        <title> Usuários </title>
      </Head>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}> {user.login} </li>
        ))}
      </ul>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </div>
  )
}

/** Propriedade estática das paginas pra fazer uma requisição que vai retornar
 um objeto para o componente, para que o componente seja executada no Backend */
User.getInitialProps = async () => {
  const response = await axios.get(
    'https://api.github.com/orgs/rocketseat/members'
  )
  console.log(response.data)
  return {users : response.data}
}

export default User;