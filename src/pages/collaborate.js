import { useState } from "react";
import { useRouter } from 'next/router';
import { Header } from "../components/Header";
import style from '../styles/collaborate.module.scss';
import communities from '../db/communities.json';
import { Modal } from '../components/Modal';
import { Spinner } from '../components/Spinner';
import { CollectionRegistry } from "../backend/CollectionRegistry";

export default function Collaborate() {

  const [community, setCommunity] = useState(communities[0].name);
  const [energySituation, setEnergySituation] = useState("Legalizada");
  const [isSending, setIsSending] = useState(false);
  const [sendRegisty, setSendRegistry] = useState(false);

  const router = useRouter();
  const registry = new CollectionRegistry();

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);

/*     const newRegistry = {
      community,
      energySituation
    }
    await registry.save(newRegistry); */
    setSendRegistry(true);
    setIsSending(false);
  }

  return (
    <>
      <Header />

      <div className={style.formContainer}>

        <strong>Novo Registro</strong>
        <span>Se você já preencheu alguma vez, por favor, não faça novamente</span>

        <form onSubmit={handleSubmit}>

          <div className={style.formInput}>
            <label>Sua comunidade</label>
            <select value={community} onChange={(e) => setCommunity(e.target.value)}>
              {communities.map(community => (
                <option key={community.id}>
                  {community.name}
                </option>
              ))}
            </select>
          </div>

          <div className={style.formInput}>
            <label>Como está a energia elétrica de sua casa ?</label>
            <select value={energySituation} onChange={(e) => setEnergySituation(e.target.value)}>
              <option>Legalizada</option>
              <option>Irregular</option>
              <option>Não possui</option>
            </select>
          </div>

          <button type="submit" disabled={sendRegisty === true}>{!isSending ? "Enviar" : <Spinner />}</button>
        </form>

        {sendRegisty && <Modal close={() => setSendRegistry(false)} onClick={() => router.push("/data")} isAnimation={sendRegisty}/>}
      </div>
    </>
  )
}