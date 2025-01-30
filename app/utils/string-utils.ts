export const truncate = (str: string, limit = 25, replacer = '...') => {
  if (str.length <= limit) {
    return str;
  }

  return str.slice(0, limit - replacer.length) + replacer;
};

export const firstUpperCase = (str: string) =>
  str[0].toUpperCase() + str.slice(1).toLowerCase();

export const convertToCamelCase = (str: string) => {
  return str.split(' ').reduce((acc, word, idx) => {
    acc += idx === 0 ? word.toLowerCase() : firstUpperCase(word);

    return acc;
  }, '');
};
