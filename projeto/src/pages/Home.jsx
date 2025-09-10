import Button from '../components/Button';
import heroImage from './assets/starbucks-frappuccino.jpg'; // coloque a imagem na pasta assets

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-green-900/70"></div>
      <img src={heroImage} alt="Starbucks" className="w-full h-screen object-cover"/>
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-5xl font-bold mb-4">Bem-vindo ao <span className="text-yellow-500">Starbucks</span></h1>
        <p className="text-white text-lg mb-6">Desperte seus sentidos com nossa seleção premium de cafés e bebidas artesanais</p>
        <div className="flex gap-4">
          <Button>Explorar Menu</Button>
        </div>
      </div>
    </div>
  )
}
