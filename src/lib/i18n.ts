import { browser } from '$app/environment';
import { derived, writable } from 'svelte/store';
import { en } from './translations/en';
import { fr } from './translations/fr';
import { cr } from './translations/cr';

export type Lang = 'en' | 'fr' | 'cr';

const stored = browser ? (localStorage.getItem('lang') as Lang | null) : null;
export const lang = writable<Lang>(stored ?? 'en');

if (browser) {
	lang.subscribe((v) => localStorage.setItem('lang', v));
}

const all = { en, fr, cr };

export const t = derived(lang, ($lang) => {
	return function get(key: string): any {
		const parts = key.split('.');
		let v: any = all[$lang];
		for (const p of parts) v = v?.[p];
		if (v !== undefined) return v;
		// Fallback to English
		let vEn: any = all['en'];
		for (const p of parts) vEn = vEn?.[p];
		return vEn ?? key;
	};
});
