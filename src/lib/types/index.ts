import type { Writable } from 'svelte/store';
export type Loading = 'LOADING';

export interface LocalStoreConfig<Type extends object> {
	storageKey: string;
	defaultValue: Type;
	onSubscribe?: (value: Type) => void;
}

export type LocalStore<Type extends object> = Writable<Loading | Type>;
