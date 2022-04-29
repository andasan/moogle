import { QueryClient } from 'react-query'

const queryClientConfig = {
    defaultOptions: {
        queries: {
            retry: 2,
            refetchOnMount: "always",
            refetchOnWindowFocus: "always",
            refetchOnReconnect: "always",
            refetchInterval: 1000 * 30,
            refetchIntervalInBackground: false,
        }

    },
    mutations: {
        retry: 2,
    }
}

export const queryClient = new QueryClient()