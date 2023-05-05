import type { NextApiRequest, NextApiResponse } from 'next';
import ListPartnersController from 'api/controllers/listPartnersController';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const controller = new ListPartnersController();
	const data = await controller.run();
	res.status(200).json(data);
}
