import News from 'core/domain/News';
import GetAllNewsUseCase from 'use-cases/GetAllNewsUseCase';
import { useEffect, useState } from 'react';

function useNews() {
	const getAllNewsUseCase = new GetAllNewsUseCase();
	const [news, setNews] = useState<News[]>([]);

	const loadNews = async () => {
		if (news && news.length) return;
		const loadedNews = await getAllNewsUseCase.run();
		setNews(loadedNews);
	};

	useEffect(() => {
		loadNews();
	});

	return news;
}

export default useNews;
