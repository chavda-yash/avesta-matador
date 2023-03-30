const STORAGE_KEY_PREFIX = `__matador_`;

function set(key: string, value: string): boolean {
	if (!localStorage) {
		return false;
	}
	try {
		localStorage.setItem(STORAGE_KEY_PREFIX + key, value);
		return true;
	} catch (error: any) {
		throw new Error(error);
	}
}

function get(key: string) {
	if (!localStorage) {
		return;
	}
	try {
		const serializedState = localStorage.getItem(STORAGE_KEY_PREFIX + key);
		if (serializedState == null) {
			return;
		}
		return JSON.parse(serializedState);
	} catch (error: any) {
		throw new Error(error);
	}
}

function remove(key: string): boolean {
	if (!localStorage) {
		return false;
	}

	try {
		const serializedState = localStorage.removeItem(
			STORAGE_KEY_PREFIX + key
		);
		if (serializedState == null) {
			return false;
		}
		return true;
	} catch (error: any) {
		throw new Error(error);
	}
}

export const localStorageService = {
	set,
	get,
	remove,
};
