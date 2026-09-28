import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:"MOONLU | Monika Leszczyńska",description:"Salon fryzjerski MOONLU we Wrocławiu. Promień 4."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pl"><body>{children}</body></html>}