# capitalize

`capitalize` is a JavaScript utility for capitalizing strings.

## Usage

After installation, import the package:

```javascript
import { capitalize } from '@toolz/capitalize';
```

### .firstLetter()

Capitalizes the first letter - and only the first letter - in the string.

```javascript
const API = {
   arguments: {
      string: {
         required,
         format: 'non-empty string',
      },
   },
   returns: string,
}
```

**Examples**

```javascript
const florida = 'florida';
const country = 'united states of america';
console.log(capitalize.firstLetter(florida)); // Florida
console.log(capitalize.firstLetter(country)); // United states of america
```

### .everyFirstLetter()

Splits the string by spaces (`' '`), treating each resulting value as a "word". It then capitalizes the first letter in each word.

```javascript
const API = {
   arguments: {
      string: {
         required,
         format: 'non-empty string',
      },
   },
   returns: string,
}
```

**Examples**

```javascript
const florida = 'florida';
const country = 'united states of america';
console.log(capitalize.everyFirstLetter(florida)); // Florida
console.log(capitalize.everyFirstLetter(country)); // United States Of America
```
