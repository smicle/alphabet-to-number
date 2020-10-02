# alphabet-to-number
[![npm version](https://badge.fury.io/js/alphabet-to-number.svg)](https://badge.fury.io/js/alphabet-to-number)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/2203f43338c04130861150dbb4d7f7bd)](https://www.codacy.com/gh/smicle/alphabet-to-number/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=smicle/alphabet-to-number&amp;utm_campaign=Badge_Grade)
[![codebeat badge](https://codebeat.co/badges/f7a25b21-b156-417c-b986-f3858c62976b)](https://codebeat.co/projects/github-com-smicle-alphabet-to-number-master)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Intro
One-to-one conversion of alphabets and numbers.

## Installation
```sh
npm install alphabet-to-number
```

## Usage
### JavaScript
```js
const AlphabetToNumber = require('alphabet-to-number')

console.log(AlphabetToNumber.AtoN('a'))
console.log(AlphabetToNumber.NtoA(1))
console.log(AlphabetToNumber.AtoA('a', 1))

```

### TypeScript
```ts
import {AtoN, NtoA, AtoA} from './alphabet-to-number'

console.log(AtoN('a'))
console.log(NtoA(1))
console.log(AtoA('a', 1))
```

## Test
```sh
npm run test
```
