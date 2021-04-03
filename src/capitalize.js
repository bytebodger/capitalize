import { allow } from '@toolz/allow';

const Capitalize = () => {
   allow.setFailureBehavior(allow.failureBehavior.WARN);
   
   const everyFirstLetter = (string = '') => {
      allow.aString(string, is.not.empty);
      const words = string.split(' ');
      const capitalizedWords = words.map(word => {
         if (word.length > 0)
            return firstLetter(word);
         return word;
      });
      return capitalizedWords.join(' ');
   };
   
   const firstLetter = (string = '') => {
      allow.aString(string, is.not.empty);
      const letters = string.split('');
      letters[0] = letters[0].toUpperCase();
      return letters.join('');
   };
   
   const is = {not: {empty: 1}};
   
   return {
      everyFirstLetter,
      firstLetter,
   };
};

export const capitalize = Capitalize();
