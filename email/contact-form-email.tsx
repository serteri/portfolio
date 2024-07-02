import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = { message: string; senderEmail: string };

export function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head>
        <Preview>New Message from your portfolio site</Preview>
      </Head>
      <Body className="bg-gray-100">
        <Container>
          <Section className="bg-white borderBlack my-18 px-10 py-4 rounded-md">
            <Heading className="leading-tight">
              You received the following message from the contact form{" "}
            </Heading>
            <Text>{message}</Text>
            <Hr />
            <text> The sender's email is : {senderEmail}</text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
