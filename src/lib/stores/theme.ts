import { createLocalStore } from '$lib/utility';

const theme = createLocalStore<{ type: 'light' | 'dark' }>({
	storageKey: 'tme',
	defaultValue: { type: 'light' }
});

export default theme;
