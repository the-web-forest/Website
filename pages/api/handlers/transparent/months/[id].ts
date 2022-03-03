import type { NextApiRequest, NextApiResponse } from 'next'
import GetMonthByIdController from '../../../controllers/getMonthByIdController'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {  
  try {
    const { id } = req.query
    const monthId = id.toString()
    const controller = new GetMonthByIdController()
    const data = await controller.run(monthId)
    res.status(200).json(data)
  } catch (e) {
    res.status(400).json({ error: 'Invalid Month Id' })
  }
}
