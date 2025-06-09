import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Linkedin, Phone, Youtube, Download, Calendar } from "lucide-react";
import Image from "next/image";
import Perfil from "../../public/perfil.jpeg";

export default function LinktreeArquiteta() {
  return (
    <div className="min-h-screen p-6 flex flex-col items-center text-center font-sans">
      <div className="max-w-md w-full space-y-4 bg-[#EFE8D8] p-8 rounded-2xl">
        <Image
          src={Perfil}
          alt="foto"
          className="rounded-full mx-auto w-32 h-32 object-cover border-4 border-[#D8D7B2]"
        />
        <h1 className="text-2xl font-bold text-[#725C3F]">@arq.luizafranca</h1>
        <p className="text-sm text-[#725C3F]">Seu espaço com identidade, aconchego e funcionalidade.</p>

        <Card className="bg-[#E5E0D8] border-none">
          <CardContent className="p-4 space-y-3">
            <Button variant="outline" className="w-full bg-[#E5ADA8] text-[#725C3F] hover:bg-[#D0A77B]">🏠 Portfólio de Projetos</Button>
            <Button variant="outline" className="w-full flex gap-2 justify-center bg-[#E5ADA8] text-[#725C3F] hover:bg-[#D0A77B]">
              <Calendar size={16} /> Agende sua Consultoria Gratuita
            </Button>
            <Button variant="outline" className="w-full flex gap-2 justify-center bg-[#E5ADA8] text-[#725C3F] hover:bg-[#D0A77B]">
              <Download size={16} /> Baixar E-book Gratuito
            </Button>

            <div className="flex justify-center gap-4 pt-2 text-[#725C3F]">
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="https://wa.me/5579996524316" aria-label="WhatsApp"><Phone size={20} /></a>
            </div>
          </CardContent>
        </Card>

        <p className="text-xs text-[#725C3F] pt-4">© 2025 Luiza Franca - Todos os direitos reservados</p>
      </div>
    </div>
  );
}
