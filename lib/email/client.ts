const UNISENDER_API_KEY = process.env.UNISENDER_API_KEY!;
const UNISENDER_API_URL = "https://api.unisender.com/ru/api";

interface UniSenderResponse {
  result?: {
    email_id?: string;
  };
  error?: string;
  code?: string;
}

interface SendEmailParams {
  email: string;
  senderName: string;
  senderEmail: string;
  subject: string;
  body: string;
  listId?: string;
}

export async function sendEmail(params: SendEmailParams): Promise<UniSenderResponse> {
  const { email, senderName, senderEmail, subject, body, listId } = params;

  const formData = new URLSearchParams();
  formData.append("api_key", UNISENDER_API_KEY);
  formData.append("email", email);
  formData.append("sender_name", senderName);
  formData.append("sender_email", senderEmail);
  formData.append("subject", subject);
  formData.append("body", body);
  formData.append("format", "json");
  
  if (listId) {
    formData.append("list_id", listId);
  }

  try {
    const response = await fetch(`${UNISENDER_API_URL}/sendEmail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    const data: UniSenderResponse = await response.json();

    if (data.error) {
      console.error("UniSender error:", data.error, data.code);
      throw new Error(`UniSender error: ${data.error}`);
    }

    return data;
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
}

export async function subscribeContact(
  email: string,
  listId: string,
  fields?: Record<string, string>
): Promise<UniSenderResponse> {
  const formData = new URLSearchParams();
  formData.append("api_key", UNISENDER_API_KEY);
  formData.append("list_ids", listId);
  formData.append("fields[email]", email);
  formData.append("format", "json");
  formData.append("double_optin", "0");

  if (fields) {
    Object.entries(fields).forEach(([key, value]) => {
      formData.append(`fields[${key}]`, value);
    });
  }

  try {
    const response = await fetch(`${UNISENDER_API_URL}/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    return response.json();
  } catch (error) {
    console.error("Subscribe error:", error);
    throw error;
  }
}

