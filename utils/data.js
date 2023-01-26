import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Andrew',
      email: 'andrewlintonfife@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  shows: [
    {
      _id: '192',
      name: 'HOME',
      slug: 'home',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/home.png',
      date: '03/11/22',
      description: 'on my way',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/home.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/home.mp3',
    },
    {
      _id: '191',
      name: 'TODAY',
      slug: 'today',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/today.png',
      date: '03/04/22',
      description: 'the day of days',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/today.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/today.mp3',
    },
    {
      _id: '190',
      name: 'SAND',
      slug: 'sand',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/sand.png',
      date: '02/25/22',
      description: 'chop em up',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/sand.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/sand.mp3',
    },
    {
      _id: '189',
      name: 'WHY',
      slug: 'why',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/why.png',
      date: '02/18/22',
      description: 'all corners pointing',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/whyohwhy.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/why.mp3',
    },
    {
      _id: '188',
      name: 'BOX',
      slug: 'box',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/box.png',
      date: '02/11/22',
      description: 'all corners pointing',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/box.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/box.mp3',
    },
    {
      _id: '187',
      name: 'DISTANCE',
      slug: 'distance',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/distance.png',
      date: '02/04/22',
      description: 'middle of the road',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/distance.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/distance.mp3',
    },
    {
      _id: '186',
      name: 'FACTUAL',
      slug: 'factual',
      image:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/factual.png',
      date: '01/28/22',
      description: 'bright light',
      video:
        'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/videos/factual.mp4',
      mp3: 'https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/mp3/factual.mp3',
    },
  ],

  products: [
    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 70,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner1.jpg',
    },
    {
      name: 'Fit Shirt',
      slug: 'fit-shirt',
      category: 'Shirts',
      image: '/images/shirt2.jpg',
      price: 80,
      brand: 'Adidas',
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner2.jpg',
    },
    {
      name: 'Slim Shirt',
      slug: 'slim-shirt',
      category: 'Shirts',
      image: '/images/shirt3.jpg',
      price: 90,
      brand: 'Raymond',
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Golf Pants',
      slug: 'golf-pants',
      category: 'Pants',
      image: '/images/pants1.jpg',
      price: 90,
      brand: 'Oliver',
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description: 'Smart looking pants',
    },
    {
      name: 'Fit Pants',
      slug: 'fit-pants',
      category: 'Pants',
      image: '/images/pants2.jpg',
      price: 95,
      brand: 'Zara',
      rating: 3.5,
      numReviews: 7,
      countInStock: 20,
      description: 'A popular pants',
    },
    {
      name: 'Classic Pants',
      slug: 'classic-pants',
      category: 'Pants',
      image: '/images/pants3.jpg',
      price: 75,
      brand: 'Casely',
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: 'A popular pants',
    },
  ],
};

export default data;
