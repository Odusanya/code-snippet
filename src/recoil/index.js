import { atom } from 'recoil';

export const codeLanguageState = atom({
	key: 'snippetLanguageState',
	default: 'node',
});
