const PRODUCTS = [
  {
    id: 'aztec-autumn-wool-jumper',
    name: 'Aztec Autumn Wool Jumper',
    description:
      'Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum.',
    imageUrl: 'https://kimba.imgix.net/wp-content/uploads/2021/08/jumper-zigzag.jpg',
    category: 'knitwear',
    material: 'ethically sourced wool',
    price: 90,
    sale: 'on sale',
    salePrice: 70,
    size: ['xl', '2xl'],
    related: ['grey-ribbed-funnel-neck-jumper', 'forest-sherpa-fleece', 'felted-wool-jumper', 'aztec-autumn-wool-jumper'],
  },
  {
    id: 'boyfriend-short-sleeve-shirt',
    name: 'Boyfriend Short Sleeve Shirt',
    description:
      'Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue.',
    imageUrl: 'https://kimba.imgix.net/wp-content/uploads/2021/09/shirt-orange.jpg',
    category: 'tops & t-shirts',
    material: 'organic-cotton',
    price: 45,
    sale: false,
    salePrice: null,
    size: ['sm', 'md', 'lg', 'xl', '2xl'],
    related: ['relaxed-fit-organic-cotton-t-shirt', 'organic-cotton-t-shirt', 'cotton-broderie-shirt', 'high-waisted-boyfriend-jeans'],
  },
  {
    id: 'cotton-broderie-shirt',
    name: 'Cotton Broderie Shirt',
    description:
      'Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue.',
    imageUrl: 'https://kimba.imgix.net/wp-content/uploads/2021/09/shirt-dance.jpg',
    category: 'tops & t-shirts',
    material: 'organic-cotton',
    price: 46,
    sale: false,
    salePrice: null,
    size: ['sm', 'md', 'lg', 'xl', '2xl'],
    related: ['organic-cotton-t-shirt', 'boyfriend-short-sleeve-shirt', 'relaxed-fit-organic-cotton-t-shirt', 'high-waisted-boyfriend-jeans'],
  },
  {
    id: 'felted-wool-jumper',
    name: 'Felted Wool Jumper',
    description:
      'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor.',
    imageUrl: 'https://kimba.imgix.net/wp-content/uploads/2021/09/shirt-stars.jpg',
    category: 'knitwear',
    material: 'ethically sourced wool',
    price: 70,
    sale: false,
    salePrice: null,
    size: ['sm', 'md', 'lg'],
    related: ['aztec-autumn-wool-jumper', 'forest-sherpa-fleece', 'grey-ribbed-funnel-neck-jumper', 'oversized-fennel-jumper'],
  },
  {
    id: 'forest-sherpa-fleece',
    name: 'Forest Sherpa Fleece',
    description:
      'Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue.',
    imageUrl: 'https://kimba.imgix.net/wp-content/uploads/2021/09/jumper-forest.jpg',
    category: 'knitwear',
    material: 'ethically sourced wool',
    price: 110,
    sale: false,
    salePrice: null,
    size: ['sm', 'md', 'lg', 'xl', '2xl'],
    related: ['open-stitch-oatmeal-jumper', 'aztec-autumn-wool-jumper', 'oversized-fennel-jumper', 'recycled-wool-jumper'],
  },
  {
    id: 'grey-ribbed-funnel-neck-jumper',
    name: 'Grey Ribbed Funnel Neck Jumper',
    description:
      'Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue.',
    imageUrl: 'https://kimba.imgix.net/wp-content/uploads/2021/09/jumper-grey.jpg',
    category: 'knitwear',
    material: 'ethically sourced wool',
    price: 80,
    sale: false,
    salePrice: null,
    size: ['sm', 'md', 'lg', 'xl', '2xl'],
    related: ['rust-wool-jumper', 'felted-wool-jumper', 'felted-wool-jumper', 'oversized-fennel-jumper'],
  },
  {
    id: 'high-waisted-boyfriend-jeans',
    name: 'High Waisted Boyfriend Jeans',
    description:
      'Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue.',
    imageUrl: 'https://kimba.imgix.net/wp-content/uploads/2021/08/jeans-cactus.jpg',
    category: 'trousers & jeans',
    material: 'organic denim',
    price: 90,
    sale: 'on sale',
    salePrice: 75,
    size: ['sm', 'md', 'lg', 'xl', '2xl'],
    related: ['organic-denim-dress', 'sage-cotton-dress', 'relaxed-fit-organic-cotton-t-shirt', 'organic-cotton-t-shirt'],
  },
  {
    id: 'open-stitch-oatmeal-jumper',
    name: 'Open Stitch Oatmeal Jumper',
    description:
      'Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue.',
    imageUrl: 'https://kimba.imgix.net/wp-content/uploads/2021/08/jumper-hug.jpg',
    category: 'knitwear',
    material: 'ethically sourced wool',
    price: 80,
    sale: false,
    salePrice: null,
    size: ['sm', 'md', 'lg', 'xl', '2xl'],
    related: ['aztec-autumn-wool-jumper', 'oversized-fennel-jumper', 'felted-wool-jumper', 'forest-sherpa-fleece'],
  },
  {
    id: 'organic-cotton-t-shirt',
    name: 'Organic Cotton T-Shirt',
    description:
      'Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue.',
    imageUrl: 'https://kimba.imgix.net/wp-content/uploads/2021/09/tshirt-meadow.jpg',
    category: 'tops & t-shirts',
    material: 'organic cotton',
    price: 30,
    sale: false,
    salePrice: null,
    size: ['sm', 'md', 'lg', 'xl', '2xl'],
    related: ['cotton-broderie-shirt', 'boyfriend-short-sleeve-shirt', 'relaxed-fit-organic-cotton-t-shirt', 'organic-denim-dress'],
  },
  {
    id: 'organic-denim-dress',
    name: 'Organic Denim Dress',
    description:
      'Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue.',
    imageUrl: 'https://kimba.imgix.net/wp-content/uploads/2021/08/dress-denim-grey.jpg',
    category: 'dresses',
    material: 'organic denim',
    price: 80,
    sale: false,
    salePrice: null,
    size: ['sm', 'md', 'lg', 'xl', '2xl'],
    related: ['teal-cotton-shirt-dress', 'sage-cotton-dress', 'organic-denim-dress', 'relaxed-fit-organic-cotton-t-shirt'],
  },
  {
    id: 'oversized-fennel-jumper',
    name: 'Oversized Fennel Jumper',
    description:
      'Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue.',
    imageUrl: 'https://kimba.imgix.net/wp-content/uploads/2021/09/jumper-chair.jpg',
    category: 'knitwear',
    material: 'ethically sourced wool',
    price: 120,
    sale: false,
    salePrice: null,
    size: ['sm', 'md', 'lg', 'xl', '2xl'],
    related: ['forest-sherpa-fleece', 'rust-wool-jumper', 'open-stitch-oatmeal-jumper', 'felted-wool-jumper'],
  },
  {
    id: 'recycled-wool-jumper',
    name: 'Recycled Wool Jumper',
    description:
      'Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue.',
    imageUrl: 'https://kimba.imgix.net/wp-content/uploads/2021/09/jumper-corn.jpg',
    category: 'knitwear',
    material: 'ethically sourced wool',
    price: 60,
    sale: false,
    salePrice: null,
    size: ['sm', 'md', 'lg', 'xl', '2xl'],
    related: ['felted-wool-jumper', 'recycled-wool-jumper', 'aztec-autumn-wool-jumper', 'open-stitch-oatmeal-jumper'],
  },
  {
    id: 'relaxed-fit-organic-cotton-t-shirt',
    name: 'Relaxed Fit Organic Cotton T-Shirt',
    description:
      'Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue.',
    imageUrl: 'https://kimba.imgix.net/wp-content/uploads/2021/09/tshirt-summer.jpg',
    category: 'tops & t-shirts',
    material: 'organic cotton',
    price: 30,
    sale: 'on sale',
    salePrice: 24,
    size: ['sm', 'md', 'lg', 'xl', '2xl'],
    related: ['boyfriend-short-sleeve-shirt', 'cotton-broderie-shirt', 'organic-cotton-t-shirt', 'organic-denim-dress'],
  },
  {
    id: 'rust-wool-jumper',
    name: 'Rust Wool Jumper',
    description:
      'Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue.',
    imageUrl: 'https://kimba.imgix.net/wp-content/uploads/2021/08/jumper-orange.jpg',
    category: 'knitwear',
    material: 'ethically sourced wool',
    price: 83,
    sale: false,
    salePrice: null,
    size: ['sm', 'md', 'lg', 'xl', '2xl'],
    related: ['recycled-wool-jumper', 'forest-sherpa-fleece', 'grey-ribbed-funnel-neck-jumper', 'felted-wool-jumper'],
  },
  {
    id: 'sage-cotton-dress',
    name: 'Sage Cotton Dress',
    description:
      'Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue.',
    imageUrl: 'https://kimba.imgix.net/wp-content/uploads/2021/09/dress-cotton-sage.jpg',
    category: 'dresses',
    material: 'organic cotton',
    price: 65,
    sale: false,
    salePrice: null,
    size: ['sm', 'md', 'lg', 'xl', '2xl'],
    related: ['organic-denim-dress', 'teal-cotton-shirt-dress', 'organic-cotton-t-shirt', 'relaxed-fit-organic-cotton-t-shirt'],
  },
  {
    id: 'teal-cotton-shirt-dress',
    name: 'Sage Cotton Dress',
    description:
      'Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue.',
    imageUrl: 'https://kimba.imgix.net/wp-content/uploads/2021/09/dress-floral.jpg',
    category: 'dresses',
    material: 'organic cotton',
    price: 80,
    sale: false,
    salePrice: null,
    size: ['sm', 'md', 'lg', 'xl', '2xl'],
    related: ['organic-denim-dress', 'sage-cotton-dress', 'organic-cotton-t-shirt', 'relaxed-fit-organic-cotton-t-shirt'],
  },
];

export default PRODUCTS;
