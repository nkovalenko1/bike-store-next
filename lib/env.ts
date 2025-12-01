import { z } from "zod";

const envSchema = z.object({
  // Database
  DATABASE_URL: z.string().url().min(1),

  // NextAuth.js
  NEXTAUTH_SECRET: z.string().min(1),
  NEXTAUTH_URL: z.string().url().min(1),

  // CloudPayments
  CLOUDPAYMENTS_PUBLIC_ID: z.string().min(1),
  CLOUDPAYMENTS_SECRET_KEY: z.string().min(1),

  // UniSender
  UNISENDER_API_KEY: z.string().min(1),

  // Application
  NEXT_PUBLIC_APP_URL: z.string().url().min(1),
  DEFAULT_CURRENCY: z.string().length(3).default("RUB"),
});

type Env = z.infer<typeof envSchema>;

function getEnv(): Env {
  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error("❌ Invalid environment variables:");
    console.error(
      JSON.stringify(parsed.error.flatten().fieldErrors, null, 2)
    );
    throw new Error("Invalid environment variables");
  }

  return parsed.data;
}

export const env = getEnv();

