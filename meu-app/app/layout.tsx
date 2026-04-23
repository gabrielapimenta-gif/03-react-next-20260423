import "@/app/globals.css"
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({ children }: {
  children:
  React.ReactNode
}) {
  return (
    <html lang="pt-br" className={cn("font-sans", geist.variable)}>
      <head>
        <title>Lista de Tarefas</title>
      </head>
      <body>{children}</body>
    </html>
  )
}