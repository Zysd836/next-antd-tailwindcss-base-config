import {
  ApolloClient, ApolloLink, InMemoryCache, HttpLink,
} from '@apollo/client'
import getConfig from 'next/config'
import ActionCableLink from 'graphql-ruby-client/subscriptions/ActionCableLink'
import Cookies from 'js-cookie'

const client = () => {
  const { publicRuntimeConfig } = getConfig()
  const { NEXT_PUBLIC_API_URL } = publicRuntimeConfig
  const apiUrl = NEXT_PUBLIC_API_URL || ''
  const accessToken = Cookies.get('accessToken')

  if (typeof window === 'undefined') {
    return new ApolloClient({
      uri: `${apiUrl}/graphql`,
      headers: {
        ...(accessToken && { authorization: `Bearer ${accessToken}` }),
      },
      cache: new InMemoryCache(),
      connectToDevTools: true,
    })
  }

  const { createConsumer } = require('@rails/actioncable')
  const cable = createConsumer(`${apiUrl}/cable`)
  const httpLink = new HttpLink({
    uri: `${apiUrl}/graphql`,
    headers: {
      ...(accessToken && { authorization: `Bearer ${accessToken}` }),
    },
  })

  const hasSubscriptionOperation = ({ query: { definitions } }) => {
    return definitions.some(
      ({ kind, operation }) => kind === 'OperationDefinition' && operation === 'subscription',
    )
  }

  const link = ApolloLink.split(
    hasSubscriptionOperation,
    new ActionCableLink({ cable }),
    httpLink,
  )

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })
}

export default client
