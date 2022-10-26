export const filters = [
  { filterCat: 'category', filters: ['knitwear', 'tops & t-shirts', 'dresses', 'trousers & jeans'] },
  { filterCat: 'material', filters: ['ethically sourced wool', 'organic cotton', 'organic denim'] },
  { filterCat: 'size', filters: ['sm', 'md', 'lg', 'xl', '2xl'] },
  { filterCat: 'sale', filters: ['on sale'] },
];

export const filterParamDefaults = {
  category: { default: [], multiple: true },
  material: { default: [], multiple: true },
  size: { default: [], multiple: true },
  sale: { default: [], multiple: true },
};