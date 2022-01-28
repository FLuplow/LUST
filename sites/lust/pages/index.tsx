import React from 'react'
import styles from './index.module.scss'
import logo from '../assets/lust_large.png'
import small from '../assets/lust_small.png'

export const Index = () => {
  return (
    <div>
      <div className={styles.nav}>
        <a href="#">
          <img src={small} alt="" className={styles.item} />
        </a>
        <a href="#values">
          <img src={small} alt="" className={styles.item} />
        </a>
        <a href="#story">
          <img src={small} alt="" className={styles.item} />
        </a>
        <a href="#achievements">
          <img src={small} alt="" className={styles.item} />
        </a>
      </div>
      <div className={styles.landingpage}>
        <div className={styles.section}>
          <div className={styles.titleWrapper}>
            <img src={logo} alt="LUST" className={styles.logo} />
            <div>
              <h1 className={styles.title}>
                <span className={styles.first}>Real</span>{' '}
                <span className={styles.second}>Itätsverlust</span>
              </h1>
            </div>
          </div>
          <h3 className={styles.slogan}>Hier is' Realitätsverlust</h3>
        </div>

        <div className={styles.section} id="values">
          <div className={styles.card}>
            <h3>Werte:</h3> Real Itätsverlust steht für 5 Lone Wolfs. Einzig El
            Presidente (Freddie Flunder) konnte sie vereinen. Realitätsverlust
            ist nicht nur der Name dieses Rudels sondern auch ein Lifestyle. Wir
            stehen für gutes Gaming, positives Mindset und Disco Nunu.
          </div>
        </div>
        <div className={styles.section} id="story">
          <div className={styles.card}>
            <h3>Story:</h3> Eines Tages erwachte El Presidente im Schlaf. Sein
            Bodypillow wurde lebendig und sprach zu ihm: "Joine einem E-Turnier
            und bleibe diesem dein Leben lang treu. Eine ganze Etournity quasi.
            Ich spreche von der Primeleague. Erstelle ein Team. Ein Team sie zu
            knechten, sie alle zu finden, ins Dunkel zu treiben und ewig zu
            binden!" El Presidente machte sich am nächsten Tag direkt an die
            Arbeit. Es war ein Mittwoch Morgen. Er trank schnell einen Kaffee
            mit Schuss und loggte sich in die sozialen Dienste ein. Für die
            Toplane schrieb er Fliegerass Woto Tolff an. Er sollte das Gewisse
            Etwas mitbringen. Im Jungle konnte die Wahl nur auf den
            shotcallenden Short King "Igor der irre Igel" fallen. Für Mitte
            runter E-Sport empfahl sich schnell ein neunarmiger Tentakelmann. El
            Presidente konnte ihn zwar nicht gut verstehen, aber nach einer
            Nacht in den Sternen war die Auswahl getroffen. Dann brauchte El
            Presidente noch einen, den er fordern und fördern konnte. Schnell
            war klar: Das konnte nur der vogelwilde Victor Vengasius Vanitas
            Victorius sein. Seit diesem Tagen ist jede Botlane ein Feuerbad der
            Gefühle für El Presidente. Auch für El Presidente ein weiterer
            Schritt in seiner Vita. Mit diesem Team sollte es nun an den Start
            gehen. Das Team startete sofort voll durch. Es lief wie ein
            geschmiertes Uhrwerk. Seit der Erstellung des Teams sprach das
            Bodypillow nie mehr zu El Presidente. Doch er fand am Tag des ersten
            Spieltags ein Zettel unter seinem Kissen. In feiner japanischer
            Schrift stand dort: "Halte ihn hart!". El Presidente wusste: Er
            hatte sein Ziel erfüllt.
          </div>
        </div>
        <div className={styles.section} id="achievements">
          <h2>Achievements</h2>
          <img
            src="https://cdn.discordapp.com/attachments/936348727440986172/936422436407218206/john_travolta_meme_trans.gif"
            alt="travolta"
          />
        </div>
      </div>
    </div>
  )
}
