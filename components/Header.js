import { useState } from "react";
import styles from "../styles/Header.module.css";
import { useRouter } from 'next/router'
const Header = ({data}) => {
  const router = useRouter()
  const [event, setEvent] = useState([])
    const searchEvent = (e) => {
        const text = e.target.value;
        const filter = data.filter(
          (event) =>
            event.title.toLowerCase().indexOf(text.toLowerCase()) !== -1 ||
            event.persons.find(
              (i) => i.toLowerCase().indexOf(text.toLowerCase()) !== -1
            )
        );
        if (text==="") {
          setEvent([])
        }else{
          setEvent(filter)
        }
      };
  return (
    <>
        <header className={styles.header}>
        <h1>Etkinlikçi</h1>
        {/* <div className={styles.category}>
          <p>Konser</p>
          <p>Tiyatro</p>
          <p>Resim</p>
        </div> */}
        <input
          onChange={searchEvent}
          placeholder="Etkinlik Adı - Kişi - Grup"
        />
      </header>
      {event.length!==0&&<div className={styles.search}>
        {event.map((e,z)=>(
          <div onClick={() => router.push(`/details/${e.id}`)} key={z} className={styles.box}>
            <p className={styles.boxTitle}>{e.title}</p>
            <div>{e.persons.map((i,x)=>(
              <p key={x} className={styles.boxText}>{i}</p>
            ))}</div>
          </div>
        ))}
      </div>}
      </>
  )
}

export default Header