import GetAllPartnersUseCase from 'use-cases/GetAllPartnersUseCase';
import { useEffect, useState } from 'react';
import Partners from 'core/domain/Partners';

function usePartners() {
	const getAllPartnersUseCase = new GetAllPartnersUseCase();
	const [partners, setPartners] = useState<Partners[]>([]);

	const loadPartners = async () => {
		if (partners && partners.length) return;
		const loadPartners = await getAllPartnersUseCase.run();
		setPartners(loadPartners);
	};

	useEffect(() => {
		loadPartners();
	});

	return partners;
}

export default usePartners;
