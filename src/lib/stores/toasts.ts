import { writable, type Writable } from 'svelte/store';

export type ToastNotificationTone = 'default' | 'info' | 'success' | 'warning' | 'danger';

export interface BaseToastNotification {
	type: 'closable' | 'timed';
	message: string;
	timestamp?: Date;
	tone?: ToastNotificationTone;
}

export interface ToastNotificationParams extends BaseToastNotification {
	timestamp?: never;
}

export interface ClosableToastNotification extends BaseToastNotification {
	type: 'closable';
	timestamp: Date;
	tone: ToastNotificationTone;
}

export interface TimedToastNotification extends BaseToastNotification {
	type: 'timed';
	timestamp: Date;
	tone: ToastNotificationTone;
}

export type ToastNotificationArray = (TimedToastNotification | ClosableToastNotification)[];

export interface ToastsConfig {
	timeout?: number;
}

export interface ToastStore {
	values: Writable<ToastNotificationArray>;
	addNotification: (
		message: string,
		config?: {
			type?: 'timed' | 'closable';
			tone?: ToastNotificationTone;
		}
	) => void;
}

function createToastsStore(config?: ToastsConfig): ToastStore {
	const values = writable<ToastNotificationArray>([]);

	const addTimedNotification = (message: string, tone: ToastNotificationTone = 'default') => {
		const timestamp = new Date();
		values.update((current) => {
			return [...current, { type: 'timed', message, tone, timestamp }] as ToastNotificationArray;
		});
		new Promise((resolve) => {
			setTimeout(() => {
				values.update((current) => {
					return [...current].filter((notif) => {
						if (notif.type === 'closable') {
							return true;
						}
						return notif.timestamp.getTime() !== timestamp.getTime();
					}) as ToastNotificationArray;
				});
			}, config?.timeout || 10000);
			resolve(null);
		});
	};

	const addClosableNotification = (message: string, tone: ToastNotificationTone = 'default') => {
		const timestamp = new Date();
		values.update((current) => {
			return [...current, { type: 'closable', message, tone, timestamp }] as ToastNotificationArray;
		});
	};

	const addNotification = (
		message: string,
		config?: {
			type?: 'timed' | 'closable';
			tone?: ToastNotificationTone;
		}
	) => {
		if (config && config.type && config.type === 'closable') {
			addClosableNotification(message, config?.tone || 'default');
		} else {
			addTimedNotification(message, config?.tone || 'default');
		}
	};

	return {
		values,
		addNotification
	};
}

const toasts = createToastsStore();

export default toasts;
