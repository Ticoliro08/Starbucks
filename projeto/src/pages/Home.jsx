import Button from '../components/Button';
import heroImage from '../assets/starbucks-hero.jpg'; // coloque a imagem na pasta assets
import '../index.css'
export default function Home() {
  return (
  <section className="hero">
  <div className="hero-content">
    <h1>Bem-vindo ao <span>Starbucks</span></h1>
    <p>Desperte seus sentidos com nossa seleção premium de cafés e bebidas artesanais</p>
    <button className="btn btn-primary">Explorar Menu</button>
    <button className="btn btn-secondary">Saiba Mais</button>
  </div>
</section>
  )
}
