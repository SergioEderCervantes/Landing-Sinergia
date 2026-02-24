import Header from "../layout/Header";
import ContactForm from "../components/ContactForm";

export default function Contacto() {
  return (
    <main className="min-h-screen font-[inter] bg-gunmetal text-lavender-web flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-2xl">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
