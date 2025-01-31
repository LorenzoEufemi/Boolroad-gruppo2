const viaggi = [
    {
      id: 1,
      nomeViaggio: "Il Lago che Pietrifica",
      destinazione: "Lago Natron, Tanzania",
      dataInizio: "2025-01-10",
      dataFine: "2025-02-20",
      partecipanti: [
        {
          nome : "Livio Lenta",
          codiceFiscale: "LNTLVI90A01H501Z" 
        }, 
        {
          nome: "Igor Miti",
          codiceFiscale: "MTIGRR85B12L219K"
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
        nome: "Mousse Leeny",
        codiceFiscale: "LENMSS92C14D612W"
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
      partecipanti: [
      {
        nome: "Ivan Zanicchi",
        codiceFiscale: "ZNCIVN81G18N678J"
      }, 
      {
        nome: "Thomas Burbato",
        codiceFiscale:"BRBTHM95H23T012V"
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
      partecipanti: [
        {
          nome: "Luca Morrista",
          codiceFiscale: "MRRLUC89J14Q567T",
        }, 
        {
          nome: "Luca Lippo",
          codiceFiscale: "LPPLCU98I30P345L" 
        },
        {
          nome : "Giudy Coca",
          codiceFiscale: "COCGDY82K09R890W" 
        }],
      inCorso: false
    },
    {
      id: 5,
      nomeViaggio: "Il Tunnel dell'Amore",
      destinazione: "Tunnel dell'Amore, Ucraina",
      dataInizio: "2024-03-10",
      dataFine: "2024-03-20",
      partecipanti: [
        {
          nome:"Igor Miti", 
          codiceFiscale: "MTIGRR85B12L219K"
        },    
        {
          nome: "Hanna Mentana",
          codiceFiscale: "MNTHNA92D22F789Y"
        } ],
      inCorso: false
    },
    {
      id: 6,
      nomeViaggio: "Viaggio al Centro della Terra",
      destinazione: "Dancalia, Etiopia",
      dataInizio: "2025-01-15",
      dataFine: "2025-02-09",
      partecipanti: [
        {
          nome: "Antonio Panteras" , 
          codiceFiscale: "PNTNNA75E09M345X"
        }, 
        {
          nome: "Mousse Leeny",
          codiceFiscale: "LENMSS92C14D612W",
        }],
      inCorso: true
    },
    {
      id: 7,
      nomeViaggio: "La Caverna della Vita Antica",
      destinazione: "Movile Cave, Romania",
      dataInizio: "2024-01-20",
      dataFine: "2024-01-30",
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
      partecipanti: [
      {
        nome: "Livio Lenta",
        codiceFiscale: "LNTLVI90A01H501Z" 
      },
      {
        nome: "Thomas Turbato", 
        codiceFiscale: "BRBTHM95H23T012V",
      }],
      inCorso: false
    },
    {
      id: 9,
      nomeViaggio: "Il Villaggio delle Bambole",
      destinazione: "Villaggio di Nagoro, Giappone",
      dataInizio: "2025-02-31",
      dataFine: "2025-02-25",
      partecipanti: [        
      {
        nome: "Luca Lippo",
        codiceFiscale: "LPPLCU98I30P345L" 
      },
      {
        nome : "Giudy Coca",
        codiceFiscale: "COCGDY82K09R890W" 
      }],
      inCorso: true
    },
    {
      id: 10,
      nomeViaggio: "I Vulcani di Fango",
      destinazione: "Vulcano di fango di Gobustan, Azerbaigian",
      dataInizio: "2024-01-29",
      dataFine: "2024-02-08",
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
      dataFine: "2024-12-31", // Viaggio attualmente in corso
      partecipanti: [ 
      {
        nome: "Antonio Panteras",
        codiceFiscale: "PNTNNA75E09M345X"
      },    
      {
        nome: "Hanna Mentana",
        codiceFiscale: "MNTHNA92D22F789Y"
      } ],
      inCorso: true
    },
    {
      id: 12,
      nomeViaggio: "Il Laboratorio del Gelo",
      destinazione: "Stazione di ricerca Concordia, Antartide",
      dataInizio: "2023-11-01",
      dataFine: "2024-11-01", // Viaggio attualmente in corso
      partecipanti: [
        {
          nome: "Thomas Burbato",
          codiceFiscale: "BRBTHM95H23T012V"
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
      partecipanti: [
        {
          nome:"Luca Morrista", 
          codiceFiscale: "MRRLUC89J14Q567T"
        }, 
        {
          nome:"Igor Miti", 
          codiceFiscale: "MTIGRR85B12L219K"
        }],
      inCorso: false
    },
    {
      id: 14,
      nomeViaggio: "La Citta Fantasma del Deserto",
      destinazione: "Ghost Town di Kolmanskop, Namibia",
      dataInizio: "2025-02-01",
      dataFine: "2025-02-15",
      partecipanti: [
        {
          nome: "Livio Lenta",
          codiceFiscale: "LNTLVI90A01H501Z" 
        },        {
          nome: "Mousse Leeny",
          codiceFiscale: "LENMSS92C14D612W" 
        }],
      inCorso: true
    },
    {
      id: 15,
      nomeViaggio: "Vivere Sott'Acqua",
      destinazione: "Base sottomarina di Jules' Undersea Lodge, Florida",
      dataInizio: "2024-01-15",
      dataFine: "2024-01-22",
      partecipanti: [
        {
          nome: "Luca Lippo",
          codiceFiscale: "LPPLCU98I30P345L" 
        },
        {
          nome : "Giudy Coca",
          codiceFiscale: "COCGDY82K09R890W" 
        }],
      inCorso: false
    }
  ];

  export default viaggi