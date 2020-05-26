export default function conditionStyling(canUse, styles) {
  return canUse ? styles : {};
}
