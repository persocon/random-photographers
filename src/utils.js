export const setOrder = (items, order) => {
  return order === 'DESC'
    ? Object.entries(items)
      .sort(([,v1], [,v2]) => +v1 - +v2)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {})
    : Object.entries(items)
      .sort(([,v1], [,v2]) => +v2 - +v1)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {})
}