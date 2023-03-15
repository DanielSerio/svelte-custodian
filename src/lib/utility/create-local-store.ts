import { writable } from 'svelte/store';
import type { LocalStore, LocalStoreConfig } from '../types';

/**
 * It creates a writable store that is stored in localStorage
 * @param {LocalStoreConfig<object>} config - LocalStoreConfig<Type>
 * @returns {LocalStore<object>} A writable store.
 */
export default function createLocalStore<Type extends object>(
	config: LocalStoreConfig<Type>
): LocalStore<Type> {
	const store: LocalStore<Type> = writable('LOADING');

	if (typeof window !== 'undefined') {
		const storedValue: string | null = localStorage.getItem(config.storageKey);

		if (!storedValue) {
			store.set(config.defaultValue);
		} else {
			store.set(JSON.parse(storedValue));
		}

		store.subscribe((value) => {
			if (value !== 'LOADING') {
				localStorage.setItem(config.storageKey, JSON.stringify(value));
				if (config.onSubscribe) {
					config.onSubscribe(value);
				}
			}
		});
	}

	return store;
}
