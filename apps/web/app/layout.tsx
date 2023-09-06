import { Providers } from "../src/providers/redux-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>        <Providers>{children}</Providers>
</body>
    </html>
  );
}
