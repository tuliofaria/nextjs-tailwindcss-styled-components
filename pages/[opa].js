import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import tw from 'twin.macro'
import Head from 'next/head'

const Card2 = styled.div`
  ${tw`mx-2 mb-4 p-6 overflow-hidden bg-white shadow-lg`};
  ${props => (props.rounded ? tw`rounded-xl` : ``)};
`

const Opa = () => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Test Styled-components</title>
        <meta name='description' content='This is a description' />
      </Head>
      <h1>Test</h1>
      <Card2 rounded={router.query.opa === 'tulio'} />
    </>
  )
}
export async function getStaticPaths() {
  return {
    paths: [{ params: { opa: 'test' } }],
    fallback: true,
  }
}
export async function getStaticProps() {
  const posts = []

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  }
}
export default Opa
