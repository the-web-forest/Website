import type { NextApiRequest, NextApiResponse } from 'next';
import ListMembersController from '../../controllers/listMembersController';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const controller = new ListMembersController();
  const data = await controller.run();
  res.status(200).json(data);
}
