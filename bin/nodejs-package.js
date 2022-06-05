#!/usr/bin/env node

import buildSearchEngine from '../index.js';

console.log(buildSearchEngine(Number(process.argv[process.argv.length - 1])));
