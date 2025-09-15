import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Blog() {
  return (
    <div className="flex min-h-screen flex-col bg-yellow-50 text-zinc-950 dark:bg-stone-900 dark:text-stone-200">
      <Header />
      <div className="flex flex-col gap-8 px-4 md:px-32 xl:px-96">
        <div>
          <h1 className="py-4 text-3xl font-semibold">Blog</h1>
        </div>
        <p>Em construção...</p>
      </div>
      <Footer />
    </div>
  );
}
