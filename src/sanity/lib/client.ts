import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Güncellemelerin anında sitede görünmesi için false
})
const builder = createImageUrlBuilder(client)


export function urlFor(source: any) {
  return builder.image(source)
}
