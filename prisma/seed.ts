import { config } from "dotenv";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { hashPassword } from "../lib/auth/password";

// Загружаем переменные окружения
config();

// Для seed используем адаптер, как в основном клиенте
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
});

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
      role: "ADMIN",
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
      role: "USER",
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

  // Создаём категорийные фичи
  const categoryFeatures = [
    {
      category: "Шоссейные велосипеды",
      features: [
        {
          title: "Discover the speed of the Velocity Roadster",
          description:
            "Discover the Speed of the Velocity Roadster—crafted for those who crave both speed and comfort. With its sleek design and advanced features, this bike offers a thrilling ride whether you're commuting, racing, or exploring new routes. Experience unmatched performance and style on every journey.",
          image: "/images/velocity-road.jpg",
          items: [
            { label: "Aerodynamic Frame", value: "Lightweight and fast." },
            { label: "Precision Gears", value: "Smooth, reliable shifting." },
            {
              label: "High-Performance Tires",
              value: "Excellent grip and stability.",
            },
            {
              label: "Advanced Brakes",
              value: "Strong, responsive stopping power.",
            },
            { label: "Comfort Design", value: "Ergonomic for long rides." },
            {
              label: "Custom Fit",
              value: "Adjustable for a personalized ride.",
            },
          ],
        },
        {
          title: "Easy Pedaling with Great Control",
          description:
            "Experience a ride like never before with pedals engineered for both comfort and control. Built to handle any terrain, these pedals offer a secure grip and smooth rotation, ensuring you stay in command no matter where your journey takes you. Durable and reliable, they're designed to support every push, making each ride more enjoyable and efficient.",
          image: "/images/pendal.jpg",
          items: [
            { label: "Transmission", value: "Gates Carbon Drive CDC" },
            { label: "Front Sprocket", value: "55 Tooth 5Bolt 130 BCD" },
            { label: "Belt", value: "118 Tooth CD" },
            { label: "Metal Chain", value: "118 Tooth CD" },
          ],
        },
        {
          title: "Wide tyres",
          description:
            "The design of the fork allows the mounting of wide rims with \"oversize\" tires (up to 42 mm). This solution, derived from cyclocross, gives stability to the bicycle.",
          image: "/images/wide-tyres.jpg",
          items: [],
        },
      ],
    },
    {
      category: "Горные велосипеды",
      features: [
        {
          title: "Mountain Adventure Ready",
          description:
            "Built for rugged terrain and challenging trails. This mountain bike combines durability with performance, featuring advanced suspension and powerful brakes for confident off-road riding.",
          image: "/images/rideswift.png",
          items: [
            { label: "Suspension Fork", value: "Smooth ride on rough terrain." },
            { label: "Disc Brakes", value: "Reliable stopping power." },
            { label: "Wide Tires", value: "Excellent traction and stability." },
            { label: "Durable Frame", value: "Built to last." },
          ],
        },
        {
          title: "Trail Performance",
          description:
            "Engineered for trail performance with precision shifting and responsive handling. Conquer any mountain path with confidence.",
          image: "/images/road.jpg",
          items: [
            { label: "Gear System", value: "Smooth multi-speed shifting." },
            { label: "Frame Material", value: "Lightweight yet strong." },
          ],
        },
        {
          title: "Off-Road Capability",
          description:
            "Designed to handle the toughest trails with advanced components and reliable construction.",
          image: "/images/rideswift-text.png",
          items: [],
        },
      ],
    },
    {
      category: "Городские велосипеды",
      features: [
        {
          title: "Urban Commuter",
          description:
            "Perfect for daily city commuting. Comfortable, reliable, and designed for urban environments with practical features for everyday use.",
          image: "/images/rugged.png",
          items: [
            { label: "Comfortable Seat", value: "Ergonomic design for long rides." },
            { label: "Fenders", value: "Protection from road spray." },
            { label: "Basket Ready", value: "Easy cargo transport." },
          ],
        },
        {
          title: "City Navigation",
          description:
            "Navigate city streets with ease. Responsive handling and smooth ride quality make every commute enjoyable.",
          image: "/images/rugged-text.png",
          items: [
            { label: "Lightweight Frame", value: "Easy to maneuver." },
            { label: "Upright Position", value: "Comfortable city riding." },
          ],
        },
        {
          title: "Daily Reliability",
          description:
            "Built for daily use with reliable components and low maintenance requirements.",
          image: "/images/wide-tyres.jpg",
          items: [],
        },
      ],
    },
    {
      category: "Детские велосипеды",
      features: [
        {
          title: "Safe and Fun",
          description:
            "Designed with safety and fun in mind. Bright colors, stable construction, and adjustable components grow with your child.",
          image: "/images/kids-banner-cycle.png",
          items: [
            { label: "Safety Features", value: "Training wheels available." },
            { label: "Adjustable Seat", value: "Grows with your child." },
            { label: "Bright Colors", value: "Fun and visible." },
          ],
        },
        {
          title: "Learning Made Easy",
          description:
            "Perfect for learning to ride with stable geometry and easy-to-use components.",
          image: "/images/cycle-hero-img1.png",
          items: [
            { label: "Stable Design", value: "Easy to balance." },
            { label: "Lightweight", value: "Easy for kids to handle." },
          ],
        },
        {
          title: "Adventure Ready",
          description:
            "Built for adventure and exploration with durable construction and fun features.",
          image: "/images/cycle-hero-img2.png",
          items: [],
        },
      ],
    },
    {
      category: "Женские велосипеды",
      features: [
        {
          title: "Elegant Design",
          description:
            "Stylish and comfortable design tailored for women. Low step-through frame and ergonomic components ensure a comfortable ride.",
          image: "/images/women-banner-cycle.png",
          items: [
            { label: "Low Frame", value: "Easy to mount and dismount." },
            { label: "Comfortable Seat", value: "Designed for comfort." },
            { label: "Stylish Colors", value: "Beautiful design options." },
          ],
        },
        {
          title: "Comfort First",
          description:
            "Every component is chosen for comfort and ease of use, making every ride enjoyable.",
          image: "/images/women-cycle1.png",
          items: [
            { label: "Ergonomic Handlebars", value: "Comfortable grip position." },
            { label: "Smooth Ride", value: "Absorbs road vibrations." },
          ],
        },
        {
          title: "City Style",
          description:
            "Perfect for city riding with elegant design and practical features.",
          image: "/images/women-cycle2.png",
          items: [],
        },
      ],
    },
  ];

  // Создаём категорийные фичи
  for (const categoryFeature of categoryFeatures) {
    await prisma.categoryFeature.upsert({
      where: { category: categoryFeature.category },
      update: { features: categoryFeature.features },
      create: {
        category: categoryFeature.category,
        features: categoryFeature.features,
      },
    });

    console.log(
      `✅ Категорийные фичи созданы: ${categoryFeature.category}`
    );
  }

  // Создаём товары
  const productSpecs = [
    {
      productName: "Hartman Velocity Roadster",
      specs: {
        ridersAge: "12+",
        frame: "Lightweight Alloy Frame of 16T",
        fork: "Threadless steel suspension",
        crank: "3spd 24TX34TX42T 170mm cotterless with deflector plate",
        bottomBracket: "Cotterless BB cartridge",
        shifters: "Microshift 3x7spd",
        cogSet: "7spd 14T-28T free wheel",
        chainWheel: "7sp-112 links",
        frontDerailleur: "Microshift FD-M20, 3spd",
        rearDerailleur: "Microshift RD-M21L, 7spd",
        rims: "Double walled alloy rim",
        hubs: "ED black hub",
        tires: "26T x 2.35T wide Nylon tires",
        pedals: "Plastic body flat pedal",
        brakes: "Dual Mechanical Disc 160mm rotor plates",
        brakeLevers: "Alloy 3-finger mechanical",
        handlebar: "Oversized 640mm XMR handlebar",
        stem: "XMR alloy stem",
        headset: "Oversized threadless with spacers",
        grips: "Closed TPE grip",
        saddle: "Soft PU XMR saddle",
        seatPost: "300mm ED black seat post",
      },
    },
    {
      productName: "Hartman RideSwift",
      specs: {
        ridersAge: "14+",
        frame: "Aluminum mountain frame 18T",
        fork: "Suspension fork with lockout",
        crank: "3spd 22TX32TX42T 175mm",
        bottomBracket: "Sealed cartridge BB",
        shifters: "Shimano 3x8spd",
        cogSet: "8spd 11T-32T cassette",
        chainWheel: "8sp-116 links",
        frontDerailleur: "Shimano FD-M310, 3spd",
        rearDerailleur: "Shimano RD-M360, 8spd",
        rims: "Double walled alloy rim 26\"",
        hubs: "Alloy disc hub",
        tires: "26\" x 2.1\" mountain tires",
        pedals: "Platform pedals with pins",
        brakes: "Hydraulic disc brakes 180mm",
        brakeLevers: "Alloy 2-finger hydraulic",
        handlebar: "Riser bar 680mm",
        stem: "Alloy adjustable stem",
        headset: "Threadless integrated",
        grips: "Lock-on rubber grips",
        saddle: "MTB saddle with gel padding",
        seatPost: "350mm alloy seat post",
      },
    },
    {
      productName: "Hartman Rugged",
      specs: {
        ridersAge: "12+",
        frame: "Steel city frame 17T",
        fork: "Rigid steel fork",
        crank: "1spd 44T 170mm",
        bottomBracket: "Sealed BB",
        shifters: "Single speed",
        cogSet: "Single speed 18T",
        chainWheel: "1sp-112 links",
        frontDerailleur: "N/A",
        rearDerailleur: "N/A",
        rims: "Single walled alloy rim 700c",
        hubs: "Alloy hub with coaster brake",
        tires: "700c x 35mm city tires",
        pedals: "Platform pedals",
        brakes: "Coaster brake + front V-brake",
        brakeLevers: "Single lever for front brake",
        handlebar: "Swept-back handlebar 600mm",
        stem: "Quill stem",
        headset: "Threaded headset",
        grips: "Comfort grips",
        saddle: "Comfort city saddle",
        seatPost: "300mm steel seat post",
      },
    },
    {
      productName: "Hartman Kids Explorer",
      specs: {
        ridersAge: "5-10",
        frame: "Steel kids frame 12T",
        fork: "Rigid steel fork",
        crank: "1spd 32T 140mm",
        bottomBracket: "Sealed BB",
        shifters: "Single speed",
        cogSet: "Single speed 16T",
        chainWheel: "1sp-98 links",
        frontDerailleur: "N/A",
        rearDerailleur: "N/A",
        rims: "Single walled steel rim 20\"",
        hubs: "Steel hub",
        tires: "20\" x 2.0\" kids tires",
        pedals: "Platform pedals",
        brakes: "Coaster brake",
        brakeLevers: "N/A",
        handlebar: "Kids handlebar 500mm",
        stem: "Quill stem",
        headset: "Threaded headset",
        grips: "Soft kids grips",
        saddle: "Kids comfort saddle",
        seatPost: "200mm adjustable seat post",
      },
    },
    {
      productName: "Hartman Women's Classic",
      specs: {
        ridersAge: "12+",
        frame: "Aluminum step-through frame 16T",
        fork: "Rigid aluminum fork",
        crank: "3spd 28TX38TX48T 165mm",
        bottomBracket: "Sealed cartridge BB",
        shifters: "Shimano 3x7spd",
        cogSet: "7spd 14T-28T free wheel",
        chainWheel: "7sp-110 links",
        frontDerailleur: "Shimano FD-M310, 3spd",
        rearDerailleur: "Shimano RD-M360, 7spd",
        rims: "Double walled alloy rim 700c",
        hubs: "Alloy hub",
        tires: "700c x 32mm city tires",
        pedals: "Platform pedals",
        brakes: "V-brakes front and rear",
        brakeLevers: "Alloy 2-finger levers",
        handlebar: "Swept-back handlebar 580mm",
        stem: "Quill stem",
        headset: "Threaded headset",
        grips: "Comfort grips",
        saddle: "Women's comfort saddle",
        seatPost: "300mm alloy seat post",
      },
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

    console.log(
      `✅ Товар создан: ${product.name} (${product.variants.length} вариантов)`
    );

    // Создаём спецификации для товара
    const productSpec = productSpecs.find(
      (spec) => spec.productName === productData.name
    );
    if (productSpec) {
      await prisma.productSpecification.upsert({
        where: { productId: product.id },
        update: { specs: productSpec.specs },
        create: {
          productId: product.id,
          specs: productSpec.specs,
        },
      });

      console.log(`✅ Спецификации созданы для: ${product.name}`);
    }
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

