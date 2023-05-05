import GetAllMembersUseCase from 'use-cases/GetAllMembersUseCase';
import Member from 'core/domain/Member';
import ArrayHelper from 'helpers/ArrayHelper';
import { useEffect, useState } from 'react';

function useTeam() {
	const getAllMembersUseCase = new GetAllMembersUseCase();
	const [members, setMembers] = useState<Member[]>([]);

	const loadMembers = async () => {
		if (members && members.length) return;
		const loadedMembers = await getAllMembersUseCase.run();
		const shuffledMembers = ArrayHelper.shuffle(loadedMembers);
		setMembers(shuffledMembers);
	};

	useEffect(() => {
		loadMembers();
	});

	return members;
}

export default useTeam;
