import type { NextApiRequest, NextApiResponse } from 'next';
import ListNewsController from 'api/controllers/listNewsController';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const controller = new ListNewsController();
	const data = await controller.run();
	res.status(200).json(data);
}
