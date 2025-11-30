import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../lib/auth/password";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Начало заполнения базы данных...");

  // Создаём админ пользователя
  const adminEmail = "admin@hartman.ru";
  const adminPassword = await hashPassword("Admin123!");

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      password: adminPassword,
      name: "Администратор",
      emailVerified: new Date(),
    },
  });

  console.log("✅ Админ пользователь создан:", admin.email);

  // Создаём тестового пользователя
  const testUserPassword = await hashPassword("Test123!");
  const testUser = await prisma.user.upsert({
    where: { email: "test@example.com" },
    update: {},
    create: {
      email: "test@example.com",
      password: testUserPassword,
      name: "Тестовый Пользователь",
      emailVerified: new Date(),
    },
  });

  console.log("✅ Тестовый пользователь создан:", testUser.email);

  // Создаём категории товаров
  const categories = [
    "Горные велосипеды",
    "Шоссейные велосипеды",
    "Городские велосипеды",
    "Детские велосипеды",
    "Женские велосипеды",
  ];

  // Создаём примеры товаров
  const products = [
    {
      name: "Hartman Velocity Roadster",
      description:
        "Профессиональный шоссейный велосипед для скоростных поездок. Легкая рама из карбона, профессиональная трансмиссия.",
      price: 125000,
      images: [
        "/images/velocity-roadster.png",
        "/images/velocity-road.jpg",
        "/images/velocity-text.png",
      ],
      category: "Шоссейные велосипеды",
      stock: 15,
      variants: [
        {
          name: "Черный",
          color: "#000000",
          image: "/images/black.png",
          stock: 5,
        },
        {
          name: "Синий",
          color: "#0066CC",
          image: "/images/blue.png",
          stock: 5,
        },
        {
          name: "Красный",
          color: "#CC0000",
          image: "/images/red.png",
          stock: 5,
        },
      ],
    },
    {
      name: "Hartman RideSwift",
      description:
        "Горный велосипед для активного отдыха. Прочная рама, амортизационная вилка, дисковые тормоза.",
      price: 85000,
      images: [
        "/images/rideswift.png",
        "/images/rideswift-text.png",
        "/images/road.jpg",
      ],
      category: "Горные велосипеды",
      stock: 20,
      variants: [
        {
          name: "Зеленый",
          color: "#00AA00",
          image: "/images/gras.png",
          stock: 7,
        },
        {
          name: "Серый",
          color: "#808080",
          image: "/images/gray.png",
          stock: 7,
        },
        {
          name: "Желтый",
          color: "#FFCC00",
          image: "/images/yellow.png",
          stock: 6,
        },
      ],
    },
    {
      name: "Hartman Rugged",
      description:
        "Надежный городской велосипед для ежедневных поездок. Удобная посадка, защита от грязи, багажник.",
      price: 45000,
      images: [
        "/images/rugged.png",
        "/images/rugged-text.png",
        "/images/wide-tyres.jpg",
      ],
      category: "Городские велосипеды",
      stock: 30,
      variants: [
        {
          name: "Черный",
          color: "#000000",
          image: "/images/black.png",
          stock: 10,
        },
        {
          name: "Синий",
          color: "#0066CC",
          image: "/images/blue.png",
          stock: 10,
        },
        {
          name: "Серый",
          color: "#808080",
          image: "/images/gray.png",
          stock: 10,
        },
      ],
    },
    {
      name: "Hartman Kids Explorer",
      description:
        "Детский велосипед для активных приключений. Безопасная конструкция, яркий дизайн, регулируемая высота седла.",
      price: 25000,
      images: [
        "/images/kids-banner-cycle.png",
        "/images/cycle-hero-img1.png",
        "/images/cycle-hero-img2.png",
      ],
      category: "Детские велосипеды",
      stock: 25,
      variants: [
        {
          name: "Красный",
          color: "#CC0000",
          image: "/images/red.png",
          stock: 9,
        },
        {
          name: "Синий",
          color: "#0066CC",
          image: "/images/blue.png",
          stock: 8,
        },
        {
          name: "Желтый",
          color: "#FFCC00",
          image: "/images/yellow.png",
          stock: 8,
        },
      ],
    },
    {
      name: "Hartman Women's Classic",
      description:
        "Элегантный женский велосипед для городских поездок. Низкая рама, удобная посадка, стильный дизайн.",
      price: 55000,
      images: [
        "/images/women-banner-cycle.png",
        "/images/women-cycle1.png",
        "/images/women-cycle2.png",
      ],
      category: "Женские велосипеды",
      stock: 18,
      variants: [
        {
          name: "Розовый",
          color: "#FF69B4",
          image: "/images/red.png",
          stock: 6,
        },
        {
          name: "Белый",
          color: "#FFFFFF",
          image: "/images/white.png",
          stock: 6,
        },
        {
          name: "Фиолетовый",
          color: "#9932CC",
          image: "/images/blue.png",
          stock: 6,
        },
      ],
    },
  ];

  // Создаём товары
  for (const productData of products) {
    const { variants, ...productInfo } = productData;

    const product = await prisma.product.upsert({
      where: { name: productData.name },
      update: {},
      create: {
        ...productInfo,
        variants: {
          create: variants.map((variant) => ({
            name: variant.name,
            color: variant.color,
            image: variant.image,
            stock: variant.stock,
          })),
        },
      },
      include: { variants: true },
    });

    console.log(`✅ Товар создан: ${product.name} (${product.variants.length} вариантов)`);
  }

  console.log("🎉 Заполнение базы данных завершено!");
}

main()
  .catch((e) => {
    console.error("❌ Ошибка при заполнении базы данных:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

