import { cloneDeep } from 'lodash';

export const filterProducts = (products, filterParams) => {
  const filteredProducts = products.filter((product) => {
    let includeProduct = true;
    for (const filterCat in filterParams) {
      for (const paramFilter of filterParams[filterCat]) {
        // Special case for array e.g. sizes
        if (Array.isArray(product[filterCat])) {
          if (!product[filterCat].find((productFilter) => productFilter === paramFilter)) includeProduct = false;
        } else if (product[filterCat] !== paramFilter) includeProduct = false;
      }
    }
    return includeProduct;
  });

  return filteredProducts;
};

export const sortProducts = (products, sortParams) => {
  const sortedProducts = cloneDeep(products);
  if (sortParams.order !== 'default') {
    sortedProducts.sort((a, b) => {
      switch (sortParams.order) {
        case 'priceAsc':
          return a.price <= b.price ? -1 : 1;
        case 'priceDesc':
          return a.price >= b.price ? -1 : 1;
      }
    });
  }
  return sortedProducts;
};
