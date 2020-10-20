import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import tw from 'twin.macro'

const Card2 = styled.div`
  ${tw`mx-2 mb-4 p-6 overflow-hidden bg-white shadow-lg`};
  ${props => (props.rounded ? tw`rounded-xl` : ``)};
`

const Opa = () => {
  const router = useRouter()
  return (
    <>
      <h1>Test</h1>
      <Card2 rounded={router.query.opa === 'tulio'} />
    </>
  )
}

export default Opa
