// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Post,posts } from '../../../model'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  res.status(200).json(posts)
}
