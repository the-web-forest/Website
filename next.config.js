/** @type {import('next').NextConfig} */

const path = require('path');

module.exports = {
	typescript: {
		ignoreBuildErrors: true
	},
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	}
};
