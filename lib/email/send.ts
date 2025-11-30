import { sendEmail } from "./client";
import {
  OrderEmailData,
  ShippingEmailData,
  WelcomeEmailData,
  PasswordResetEmailData,
} from "./types";
import {
  getOrderConfirmationTemplate,
  getOrderShippedTemplate,
  getWelcomeTemplate,
  getPasswordResetTemplate,
} from "./templates";

const SENDER_NAME = "Hartman Bikes";
const SENDER_EMAIL = process.env.SENDER_EMAIL || "noreply@hartman.ru";

export async function sendOrderConfirmation(data: OrderEmailData) {
  const html = getOrderConfirmationTemplate(data);

  return sendEmail({
    email: data.customerEmail,
    senderName: SENDER_NAME,
    senderEmail: SENDER_EMAIL,
    subject: `Подтверждение заказа #${data.orderId}`,
    body: html,
  });
}

export async function sendOrderShipped(data: ShippingEmailData) {
  const html = getOrderShippedTemplate(data);

  return sendEmail({
    email: data.customerEmail,
    senderName: SENDER_NAME,
    senderEmail: SENDER_EMAIL,
    subject: `Ваш заказ #${data.orderId} отправлен`,
    body: html,
  });
}

export async function sendWelcomeEmail(data: WelcomeEmailData) {
  const html = getWelcomeTemplate(data);

  return sendEmail({
    email: data.email,
    senderName: SENDER_NAME,
    senderEmail: SENDER_EMAIL,
    subject: "Добро пожаловать в Hartman Bikes!",
    body: html,
  });
}

export async function sendPasswordResetEmail(data: PasswordResetEmailData) {
  const html = getPasswordResetTemplate(data);

  return sendEmail({
    email: data.email,
    senderName: SENDER_NAME,
    senderEmail: SENDER_EMAIL,
    subject: "Сброс пароля",
    body: html,
  });
}

