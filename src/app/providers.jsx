'use client'

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {useState} from 'react'

export default function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient())
  //  queryClient.prefetchQuery({ queryKey: ['posts'], queryFn: getAllPosts }, {queryKey:["comments"], queryFn:getComments })

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}