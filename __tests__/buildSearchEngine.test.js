import {test, expect} from '@jest/globals';
import buildSearchEngine from '../index.js';

const doc1 = {id: 'doc1', text: "I can't shoot straight unless I've had a pint!"};
const doc2 = {id: 'doc2', text: "Don't shoot shoot shoot that thing at me."};
const doc3 = {id: 'doc3', text: "I'm your shooter."};
const docs = [doc1, doc2, doc3];

const searchEngine = buildSearchEngine(docs)

test('search engine remembered documents', () => {
  expect(searchEngine.docs.length > 0)
});

test('search by documents', () => {
  expect(searchEngine.search('shoot')).toMatchObject([{
    id: 'doc2',
    text: "Don't shoot shoot shoot that thing at me.",
    score: 3
  }, {
    id: 'doc1',
    text: "I can't shoot straight unless I've had a pint!",
    score: 1
  }]);
});

test('documents are empty', () => {
  expect(searchEngine.search('')).toMatchObject([]);
});

test('search regardless of punctuation marks', () => {
  expect(searchEngine.search('pint')).toMatchObject([{
    id: 'doc1',
    text: "I can't shoot straight unless I've had a pint!",
    score: 1
  }]);
  expect(searchEngine.search('pint!')).toMatchObject([{
    id: 'doc1',
    text: "I can't shoot straight unless I've had a pint!",
    score: 1
  }]);
});
