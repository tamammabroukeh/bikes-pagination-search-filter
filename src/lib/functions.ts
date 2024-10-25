export function textCapitalize(text: string) {
  return text.replace(/(?<=(?:^|[.?!])\W*)[a-z]/g, (i) => i.toUpperCase());
}
