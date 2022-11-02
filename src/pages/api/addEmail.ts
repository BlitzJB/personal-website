// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma'

type Data = {
  name?: string
  error?: String
  success?: boolean
}

interface RequestBody {
    email: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.method != 'POST') {
    res.status(400).json({error: 'METHOD NOT ALLOWED'})
  }

  const body: RequestBody = req.body

  if (!body.email) {
    res.status(400).json({error: 'BAD REQUEST'})
  }


  await prisma.subscriber.create({
    data: {
      email: body.email
    }
  })

  res.redirect(200, 'Thanks! Looking forward to get in touch!')

}
