const paginate = (model, page = 1, limit) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = !limit ? 1 : Math.ceil(model.length / limit);
  const totalData = model.length;
  const result = { totalData };

  result.pages = { total };

  if (page < total) {
    result.pages.next = {
      page: page + 1,
    };
  }
  if (startIndex > 0) {
    result.pages.previous = {
      page: page - 1,
    };
  }

  if (!limit) {
    result.data = model;
  } else {
    result.data = model.slice(startIndex, endIndex);
  }

  return result;
};
module.exports = paginate;
