import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screem flex-col">
            <Header />
            <body className="flex-1">{children}</body>
            <Footer />
        </div>
    );
}
