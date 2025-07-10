import { useEffect, useState } from 'react';

export function useDebounce({ cb, delay }: { cb: string; delay: number }) {
	const [debounceValue, setDebounceValue] = useState(cb);
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebounceValue(cb);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [cb, delay]);
	return debounceValue;
}
