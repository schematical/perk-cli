#!/usr/bin/env node

let path = require('path');
let mergedirs = require('merge-dirs').default;
let steps = require('./steps');

const PERK_URL = 'http://api.perkframework.com/location';
const TMP_PATH = path.join(__dirname, 'tmp');
const DOWNLOAD_PATH = path.join(TMP_PATH, 'download');
const EXTRACT_PATH = path.join(TMP_PATH, 'extract');
const ZIP_PATH = path.join(DOWNLOAD_PATH, 'tmp.zip');

// If there are no arguments then show the help
if(process.argv.length < 3) {
	console.log(steps.help());
	process.exit(0);
}

let targetPath = process.argv[2];
if(!path.isAbsolute(targetPath)) {
	targetPath = path.join(process.cwd(), targetPath);
}

steps.ensureDir(TMP_PATH)
.then(p => steps.ensureDir(DOWNLOAD_PATH))
.then(p => steps.ensureDir(targetPath))
.then(p => steps.getLocation(PERK_URL))
.then(location => steps.download(location, ZIP_PATH))
.then(downloadDir => steps.unzip(downloadDir, EXTRACT_PATH))
.then(unzipDir => mergedirs(unzipDir, targetPath, 'skip'))
.then(() => steps.finish(targetPath))
.then(console.log)
.catch(err => {
	if(err.hasOwnProperty(message) && err.hasOwnProperty(err.code)) {
		let message = err.message;
		if(err.code !== 0) {
			message += ' Please inform help@perkframework.com with code = '+code;
		}
		console.log(message);
	}
	else {
		console.log(err);
	}
});