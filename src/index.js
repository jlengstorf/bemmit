function getBaseClass(block, element) {
  return !element ? block : `${block}__${element}`;
}

function addModifier(baseClass, modifier) {
  return modifier ? `${baseClass}--${modifier}` : null;
}

function getClassArray(block, element, modifiers = []) {
  const baseClass = getBaseClass(block, element);
  const modifierFn = addModifier.bind(null, baseClass);
  return [baseClass].concat(modifiers.map(modifierFn)).filter(c => c);
}

function getClassesAsString(block, element, modifiers) {
  return getClassArray(block, element, modifiers).join(' ');
}

function bemmit(block) {
  return getClassesAsString.bind(null, block);
}

module.exports = bemmit;
