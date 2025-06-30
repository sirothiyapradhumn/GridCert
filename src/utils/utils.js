export function getUniqueOptions(data, keyName) {
  const values = data.map(row =>
    row.tags.find(tag => tag.Key === keyName)?.Value
  );
  return [...new Set(values.filter(Boolean))]; 
}