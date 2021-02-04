export function classNames(classObj: {[key: string]: boolean}) {
  return Object.keys(classObj)
    .filter(className => classObj[className]).join(' ')
}
