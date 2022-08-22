// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Post,posts } from '../../../model'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post | {message :string}>
) {
    const {slug} = req.query;
    const post = posts.find(p => p.slug === slug)
    post 
       ? res.status(200).json(post!) 
       : res.status(404).json({ message: "Post não encontrado"})
}
