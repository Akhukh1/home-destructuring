export default function viewAttack(character) {
  const attackVariant = character.special;
  for (const i in attackVariant) {
    if (!('description' in attackVariant[i])) {
      // const { description = 'Описание недоступно' } = attackVariant[i];
      // Object.defineProperty(attackVariant[i], 'description', {
      //   value: 'Описание недоступно'
      // })
      attackVariant[i].description = 'Описание недоступно';
    }
  }
  return attackVariant;
}
