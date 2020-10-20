import React from 'react'

import styled from 'styled-components'
import tw from 'twin.macro'

import Head from 'next/head'

const Card = styled.div`
  ${tw`mx-2 mb-4 p-6 overflow-hidden bg-white shadow-lg`};
  ${props => (props.rounded ? tw`rounded-xl` : ``)};
`

const Index = () => {
  return (
    <>
      <Head>
        <title>Test Styled-components</title>
      </Head>
      <h1>Test</h1>
      <Card rounded>Test</Card>
    </>
  )
}
export default Index
