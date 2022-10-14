import { Article } from '../typeDefs';

export interface Store {
  user: string;
  news: Article[];
}

const store: Store = {
  user: 'du',
  news: [
    {
      identifier: 'news-article-1505453',
      date: 'Fri, 14 Oct 2022 07:55:22 GMT',
      title: 'Vier von fünf Städten leiden unter Extremwetterereignissen',
      teaser:
        'Vier von fünf Städten aus aller Welt sind einer aktuellen Studie zufolge bereits heute Extremwettereignissen wie extremer Hitze oder Überflutungen ausgesetzt',
      url: 'https://stage.t3n.de/news/vier-von-fuenf-staedten-leiden-unter-extremwetterereignissen-1505453/',
      imageUrl: 'https://ewdvtw8.imgix.net/?ixlib=js-2.3.2&w=&h=',
      authorName: 'dpa - Deutsche Presse Agentur',
    },
    {
      identifier: 'news-article-1505694',
      date: 'Thu, 13 Oct 2022 19:42:39 GMT',
      title:
        'Login per QR-Code und mehr: Valve verpasst Steam-Mobile-App umfangreiches Redesign',
      teaser:
        'Valve hat seine veraltete Steam-Mobile-App für Android und iOS komplett überarbeitet. Neben einem verbesserten Design und dem Login per QR-Code gibt es jetzt die Möglichkeit, Spieledownloads auf dem PC vom Handy aus zu veranlassen.',
      url: 'https://stage.t3n.de/news/qr-code-valve-steam-mobile-app-1505694/',
      imageUrl:
        'https://ewdvtw8.imgix.net/news/wp-content/uploads/2022/10/Steam-Mobile-App-Redesign-Valve.jpg?ixlib=js-2.3.2&w=&h=',
      authorName: 'Jörn Brien',
    },
    {
      identifier: 'news-article-1505689',
      date: 'Thu, 13 Oct 2022 19:10:27 GMT',
      title:
        'Netflix: Basis-Abo mit Werbung startet im November in Deutschland',
      teaser:
        'Netflix hat jetzt offiziell den Start seines werbefinanzierten Streamingangebots in Deutschland angekündigt. Am 3. November 2022 soll es mit dem „Basis-Abo mit Werbung“ losgehen. Kostenpunkt: 4,99 Euro.',
      url: 'https://stage.t3n.de/news/netflix-basis-abo-werbung-deutschland-1505689/',
      imageUrl:
        'https://ewdvtw8.imgix.net/news/wp-content/uploads/2021/01/shutterstock-1680823216.jpg?ixlib=js-2.3.2&w=&h=',
      authorName: 'Jörn Brien',
    },
    {
      identifier: 'news-article-1505688',
      date: 'Thu, 13 Oct 2022 19:00:09 GMT',
      title:
        'Visa, PayPal und Co.: Fast die Hälfte der Top 100 Unternehmen setzt auf Krypto',
      teaser:
        'Wie aus einer Untersuchung von Blockdata hervorgeht, setzen vermehrt Unternehmen auf die Blockchain. Fast die Hälfte der Top 100 Unternehmen verwendet Krypto bzw. die Blockchain schon.\n',
      url: 'https://stage.t3n.de/news/visa-paypal-und-co-fast-die-haelfte-der-top-100-unternehmen-setzt-auf-krypto-1505688/',
      imageUrl:
        'https://ewdvtw8.imgix.net/news/wp-content/uploads/2018/01/visa-kreditkarten.jpg?ixlib=js-2.3.2&w=&h=',
      authorName: 'Bitcoin 2Go',
    },
    {
      identifier: 'news-article-1505678',
      date: 'Thu, 13 Oct 2022 17:30:45 GMT',
      title:
        'Microsoft bereitet US-Soldaten Kopfschmerzen – mit seinen AR-Brillen',
      teaser:
        'Microsoft hatte sich einen 22-Milliarden-US-Dollar-Deal der US-Armee gesichert, um Soldaten mit Hololens-Schutzbrillen auszustatten. Tests haben jedoch ergeben: Die Brillen sind zum Kotzen – buchstäblich.\n',
      url: 'https://stage.t3n.de/news/microsoft-armee-hololens-test-1505678/',
      imageUrl:
        'https://ewdvtw8.imgix.net/news/wp-content/uploads/2022/10/shutterstock_1490511353.jpg?ixlib=js-2.3.2&w=&h=',
      authorName: 'Jennifer Caprarella',
    },
    {
      identifier: 'news-article-1505676',
      date: 'Thu, 13 Oct 2022 17:14:08 GMT',
      title: 'Nasa: Neuer Starttermin für Mondmission Artemis I festgelegt',
      teaser:
        'Zuerst hinderten technische Probleme, später Tropensturm Ian die Nasa daran, die Mondmission Artemis I erfolgreich zu starten. Jetzt soll die SLS-Riesenrakete mit dem Orion-Raumschiff an Bord am 14. November 2022 abheben.',
      url: 'https://stage.t3n.de/news/nasa-starttermin-artemis-i-1505676/',
      imageUrl:
        'https://ewdvtw8.imgix.net/news/wp-content/uploads/2022/10/Artemis-I-SLS-Startrampe.jpg?ixlib=js-2.3.2&w=&h=',
      authorName: 'Jörn Brien',
    },
    {
      identifier: 'news-article-1505645',
      date: 'Thu, 13 Oct 2022 17:00:56 GMT',
      title: 'Skurriles Transportmittel: Diese Roboter sollen Menschen tragen',
      teaser:
        'In japanischen Freizeitparks soll es bald eine neue Attraktion geben: vierbeinige Roboter, die Menschen tragen. Das optische Konzept stammt von einer Koryphäe im Roboterdesign.\n',
      url: 'https://stage.t3n.de/news/skurriles-transportmittel-diese-roboter-sollen-menschen-tragen-1505645/',
      imageUrl:
        'https://ewdvtw8.imgix.net/news/wp-content/uploads/2022/10/shutterstock_279947681.jpg?ixlib=js-2.3.2&w=&h=',
      authorName: 'Christian Weindl',
    },
    {
      identifier: 'news-article-1486672',
      date: 'Thu, 13 Oct 2022 16:00:00 GMT',
      title:
        'Startup-Award-Gewinner über seinen biggest Fuck-up: Habe Bauindustrie „total unterschätzt“',
      teaser:
        'Leopold Spenner ist in den Beton- und Zementwerken seiner Familie groß geworden. Dennoch musste er nach der Gründung seines Green-Tech-Startups Alcemy einige bittere Lektionen über die Baubranche lernen. Wir haben mit ihm über seinen größten Fuck-up gesprochen – und was er daraus gelernt hat.\n',
      url: 'https://stage.t3n.de/news/alcemy-gruender-fuck-up-bauindustrie-1486672/',
      imageUrl:
        'https://ewdvtw8.imgix.net/news/wp-content/uploads/2022/07/Alcemy-Leopold.jpg?ixlib=js-2.3.2&w=&h=',
      authorName: 'Insa Schniedermeier',
    },
    {
      identifier: 'news-article-1505620',
      date: 'Thu, 13 Oct 2022 15:10:49 GMT',
      title:
        'Ex-Kanzler Sebastian Kurz gründet Cybersicherheits-Startup mit Ex-Pegasus-Chef',
      teaser:
        'Sebastian Kurz und Shalev Hulio gehen mit „Dreams Security“ an den Start. In einer ersten Finanzierungsrunde haben sie bereits 20 Millionen Dollar eingesammelt.',
      url: 'https://stage.t3n.de/news/ex-kanzler-sebastian-kurz-gruendet-cybersicherheits-startup-mit-ex-pegasus-chef-1505620/',
      imageUrl:
        'https://ewdvtw8.imgix.net/news/wp-content/uploads/2021/12/Sebastian-Kurz.jpg?ixlib=js-2.3.2&w=&h=',
      authorName: 'Elisabeth Urban',
    },
    {
      identifier: 'news-article-1505613',
      date: 'Thu, 13 Oct 2022 15:00:55 GMT',
      title: 'Metaverse als milliardenschwere Geisterlandschaft?',
      teaser:
        'Im t3n Daily vom 13. Oktober geht es um gähnende Leere in hoch bewerteten Metaverse-Projekten. Außerdem: Verbesserungsbedarf bei Inkognito-Modus, Netzsperren, Pixel Watch im Test und die Karte des Universums.',
      url: 'https://stage.t3n.de/news/metaverse-als-milliardenschwere-geisterlandschaft-1505613/',
      imageUrl:
        'https://ewdvtw8.imgix.net/news/wp-content/uploads/2022/02/decentraland-plattformer.jpg?ixlib=js-2.3.2&w=&h=',
      authorName: 'Holger Schellkopf',
    },
  ],
};

export default store;
