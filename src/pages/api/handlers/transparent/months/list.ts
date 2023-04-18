import type { NextApiRequest, NextApiResponse } from 'next';
import ListMonthsController from 'api/controllers/listMonthsController';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const controller = new ListMonthsController();
	const data = await controller.run();
	res.status(200).json(data);
}
