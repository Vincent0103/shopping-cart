const hyphenate = (text) => {
  const spaceRegex = /\s+|\/|:|,|https|(\.[^\s]+|\.+)/g;
  return text.trim().toLowerCase().replaceAll(spaceRegex, "-");
}

export { hyphenate };
