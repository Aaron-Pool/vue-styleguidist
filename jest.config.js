module.exports = {
	transform: {
		'^.+\\.ts$': 'ts-jest',
		'^.+\\.js$': 'babel-jest'
	},
	moduleFileExtensions: ['ts', 'js', 'json', 'tsx'],
	testMatch: [
		'<rootDir>/packages/*/tests/**/*.test.(ts|js|tsx)',
		'<rootDir>/packages/**/__tests__/*.(ts|js|tsx)'
	],
	setupFiles: ['./test/raf-polyfill.js', './test/jestsetup.js'],
	modulePaths: ['./packages/vue-styleguidist/src'],
	moduleNameMapper: {
		'^rsg-components/(.+)$':
			'<rootDir>/node_modules/react-styleguidist/lib/client/rsg-components/$1',
		'^.+\\.css$': '<rootDir>/test/empty.js'
	},
	testPathIgnorePatterns: ['<rootDir>/packages/*/lib/'],
	snapshotSerializers: ['deabsdeep/serializer', 'enzyme-to-json/serializer', 'jest-serializer-html']
}
