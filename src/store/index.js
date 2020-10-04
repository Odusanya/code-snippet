import { atom } from 'recoil';

export const codeLanguageState = atom({
	key: 'snippetLanguageState',
	default: 'curl',
	persistence_UNSTABLE: {
		type: 'snippetLanguageState'
	},
});
