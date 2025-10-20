import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        {/* Imagen centrada */}
        <Image
          src="/LogoProyecto.png" // Reemplaza con la ruta de tu imagen
          alt="Imagen centrada"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />

        {/* Texto debajo */}
        <p className="mt-4 text-lg font-medium text-gray-700 text-center">
          Taskbit
        </p>
      </div>
    </div>
  );
}
