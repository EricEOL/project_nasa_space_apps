import Link from 'next/link';
import style from '../styles/home.module.scss';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />

      <main className={style.main}>
        <img src="/images/rocket_background.jpg" />
        <div>
          <p>Como está a energia elétrica da sua casa ?</p>
          <span>Nós precisamos saber</span>
          <strong>Sua participação estará ajudando a todos! 😍</strong>

          <div className={style.containerButtons}>
            <Link href="/collaborate">
              <button>Quero ajudar</button>
            </Link>

            <Link href="/data">
              <button className={style.readData}>Observar dados</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
