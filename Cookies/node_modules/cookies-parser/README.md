# Cookies Parser

Convert 

## 1. Usage

```js
const cookiesParse = require('../');

const cookiesStr = 'BAIDUID=422D21EF0AC1ED2241491C617CEEA011:FG=1; H_WISE_SIDS=114748_117615_11fasfasf87_114744_103569_116075_117466_117886_117618_107314_117580_117329_117238_117456_117433_116094_116309_115533_117774_117552_116604_117517_114820_116523_110085_117028; BIDUPSID=422D21EF0AC1ED2241491C617CEEA011; PSTM=1500652196; ispeed_lsm=0';

let result = cookiesParse.parse(cookiesStr);

console.log(result);
```

## 2. Output

```js
[ { name: 'BAIDUID',
    value: '422D21EF0AC1ED2241491C617CEEA011:FG=1',
    domain: '.abc.com',
    path: '/',
    httponly: false,
    secure: false,
    expires: 'Infinity' },
  { name: 'H_WISE_SIDS',
    value: '114748_117615_11fasfasf87_114744_103569_116075_117466_117886_117618_107314_117580_117329_117238_117456_117433_116094_116309_115533_117774_117552_116604_117517_114820_116523_110085_117028',
    domain: '.abc.com',
    path: '/',
    httponly: false,
    secure: false,
    expires: 'Infinity' },
  { name: 'BIDUPSID',
    value: '422D21EF0AC1ED2241491C617CEEA011',
    domain: '.abc.com',
    path: '/',
    httponly: false,
    secure: false,
    expires: 'Infinity' },
  { name: 'PSTM',
    value: '1500652196',
    domain: '.abc.com',
    path: '/',
    httponly: false,
    secure: false,
    expires: 'Infinity' },
  { name: 'ispeed_lsm',
    value: '0',
    domain: '.abc.com',
    path: '/',
    httponly: false,
    secure: false,
    expires: 'Infinity' } ]
```

## 3. Test

### 3.1 Units Test

```
npm test
```

### 3.2 Coverage

```
npm run ci
```
