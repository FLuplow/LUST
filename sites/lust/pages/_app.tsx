import React from 'react'
import { SnowstormCustomAppProps } from '@snowstorm/core/types'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Layout } from '../components/layout'
import { SupabaseContext } from '../hooks/supabase'

const queryClient = new QueryClient()

const App = ({ children }: SnowstormCustomAppProps) => (
  <QueryClientProvider client={queryClient}>
    <SupabaseContext>
      <Layout>{children}</Layout>
    </SupabaseContext>
  </QueryClientProvider>
)
export default App
