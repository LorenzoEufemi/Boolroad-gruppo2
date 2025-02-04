const viaggi = [
  {
    id: 1,
    nomeViaggio: "Il Lago che Pietrifica",
    destinazione: "Lago Natron, Tanzania",
    dataInizio: "2025-01-10",
    dataFine: "2025-02-20",
    immagine: "https://elsouvenir.com/wp-content/uploads/2021/04/Lago-Natron.-PORTADA.jpg",
    partecipanti: [
      {
        nome: "Marco Rossi",
        codiceFiscale: "RSSMRC90A01H501Z"
      },
      {
        nome: "Sara Verdi",
        codiceFiscale: "VRDSRA85B12L219K"
      },
      {
        nome: "Hanna Mentana",
        codiceFiscale: "MNTHNA92D22F789Y"
      }
    ],
    inCorso: true,
  },
  {
    id: 2,
    nomeViaggio: "Gli Alberi Piegati dal Mistero",
    destinazione: "Foresta Storta, Polonia",
    dataInizio: "2025-12-05",
    dataFine: "2025-12-15",
    immagine: "https://www.greenme.it/wp-content/uploads/2012/06/crooked-forest.jpg",
    partecipanti: [
      {
        nome: "Walter Noodles",
        codiceFiscale: "NDLWTR88D22F789Y"
      },
      {
        nome: "Antonio Panteras",
        codiceFiscale: "PNTNNA75E09M345X"
      },
      {
        nome: "Valentina Rinaldi",
        codiceFiscale: "RNLVLT98I30P345L"
      }
    ],
    inCorso: false
  },
  {
    id: 3,
    nomeViaggio: "L'Isola Aliena",
    destinazione: "Isola di Socotra, Yemen",
    dataInizio: "2025-01-01",
    dataFine: "2025-02-12",
    immagine: "https://www.fattistrani.it/images/globali/2020-01-30/1580384782un1.jpg",
    partecipanti: [
      {
        nome: "Ivan Zanicchi",
        codiceFiscale: "ZNCIVN81G18N678J"
      },
      {
        nome: "Walter Noodles",
        codiceFiscale: "NDLWTR88D22F789Y"
      },
      {
        nome: "Gerry Scottish",
        codiceFiscale: "SCTGRY85L12M456P"
      }
    ],
    inCorso: true
  },
  {
    id: 4,
    nomeViaggio: "La Citta Sommersa Perduta",
    destinazione: "Citta sommersa di Shi Cheng, Cina",
    dataInizio: "2024-01-25",
    dataFine: "2024-02-05",
    immagine: "https://leganerd.com/wp-content/uploads/2022/08/Atlantide.jpg",
    partecipanti: [
      {
        nome: "Luca Morrista",
        codiceFiscale: "MRRLUC89J14Q567T",
      },
      {
        nome: "Walter Noodles",
        codiceFiscale: "NDLWTR88D22F789Y"
      },
      {
        nome: "Andrea Lombardi",
        codiceFiscale: "LMBNDR95H23T012V"
      }],
    inCorso: false
  },
  {
    id: 5,
    nomeViaggio: "Il Tunnel dell'Amore",
    destinazione: "Tunnel dell'Amore, Ucraina",
    dataInizio: "2024-03-10",
    dataFine: "2024-03-20",
    immagine: "https://images.rove.me/w_1920,q_85/pxw028tgsp57cvblinzp/ukraine-tunnel-of-love.jpg",
    partecipanti: [
      {
        nome: "Sara Verdi",
        codiceFiscale: "VRDSRA85B12L219K"
      },
      {
        nome: "Hanna Mentana",
        codiceFiscale: "MNTHNA92D22F789Y"
      }],
    inCorso: false
  },
  {
    id: 6,
    nomeViaggio: "Viaggio al Centro della Terra",
    destinazione: "Dancalia, Etiopia",
    dataInizio: "2025-01-15",
    dataFine: "2025-02-09",
    immagine: "https://upload.wikimedia.org/wikipedia/it/d/d9/Viaggio_al_centro_della_Terra_-_Trailer.png",
    partecipanti: [
      {
        nome: "Antonio Panteras",
        codiceFiscale: "PNTNNA75E09M345X"
      },
      {
        nome: "Sara Verdi",
        codiceFiscale: "VRDSRA85B12L219K",
      }],
    inCorso: true
  },
  {
    id: 7,
    nomeViaggio: "La Caverna della Vita Antica",
    destinazione: "Movile Cave, Romania",
    dataInizio: "2024-01-20",
    dataFine: "2024-01-30",
    immagine: "https://files.algoreducation.com/production-ts/__S3__07b79311-e724-43a4-b502-14a15e4b4673",
    partecipanti: [
      {
        nome: "Gerry Scottish",
        codiceFiscale: "SCTGRY85L12M456P"
      },
      {
        nome: "Walter Noodles",
        codiceFiscale: "NDLWTR88D22F789Y"
      }],
    inCorso: false
  },
  {
    id: 8,
    nomeViaggio: "Le Formazioni Rocciose di un Altro Pianeta",
    destinazione: "Deserto di Pinnacles, Australia",
    dataInizio: "2024-01-18",
    dataFine: "2024-01-28",
    immagine: "https://www.viaggi-usa.it/wp-content/uploads/2025/01/Bisti-De-Na-Zin-New-mexico.webp",
    partecipanti: [
      {
        nome: "Marco Rossi",
        codiceFiscale: "RSSMRC90A01H501Z"
      },
      {
        nome: "Valentina Rinaldi",
        codiceFiscale: "RNLVLT98I30P345L"
      }],
    inCorso: false
  },
  {
    id: 9,
    nomeViaggio: "Il Villaggio delle Bambole",
    destinazione: "Villaggio di Nagoro, Giappone",
    dataInizio: "2025-02-31",
    dataFine: "2025-02-25",
    immagine: "https://www.sonoinviaggio.com/wp-content/uploads/2024/10/villaggio-Nagoro-cosa-vedere-giappone-1.jpg",
    partecipanti: [
      {
        nome: "Ivan Zanicchi",
        codiceFiscale: "ZNCIVN81G18N678J"
      },
      {
        nome: "Andrea Lombardi",
        codiceFiscale: "LMBNDR95H23T012V"
      }],
    inCorso: true
  },
  {
    id: 10,
    nomeViaggio: "I Vulcani di Fango",
    destinazione: "Vulcano di fango di Gobustan, Azerbaigian",
    dataInizio: "2024-01-29",
    dataFine: "2024-02-08",
    immagine: "https://staticgeopop.akamaized.net/wp-content/uploads/sites/32/2023/02/vulcani-fango.jpg",
    partecipanti: [
      {
        nome: "Walter Noodles",
        codiceFiscale: "NDLWTR88D22F789Y"
      },
      {
        nome: "Ivan Zanicchi",
        codiceFiscale: "ZNCIVN81G18N678J"
      }
    ],
    inCorso: false
  },
  {
    id: 11,
    nomeViaggio: "La Profondita Inesplorata",
    destinazione: "Fossa delle Marianne, Oceano Pacifico",
    dataInizio: "2024-01-01",
    dataFine: "2024-12-31",
    immagine: "https://media-assets.wired.it/photos/615dab1c1bd42e7e740b7391/master/w_1600%2Cc_limit/GettyImages-997876800.jpg",
    partecipanti: [
      {
        nome: "Antonio Panteras",
        codiceFiscale: "PNTNNA75E09M345X"
      },
      {
        nome: "Hanna Mentana",
        codiceFiscale: "MNTHNA92D22F789Y"
      }],
    inCorso: true
  },
  {
    id: 12,
    nomeViaggio: "Il Laboratorio del Gelo",
    destinazione: "Stazione di ricerca Concordia, Antartide",
    dataInizio: "2023-11-01",
    dataFine: "2024-11-01",
    immagine: "https://www.cnr.it/sites/default/files/public/media/comunicazione/antartide/concordia_panoramica.jpg",
    partecipanti: [
      {
        nome: "Antonio Panteras",
        codiceFiscale: "PNTNNA75E09M345X"
      },
      {
        nome: "Gerry Scottish",
        codiceFiscale: "SCTGRY85L12M456P"
      }
    ],
    inCorso: true
  },
  {
    id: 13,
    nomeViaggio: "Il Monte delle Nebbie",
    destinazione: "Monte Roraima, Venezuela",
    dataInizio: "2024-01-10",
    dataFine: "2024-01-25",
    immagine: "https://mybestplace.com/uploads/2024/2/Monte-Roraima-Venezuela-COVER-1.jpg",
    partecipanti: [
      {
        nome: "Luca Morrista",
        codiceFiscale: "MRRLUC89J14Q567T"
      },
      {
        nome: "Sara Verdi",
        codiceFiscale: "VRDSRA85B12L219K"
      }],
    inCorso: false
  },
  {
    id: 14,
    nomeViaggio: "La Citta Fantasma del Deserto",
    destinazione: "Ghost Town di Kolmanskop, Namibia",
    dataInizio: "2025-02-01",
    dataFine: "2025-02-15",
    immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Kolmanskop_Ghost_Town.jpg/2560px-Kolmanskop_Ghost_Town.jpg",
    partecipanti: [
      {
        nome: "Marco Rossi",
        codiceFiscale: "RSSMRC90A01H501Z"
      },
      {
        nome: "Valentina Rinaldi",
        codiceFiscale: "RNLVLT98I30P345L"
      }],
    inCorso: true
  },
  {
    id: 15,
    nomeViaggio: "Vivere Sott'Acqua",
    destinazione: "Base sottomarina di Jules' Undersea Lodge, Florida",
    dataInizio: "2024-01-15",
    dataFine: "2024-01-22",
    immagine: "https://i.ytimg.com/vi/tOX3qMIEGz8/maxresdefault.jpg",
    partecipanti: [
      {
        nome: "Ivan Zanicchi",
        codiceFiscale: "ZNCIVN81G18N678J"
      },
      {
        nome: "Andrea Lombardi",
        codiceFiscale: "LMBNDR95H23T012V"
      }],
    inCorso: false
  }
];

export default viaggi