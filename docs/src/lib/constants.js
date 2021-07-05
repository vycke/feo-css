import pkg from '../../../package.json';

export const categories = {
	Introduction: 'chevrons-right',
	Layout: 'layout',
	Utilities: 'tool'
};

export const name = 'Feo';
export const version = pkg.version;
export const source = pkg.repository;
export const description = `Complete documentation for ${name} (v${version})`;
