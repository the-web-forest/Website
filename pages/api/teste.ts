import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {  

  try {
    const data = process.env
    res.status(200).json(data)
  } catch (e) {
  }

}
