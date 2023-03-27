import { useEffect, useRef } from 'react';

export const useKeypress = (
	key: string[] | string, 
	handler: (e: KeyboardEvent) => void
):void => {
	
	const eventListenerRef = useRef<(e: KeyboardEvent) => void>(handler);

	useEffect(() => {
		eventListenerRef.current = (e: KeyboardEvent) => {
			if (Array.isArray(key) ? key.includes(e.key) : key === e.key) {
				handler(e);
			}
		};
	}, [key, handler]);

	useEffect(() => {
	    const eventListener = (e: KeyboardEvent) => {
	    	eventListenerRef.current(e)
	    };

	    window.addEventListener('keydown', eventListener);
	    return () => {
	    	window.removeEventListener('keydown', eventListener);
    	};
	}, []);
}