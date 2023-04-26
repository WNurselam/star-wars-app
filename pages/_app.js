import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import StarshipsProvider from '@/context/StarshipsContext'
import Layout from '@/layout/Layout'


export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient()
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <StarshipsProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StarshipsProvider>
      </QueryClientProvider>
    </ChakraProvider>
  )
}
