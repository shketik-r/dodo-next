// import { Prisma } from '@prisma/client';
import { categories, ingredients, products } from './contans';
import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
}

const generateVariation = ({ productId, pizzaType, size }: { productId: number, pizzaType?: number, size?: number }) => {
  return {
    productId,
    pizzaType,
    size,
    price: randomDecimalNumber(190, 600),
  };
}

async function up() {

  await prisma.user.createMany({
    data: [
      {
        fullName: 'John Doe',
        email: 'john.doe@example.com',
        password: hashSync('123456', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'John Doe2',
        email: 'john.doe2@example.com',
        password: hashSync('123456', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin',
        email: 'admin@admin.com',
        password: hashSync('123456', 10),
        verified: new Date(),
        role: 'ADMIN',
      }
    ]
  })

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: 'Пепперони фреш',
      imageUrl:
        'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });


  const pizza2 = await prisma.product.create({
    data: {
      name: 'Сырная',
      imageUrl:
        'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: 'Чоризо фреш',
      imageUrl:
        'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  });

  await prisma.variation.createMany({
    data: [
      // Пицца "Пепперони фреш"
      generateVariation({ productId: pizza1.id, pizzaType: 1, size: 20 }),
      generateVariation({ productId: pizza1.id, pizzaType: 2, size: 30 }),
      generateVariation({ productId: pizza1.id, pizzaType: 2, size: 40 }),

      // Пицца "Сырная"
      generateVariation({ productId: pizza2.id, pizzaType: 1, size: 20 }),
      generateVariation({ productId: pizza2.id, pizzaType: 1, size: 30 }),
      generateVariation({ productId: pizza2.id, pizzaType: 1, size: 40 }),
      generateVariation({ productId: pizza2.id, pizzaType: 2, size: 20 }),
      generateVariation({ productId: pizza2.id, pizzaType: 2, size: 30 }),
      generateVariation({ productId: pizza2.id, pizzaType: 2, size: 40 }),

      // Пицца "Чоризо фреш"
      generateVariation({ productId: pizza3.id, pizzaType: 1, size: 20 }),
      generateVariation({ productId: pizza3.id, pizzaType: 2, size: 30 }),
      generateVariation({ productId: pizza3.id, pizzaType: 2, size: 40 }),

      // Остальные продукты
      generateVariation({ productId: 1 }),
      generateVariation({ productId: 2 }),
      generateVariation({ productId: 3 }),
      generateVariation({ productId: 4 }),
      generateVariation({ productId: 5 }),
      generateVariation({ productId: 6 }),
      generateVariation({ productId: 7 }),
      generateVariation({ productId: 8 }),
      generateVariation({ productId: 9 }),
      generateVariation({ productId: 10 }),
      generateVariation({ productId: 11 }),
      generateVariation({ productId: 12 }),
      generateVariation({ productId: 13 }),
      generateVariation({ productId: 14 }),
      generateVariation({ productId: 15 }),
      generateVariation({ productId: 16 }),
      generateVariation({ productId: 17 }),
    ],
  })


}



async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Variation" RESTART IDENTITY CASCADE`;
}


async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e)
  }
}


main().then(async () => {
  await prisma.$disconnect();
}).catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
})
