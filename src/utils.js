const toUrlSafe = (text) => {
  const unsafeCharsRegex = /\\|\/|:|,|'|https?|(\.[^\s]+|\.+)/g
  const spaceRegex = /\s+/g;
  return text.trim().toLowerCase().replaceAll(unsafeCharsRegex, "").replaceAll(spaceRegex, "-");
}

const toTitle = (text) => text.trim().split(/-|\s/g)
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

export { toUrlSafe, toTitle };
