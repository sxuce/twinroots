export interface ProductImage {
  id: number
  url: string
  alt: string
}

export interface ProductVariant {
  id: number
  name: string
  color: string
  available: boolean
}

export interface Product {
  id: number
  name: string
  description: string
  price: number
  currency: string
  image: string
  images: ProductImage[]
  variants: ProductVariant[]
  category: string
  tags: string[]
  sizes: string[]
  materials: string[]
  care: string[]
  soldOut?: boolean
  featured?: boolean
  new?: boolean
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Blossom Jersey',
    description: 'A limited edition jersey inspired by spring blossoms. Features a soft, breathable fabric and a vibrant floral print. Perfect for casual wear or sports.',
    price: 65,
    {
      id: 1,
      name: 'Blossom Jersey',
      description: 'A limited edition jersey inspired by spring blossoms. Features a soft, breathable fabric and a vibrant floral print. Perfect for casual wear or sports.',
      price: 65,
      {
        id: 1,
        name: 'Blossom Jersey',
        description: 'A limited edition jersey inspired by spring blossoms. Features a soft, breathable fabric and a vibrant floral print. Perfect for casual wear or sports.',
        price: 65,
        currency: '€',
        image: 'https://sdmntprpolandcentral.oaiusercontent.com/files/00000000-50dc-620a-b2e7-86a3566eb0bf/raw?se=2025-08-11T00%3A35%3A48Z&sp=r&sv=2024-08-04&sr=b&scid=7bfad340-4d81-5ed0-a5f4-53b84232d6ab&skoid=0a4a0f0c-99ac-4752-9d87-cfac036fa93f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-10T10%3A18%3A07Z&ske=2025-08-11T10%3A18%3A07Z&sks=b&skv=2024-08-04&sig=gqZYPJzseTQIDe3eKaNM%2BeNx6py5HHvO2IqFfKezhGw%3D',
        images: [
          {
            id: 1,
            url: 'https://sdmntprpolandcentral.oaiusercontent.com/files/00000000-50dc-620a-b2e7-86a3566eb0bf/raw?se=2025-08-11T00%3A35%3A48Z&sp=r&sv=2024-08-04&sr=b&scid=7bfad340-4d81-5ed0-a5f4-53b84232d6ab&skoid=0a4a0f0c-99ac-4752-9d87-cfac036fa93f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-10T10%3A18%3A07Z&ske=2025-08-11T10%3A18%3A07Z&sks=b&skv=2024-08-04&sig=gqZYPJzseTQIDe3eKaNM%2BeNx6py5HHvO2IqFfKezhGw%3D',
            alt: 'Blossom themed jersey front view'
          }
        ],
        variants: [
          { id: 1, name: 'Standard', color: 'Blossom', available: true }
        ],
        category: 'TOPS',
        tags: ['jersey', 'blossom', 'floral', 'limited'],
        sizes: ['S', 'M', 'L', 'XL'],
        materials: ['Polyester', 'Cotton'],
        care: ['Machine wash cold', 'Do not bleach', 'Tumble dry low'],
        featured: true,
        new: true
      },
      {
        id: 2,
        name: 'Grey Edgy Jeans',
        description: 'Distressed grey jeans with an edgy streetwear vibe. Perfect for pairing with oversized tops and sneakers.',
        price: 79,
        currency: '€',
        image: 'https://i.ibb.co/G1QwC7y/Google-AI-Studio-2025-08-11-T00-44-04-019-Z-removebg-preview.png',
        images: [
          { id: 1, url: 'https://i.ibb.co/G1QwC7y/Google-AI-Studio-2025-08-11-T00-44-04-019-Z-removebg-preview.png', alt: 'Grey edgy jeans product' }
        ],
        variants: [ { id: 1, name: 'Grey', color: '#888888', available: true } ],
        category: 'PANTS',
        tags: ['jeans', 'grey', 'edgy', 'streetwear'],
        sizes: ['S', 'M', 'L', 'XL'],
        materials: ['Denim'],
        care: ['Machine wash cold', 'Tumble dry low'],
        new: true
      },
      {
        id: 3,
        name: 'Light-Pink Baggy Cargos',
        description: 'Baggy cargo pants in a light pink shade. Statement piece for bold streetwear looks.',
        price: 85,
        currency: '€',
        image: 'https://i.ibb.co/JWBXX7Bd/Gemini-Generated-Image-g1yu6jg1yu6jg1yu-removebg-preview.png',
        images: [
          { id: 1, url: 'https://i.ibb.co/JWBXX7Bd/Gemini-Generated-Image-g1yu6jg1yu6jg1yu-removebg-preview.png', alt: 'Light-pink baggy cargos product' }
        ],
        variants: [ { id: 1, name: 'Light Pink', color: '#F8BBD0', available: true } ],
        category: 'PANTS',
        tags: ['cargos', 'baggy', 'pink', 'streetwear'],
        sizes: ['S', 'M', 'L', 'XL'],
        materials: ['Cotton', 'Polyester'],
        care: ['Machine wash cold', 'Tumble dry low'],
        new: true
      },
      {
        id: 4,
        name: 'White Aesthetic T-Shirt',
        description: 'Minimalist white t-shirt with a clean, aesthetic cut. Perfect for layering or wearing solo.',
        price: 39,
        currency: '€',
        image: 'https://i.ibb.co/XZbPpBD1/Google-AI-Studio-2025-08-11-T00-45-41-274-Z-removebg-preview.png',
        images: [
          { id: 1, url: 'https://i.ibb.co/XZbPpBD1/Google-AI-Studio-2025-08-11-T00-45-41-274-Z-removebg-preview.png', alt: 'White aesthetic t-shirt product' }
        ],
        variants: [ { id: 1, name: 'White', color: '#FFFFFF', available: true } ],
        category: 'TOPS',
        tags: ['t-shirt', 'white', 'minimalist', 'aesthetic'],
        sizes: ['S', 'M', 'L', 'XL'],
        materials: ['Cotton'],
        care: ['Machine wash cold', 'Tumble dry low'],
        new: true
      },
      {
        id: 5,
        name: 'Black Rose Dress Shirt',
        description: 'Black dress shirt with subtle rose detailing. A sophisticated piece for elevated streetwear fits.',
        price: 59,
        currency: '€',
        image: 'https://i.ibb.co/SwQYBjdm/Google-AI-Studio-2025-08-11-T00-44-55-490-Z-removebg-preview.png',
        images: [
          { id: 1, url: 'https://i.ibb.co/SwQYBjdm/Google-AI-Studio-2025-08-11-T00-44-55-490-Z-removebg-preview.png', alt: 'Black rose dress shirt product' }
        ],
        variants: [ { id: 1, name: 'Black Rose', color: '#222222', available: true } ],
        category: 'TOPS',
        tags: ['dress shirt', 'black', 'rose', 'streetwear'],
        sizes: ['S', 'M', 'L', 'XL'],
        materials: ['Cotton', 'Polyester'],
        care: ['Machine wash cold', 'Tumble dry low'],
        new: true
      }
    ]
      image: 'https://i.ibb.co/JWBXX7Bd/Gemini-Generated-Image-g1yu6jg1yu6jg1yu-removebg-preview.png',
      images: [
        { id: 1, url: 'https://i.ibb.co/JWBXX7Bd/Gemini-Generated-Image-g1yu6jg1yu6jg1yu-removebg-preview.png', alt: 'Light-pink baggy cargos product' }
      ],
      variants: [ { id: 1, name: 'Light Pink', color: '#F8BBD0', available: true } ],
      category: 'PANTS',
      tags: ['cargos', 'baggy', 'pink', 'streetwear'],
      sizes: ['S', 'M', 'L', 'XL'],
      materials: ['Cotton', 'Polyester'],
      care: ['Machine wash cold', 'Tumble dry low'],
      new: true
    },
    {
      id: 4,
      name: 'White Aesthetic T-Shirt',
      description: 'Minimalist white t-shirt with a clean, aesthetic cut. Perfect for layering or wearing solo.',
      price: 39,
      currency: '€',
      image: 'https://i.ibb.co/XZbPpBD1/Google-AI-Studio-2025-08-11-T00-45-41-274-Z-removebg-preview.png',
      images: [
        { id: 1, url: 'https://i.ibb.co/XZbPpBD1/Google-AI-Studio-2025-08-11-T00-45-41-274-Z-removebg-preview.png', alt: 'White aesthetic t-shirt product' }
      ],
      variants: [ { id: 1, name: 'White', color: '#FFFFFF', available: true } ],
      category: 'TOPS',
      tags: ['t-shirt', 'white', 'minimalist', 'aesthetic'],
      sizes: ['S', 'M', 'L', 'XL'],
      materials: ['Cotton'],
      care: ['Machine wash cold', 'Tumble dry low'],
      new: true
    },
    {
      id: 5,
      name: 'Black Rose Dress Shirt',
      description: 'Black dress shirt with subtle rose detailing. A sophisticated piece for elevated streetwear fits.',
      price: 59,
      currency: '€',
      image: 'https://i.ibb.co/SwQYBjdm/Google-AI-Studio-2025-08-11-T00-44-55-490-Z-removebg-preview.png',
      images: [
        { id: 1, url: 'https://i.ibb.co/SwQYBjdm/Google-AI-Studio-2025-08-11-T00-44-55-490-Z-removebg-preview.png', alt: 'Black rose dress shirt product' }
      ],
      variants: [ { id: 1, name: 'Black Rose', color: '#222222', available: true } ],
      category: 'TOPS',
      tags: ['dress shirt', 'black', 'rose', 'streetwear'],
      sizes: ['S', 'M', 'L', 'XL'],
      materials: ['Cotton', 'Polyester'],
      care: ['Machine wash cold', 'Tumble dry low'],
      new: true
    }
  ]
    image: 'https://i.ibb.co/JWBXX7Bd/Gemini-Generated-Image-g1yu6jg1yu6jg1yu-removebg-preview.png',
    images: [
      { id: 1, url: 'https://i.ibb.co/JWBXX7Bd/Gemini-Generated-Image-g1yu6jg1yu6jg1yu-removebg-preview.png', alt: 'Light-pink baggy cargos product' }
    ],
    variants: [ { id: 1, name: 'Light Pink', color: '#F8BBD0', available: true } ],
    category: 'PANTS',
    tags: ['cargos', 'baggy', 'pink', 'streetwear'],
    sizes: ['S', 'M', 'L', 'XL'],
    materials: ['Cotton', 'Polyester'],
    care: ['Machine wash cold', 'Tumble dry low'],
    new: true
  },
  {
    id: 4,
    name: 'White Aesthetic T-Shirt',
    description: 'Minimalist white t-shirt with a clean, aesthetic cut. Perfect for layering or wearing solo.',
    price: 39,
    currency: '€',
    image: 'https://i.ibb.co/XZbPpBD1/Google-AI-Studio-2025-08-11-T00-45-41-274-Z-removebg-preview.png',
    images: [
      { id: 1, url: 'https://i.ibb.co/XZbPpBD1/Google-AI-Studio-2025-08-11-T00-45-41-274-Z-removebg-preview.png', alt: 'White aesthetic t-shirt product' }
    ],
    variants: [ { id: 1, name: 'White', color: '#FFFFFF', available: true } ],
    category: 'TOPS',
    tags: ['t-shirt', 'white', 'minimalist', 'aesthetic'],
    sizes: ['S', 'M', 'L', 'XL'],
    materials: ['Cotton'],
    care: ['Machine wash cold', 'Tumble dry low'],
    new: true
  },
  {
    id: 5,
    name: 'Black Rose Dress Shirt',
    description: 'Black dress shirt with subtle rose detailing. A sophisticated piece for elevated streetwear fits.',
    price: 59,
    currency: '€',
    image: 'https://i.ibb.co/SwQYBjdm/Google-AI-Studio-2025-08-11-T00-44-55-490-Z-removebg-preview.png',
    images: [
      { id: 1, url: 'https://i.ibb.co/SwQYBjdm/Google-AI-Studio-2025-08-11-T00-44-55-490-Z-removebg-preview.png', alt: 'Black rose dress shirt product' }
    ],
    variants: [ { id: 1, name: 'Black Rose', color: '#222222', available: true } ],
    category: 'TOPS',
    tags: ['dress shirt', 'black', 'rose', 'streetwear'],
    sizes: ['S', 'M', 'L', 'XL'],
    materials: ['Cotton', 'Polyester'],
    care: ['Machine wash cold', 'Tumble dry low'],
    new: true
  }
]
      materials: ['Denim'],
      care: ['Machine wash cold', 'Tumble dry low'],
      new: true
    },
    {
      id: 3,
      name: 'Light-Pink Baggy Cargos',
      description: 'Baggy cargo pants in a light pink shade. Statement piece for bold streetwear looks.',
      price: 85,
      currency: '€',
      image: 'https://i.ibb.co/JWBXX7Bd/Gemini-Generated-Image-g1yu6jg1yu6jg1yu-removebg-preview.png',
      images: [
        { id: 1, url: 'https://i.ibb.co/JWBXX7Bd/Gemini-Generated-Image-g1yu6jg1yu6jg1yu-removebg-preview.png', alt: 'Light-pink baggy cargos product' }
      ],
      variants: [ { id: 1, name: 'Light Pink', color: '#F8BBD0', available: true } ],
      category: 'PANTS',
      tags: ['cargos', 'baggy', 'pink', 'streetwear'],
      sizes: ['S', 'M', 'L', 'XL'],
      materials: ['Cotton', 'Polyester'],
      care: ['Machine wash cold', 'Tumble dry low'],
      new: true
    },
    {
      id: 4,
      name: 'White Aesthetic T-Shirt',
      description: 'Minimalist white t-shirt with a clean, aesthetic cut. Perfect for layering or wearing solo.',
      price: 39,
      currency: '€',
      image: 'https://i.ibb.co/XZbPpBD1/Google-AI-Studio-2025-08-11-T00-45-41-274-Z-removebg-preview.png',
      images: [
        { id: 1, url: 'https://i.ibb.co/XZbPpBD1/Google-AI-Studio-2025-08-11-T00-45-41-274-Z-removebg-preview.png', alt: 'White aesthetic t-shirt product' }
      ],
      variants: [ { id: 1, name: 'White', color: '#FFFFFF', available: true } ],
      category: 'TOPS',
      tags: ['t-shirt', 'white', 'minimalist', 'aesthetic'],
      sizes: ['S', 'M', 'L', 'XL'],
      materials: ['Cotton'],
      care: ['Machine wash cold', 'Tumble dry low'],
      new: true
    },
    {
      id: 5,
      name: 'Black Rose Dress Shirt',
      description: 'Black dress shirt with subtle rose detailing. A sophisticated piece for elevated streetwear fits.',
      price: 59,
      currency: '€',
      image: 'https://i.ibb.co/SwQYBjdm/Google-AI-Studio-2025-08-11-T00-44-55-490-Z-removebg-preview.png',
      images: [
        { id: 1, url: 'https://i.ibb.co/SwQYBjdm/Google-AI-Studio-2025-08-11-T00-44-55-490-Z-removebg-preview.png', alt: 'Black rose dress shirt product' }
      ],
      variants: [ { id: 1, name: 'Black Rose', color: '#222222', available: true } ],
      category: 'TOPS',
      tags: ['dress shirt', 'black', 'rose', 'streetwear'],
      sizes: ['S', 'M', 'L', 'XL'],
      materials: ['Cotton', 'Polyester'],
      care: ['Machine wash cold', 'Tumble dry low'],
      new: true
    }
  ]
    category: 'JORTS',
    tags: ['denim', 'vintage', 'comfortable', 'durable'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    materials: ['100% Cotton Denim'],
    care: [
      'Machine wash cold',
      'Tumble dry low',
      'Do not bleach',
      'Iron on low heat if needed'
    ],
    soldOut: true,
    featured: true
  },
  {
    id: 2,
    name: '"aziza" black raw Jorts 01',
    description: "Classic black raw denim jorts with a modern cut. These shorts feature a raw denim finish that will develop unique character over time. Perfect for those who appreciate the beauty of raw denim aging.",
    price: 89,
    currency: '€',
    image: 'https://derschutze.com/cdn/shop/files/2025-06-18-23-2-1.jpg?v=1750750844&width=500',
    images: [
      {
        id: 1,
        url: 'https://derschutze.com/cdn/shop/files/2025-06-18-23-2-1.jpg?v=1750750844&width=800',
        alt: 'Black raw jorts front view'
      }
    ],
    variants: [
      {
        id: 1,
        name: 'Black Raw',
        color: '#000000',
        available: true
      }
    ],
    category: 'JORTS',
    tags: ['denim', 'raw', 'black', 'modern'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    materials: ['100% Cotton Denim'],
    care: [
      'Machine wash cold',
      'Tumble dry low',
      'Do not bleach'
    ],
    soldOut: true
  },
  {
    id: 3,
    name: '"aziza" black raw Jorts 02',
    description: "Another variation of our black raw denim jorts with subtle differences in fit and finish. These offer the same premium quality with a slightly different aesthetic.",
    price: 89,
    currency: '€',
    image: 'https://derschutze.com/cdn/shop/files/2025-06-18-24-2-1_7f02a78e-8db3-48cf-b8f2-0058c173df96.jpg?v=1750949073&width=500',
    images: [
      {
        id: 1,
        url: 'https://derschutze.com/cdn/shop/files/2025-06-18-24-2-1_7f02a78e-8db3-48cf-b8f2-0058c173df96.jpg?v=1750949073&width=800',
        alt: 'Black raw jorts 02 front view'
      }
    ],
    variants: [
      {
        id: 1,
        name: 'Black Raw',
        color: '#000000',
        available: true
      }
    ],
    category: 'JORTS',
    tags: ['denim', 'raw', 'black', 'alternative'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    materials: ['100% Cotton Denim'],
    care: [
      'Machine wash cold',
      'Tumble dry low'
    ]
  },
  {
    id: 4,
    name: '"aziza" Jorts off white',
    description: "Light and airy off-white denim jorts perfect for summer days. These shorts feature a soft, comfortable fit with a clean aesthetic that pairs well with any casual outfit.",
    price: 89,
    currency: '€',
    image: 'https://derschutze.com/cdn/shop/files/2025-06-18-3-1-1.jpg?v=1750751273&width=500',
    images: [
      {
        id: 1,
        url: 'https://derschutze.com/cdn/shop/files/2025-06-18-3-1-1.jpg?v=1750751273&width=800',
        alt: 'Off white jorts front view'
      }
    ],
    variants: [
      {
        id: 1,
        name: 'Off White',
        color: '#F5F5DC',
        available: true
      }
    ],
    category: 'JORTS',
    tags: ['denim', 'light', 'summer', 'clean'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    materials: ['100% Cotton Denim'],
    care: [
      'Machine wash cold',
      'Tumble dry low',
      'Do not bleach'
    ]
  },
  {
    id: 5,
    name: '"aziza" T Shirt black 01',
    description: "Premium cotton t-shirt in classic black. This essential piece features a comfortable fit and high-quality fabric that feels great against your skin. Perfect for everyday wear and layering.",
    price: 45,
    currency: '€',
    image: 'https://derschutze.com/cdn/shop/files/2025-06-18-8-1.jpg?v=1750748408&width=500',
    images: [
      {
        id: 1,
        url: 'https://derschutze.com/cdn/sop/files/2025-06-18-8-1.jpg?v=1750748408&width=800',
        alt: 'Black t-shirt front view'
      }
    ],
    variants: [
      {
        id: 1,
        name: 'Black',
        color: '#000000',
        available: true
      }
    ],
    category: 'TOPS',
    tags: ['cotton', 'essential', 'comfortable', 'versatile'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    materials: ['100% Cotton'],
    care: [
      'Machine wash cold',
      'Tumble dry low',
      'Do not bleach'
    ],
    new: true
  },
  {
    id: 6,
    name: '"aziza" T Shirt blue',
    description: "Vibrant blue t-shirt made from premium cotton. This eye-catching piece adds a pop of color to any outfit while maintaining the same comfort and quality as our other t-shirts.",
    price: 45,
    currency: '€',
    image: 'https://derschutze.com/cdn/shop/files/2025-06-18-12-1.jpg?v=1750748440&width=500',
    images: [
      {
        id: 1,
        url: 'https://derschutze.com/cdn/shop/files/2025-06-18-12-1.jpg?v=1750748440&width=800',
        alt: 'Blue t-shirt front view'
      }
    ],
    variants: [
      {
        id: 1,
        name: 'Blue',
        color: '#0066CC',
        available: true
      }
    ],
    category: 'TOPS',
    tags: ['cotton', 'colorful', 'vibrant', 'comfortable'],
    sizes: ['S', 'M', 'L', 'XL'],
    materials: ['100% Cotton'],
    care: [
      'Machine wash cold',
      'Tumble dry low'
    ]
  },
  {
    id: 7,
    name: '"aziza" T Shirt black 02',
    description: "Alternative black t-shirt with a slightly different cut and fit. This variation offers the same premium quality with subtle differences in styling for those who want variety.",
    price: 45,
    currency: '€',
    image: 'https://derschutze.com/cdn/shop/files/2025-06-18-7-1.jpg?v=1750750494&width=500',
    images: [
      {
        id: 1,
        url: 'https://derschutze.com/cdn/shop/files/2025-06-18-7-1.jpg?v=1750750494&width=800',
        alt: 'Black t-shirt 02 front view'
      }
    ],
    variants: [
      {
        id: 1,
        name: 'Black',
        color: '#000000',
        available: true
      }
    ],
    category: 'TOPS',
    tags: ['cotton', 'alternative', 'black', 'comfortable'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    materials: ['100% Cotton'],
    care: [
      'Machine wash cold',
      'Tumble dry low'
    ]
  },
  {
    id: 8,
    name: '"aziza" T Shirt purple',
    description: "Rich purple t-shirt that stands out from the crowd. This unique color option maintains the same premium quality and comfort while offering a distinctive style choice.",
    price: 45,
    currency: '€',
    image: 'https://derschutze.com/cdn/shop/files/2025-06-18-9-1.jpg?v=1750748532&width=500',
    images: [
      {
        id: 1,
        url: 'https://derschutze.com/cdn/shop/files/2025-06-18-9-1.jpg?v=1750748532&width=800',
        alt: 'Purple t-shirt front view'
      }
    ],
    variants: [
      {
        id: 1,
        name: 'Purple',
        color: '#800080',
        available: true
      }
    ],
    category: 'TOPS',
    tags: ['cotton', 'unique', 'purple', 'distinctive'],
    sizes: ['XS', 'S', 'M', 'L'],
    materials: ['100% Cotton'],
    care: [
      'Machine wash cold',
      'Tumble dry low'
    ]
  },
  {
    id: 9,
    name: '"aziza" T Shirt lightbrown',
    description: "Soft light brown t-shirt with a warm, earthy tone. This neutral color option is perfect for creating sophisticated, understated looks while maintaining comfort and quality.",
    price: 45,
    currency: '€',
    image: 'https://derschutze.com/cdn/shop/files/2025-06-18-10-1.jpg?v=1750748348&width=500',
    images: [
      {
        id: 1,
        url: 'https://derschutze.com/cdn/shop/files/2025-06-18-10-1.jpg?v=1750748348&width=800',
        alt: 'Light brown t-shirt front view'
      }
    ],
    variants: [
      {
        id: 1,
        name: 'Light Brown',
        color: '#D2B48C',
        available: true
      }
    ],
    category: 'TOPS',
    tags: ['cotton', 'neutral', 'earth', 'sophisticated'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    materials: ['100% Cotton'],
    care: [
      'Machine wash cold',
      'Tumble dry low'
    ]
  },
  {
    id: 10,
    name: '"aziza" Denim Jacket black',
    description: "Classic black denim jacket with a modern fit. This versatile piece can be dressed up or down, making it perfect for any occasion. Features premium denim construction with attention to detail.",
    price: 129,
    currency: '€',
    image: 'https://derschutze.com/cdn/shop/files/2025-06-18-15-1.jpg?v=1750748600&width=500',
    images: [
      {
        id: 1,
        url: 'https://derschutze.com/cdn/shop/files/2025-06-18-15-1.jpg?v=1750748600&width=800',
        alt: 'Black denim jacket front view'
      }
    ],
    variants: [
      {
        id: 1,
        name: 'Black',
        color: '#000000',
        available: true
      }
    ],
    category: 'OUTERWEAR',
    tags: ['denim', 'jacket', 'versatile', 'classic'],
    sizes: ['S', 'M', 'L', 'XL'],
    materials: ['100% Cotton Denim'],
    care: [
      'Machine wash cold',
      'Tumble dry low',
      'Do not bleach'
    ],
    featured: true
  },
  {
    id: 11,
    name: '"aziza" Cargo Pants olive',
    description: "Functional olive cargo pants with a contemporary design. These pants feature multiple pockets for utility while maintaining a sleek, modern aesthetic. Perfect for both casual and semi-formal occasions.",
    price: 95,
    currency: '€',
    image: 'https://derschutze.com/cdn/shop/files/2025-06-18-18-1.jpg?v=1750748680&width=500',
    images: [
      {
        id: 1,
        url: 'https://derschutze.com/cdn/shop/files/2025-06-18-18-1.jpg?v=1750748680&width=800',
        alt: 'Olive cargo pants front view'
      }
    ],
    variants: [
      {
        id: 1,
        name: 'Olive',
        color: '#6B8E23',
        available: true
      }
    ],
    category: 'PANTS',
    tags: ['cargo', 'functional', 'olive', 'modern'],
    sizes: ['30', '32', '34', '36', '38'],
    materials: ['100% Cotton'],
    care: [
      'Machine wash cold',
      'Tumble dry low',
      'Iron on medium heat'
    ]
  },
  {
    id: 12,
    name: '"aziza" Sneakers white',
    description: "Clean white sneakers with minimalist design. These versatile shoes feature premium materials and construction, making them perfect for everyday wear. The classic white color ensures they go with everything.",
    price: 75,
    currency: '€',
    image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/32201864/2025/3/4/42f293db-4f01-4955-a1b9-eacbdabdeb171741062271986-ADIDAS-Originals-Women-Casual-Shoes-1221741062271730-1.jpg',
    images: [
      {
        id: 1,
        url: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/32201864/2025/3/4/42f293db-4f01-4955-a1b9-eacbdabdeb171741062271986-ADIDAS-Originals-Women-Casual-Shoes-1221741062271730-1.jpg',
        alt: 'White sneakers side view'
      }
    ],
    variants: [
      {
        id: 1,
        name: 'White',
        color: '#FFFFFF',
        available: true
      }
    ],
    category: 'FOOTWEAR',
    tags: ['sneakers', 'white', 'minimalist', 'versatile'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    materials: ['Canvas Upper', 'Rubber Sole'],
    care: [
      'Spot clean with mild soap',
      'Air dry',
      'Do not machine wash'
    ]
  },
  {
    id: 13,
    name: 'Blossom Jersey',
    description: 'A limited edition jersey inspired by spring blossoms. Features a soft, breathable fabric and a vibrant floral print. Perfect for casual wear or sports.',
    price: 65,
    currency: '€',
    image: 'https://sdmntprpolandcentral.oaiusercontent.com/files/00000000-50dc-620a-b2e7-86a3566eb0bf/raw?se=2025-08-11T00%3A35%3A48Z&sp=r&sv=2024-08-04&sr=b&scid=7bfad340-4d81-5ed0-a5f4-53b84232d6ab&skoid=0a4a0f0c-99ac-4752-9d87-cfac036fa93f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-10T10%3A18%3A07Z&ske=2025-08-11T10%3A18%3A07Z&sks=b&skv=2024-08-04&sig=gqZYPJzseTQIDe3eKaNM%2BeNx6py5HHvO2IqFfKezhGw%3D',
    images: [
      {
        id: 1,
        url: 'https://sdmntprpolandcentral.oaiusercontent.com/files/00000000-50dc-620a-b2e7-86a3566eb0bf/raw?se=2025-08-11T00%3A35%3A48Z&sp=r&sv=2024-08-04&sr=b&scid=7bfad340-4d81-5ed0-a5f4-53b84232d6ab&skoid=0a4a0f0c-99ac-4752-9d87-cfac036fa93f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-10T10%3A18%3A07Z&ske=2025-08-11T10%3A18%3A07Z&sks=b&skv=2024-08-04&sig=gqZYPJzseTQIDe3eKaNM%2BeNx6py5HHvO2IqFfKezhGw%3D',
        alt: 'Blossom themed jersey front view'
      }
    ],
    variants: [
      { id: 1, name: 'Standard', color: 'Blossom', available: true }
    ],
    category: 'TOPS',
    tags: ['jersey', 'blossom', 'floral', 'limited'],
    sizes: ['S', 'M', 'L', 'XL'],
    materials: ['Polyester', 'Cotton'],
    care: ['Machine wash cold', 'Do not bleach', 'Tumble dry low'],
    featured: true,
    new: true
  }
]

export const categories = ['ALL', 'JORTS', 'TOPS', 'OUTERWEAR', 'PANTS', 'FOOTWEAR', 'ACCESS']

export function getProductsByCategory(category: string): Product[] {
  if (category === 'ALL') {
    return products
  }
  return products.filter(product => product.category === category)
}

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured)
}

export function getNewProducts(): Product[] {
  return products.filter(product => product.new)
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}
