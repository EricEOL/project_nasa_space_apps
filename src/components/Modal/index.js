import style from './modal.module.scss';

export function Modal({ close, onClick, isAnimation }) {
  return (
    <div className={`${style.modal} ${isAnimation && style.animation}`}>
      <div className={style.modalIntern}>
        <img src="/images/astronaut2.jpg"/>
        <button className={style.closeModal} onClick={close}>X</button>
        <p>Muito obrigado por contribuir conosco!</p>
        <strong>
          Você ajudou um projeto que irá beneficiar
          muitas famílias e o meio ambiente
        </strong>
        <button onClick={onClick} className={style.youreWelcome}>De nada!</button>
      </div>
    </div>
  )
}