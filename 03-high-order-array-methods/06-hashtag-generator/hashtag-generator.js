function generateHashtag(str) {
  // if input string is empty or contains only whitespaces return false
  // if input string is greater than 140 characters return false
  // split the input string into words
  // loop or map thru each word and capitalize the first letter of each word
  // join each word back together without spaces
  // include the # into the joined str and return

  // if (str.length <= 0) {
  //   return false;
  // }

  // const words = str.split(' ');

  // const capitalize = words.map((word) => {
  //   let format = '';
  //   for (let i = 0; i < word.length; i++) {
  //     if (i === 0) {
  //       format += word[i].toUpperCase();
  //     } else {
  //       format += word[i];
  //     }
  //   }
  //   return format;
  // });

  // const format = capitalize.join('');

  // if (format.length > 140) {
  //   return false;
  // }

  // let hashtag = '#';

  // for (let i = 0; i < format.length; i++) {
  //   hashtag += format[i];
  // }

  // return hashtag;

  // if (str.trim() === '') {
  //   return false;
  // }

  // const words = str.trim().split(' ');

  // const capitalize = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  // const hashtag = '#' + capitalize.join('');

  // // if (hashtag.length > 140) {
  // //   return false;
  // // }

  // return hashtag.length > 140 ? false : hashtag;

  const hashtag = str.split(' ').reduce((tag, letter) => {
    return tag + letter.charAt(0).toUpperCase() + letter.substring(1);
  }, '#');

  return hashtag.length === 1 || hashtag.length > 140 ? false : hashtag;
}

module.exports = generateHashtag;
