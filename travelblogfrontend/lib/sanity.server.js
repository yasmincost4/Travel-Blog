import { createClient } from 'next-sanity'
import { config } from './config'

export const sanityClient = createClient(config)

export const previewClient = createClient({
    ...config,
    useCdn: false,
    token: ' '
})

export const getClient =  (usePreviw) => usePreviw ? previewClient : sanityClient
