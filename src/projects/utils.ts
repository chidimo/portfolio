export const toTitleCase = (word: string): string => {
  if (!word) {
    return '';
  }
  return word[0].toUpperCase() + word.slice(1);
};

export const componentNameFromString = (name: string): string => {
  if (!name) {
    return '';
  }

  const parts = name.replace(/-/g, ' ').split(' ');
  return parts.map((p) => toTitleCase(p)).join('');
};
