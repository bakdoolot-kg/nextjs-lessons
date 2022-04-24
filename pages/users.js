import Link from "next/link";
import { useState } from 'react'
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {

  return (
    <MainContainer keywords='Users'>
      <h2>Users page</h2>

      <ul>
        {users.map(item =>
          <li key={item.id}>
            <Link href={`/users/${item.id}`}>
              <a>{item.name}</a>
            </Link>
          </li>
        )}
      </ul>
    </ MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()

  return {
    props: { users }, // will be passed to the page component as props
  }
}