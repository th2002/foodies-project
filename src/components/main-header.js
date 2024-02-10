import Link from 'next/link';
import logoImg from '@/assets/logo.png'

export default function MainHeader() {
  return (
    <header>
      <Link href="/public">
        <img src={logoImg.src} alt="A plate with food on it"/>
        NextLevel food
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}