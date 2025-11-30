import {
  OrderEmailData,
  ShippingEmailData,
  WelcomeEmailData,
  PasswordResetEmailData,
} from "../types";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

const baseStyles = `
  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
  .header { background: #1a1a1a; color: white; padding: 30px; text-align: center; }
  .header h1 { margin: 0; font-size: 24px; }
  .content { padding: 30px; background: #ffffff; }
  .footer { background: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #666; }
  .button { display: inline-block; padding: 12px 30px; background: #1a1a1a; color: white; text-decoration: none; border-radius: 4px; margin: 20px 0; }
  .order-item { border-bottom: 1px solid #eee; padding: 15px 0; }
  .total { font-size: 18px; font-weight: bold; margin-top: 20px; }
`;

function wrapTemplate(content: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${baseStyles}</style>
</head>
<body>
  <div class="container">
    ${content}
  </div>
</body>
</html>`;
}

export function getOrderConfirmationTemplate(data: OrderEmailData): string {
  const itemsHtml = data.items
    .map(
      (item) => `
      <div class="order-item">
        <strong>${item.name}</strong><br>
        Количество: ${item.quantity} × ${item.price.toLocaleString("ru-RU")} ₽
      </div>
    `
    )
    .join("");

  const content = `
    <div class="header">
      <h1>Hartman Bikes</h1>
    </div>
    <div class="content">
      <h2>Спасибо за заказ!</h2>
      <p>Здравствуйте, ${data.customerName}!</p>
      <p>Ваш заказ <strong>#${data.orderId}</strong> успешно оформлен.</p>
      
      <h3>Состав заказа:</h3>
      ${itemsHtml}
      
      <div class="total">
        Итого: ${data.total.toLocaleString("ru-RU")} ₽
      </div>
      
      <h3>Адрес доставки:</h3>
      <p>
        ${data.shippingAddress.firstName} ${data.shippingAddress.lastName}<br>
        ${data.shippingAddress.address}<br>
        ${data.shippingAddress.city}, ${data.shippingAddress.postalCode}<br>
        ${data.shippingAddress.country}
      </p>
      
      <a href="${APP_URL}/orders/${data.orderId}" class="button">Посмотреть заказ</a>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} Hartman Bikes. Все права защищены.</p>
    </div>
  `;

  return wrapTemplate(content);
}

export function getOrderShippedTemplate(data: ShippingEmailData): string {
  const trackingInfo = data.trackingNumber
    ? `<p>Номер отслеживания: <strong>${data.trackingNumber}</strong></p>
       ${data.carrier ? `<p>Служба доставки: ${data.carrier}</p>` : ""}`
    : "";

  const content = `
    <div class="header">
      <h1>Hartman Bikes</h1>
    </div>
    <div class="content">
      <h2>Ваш заказ отправлен!</h2>
      <p>Здравствуйте, ${data.customerName}!</p>
      <p>Ваш заказ <strong>#${data.orderId}</strong> передан в службу доставки.</p>
      
      ${trackingInfo}
      ${data.estimatedDelivery ? `<p>Ожидаемая дата доставки: ${data.estimatedDelivery}</p>` : ""}
      
      <a href="${APP_URL}/orders/${data.orderId}" class="button">Отследить заказ</a>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} Hartman Bikes. Все права защищены.</p>
    </div>
  `;

  return wrapTemplate(content);
}

export function getWelcomeTemplate(data: WelcomeEmailData): string {
  const content = `
    <div class="header">
      <h1>Hartman Bikes</h1>
    </div>
    <div class="content">
      <h2>Добро пожаловать!</h2>
      <p>Здравствуйте${data.name ? `, ${data.name}` : ""}!</p>
      <p>Спасибо за регистрацию в нашем магазине.</p>
      <p>Теперь вам доступны:</p>
      <ul>
        <li>Отслеживание заказов</li>
        <li>История покупок</li>
        <li>Персональные рекомендации</li>
        <li>Эксклюзивные предложения</li>
      </ul>
      
      <a href="${APP_URL}/cycle-collections" class="button">Перейти к покупкам</a>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} Hartman Bikes. Все права защищены.</p>
    </div>
  `;

  return wrapTemplate(content);
}

export function getPasswordResetTemplate(data: PasswordResetEmailData): string {
  const content = `
    <div class="header">
      <h1>Hartman Bikes</h1>
    </div>
    <div class="content">
      <h2>Сброс пароля</h2>
      <p>Вы запросили сброс пароля для вашей учётной записи.</p>
      <p>Нажмите кнопку ниже, чтобы установить новый пароль:</p>
      
      <a href="${data.resetLink}" class="button">Сбросить пароль</a>
      
      <p style="color: #666; font-size: 14px;">
        Ссылка действительна в течение ${data.expiresIn}.<br>
        Если вы не запрашивали сброс пароля, проигнорируйте это письмо.
      </p>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} Hartman Bikes. Все права защищены.</p>
    </div>
  `;

  return wrapTemplate(content);
}

