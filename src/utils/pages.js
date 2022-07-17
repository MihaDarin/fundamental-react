export const getPagesCount = (totalCount, limit) => {
  return totalCount / limit;
};

export const getPagesArray = (totalPages) => {
  const result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }
  return result;
};
