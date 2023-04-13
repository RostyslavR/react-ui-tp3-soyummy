const parseMeasure = measure => {
  measure = measure.replace(',', '.').trim();
  const quantity = Number.parseFloat(measure);
  const unit = measure.replace(quantity.toString(), '').trim();
  return { quantity, unit };
};

export const prepareShoppingList = ingredList => {
  const summaryList = {};
  ingredList?.forEach(item => {
    const { unit, quantity } = parseMeasure(item.measure);
    const key = JSON.stringify([item.id, unit]);
    if (!summaryList[key]) {
      summaryList[key] = {
        ttl: item.ttl,
        thb: item.thb,
        sum: quantity,
        unit,
        keys: [{ id: item.id, recipe: item.recipe }],
      };
    } else {
      const current = summaryList[key];
      current.sum += quantity;
      current.keys.push({ id: item.id, recipe: item.recipe });
    }
  });
  return Object.values(summaryList);
};
