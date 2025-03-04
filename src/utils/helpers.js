export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export function getCategories(products) {
  const categories = {};
  products?.forEach((product) => {
    categories[product.category] = (categories[product.category] || 0) + 1;
  });
  return Object.entries(categories).map(([name, count]) => {
    return {
      name,
      count,
    };
  });
}

export function getSizes(products) {
  const sizes = {
    small: 0,
    medium: 0,
    large: 0,
    "extra large": 0,
  };
  products.forEach((product) => {
    product.sizes.forEach((size) => {
      if (size === "S") sizes.small++;
      if (size === "M") sizes.medium++;
      if (size === "L") sizes.large++;
      if (size === "XL") sizes["extra large"]++;
    });
  });
  return Object.entries(sizes).map(([name, count]) => {
    return { name, count };
  });
}
