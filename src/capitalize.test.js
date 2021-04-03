import { capitalize } from './capitalize';

const oneLowercaseWord = 'foo';
const multipleLowercaseWords = 'foo bar schnickens';
const multipleLowercaseWordsWithNonalphanumerics = 'foo 123 bar *^* schnickens';
const multipleLowercaseWordsWithUnevenSpaces = 'foo  bar      schnickens';
const oneUppercaseWord = 'FOO';
const multipleUppercaseWords = 'FOO BAR SCHNICKENS';

test('firstLetter()', () => {
   expect(capitalize.firstLetter(oneLowercaseWord)).toEqual('Foo');
   expect(capitalize.firstLetter(multipleLowercaseWords)).toEqual('Foo bar schnickens');
   expect(capitalize.firstLetter(multipleLowercaseWordsWithUnevenSpaces)).toEqual('Foo  bar      schnickens');
   expect(capitalize.firstLetter(multipleLowercaseWordsWithNonalphanumerics)).toEqual('Foo 123 bar *^* schnickens');
   expect(capitalize.firstLetter(oneUppercaseWord)).toEqual('FOO');
   expect(capitalize.firstLetter(multipleUppercaseWords)).toEqual('FOO BAR SCHNICKENS');
});

test('everyFirstLetter()', () => {
   expect(capitalize.everyFirstLetter(oneLowercaseWord)).toEqual('Foo');
   expect(capitalize.everyFirstLetter(multipleLowercaseWords)).toEqual('Foo Bar Schnickens');
   expect(capitalize.everyFirstLetter(multipleLowercaseWordsWithUnevenSpaces)).toEqual('Foo  Bar      Schnickens');
   expect(capitalize.everyFirstLetter(multipleLowercaseWordsWithNonalphanumerics)).toEqual('Foo 123 Bar *^* Schnickens');
   expect(capitalize.everyFirstLetter(oneUppercaseWord)).toEqual('FOO');
   expect(capitalize.everyFirstLetter(multipleUppercaseWords)).toEqual('FOO BAR SCHNICKENS');
});
