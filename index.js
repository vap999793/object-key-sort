// index.js
module.exports = function sortByKey({ data, key, order }) {
  if (order === 'asc' || !order) return nested_sort({key, data, order: 'asc'});
  if (order === 'desc') return nested_sort({key, data, order: 'desc'});

};

const nested_sort = ({ key, data, order ='asc' }) => {

  const propertyPath = key.split('.');

  data.sort((a, b) => {
    let aValue = a;
    let bValue = b;

    for (const property of propertyPath) {
      aValue = aValue[property];
      bValue = bValue[property];
    }

    if (aValue < bValue) {
      return order === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return order === 'asc' ? 1 : -1;
    }

    return 0;
  });
  return data;

}
