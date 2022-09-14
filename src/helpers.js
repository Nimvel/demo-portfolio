export const updateObjInState = (items, objPropName, value, newObj) => {
    return items.map(e => e[objPropName] === value ? { ...e, ...newObj } : e)
}