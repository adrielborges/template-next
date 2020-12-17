import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import RocketseatLogo from '../assets/rocketseat.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RocketseatLogo />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Rocketseat.</p>

      <div>
        <main>
          <h1 style={{ textAlign: 'center' }}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p style={{ textAlign: 'center' }}>
            Get started by editing <code>pages/index.js</code>
          </p>

          <div
            style={{
              marginTop: '50px',
              display: 'grid',
              width: '800px',
              gridTemplateColumns: '1fr 1fr'
            }}
          >
            <a
              style={{
                background: 'gray',
                borderRadius: '10px',
                padding: '10px',
                paddingLeft: '15px',
                marginRight: '10px',
                marginBottom: '20px'
              }}
              href="https://nextjs.org/docs"
            >
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a
              style={{
                background: 'gray',
                borderRadius: '10px',
                padding: '10px',
                paddingLeft: '15px',

                marginLeft: '10px',
                marginBottom: '20px'
              }}
              href="https://nextjs.org/learn"
            >
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              style={{
                background: 'gray',
                borderRadius: '10px',
                padding: '10px',
                paddingLeft: '15px',
                marginRight: '10px',
                marginBottom: '20px'
              }}
              href="https://github.com/vercel/next.js/tree/master/examples"
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              style={{
                background: 'gray',
                borderRadius: '10px',
                padding: '10px',
                paddingLeft: '15px',
                marginLeft: '10px',
                marginBottom: '20px'
              }}
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer style={{ textAlign: 'center', marginTop: '50px' }}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              height={20}
              width={'auto'}
            />
          </a>
        </footer>
      </div>
    </Container>
  )
}

export default Home
