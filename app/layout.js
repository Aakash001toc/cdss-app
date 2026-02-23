export const metadata = {
  title: "CDSS App",
  description: "Clinical Decision Support System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
