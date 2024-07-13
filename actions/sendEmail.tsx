"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import { getStackWithoutErrorMessage } from "next/dist/lib/format-server-error";
import { getErrorMessage } from "@/lib/utils";
import { ContactFormEmail } from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");

  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email or message.",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid sender email or message.",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onbaoarding@resend.dev>",
      to: "serteri@hotmail.com",
      subject: "New message from your website",
      reply_to: senderEmail as string,
      // text: message as string,
      react: (
        <ContactFormEmail
          message={message as string}
          senderEmail={senderEmail as string}
        />
      ),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
