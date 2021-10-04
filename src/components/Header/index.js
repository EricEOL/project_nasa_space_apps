import Link from 'next/link';
import style from './header.module.scss';

export function Header() {
  return (
    <header className={style.header}>
      <Link href="/">
        <div className={style.logo}>
          <img src="/images/nasa_logo.png" />
          <strong>Apollo 21</strong>
        </div>
      </Link>
    </header>
  )
}