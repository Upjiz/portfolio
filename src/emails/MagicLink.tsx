import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface RaycastMagicLinkEmailProps {
  magicLink?: string;
  message?: string;
  email?: string;
  name?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const RaycastMagicLinkEmail = ({
  magicLink,
  message,
  email,
  name,
}: RaycastMagicLinkEmailProps) => (
  <Tailwind
    config={{
      theme: {
        extend: {
          colors: {
            brand: "#007291",
          },
        },
      },
    }}
  >
    <Html>
      <Head />
      <Preview>Log in with this magic link.</Preview>
      <Body className="bg-white font-sans">
        <Container
          className="mx-auto p-6 bg-bottom bg-no-repeat"
          style={{ backgroundImage: 'url("/assets/raycast-bg.png")' }}
        >
          <Img
            src={`${baseUrl}/static/raycast-logo.png`}
            width={48}
            height={48}
            alt="Raycast"
          />
          <Heading className="text-2xl font-bold mt-12">
            🪄 Nouvelle entrée formulaire de {name}
          </Heading>
          <Section className="my-6">
            <Text className="text-base leading-6">
              <Link className="text-red-500" href={magicLink}>
                {email}
              </Link>
            </Text>
            <Text className="text-base leading-6">{message}</Text>
          </Section>
          <Text className="text-base leading-6">
            Best,
            <br />- Raycast Team
          </Text>
          <Hr className="border-gray-300 mt-12" />
          <Img
            src={`${baseUrl}/static/raycast-logo.png`}
            width={32}
            height={32}
            className="grayscale my-5"
          />
          <Text className="text-xs text-gray-500 ml-1">
            Raycast Technologies Inc.
          </Text>
          <Text className="text-xs text-gray-500 ml-1">
            2093 Philadelphia Pike #3222, Claymont, DE 19703
          </Text>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

RaycastMagicLinkEmail.PreviewProps = {
  magicLink: "https://raycast.com",
} as RaycastMagicLinkEmailProps;

export default RaycastMagicLinkEmail;
