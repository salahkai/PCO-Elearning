import hc from "../img/specialities/hc.png";
import geo from "../img/specialities/geo.png";
import re from "../img/specialities/re.png";

export const branches = [
  {
    speciality: "Hydrocarbons",
    id: 0,
    year_of_study: [
      {
        name: "Licence",
        years: [
          {
            name: "First year",
            branches: [{ name: "Common year", link: "#" }],
            id: "0",
          },
          {
            name: "Second year",
            branches: [
              { name: "Production professional", link: "#" },
              { name: "Production academic", link: "#" },
              { name: "Drilling", link: "#" },
              { name: "Oil Rig Mechanics", link: "#" },
            ],
            id: "1",
          },
          {
            name: "Third year",
            branches: [
              { name: "Production professional", link: "#" },
              { name: "Production academic", link: "#" },
              { name: "Drilling", link: "#" },
              { name: "Oil Rig Mechanics", link: "#" },
            ],
            id: "2",
          },
        ],
      },
      {
        name: "Master",
        years: [
          {
            name: "First year",
            branches: [
              { name: "Production professional", link: "#" },
              { name: "Production academic", link: "#" },
              { name: "Drilling", link: "#" },
              { name: "Oil Rig Mechanics", link: "#" },
            ],
            id: "0",
          },
          {
            name: "Second year",
            branches: [
              { name: "Production professional", link: "#" },
              { name: "Production academic", link: "#" },
              { name: "Drilling", link: "#" },
              { name: "Oil Rig Mechanics", link: "#" },
            ],
            id: "1",
          },
        ],
      },
    ],
  },
  {
    speciality: "Geology",
    id: 1,
    year_of_study: [
      {
        name: "Licence",
        years: [
          {
            name: "First year",
            branches: [{ name: "Common year", link: "#" }],
            id: "0",
          },
          {
            name: "Second year",
            branches: [{ name: "Common year", link: "#" }],
            id: "1",
          },
          {
            name: "Third year",
            branches: [
              { name: "Applied Geology", link: "#" },
              { name: "Fondamental Geology", link: "#" },
            ],
            id: "2",
          },
        ],
      },
      {
        name: "Master",
        years: [
          {
            name: "First year",
            branches: [
              { name: "Fundamental Geology", link: "#" },
              { name: "Geology Of Hydrocarbons", link: "#" },
              { name: "Hydrogeology", link: "#" },
              { name: "Petroleum Geology", link: "#" },
            ],
            id: "0",
          },
          {
            name: "Second year",
            branches: [
              { name: "Fundamental Geology", link: "#" },
              { name: "Geology Of Hydrocarbons", link: "#" },
              { name: "Hydrogeology", link: "#" },
              { name: "Petroleum Geology", link: "#" },
            ],
            id: "1",
          },
        ],
      },
    ],
  },
  {
    speciality: "Renewable Energies",
    id: 2,
    year_of_study: [
      {
        name: "Licence",
        years: [
          {
            name: "First year",
            branches: [{ name: "Common year", link: "#" }],
            id: "0",
          },
          {
            name: "Second year",
            branches: [{ name: "Applied Renewable Energy", link: "#" }],
            id: "1",
          },
          {
            name: "Third year",
            branches: [{ name: "Applied Renewable Energy", link: "#" }],
            id: "2",
          },
        ],
      },
      {
        name: "Master",
        years: [
          {
            name: "First year",
            branches: [{ name: "Renewable Energy in Mechanics", link: "#" }],
            id: "0",
          },
          {
            name: "Second year",
            branches: [{ name: "Renewable Energy in Mechanics", link: "#" }],
            id: "1",
          },
        ],
      },
    ],
  },
];

export const specialities = [
  {
    name: "Hydrocarbons",
    id: 0,
    bg: hc,
    text: "A field of engineering concerned exploration and production of Hydrocarbons",
    link: "#",
    svg: "M0,256L48,261.3C96,267,192,277,288,288C384,299,480,309,576,293.3C672,277,768,235,864,224C960,213,1056,235,1152,218.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
  },
  {
    name: "Geology",
    id: 1,
    bg: geo,
    text: "A science that deals with the history of the earth and its life especially as recorded in rocks",
    link: "#",
    svg: "M0,192L120,208C240,224,480,256,720,272C960,288,1200,288,1320,288L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z",
  },
  {
    name: "RenewableEnergies",
    id: 2,
    bg: re,
    text: "An engineering field that focuses on the production of energy from renewable or sustainable sources",
    link: "#",
    svg: "M0,256L1440,160L1440,320L0,320Z",
  },
];
export const files = {
  hydrocarbons: {
    licence: {
      first_year: {
        common_year: [
          {
            key: "1IaYpTXeMHb8MT43z0w3py8Vfrpd7VG9a",
            gd_id: "1IaYpTXeMHb8MT43z0w3py8Vfrpd7VG9a",
            label: "First semester",
            nodes: [
              {
                key: "1LAmkC950Wt3jeRN-aUla_EzdRkj_CXgc",
                gd_id: "1LAmkC950Wt3jeRN-aUla_EzdRkj_CXgc",
                label: "langue francaise 1",
                nodes: [],
              },
              {
                key: "1LGagdActkbbVEXwJnLdPhpMmb1MXlNQ7",
                gd_id: "1LGagdActkbbVEXwJnLdPhpMmb1MXlNQ7",
                label: "langue anglaise 1",
                nodes: [],
              },
              {
                key: "1KpDIJ8KQ6yYhd6Ky6CxZQORoOyfzGftQ",
                gd_id: "1KpDIJ8KQ6yYhd6Ky6CxZQORoOyfzGftQ",
                label: "TP physique 1",
                nodes: [],
              },
              {
                key: "1KpVT3q20m2qD0tT0UFxc1qKTmC0_aCZH",
                gd_id: "1KpVT3q20m2qD0tT0UFxc1qKTmC0_aCZH",
                label: "TP chimie 1",
                nodes: [],
              },
              {
                key: "1KwLaxeJEkWPpkoACj5Tu0_XJfwjsXqUi",
                gd_id: "1KwLaxeJEkWPpkoACj5Tu0_XJfwjsXqUi",
                label: "Structure de la matière",
                nodes: [],
              },
              {
                key: "1L68RZ9O9A5EPuwRZN8J-YzTGcS2IUNu-",
                gd_id: "1L68RZ9O9A5EPuwRZN8J-YzTGcS2IUNu-",
                label: "Méthodologie de la rédaction",
                nodes: [],
              },
              {
                key: "1L9Cg3G8FLCyF7d1BfaH4jZTtBtMG6ykv",
                gd_id: "1L9Cg3G8FLCyF7d1BfaH4jZTtBtMG6ykv",
                label: "les métiers en sciences et technologies 1",
                nodes: [],
              },
              {
                key: "1L3o3Rl68gXc9Tr_eTy70yrNNonRAsFsB",
                gd_id: "1L3o3Rl68gXc9Tr_eTy70yrNNonRAsFsB",
                label: "Physique 1",
                nodes: [],
              },
              {
                key: "1L72oI73xvmSwX3Rcm7dewY0ImTeFII0R",
                gd_id: "1L72oI73xvmSwX3Rcm7dewY0ImTeFII0R",
                label: "Mathématiques 1",
                nodes: [],
              },
              {
                key: "1LIh1jMkSkA2a6GYeHLDAvxrGovmK4G5X",
                gd_id: "1LIh1jMkSkA2a6GYeHLDAvxrGovmK4G5X",
                label: "Informatique 1",
                nodes: [],
              },
            ],
          },
          {
            key: "1IV68TIoAuo1vJr06Uzf1-DODUD5MJeHm",
            gd_id: "1IV68TIoAuo1vJr06Uzf1-DODUD5MJeHm",
            label: "Second semester",
            nodes: [
              {
                key: "1KMzC1KEEWASd5t47FHRlkw_xgpPY2AOg",
                gd_id: "1KMzC1KEEWASd5t47FHRlkw_xgpPY2AOg",
                label: "les métiers en sciences et technologies 2",
                nodes: [],
              },
              {
                key: "1KNI7_y8GcIw1pFuxPq6Rpdf0Kp6CWIUS",
                gd_id: "1KNI7_y8GcIw1pFuxPq6Rpdf0Kp6CWIUS",
                label: "langue francaise 2",
                nodes: [],
              },
              {
                key: "1KcGTj2cMfej3IqspjxvrVPVnLGZzxnX7",
                gd_id: "1KcGTj2cMfej3IqspjxvrVPVnLGZzxnX7",
                label: "langue anglaise 2",
                nodes: [],
              },
              {
                key: "1KHj0DOdcSz_bPCxRvGL3obR6k8Qeq6Mz",
                gd_id: "1KHj0DOdcSz_bPCxRvGL3obR6k8Qeq6Mz",
                label: "mathématique 2",
                nodes: [],
              },
              {
                key: "1Kg54uYQVSgpYEPAEm3VJR0Hz5YazIFkq",
                gd_id: "1Kg54uYQVSgpYEPAEm3VJR0Hz5YazIFkq",
                label: "informatique 2",
                nodes: [],
              },
              {
                key: "1M6K3ZyPCqONQB9diYC3TSSSyAxD4u_5n",
                gd_id: "1M6K3ZyPCqONQB9diYC3TSSSyAxD4u_5n",
                label: "thermodynamique",
                nodes: [],
              },
              {
                key: "1M84d7LOT9uefGOOztzurgUockDN72kK7",
                gd_id: "1M84d7LOT9uefGOOztzurgUockDN72kK7",
                label: "méthodologie de la présentation",
                nodes: [],
              },
              {
                key: "1LoRQfXBXPfuX2bnE0x6Xah8HFOWnEijp",
                gd_id: "1LoRQfXBXPfuX2bnE0x6Xah8HFOWnEijp",
                label: "TP physique 2",
                nodes: [],
              },
              {
                key: "1LypYjrncqECBQJFzFHwzkm2gbshk5YIZ",
                gd_id: "1LypYjrncqECBQJFzFHwzkm2gbshk5YIZ",
                label: "TP chimie 2",
                nodes: [],
              },
              {
                key: "1M7Ge1GH1wGIF_fMT9RSrNP7sfqgsi__d",
                gd_id: "1M7Ge1GH1wGIF_fMT9RSrNP7sfqgsi__d",
                label: "physique 2",
                nodes: [],
              },
            ],
          },
        ],
      },
      second_year: {
        production_professional: [
          {
            key: "1IFPokj0eK78bP00CiqGp-UMH_NrM2kGQ",
            gd_id: "1IFPokj0eK78bP00CiqGp-UMH_NrM2kGQ",
            label: "First semester",
            nodes: [
              {
                key: "1OEi-khkCZnLxQ-3ay-pXxjUKCi8yfSiX",
                gd_id: "1OEi-khkCZnLxQ-3ay-pXxjUKCi8yfSiX",
                label: "Anglais Technique",
                nodes: [],
              },
              {
                key: "1NsrKNJYntvhbaG6W9fZggwvxnV9-iqzm",
                gd_id: "1NsrKNJYntvhbaG6W9fZggwvxnV9-iqzm",
                label: "TP Géologie Générale",
                nodes: [],
              },
              {
                key: "1NwVh2R4kn-uysKn727oREwu7bN1lIRKZ",
                gd_id: "1NwVh2R4kn-uysKn727oREwu7bN1lIRKZ",
                label: "Thermodynamique",
                nodes: [],
              },
              {
                key: "1O1O260_AZkBiA_kQcP7_aSNZRcjQ9XFo",
                gd_id: "1O1O260_AZkBiA_kQcP7_aSNZRcjQ9XFo",
                label: "Méthodes Numériques Appliquées 1",
                nodes: [],
              },
              {
                key: "1O49JpUXO0I572j1vi-gAi1hBkCg7GIuA",
                gd_id: "1O49JpUXO0I572j1vi-gAi1hBkCg7GIuA",
                label: "HSE Installations Industrielles",
                nodes: [],
              },
              {
                key: "1PiXxwMj49l7coZ9_YdJ25ogoJWp57MVC",
                gd_id: "1PiXxwMj49l7coZ9_YdJ25ogoJWp57MVC",
                label: "TP Thermodynamique",
                nodes: [],
              },
              {
                key: "1O4UXTdpA2b5a3LXvH5o7a1-yrF9EBsuM",
                gd_id: "1O4UXTdpA2b5a3LXvH5o7a1-yrF9EBsuM",
                label: "Géologie Générale",
                nodes: [],
              },
              {
                key: "1O4laZbdZ4FhHoEwUFMk91mJYH1VXGbjf",
                gd_id: "1O4laZbdZ4FhHoEwUFMk91mJYH1VXGbjf",
                label: "Forage des Puits",
                nodes: [],
              },
              {
                key: "1O0SkWksgg6fZECk8mt0neJQ0AV8f-r_N",
                gd_id: "1O0SkWksgg6fZECk8mt0neJQ0AV8f-r_N",
                label: "Production 1",
                nodes: [],
              },
              {
                key: "1O4dJO4wHqwxQzxkDzOS65IioCeJ70nYm",
                gd_id: "1O4dJO4wHqwxQzxkDzOS65IioCeJ70nYm",
                label: "Gisement",
                nodes: [],
              },
            ],
          },
          {
            key: "1I7-Donp9j-QiLBkrgwGYRIWsS4B9FZaZ",
            gd_id: "1I7-Donp9j-QiLBkrgwGYRIWsS4B9FZaZ",
            label: "Second semester",
            nodes: [
              {
                key: "1PC1lwCYM5r3wOTOYHzbS7wZh8TAJfp_P",
                gd_id: "1PC1lwCYM5r3wOTOYHzbS7wZh8TAJfp_P",
                label: "Sortie scientifique",
                nodes: [],
              },
              {
                key: "1PFKzeC8wNqCFZ-Of1ewaEhXtKo-ZkBGH",
                gd_id: "1PFKzeC8wNqCFZ-Of1ewaEhXtKo-ZkBGH",
                label: "Notions des phénomènes de transfert",
                nodes: [],
              },
              {
                key: "1P2LuvpmSJLkx4oDHQo3aKiXdzdoNyu-r",
                gd_id: "1P2LuvpmSJLkx4oDHQo3aKiXdzdoNyu-r",
                label: "TP Production",
                nodes: [],
              },
              {
                key: "1P5jNGv7X7bTiOOTte8uuHJiLALCrw_HQ",
                gd_id: "1P5jNGv7X7bTiOOTte8uuHJiLALCrw_HQ",
                label: "TP MDF",
                nodes: [],
              },
              {
                key: "1PKLqxCxhjWjhCfrB6SmcEPXWPBPMUUkn",
                gd_id: "1PKLqxCxhjWjhCfrB6SmcEPXWPBPMUUkn",
                label: "Hydrogéologie",
                nodes: [],
              },
              {
                key: "1PiC6e3Lm9CgoY5LK78UTttPCLb8QH71y",
                gd_id: "1PiC6e3Lm9CgoY5LK78UTttPCLb8QH71y",
                label: "Dessin Technique",
                nodes: [],
              },
              {
                key: "1POssfGCegGhm5bf_ghB1itCI-qFWNEF0",
                gd_id: "1POssfGCegGhm5bf_ghB1itCI-qFWNEF0",
                label: "Géologie pétrolière",
                nodes: [],
              },
              {
                key: "1PRfTyD1EBTHNWuyBasKQSaBMASUIA8Mc",
                gd_id: "1PRfTyD1EBTHNWuyBasKQSaBMASUIA8Mc",
                label: "Equipement de production",
                nodes: [],
              },
              {
                key: "1P1mYLQ1nzmDDyawDwI5K0hD6V5DVrc4F",
                gd_id: "1P1mYLQ1nzmDDyawDwI5K0hD6V5DVrc4F",
                label: "Well intervention 1",
                nodes: [],
              },
              {
                key: "1PHQzcjH77fE0jEdJvK40h10QcHGHOpGX",
                gd_id: "1PHQzcjH77fE0jEdJvK40h10QcHGHOpGX",
                label: "MDF",
                nodes: [],
              },
              {
                key: "1PCbvz4voWaKZG9mUf3rruCi09Oa9tw-S",
                gd_id: "1PCbvz4voWaKZG9mUf3rruCi09Oa9tw-S",
                label: "Production 2",
                nodes: [],
              },
            ],
          },
        ],
        production_academic: [
          {
            key: "1IPRtpIkQ1yBhFSRNdWyHkh1v69dyR7pH",
            gd_id: "1IPRtpIkQ1yBhFSRNdWyHkh1v69dyR7pH",
            label: "First semester",
            nodes: [
              {
                key: "1LKPkY0A_2otWnV3UYm0SOjin9V09OWid",
                gd_id: "1LKPkY0A_2otWnV3UYm0SOjin9V09OWid",
                label: "Réglementation et Normes",
                nodes: [],
              },
              {
                key: "1LayWmxsmH-KyaO4St0JjLLYkylO2YrPM",
                gd_id: "1LayWmxsmH-KyaO4St0JjLLYkylO2YrPM",
                label: "HSE Installations Industrielles",
                nodes: [],
              },
              {
                key: "1LdIGqR-9pUaNJb2FMnLV6wOYxyv8eDfc",
                gd_id: "1LdIGqR-9pUaNJb2FMnLV6wOYxyv8eDfc",
                label: "Dessin Technique",
                nodes: [],
              },
              {
                key: "1Lo662npPEVltA1w94MgA3063XK8Qhb6A",
                gd_id: "1Lo662npPEVltA1w94MgA3063XK8Qhb6A",
                label: "Anglais Technique",
                nodes: [],
              },
              {
                key: "1Ms9fue-tWNWQujTxQ03P-h5hP7f5WHCH",
                gd_id: "1Ms9fue-tWNWQujTxQ03P-h5hP7f5WHCH",
                label: "TP Ondes et Vibrations",
                nodes: [],
              },
              {
                key: "1LMp_1TCrpGjopID4gZsbN6ZO-jljdpYF",
                gd_id: "1LMp_1TCrpGjopID4gZsbN6ZO-jljdpYF",
                label: "Probabilités & statistique",
                nodes: [],
              },
              {
                key: "1LRlhHwjxroz2n1diTXXk1Ezi9e_uqJII",
                gd_id: "1LRlhHwjxroz2n1diTXXk1Ezi9e_uqJII",
                label: "MDF",
                nodes: [],
              },
              {
                key: "1LamQdQOGdxepZ0uH74wnad3qdlf4Roqn",
                gd_id: "1LamQdQOGdxepZ0uH74wnad3qdlf4Roqn",
                label: "Informatique 3",
                nodes: [],
              },
              {
                key: "1Lh3Crv8PQ7ihy8HFHUdKlnq0nZ9y6hk6",
                gd_id: "1Lh3Crv8PQ7ihy8HFHUdKlnq0nZ9y6hk6",
                label: "Chimie Minérale",
                nodes: [],
              },
              {
                key: "1LNn7mkAfNM4yYFiaOXTz2Q1PGpj0_U6_",
                gd_id: "1LNn7mkAfNM4yYFiaOXTz2Q1PGpj0_U6_",
                label: "Ondes & Vibrations",
                nodes: [],
              },
              {
                key: "1LRndMjEOhnLNFYwWivD1_dIRNjSA6N6l",
                gd_id: "1LRndMjEOhnLNFYwWivD1_dIRNjSA6N6l",
                label: "Mathématiques 3",
                nodes: [],
              },
            ],
          },
          {
            key: "1ILOhZr61DwsdSh60d53Iw0ntGj8qiN8p",
            gd_id: "1ILOhZr61DwsdSh60d53Iw0ntGj8qiN8p",
            label: "Second semester",
            nodes: [],
          },
        ],
        drilling: [
          {
            key: "1IKs4bJSAXmBJLyv1iF8-JdDEhITLD0Zv",
            gd_id: "1IKs4bJSAXmBJLyv1iF8-JdDEhITLD0Zv",
            label: "First semester",
            nodes: [
              {
                key: "1MJPkZU2bLLLOK9DL3Kp40oJqSKLY3d7v",
                gd_id: "1MJPkZU2bLLLOK9DL3Kp40oJqSKLY3d7v",
                label: "TP Pompe et compresseur",
                nodes: [],
              },
              {
                key: "1MO80X583k8tTJMhRcLp5CKkPNuQuAsVz",
                gd_id: "1MO80X583k8tTJMhRcLp5CKkPNuQuAsVz",
                label: "TP Hydraulique",
                nodes: [],
              },
              {
                key: "1MUbUcEEneqIthvqfjmwYsjDgbR4Wwwl1",
                gd_id: "1MUbUcEEneqIthvqfjmwYsjDgbR4Wwwl1",
                label: "TP Géologie",
                nodes: [],
              },
              {
                key: "1MrqHskAbOjKuorQDjptH1ceYhJdNGyUC",
                gd_id: "1MrqHskAbOjKuorQDjptH1ceYhJdNGyUC",
                label: "Dessin technique",
                nodes: [],
              },
              {
                key: "1M_WHzRo7ur_VcS0M77KmEK7Q7yQ7bqa3",
                gd_id: "1M_WHzRo7ur_VcS0M77KmEK7Q7yQ7bqa3",
                label: "Mécanique des fluides",
                nodes: [],
              },
              {
                key: "1Mb22QRYESBlBTOjhO2BHULdEeVCHuKtn",
                gd_id: "1Mb22QRYESBlBTOjhO2BHULdEeVCHuKtn",
                label: "Géologie générale",
                nodes: [],
              },
              {
                key: "1MbLCM12z1jV0sfISdHmbAzZduWrpZY6i",
                gd_id: "1MbLCM12z1jV0sfISdHmbAzZduWrpZY6i",
                label: "Forage 1",
                nodes: [],
              },
              {
                key: "1MgK7vZYIz8Vif7eit8wauWqeWaTTrKTK",
                gd_id: "1MgK7vZYIz8Vif7eit8wauWqeWaTTrKTK",
                label: "Fluide de forage",
                nodes: [],
              },
              {
                key: "1Mm8V7V7aD9ta1pbI2U1A-XfyWRizaaZz",
                gd_id: "1Mm8V7V7aD9ta1pbI2U1A-XfyWRizaaZz",
                label: "Equipement de forage 1",
                nodes: [],
              },
            ],
          },
          {
            key: "1IKXLnptBZnk3DMikdloRPMEOrzVFXhnY",
            gd_id: "1IKXLnptBZnk3DMikdloRPMEOrzVFXhnY",
            label: "Second semester",
            nodes: [
              {
                key: "1M8Cwb-Ln4XvFHeQPwf8q-02hpLimLQEy",
                gd_id: "1M8Cwb-Ln4XvFHeQPwf8q-02hpLimLQEy",
                label: "Sécurité industrielle",
                nodes: [],
              },
              {
                key: "1NcFprcIaoWm5AJpVlvY_O-oeG2CWuKqW",
                gd_id: "1NcFprcIaoWm5AJpVlvY_O-oeG2CWuKqW",
                label: "TP Thermodynamique",
                nodes: [],
              },
              {
                key: "1NfZAFfeMdyjrLsSSaVnpL_xJYV5Zp55X",
                gd_id: "1NfZAFfeMdyjrLsSSaVnpL_xJYV5Zp55X",
                label: "TP Equipements électriques",
                nodes: [],
              },
              {
                key: "1NqlQh_GtT6ZY8-BYYmEWAiwex2aFbj4S",
                gd_id: "1NqlQh_GtT6ZY8-BYYmEWAiwex2aFbj4S",
                label: "Thermodynamique",
                nodes: [],
              },
              {
                key: "1MCngue4pxC5-khXZxXERI34DZnajewq8",
                gd_id: "1MCngue4pxC5-khXZxXERI34DZnajewq8",
                label: "Géologie pétrolière",
                nodes: [],
              },
              {
                key: "1MD4_T9isBOl_FNX0n7yjbLXNeKUoFgB5",
                gd_id: "1MD4_T9isBOl_FNX0n7yjbLXNeKUoFgB5",
                label: "Equipements électriques",
                nodes: [],
              },
              {
                key: "1MEMUgdSQrvhMOlpMh6pxe7DLi0vWn44f",
                gd_id: "1MEMUgdSQrvhMOlpMh6pxe7DLi0vWn44f",
                label: "Equipement de forage 2",
                nodes: [],
              },
              {
                key: "1MD3DnDrNTxrN_10QUx4Kl12bjXYHZYNG",
                gd_id: "1MD3DnDrNTxrN_10QUx4Kl12bjXYHZYNG",
                label: "forage 2",
                nodes: [],
              },
            ],
          },
        ],
        oil_rig_mechanics: [
          {
            key: "1IIUMp0rV1z3gtxxl23VYL56a0qsYMhmd",
            gd_id: "1IIUMp0rV1z3gtxxl23VYL56a0qsYMhmd",
            label: "First semester",
            nodes: [
              {
                key: "1N_FzjqmgbTvPxFQQNJ4ImEVrlGsX2sZs",
                gd_id: "1N_FzjqmgbTvPxFQQNJ4ImEVrlGsX2sZs",
                label: "Dessin technique",
                nodes: [],
              },
              {
                key: "1NHZK4XE-I7G78w5jA1CqCtuB4_zaV2vo",
                gd_id: "1NHZK4XE-I7G78w5jA1CqCtuB4_zaV2vo",
                label: "TP Thermodynamique",
                nodes: [],
              },
              {
                key: "1NHhHBWqIxdUM9QWXvFvqxIGECTzqqVPu",
                gd_id: "1NHhHBWqIxdUM9QWXvFvqxIGECTzqqVPu",
                label: "TP Fabrication mécanique 1",
                nodes: [],
              },
              {
                key: "1NNste-YCtQuvoDxsOhYv5jU0yM3MojqZ",
                gd_id: "1NNste-YCtQuvoDxsOhYv5jU0yM3MojqZ",
                label: "Fabrication mécanique",
                nodes: [],
              },
              {
                key: "1NJCj6jRa_GStxgxgIpjOfL08wfYqv1ez",
                gd_id: "1NJCj6jRa_GStxgxgIpjOfL08wfYqv1ez",
                label: "Thermodynamique",
                nodes: [],
              },
              {
                key: "1NKgJCC8ZuhpZmFhozQroFX-dCRSld9ob",
                gd_id: "1NKgJCC8ZuhpZmFhozQroFX-dCRSld9ob",
                label: "Forage",
                nodes: [],
              },
              {
                key: "1NRfEKPXIXYVtzifQNnxLMivFomqaD1DT",
                gd_id: "1NRfEKPXIXYVtzifQNnxLMivFomqaD1DT",
                label: "Equipement de production 1",
                nodes: [],
              },
              {
                key: "1NYk5I52PcGIQksBEtLj2qXHH6Qkr_G5L",
                gd_id: "1NYk5I52PcGIQksBEtLj2qXHH6Qkr_G5L",
                label: "Electrotechnique",
                nodes: [],
              },
              {
                key: "1NRmQ-AOTUALpXMF7KbskNsNixbQ1ocPF",
                gd_id: "1NRmQ-AOTUALpXMF7KbskNsNixbQ1ocPF",
                label: "Equipement de forage 1",
                nodes: [],
              },
            ],
          },
          {
            key: "1IGN192PIYL78oKVbrN_K5zXm9w6u4_ZG",
            gd_id: "1IGN192PIYL78oKVbrN_K5zXm9w6u4_ZG",
            label: "Second semester",
            nodes: [
              {
                key: "1ORmGV4dApvnZmvJMy70wn9LovmW5ZuEq",
                gd_id: "1ORmGV4dApvnZmvJMy70wn9LovmW5ZuEq",
                label: "TP Fabrication mécanique 2",
                nodes: [],
              },
              {
                key: "1OZztZACy9f1NJs9klNQ6VxLVf7z8aMmA",
                gd_id: "1OZztZACy9f1NJs9klNQ6VxLVf7z8aMmA",
                label: "TP Equipements électrique",
                nodes: [],
              },
              {
                key: "1OdafNBnIRqGH2G5ef0aclGQaDSzn5ZGR",
                gd_id: "1OdafNBnIRqGH2G5ef0aclGQaDSzn5ZGR",
                label: "Sécurité Industrielle",
                nodes: [],
              },
              {
                key: "1OeufRTc5Q6-J5an5Id9yQ0KQp-OB6Y7Z",
                gd_id: "1OeufRTc5Q6-J5an5Id9yQ0KQp-OB6Y7Z",
                label: "Fabrication mécanique 2",
                nodes: [],
              },
              {
                key: "1N3uDT_z0Y9nODOMwPrROpy4UJ2KeL6rF",
                gd_id: "1N3uDT_z0Y9nODOMwPrROpy4UJ2KeL6rF",
                label: "Equipement électrique",
                nodes: [],
              },
              {
                key: "1NDkVpXL6n775OJsKpg3CAlIwqRYqLvvO",
                gd_id: "1NDkVpXL6n775OJsKpg3CAlIwqRYqLvvO",
                label: "Equipement de Production 2",
                nodes: [],
              },
              {
                key: "1OGlf1oVR8HPx6ViU0Ft6fFzefygQ_ORH",
                gd_id: "1OGlf1oVR8HPx6ViU0Ft6fFzefygQ_ORH",
                label: "Éléments machine",
                nodes: [],
              },
              {
                key: "1OLBROHrR0jDlqQBfAjT9pXIFp959Y7xF",
                gd_id: "1OLBROHrR0jDlqQBfAjT9pXIFp959Y7xF",
                label: "Transfert Thermique",
                nodes: [],
              },
              {
                key: "1NFTO_YINJpmt3xkvYqtZM9SGF8kuY42H",
                gd_id: "1NFTO_YINJpmt3xkvYqtZM9SGF8kuY42H",
                label: "Equipement de forage 2",
                nodes: [],
              },
            ],
          },
        ],
      },
      third_year: {
        production_professional: [
          {
            key: "1JBAE-P3hdtPreORCwYB-rJJJn-J4uMbc",
            gd_id: "1JBAE-P3hdtPreORCwYB-rJJJn-J4uMbc",
            label: "First semester",
            nodes: [
              {
                key: "1TW9yODKu71ZU2dv_x8i9wABJS197FW5d",
                gd_id: "1TW9yODKu71ZU2dv_x8i9wABJS197FW5d",
                label: "Well Intervention",
                nodes: [],
              },
              {
                key: "1ThFDIzAZiSCIaGnesRo9VIqYkxa5sjdF",
                gd_id: "1ThFDIzAZiSCIaGnesRo9VIqYkxa5sjdF",
                label: "TP Pompes et Compresseurs",
                nodes: [],
              },
              {
                key: "1SBVu5j0BtQOhGjYLg3IqVX3wSPm1kz02",
                gd_id: "1SBVu5j0BtQOhGjYLg3IqVX3wSPm1kz02",
                label: "TP Informatique",
                nodes: [],
              },
              {
                key: "1JP7b1cp0FqVWIRPKpqflTnyUhZbNS-_4",
                gd_id: "1JP7b1cp0FqVWIRPKpqflTnyUhZbNS-_4",
                label: "TP Diagraphie de Production",
                nodes: [],
              },
              {
                key: "1JPAxs3PqrIXU8UWPkprdLqxxlBl4DV6h",
                gd_id: "1JPAxs3PqrIXU8UWPkprdLqxxlBl4DV6h",
                label: "Science des Matériaux",
                nodes: [],
              },
              {
                key: "1JRsNJ66NXGbQmMflSrxzdblYefUo2H_C",
                gd_id: "1JRsNJ66NXGbQmMflSrxzdblYefUo2H_C",
                label: "Production de Pétrole",
                nodes: [],
              },
              {
                key: "1JVR7lqlmZ1_iRdUfAT4S__WQ4vWPyxrA",
                gd_id: "1JVR7lqlmZ1_iRdUfAT4S__WQ4vWPyxrA",
                label: "Pompes et Compresseurs",
                nodes: [],
              },
              {
                key: "1JaNblwUCyUDPCnLGfLhP4AOGjUQY-ujK",
                gd_id: "1JaNblwUCyUDPCnLGfLhP4AOGjUQY-ujK",
                label: "Economie des Entreprises",
                nodes: [],
              },
              {
                key: "1JdsbyYSJXzjkjGMKCV6zuIaIIn6iw_z6",
                gd_id: "1JdsbyYSJXzjkjGMKCV6zuIaIIn6iw_z6",
                label: "Diagraphie Différée et de Production",
                nodes: [],
              },
              {
                key: "1JkVAkdhlRggPFDJNecSQjcaYzGJe5btw",
                gd_id: "1JkVAkdhlRggPFDJNecSQjcaYzGJe5btw",
                label: "Collecte et Séparation 1",
                nodes: [],
              },
            ],
          },
          {
            key: "1J7AwFmVlaElJyju-0U6yRhmpRAuInjOL",
            gd_id: "1J7AwFmVlaElJyju-0U6yRhmpRAuInjOL",
            label: "Second semester",
            nodes: [
              {
                key: "1TQi3E5BKm1Rwu2QmN269do5qTADDrthH",
                gd_id: "1TQi3E5BKm1Rwu2QmN269do5qTADDrthH",
                label: "Législation des hydrocarbures",
                nodes: [],
              },
              {
                key: "1TD0PcHIDph_D3qL5LRAotWrxnMFA7nfZ",
                gd_id: "1TD0PcHIDph_D3qL5LRAotWrxnMFA7nfZ",
                label: "TP régulation automatique",
                nodes: [],
              },
              {
                key: "1TGW-jE9gEVcjI2WyFFWDKVzLjevl8mVw",
                gd_id: "1TGW-jE9gEVcjI2WyFFWDKVzLjevl8mVw",
                label: "Résistance des matériaux",
                nodes: [],
              },
              {
                key: "1TGzrdImUHnNjFA9cfJ1P-Yy--I5DBM__",
                gd_id: "1TGzrdImUHnNjFA9cfJ1P-Yy--I5DBM__",
                label: "Régulation automatique",
                nodes: [],
              },
              {
                key: "1TL9IYmGckr_5_7PIue-T0_uKdznLdUgw",
                gd_id: "1TL9IYmGckr_5_7PIue-T0_uKdznLdUgw",
                label: "Production du gaz",
                nodes: [],
              },
              {
                key: "1TLVu8qFirCzck2YQX8YRWiIxBi3jw-Uc",
                gd_id: "1TLVu8qFirCzck2YQX8YRWiIxBi3jw-Uc",
                label: "Mémoire de fin d’étude",
                nodes: [],
              },
              {
                key: "1TUwkAEtgDYESohtCU08HMoJLtDflVUq9",
                gd_id: "1TUwkAEtgDYESohtCU08HMoJLtDflVUq9",
                label: "Collecte et séparation 2",
                nodes: [],
              },
              {
                key: "1TQ2L8_DJwsftqhscwyyUX5j7-Cz8zp5p",
                gd_id: "1TQ2L8_DJwsftqhscwyyUX5j7-Cz8zp5p",
                label: "Mud logging",
                nodes: [],
              },
            ],
          },
        ],
        production_academic: [
          {
            key: "1I6IQTtEXRB8qNh25fSYqOLqD-hAHNMAk",
            gd_id: "1I6IQTtEXRB8qNh25fSYqOLqD-hAHNMAk",
            label: "First semester",
            nodes: [
              {
                key: "1P0yT6orASKQPn5S0OV1eyuDP1dGf2oqX",
                gd_id: "1P0yT6orASKQPn5S0OV1eyuDP1dGf2oqX",
                label: "Economie des Entreprises",
                nodes: [],
              },
              {
                key: "1OqG4FpdIkznow84GvWS0mESAmmkeZxLK",
                gd_id: "1OqG4FpdIkznow84GvWS0mESAmmkeZxLK",
                label: "Energies Renouvelables",
                nodes: [],
              },
              {
                key: "1QBlsgS0qQygLi9PdtlPbGrx1-a-_UuV5",
                gd_id: "1QBlsgS0qQygLi9PdtlPbGrx1-a-_UuV5",
                label: "TP Thermodynamique",
                nodes: [],
              },
              {
                key: "1QIU2mOb8YHNaQjrMmo9r248qTbfjBrEW",
                gd_id: "1QIU2mOb8YHNaQjrMmo9r248qTbfjBrEW",
                label: "TP PVT",
                nodes: [],
              },
              {
                key: "1QJpPliaBpyzfK_i8UWOjEULPspXy74kp",
                gd_id: "1QJpPliaBpyzfK_i8UWOjEULPspXy74kp",
                label: "TP Production 2",
                nodes: [],
              },
              {
                key: "1QMP0BJGhBE1P7ppqtCUcw_WIgINkESAj",
                gd_id: "1QMP0BJGhBE1P7ppqtCUcw_WIgINkESAj",
                label: "Pompes et Compresseurs",
                nodes: [],
              },
              {
                key: "1OoreIdnQt3ouuUijtZyMYMa2ZR8ZsBhu",
                gd_id: "1OoreIdnQt3ouuUijtZyMYMa2ZR8ZsBhu",
                label: "Forage 1",
                nodes: [],
              },
              {
                key: "1QKg-7F_z2GgdzDyy8Zyf-ubpMEkmOTVN",
                gd_id: "1QKg-7F_z2GgdzDyy8Zyf-ubpMEkmOTVN",
                label: "Thermodynamique 1",
                nodes: [],
              },
              {
                key: "1QLPR3gRsqwhZtIBKLmXPPprt5oYoSd1y",
                gd_id: "1QLPR3gRsqwhZtIBKLmXPPprt5oYoSd1y",
                label: "Propriétés des Fluides du Réservoir",
                nodes: [],
              },
              {
                key: "1QYEWtl-YrxtRRaS6t37Es3wWUYzWMKMK",
                gd_id: "1QYEWtl-YrxtRRaS6t37Es3wWUYzWMKMK",
                label: "Géologie Pétrolière",
                nodes: [],
              },
            ],
          },
          {
            key: "1I3kNbsAbMg3NhbTzr6ubApUbqh_Lwlx8",
            gd_id: "1I3kNbsAbMg3NhbTzr6ubApUbqh_Lwlx8",
            label: "Second semester",
            nodes: [
              {
                key: "1PpSWKOFLMdBLHCeGiZ175xGP-iNA0zfA",
                gd_id: "1PpSWKOFLMdBLHCeGiZ175xGP-iNA0zfA",
                label: "TP Pétro physiques",
                nodes: [],
              },
              {
                key: "1Q9qif7drDh0efYtOw5LhaAb_-6phb5Kj",
                gd_id: "1Q9qif7drDh0efYtOw5LhaAb_-6phb5Kj",
                label: "Législation des Hydrocarbures",
                nodes: [],
              },
              {
                key: "1RphbOeKyULnZkME6UZG0HUdDGvWggH2O",
                gd_id: "1RphbOeKyULnZkME6UZG0HUdDGvWggH2O",
                label: "Transport des Hydrocarbures",
                nodes: [],
              },
              {
                key: "1RxsRECC6EP-DwR98EVTuFW9lToHYm1z6",
                gd_id: "1RxsRECC6EP-DwR98EVTuFW9lToHYm1z6",
                label: "TP Régulation automatique",
                nodes: [],
              },
              {
                key: "1PsGTHkuzB4QOA76lwB-wt15Q7kVxiO4J",
                gd_id: "1PsGTHkuzB4QOA76lwB-wt15Q7kVxiO4J",
                label: "Thermodynamique 2",
                nodes: [],
              },
              {
                key: "1PwEihblFul2-GeOoWoDepp69qJhfbBya",
                gd_id: "1PwEihblFul2-GeOoWoDepp69qJhfbBya",
                label: "Régulation automatique",
                nodes: [],
              },
              {
                key: "1Q5FsZKSIDFmzoqR3y2la8owC1OtjfwFA",
                gd_id: "1Q5FsZKSIDFmzoqR3y2la8owC1OtjfwFA",
                label: "Mémoire fin d’étude",
                nodes: [],
              },
              {
                key: "1QBQxG3-edOPyz42zoMqt5P8OSa-PBXYl",
                gd_id: "1QBQxG3-edOPyz42zoMqt5P8OSa-PBXYl",
                label: "Diagraphie de production",
                nodes: [],
              },
              {
                key: "1PyRsqZMiXnZX2ps8ZHrTcl0KxSxdBuge",
                gd_id: "1PyRsqZMiXnZX2ps8ZHrTcl0KxSxdBuge",
                label: "Production du gaz",
                nodes: [],
              },
              {
                key: "1Q4U7520XMPc2LXIjqAVErAy8aH6Gq7JC",
                gd_id: "1Q4U7520XMPc2LXIjqAVErAy8aH6Gq7JC",
                label: "Production 2",
                nodes: [],
              },
            ],
          },
        ],
        drilling: [
          {
            key: "1I3CEFk0iDZh_Z8545nLng1TPAYV1Z-ji",
            gd_id: "1I3CEFk0iDZh_Z8545nLng1TPAYV1Z-ji",
            label: "First semester",
            nodes: [
              {
                key: "1QwHc3Ma2UItwfhy_lYi0n90DCTK7o1z2",
                gd_id: "1QwHc3Ma2UItwfhy_lYi0n90DCTK7o1z2",
                label: "TP Informatique",
                nodes: [],
              },
              {
                key: "1RCxR062Vhtwc5p3xrq2YIBGQQmI2EM3O",
                gd_id: "1RCxR062Vhtwc5p3xrq2YIBGQQmI2EM3O",
                label: "TP Diagraphie",
                nodes: [],
              },
              {
                key: "1Rcz1Ii-sNFzH3T0MR5aIDfmxyumEHOLM",
                gd_id: "1Rcz1Ii-sNFzH3T0MR5aIDfmxyumEHOLM",
                label: "Etude technique (mini projet)",
                nodes: [],
              },
              {
                key: "1Rjroj4gvouKsELO8XI29yYkW03Oas5x7",
                gd_id: "1Rjroj4gvouKsELO8XI29yYkW03Oas5x7",
                label: "Anglais technique",
                nodes: [],
              },
              {
                key: "1RNFSEkS68ZI8yTnPCUImf9UNm_HN0HeI",
                gd_id: "1RNFSEkS68ZI8yTnPCUImf9UNm_HN0HeI",
                label: "Production et gisement",
                nodes: [],
              },
              {
                key: "1RRNwfGMIKXt5hQSnOQJ3_oi5nY8MfJ-m",
                gd_id: "1RRNwfGMIKXt5hQSnOQJ3_oi5nY8MfJ-m",
                label: "Pompes et compresseurs",
                nodes: [],
              },
              {
                key: "1RhhHu_dhSri4mW7l2XxTvI9zAG8rGYoQ",
                gd_id: "1RhhHu_dhSri4mW7l2XxTvI9zAG8rGYoQ",
                label: "Diagraphie",
                nodes: [],
              },
              {
                key: "1RY_YEK6AuBGQe0DDhtP05aDz6AwqwM1_",
                gd_id: "1RY_YEK6AuBGQe0DDhtP05aDz6AwqwM1_",
                label: "Forage 3",
                nodes: [],
              },
              {
                key: "1RahjMY4PtknS4KVQkI6aGZWMnAufmUpm",
                gd_id: "1RahjMY4PtknS4KVQkI6aGZWMnAufmUpm",
                label: "Fluides et ciment",
                nodes: [],
              },
            ],
          },
          {
            key: "1I-pVZvTLLABwfcQfYkJFu3Bc6rYfJdfi",
            gd_id: "1I-pVZvTLLABwfcQfYkJFu3Bc6rYfJdfi",
            label: "Second semester",
            nodes: [
              {
                key: "1QkrqHzCKFxfpaoRGFxzmvvGd8nSU7Ngw",
                gd_id: "1QkrqHzCKFxfpaoRGFxzmvvGd8nSU7Ngw",
                label: "Equipements et Entretien des puits",
                nodes: [],
              },
              {
                key: "1SvdHH0hfAc2IQKXJYNrkUyUXOOHM1qfh",
                gd_id: "1SvdHH0hfAc2IQKXJYNrkUyUXOOHM1qfh",
                label: "Maintenance des puits",
                nodes: [],
              },
              {
                key: "1Qlh2Yp0d-wqZpjLZe7MfkhPIg2Zt1cvO",
                gd_id: "1Qlh2Yp0d-wqZpjLZe7MfkhPIg2Zt1cvO",
                label: "Economie des hydrocarbures",
                nodes: [],
              },
              {
                key: "1SmWEDwSptopIUaDVcYRWDFRH5lP7Zy6k",
                gd_id: "1SmWEDwSptopIUaDVcYRWDFRH5lP7Zy6k",
                label: "TP Régulation automatique",
                nodes: [],
              },
              {
                key: "1Spr45yZ5XsNyH5N_5-MMIiVN92brXkjY",
                gd_id: "1Spr45yZ5XsNyH5N_5-MMIiVN92brXkjY",
                label: "TP informatique",
                nodes: [],
              },
              {
                key: "1QgIgm8_qhEhpGRbyLU1GVC5NZrJY41Xe",
                gd_id: "1QgIgm8_qhEhpGRbyLU1GVC5NZrJY41Xe",
                label: "Législation de travail",
                nodes: [],
              },
              {
                key: "1SvH1gG0idXzQYIxnzmrfR_8Ia-h725DX",
                gd_id: "1SvH1gG0idXzQYIxnzmrfR_8Ia-h725DX",
                label: "Régulation automatique",
                nodes: [],
              },
              {
                key: "1QuUQVpFqwbhSWm5pbK_YXkIdo-hhJcSz",
                gd_id: "1QuUQVpFqwbhSWm5pbK_YXkIdo-hhJcSz",
                label: "Controle des éruptions",
                nodes: [],
              },
            ],
          },
        ],
        oil_rig_mechanics: [
          {
            key: "1HnWzHhrjXKcFvf2SiXHK3mLX8BaEofuA",
            gd_id: "1HnWzHhrjXKcFvf2SiXHK3mLX8BaEofuA",
            label: "First semester",
            nodes: [
              {
                key: "1SIDQNnGhV0ZqGw3OxilECrZzlRpyU1pN",
                gd_id: "1SIDQNnGhV0ZqGw3OxilECrZzlRpyU1pN",
                label: "TP Moteur thermique",
                nodes: [],
              },
              {
                key: "1SITgLRd8YbXjqDcYh4T583lNEfdKLFwO",
                gd_id: "1SITgLRd8YbXjqDcYh4T583lNEfdKLFwO",
                label: "TP Informatique",
                nodes: [],
              },
              {
                key: "1SVByyr6S0UreHaog2oA4EYjdNoc-6qAm",
                gd_id: "1SVByyr6S0UreHaog2oA4EYjdNoc-6qAm",
                label: "Etude technique (mini projet)",
                nodes: [],
              },
              {
                key: "1SXC078xKRry9-ckoLJl0KTonMGnsxbzs",
                gd_id: "1SXC078xKRry9-ckoLJl0KTonMGnsxbzs",
                label: "Eléments de machines 02",
                nodes: [],
              },
              {
                key: "1SjWD0Q50OfB70PzOFrIfiO2WWd8kLq6_",
                gd_id: "1SjWD0Q50OfB70PzOFrIfiO2WWd8kLq6_",
                label: "Anglais technique",
                nodes: [],
              },
              {
                key: "1SJorIfxHViT7pv6Q5sZ_4gMVh90qikod",
                gd_id: "1SJorIfxHViT7pv6Q5sZ_4gMVh90qikod",
                label: "Pompes et compresseurs 1",
                nodes: [],
              },
              {
                key: "1SMOC6TM-skxLQZ17lYeGwWcftc-UwT2W",
                gd_id: "1SMOC6TM-skxLQZ17lYeGwWcftc-UwT2W",
                label: "Maintenance - Appareils statiques et dynamiques",
                nodes: [],
              },
              {
                key: "1Sh0mLcQ7OuT-shnCiKS1SG-GlpZhGHm2",
                gd_id: "1Sh0mLcQ7OuT-shnCiKS1SG-GlpZhGHm2",
                label: "Corrosion et protection",
                nodes: [],
              },
              {
                key: "1ShVAfiLCpHBRxEFqkCQOmZHqTBlH-kP-",
                gd_id: "1ShVAfiLCpHBRxEFqkCQOmZHqTBlH-kP-",
                label: "Bureau études et méthodes",
                nodes: [],
              },
              {
                key: "1SLh_Z7PqK6H1CNwPzKhqT3JjaxJcHU4j",
                gd_id: "1SLh_Z7PqK6H1CNwPzKhqT3JjaxJcHU4j",
                label: "Moteur thermique et conversion d'énergie 1",
                nodes: [],
              },
            ],
          },
          {
            key: "1JEOZ6COcSLMIt-V-kQ5Bas07qAGAZoEr",
            gd_id: "1JEOZ6COcSLMIt-V-kQ5Bas07qAGAZoEr",
            label: "Second semester",
            nodes: [
              {
                key: "1Jz0vCDl7XrGWFyKOrHzp5DJRtm0xf6TK",
                gd_id: "1Jz0vCDl7XrGWFyKOrHzp5DJRtm0xf6TK",
                label: "TP Pompe et Compresseur",
                nodes: [],
              },
              {
                key: "1JzxFz1i-St_wpp_j1Ul-rHTo7J1Felcr",
                gd_id: "1JzxFz1i-St_wpp_j1Ul-rHTo7J1Felcr",
                label: "TP Informatique",
                nodes: [],
              },
              {
                key: "1KBzu4GqYqBQf6LlaHOk_hXXJhnkfH4Ih",
                gd_id: "1KBzu4GqYqBQf6LlaHOk_hXXJhnkfH4Ih",
                label: "Législation de travail",
                nodes: [],
              },
              {
                key: "1KHYl_48PhjdRgBqeoWiNcBRcTmqqVpzV",
                gd_id: "1KHYl_48PhjdRgBqeoWiNcBRcTmqqVpzV",
                label: "Economie des hydrocarbures",
                nodes: [],
              },
              {
                key: "1K-H7Mp-cppHSHVxfSM8uy5sIcUfolLav",
                gd_id: "1K-H7Mp-cppHSHVxfSM8uy5sIcUfolLav",
                label: "Régulation automatique",
                nodes: [],
              },
              {
                key: "1K0RGVUvS93wZC_6_aSyeEGRns16bC4HC",
                gd_id: "1K0RGVUvS93wZC_6_aSyeEGRns16bC4HC",
                label: "Pompe et Compresseur",
                nodes: [],
              },
              {
                key: "1K3CsWD7Yagn1FYWCCoMSm6sRzzlLSAk5",
                gd_id: "1K3CsWD7Yagn1FYWCCoMSm6sRzzlLSAk5",
                label: "Moteur thermique",
                nodes: [],
              },
              {
                key: "1K4Hxn-gwh0z74B7iV6RVFAOAjpe5GjIX",
                gd_id: "1K4Hxn-gwh0z74B7iV6RVFAOAjpe5GjIX",
                label: "Maintenance des équipements pétroliers",
                nodes: [],
              },
            ],
          },
        ],
      },
    },
    master: {
      first_year: {
        production_professional: [
          {
            key: "1Vho4rYGmY6OK7Ru8y7T8JMBSz6Fh2fyG",
            gd_id: "1Vho4rYGmY6OK7Ru8y7T8JMBSz6Fh2fyG",
            label: "First semester",
            nodes: [
              {
                key: "1_IVQe8Ht61LyoUeS2xMYcY532yghMgO3",
                gd_id: "1_IVQe8Ht61LyoUeS2xMYcY532yghMgO3",
                label: "Mécanique des Fluides en Milieu Poreux",
                nodes: [],
              },
              {
                key: "1_KmkVYJwPjsiklj54nNe5yjoBZbM7jfv",
                gd_id: "1_KmkVYJwPjsiklj54nNe5yjoBZbM7jfv",
                label: "Anglais Appliquées",
                nodes: [],
              },
              {
                key: "1_40YylqXqXqMps2vE6pJcaZbqrNyQQ2o",
                gd_id: "1_40YylqXqXqMps2vE6pJcaZbqrNyQQ2o",
                label: "Techniques Avancées de Forage et Complétion",
                nodes: [],
              },
              {
                key: "1_5t9yHXF8T9WFitw3kin4gBonGMGZGFh",
                gd_id: "1_5t9yHXF8T9WFitw3kin4gBonGMGZGFh",
                label: "Simulation Numérique en Réservoir Engineering",
                nodes: [],
              },
              {
                key: "1_8kNHh1ds_yCLEx3B-apezYSanWqeGJQ",
                gd_id: "1_8kNHh1ds_yCLEx3B-apezYSanWqeGJQ",
                label: "Réservoir Engineering",
                nodes: [],
              },
              {
                key: "1_Cg7sVMl-km7mnDFzKzsBEsQA0UYetOv",
                gd_id: "1_Cg7sVMl-km7mnDFzKzsBEsQA0UYetOv",
                label: "Pétrophysiques et Diagraphie de Pétrole",
                nodes: [],
              },
              {
                key: "1_EEoAj-SkJjwij9DNTFtp0uTypcKhXT2",
                gd_id: "1_EEoAj-SkJjwij9DNTFtp0uTypcKhXT2",
                label: "Méthodes Numériques Appliquées 2",
                nodes: [],
              },
            ],
          },
          {
            key: "1Wi8bQNX_RI3a4nVEOz8QbEkeC9EMcsWG",
            gd_id: "1Wi8bQNX_RI3a4nVEOz8QbEkeC9EMcsWG",
            label: "Second semester",
            nodes: [
              {
                key: "1YzqXrTSNnbEPvilAceTW1dtHG6MiLEMr",
                gd_id: "1YzqXrTSNnbEPvilAceTW1dtHG6MiLEMr",
                label: "Turbomachines",
                nodes: [],
              },
              {
                key: "1Z9mzJneC0RT8zS3L86u0sTNX4gTqk_Ex",
                gd_id: "1Z9mzJneC0RT8zS3L86u0sTNX4gTqk_Ex",
                label: "Chimie de surface",
                nodes: [],
              },
              {
                key: "1ZCKTmx9ypu0pyPDoziBBnRfFVsniTnki",
                gd_id: "1ZCKTmx9ypu0pyPDoziBBnRfFVsniTnki",
                label: "Audit énergétique, Energie, enjeux et perspective",
                nodes: [],
              },
              {
                key: "1Z3TSwU8VUQdyZYklqAQW3PBKxCPw-Aiu",
                gd_id: "1Z3TSwU8VUQdyZYklqAQW3PBKxCPw-Aiu",
                label: "Transfert de chaleur et de masse",
                nodes: [],
              },
              {
                key: "1Z5bVVUVe5XJGlNJOlcJ9Hns0eWzYDlxM",
                gd_id: "1Z5bVVUVe5XJGlNJOlcJ9Hns0eWzYDlxM",
                label: "Thermodynamique",
                nodes: [],
              },
              {
                key: "1Z7uO1jCVxnVayA8ggypQhlTJ4Peu88bC",
                gd_id: "1Z7uO1jCVxnVayA8ggypQhlTJ4Peu88bC",
                label: "PVT",
                nodes: [],
              },
              {
                key: "1Z9Lg1TQCBvGyEFJkGcXFjj0UELeqSjVc",
                gd_id: "1Z9Lg1TQCBvGyEFJkGcXFjj0UELeqSjVc",
                label: "Production du pétrole et du gaz",
                nodes: [],
              },
            ],
          },
        ],
        production_academic: [
          {
            key: "1J20e8u_gCNaDKCKBTaaNQS8xw7u9QS-A",
            gd_id: "1J20e8u_gCNaDKCKBTaaNQS8xw7u9QS-A",
            label: "First semester",
            nodes: [
              {
                key: "1SywNln3OA8tjWvfwrwC8UEsWUSSWy4af",
                gd_id: "1SywNln3OA8tjWvfwrwC8UEsWUSSWy4af",
                label: "Mécanique de Fluide en Milieux Poreux",
                nodes: [],
              },
              {
                key: "1T-Mwkbbj1kv9xT4E6RMgOFHASop8y_R2",
                gd_id: "1T-Mwkbbj1kv9xT4E6RMgOFHASop8y_R2",
                label: "Forage 2",
                nodes: [],
              },
              {
                key: "1T3GcgNnERwpbMgpXPBxbtGd5xZ3aX-OD",
                gd_id: "1T3GcgNnERwpbMgpXPBxbtGd5xZ3aX-OD",
                label: "Communication Ecrite et Orale",
                nodes: [],
              },
              {
                key: "1Uqdd_GdB19rFsa2p7ZEoEZ_rL2SWysyO",
                gd_id: "1Uqdd_GdB19rFsa2p7ZEoEZ_rL2SWysyO",
                label: "Simulation Numérique en Réservoir Engineering",
                nodes: [],
              },
              {
                key: "1Swgna756Div61WGz5_J6pZnyJ06qGdkk",
                gd_id: "1Swgna756Div61WGz5_J6pZnyJ06qGdkk",
                label: "PVT",
                nodes: [],
              },
              {
                key: "1SwuCMpGu8YOa_w1yG2PoeJndjacV7Gv6",
                gd_id: "1SwuCMpGu8YOa_w1yG2PoeJndjacV7Gv6",
                label: "Méthodes Numériques Appliquées 2",
                nodes: [],
              },
              {
                key: "1Ushcac9Q3LNExQrDuMY_otKPTfZUV_ez",
                gd_id: "1Ushcac9Q3LNExQrDuMY_otKPTfZUV_ez",
                label: "Réservoir Engineering",
                nodes: [],
              },
              {
                key: "1Ui4cbU-W9G5_aTnMkKy5rpd-ugJjbwgl",
                gd_id: "1Ui4cbU-W9G5_aTnMkKy5rpd-ugJjbwgl",
                label: "Tests des Puits",
                nodes: [],
              },
            ],
          },
          {
            key: "1J1uv6P5WD4BybcISmQAwCZCeVa4-i_EA",
            gd_id: "1J1uv6P5WD4BybcISmQAwCZCeVa4-i_EA",
            label: "Second semester",
            nodes: [
              {
                key: "1UP3Yd7qoQ6qitljyhQ2Vvk29F-yghl1v",
                gd_id: "1UP3Yd7qoQ6qitljyhQ2Vvk29F-yghl1v",
                label: "Chimie de surface",
                nodes: [],
              },
              {
                key: "1UfBPaFqzI2AMRwjtTh-VM83IHsFa6pes",
                gd_id: "1UfBPaFqzI2AMRwjtTh-VM83IHsFa6pes",
                label: "Audit énergétique, Energie, enjeux et perspective",
                nodes: [],
              },
              {
                key: "1U67M-RNGFwlsqLDjVBYG4bad81rkZgpV",
                gd_id: "1U67M-RNGFwlsqLDjVBYG4bad81rkZgpV",
                label: "Écoulement Polyphasique et Analyse Nodal",
                nodes: [],
              },
              {
                key: "1U7KrtNmY1AhIOIfnPEqY3lMiEmJhIRHh",
                gd_id: "1U7KrtNmY1AhIOIfnPEqY3lMiEmJhIRHh",
                label: "Turbomachines",
                nodes: [],
              },
              {
                key: "1UAdt90Yr3-A91pfJSJwCyBm3pFmKadCN",
                gd_id: "1UAdt90Yr3-A91pfJSJwCyBm3pFmKadCN",
                label: "Transfert de chaleur et de masse",
                nodes: [],
              },
              {
                key: "1ULhU5u8YT89SfJzexJlEn1sJMC-SrIk3",
                gd_id: "1ULhU5u8YT89SfJzexJlEn1sJMC-SrIk3",
                label: "Pétro physique et diagraphie",
                nodes: [],
              },
              {
                key: "1UDDl_eWU9nzwQ6rvl8L6EXPN6PBsav8m",
                gd_id: "1UDDl_eWU9nzwQ6rvl8L6EXPN6PBsav8m",
                label: "Thermodynamique",
                nodes: [],
              },
              {
                key: "1UDmCwq1hUDIgPBIHTnB3v54lDJHyQYHx",
                gd_id: "1UDmCwq1hUDIgPBIHTnB3v54lDJHyQYHx",
                label: "Techniques avancées de forage et complétion",
                nodes: [],
              },
              {
                key: "1UORAxn5Sdqu9LUl4uBaKW-Y6vZvLEJyv",
                gd_id: "1UORAxn5Sdqu9LUl4uBaKW-Y6vZvLEJyv",
                label: "Production de pétrole et du gaz",
                nodes: [],
              },
            ],
          },
        ],
        drilling: [
          {
            key: "1J19Ui62qQVCx8QrDka04nFEe07-Ck-zm",
            gd_id: "1J19Ui62qQVCx8QrDka04nFEe07-Ck-zm",
            label: "First semester",
            nodes: [
              {
                key: "1VgVyfZ7rWVi5JUytmsgNT8c7ZAbGocMi",
                gd_id: "1VgVyfZ7rWVi5JUytmsgNT8c7ZAbGocMi",
                label: "Energie et enjeux",
                nodes: [],
              },
              {
                key: "1TmbYUGOCGGNbOo0f5pUo19kCH5ZKW83R",
                gd_id: "1TmbYUGOCGGNbOo0f5pUo19kCH5ZKW83R",
                label: "Communication écrite et orale",
                nodes: [],
              },
              {
                key: "1TqH_hKL2vvmPiNS_B-r26tuAKPWhmGl9",
                gd_id: "1TqH_hKL2vvmPiNS_B-r26tuAKPWhmGl9",
                label: "Anglais technique",
                nodes: [],
              },
              {
                key: "1TqiSmfwjexPGI8r6GjyTGXw3NsaZcWib",
                gd_id: "1TqiSmfwjexPGI8r6GjyTGXw3NsaZcWib",
                label: "Analyse numérique 1",
                nodes: [],
              },
              {
                key: "1VIPlXGNe2JnSmZRzz5mFI0RZQ1OBtgfp",
                gd_id: "1VIPlXGNe2JnSmZRzz5mFI0RZQ1OBtgfp",
                label: "Résistance des matériaux",
                nodes: [],
              },
              {
                key: "1VKogf71cUM7gjEcldEZGaBoOFJlx0-mC",
                gd_id: "1VKogf71cUM7gjEcldEZGaBoOFJlx0-mC",
                label: "Petro-physique et diagraphie",
                nodes: [],
              },
              {
                key: "1VPfloMGsjvVVyyXFsRqlUWruYtyzwo4G",
                gd_id: "1VPfloMGsjvVVyyXFsRqlUWruYtyzwo4G",
                label: "Forage horizontal dévié et multilatéral",
                nodes: [],
              },
              {
                key: "1VQ4nIJsTv1dhaWxm1T_5soyRswPrWfdc",
                gd_id: "1VQ4nIJsTv1dhaWxm1T_5soyRswPrWfdc",
                label: "Equipement de test",
                nodes: [],
              },
            ],
          },
          {
            key: "1It4n62Gf0HccFdh2YFJTsEpSIMSoJn1z",
            gd_id: "1It4n62Gf0HccFdh2YFJTsEpSIMSoJn1z",
            label: "Second semester",
            nodes: [
              {
                key: "1V-yy-kHmZBdAEa19yQLeOHPN-ip8SNTy",
                gd_id: "1V-yy-kHmZBdAEa19yQLeOHPN-ip8SNTy",
                label: "SOIP",
                nodes: [],
              },
              {
                key: "1V6-93ZcA8oHwqalHZpLxwoDrftJGN37C",
                gd_id: "1V6-93ZcA8oHwqalHZpLxwoDrftJGN37C",
                label: "MDR",
                nodes: [],
              },
              {
                key: "1VEiDwZ36tERbiNAncMvWZvXpogHdFwYH",
                gd_id: "1VEiDwZ36tERbiNAncMvWZvXpogHdFwYH",
                label: "Forage en Off-shore",
                nodes: [],
              },
              {
                key: "1VF3BWCvK-gj0IzsBVlVX9LwLqcOBukr6",
                gd_id: "1VF3BWCvK-gj0IzsBVlVX9LwLqcOBukr6",
                label: "Essais des puits",
                nodes: [],
              },
              {
                key: "1VHPP4i_8wTWPU3NmgikQis0MQ9imuMuV",
                gd_id: "1VHPP4i_8wTWPU3NmgikQis0MQ9imuMuV",
                label: "Analyse numérique II",
                nodes: [],
              },
              {
                key: "1V9Ratr7hMTRR3jZejUO_q8H3A2oMYAk1",
                gd_id: "1V9Ratr7hMTRR3jZejUO_q8H3A2oMYAk1",
                label: "MDF avancé",
                nodes: [],
              },
              {
                key: "1VDQvuGLaxy4f42Oo5MJxSL9tQr4p2hA1",
                gd_id: "1VDQvuGLaxy4f42Oo5MJxSL9tQr4p2hA1",
                label: "HSE",
                nodes: [],
              },
              {
                key: "1VH1ICXA6NRtbF9nbP9GDM9bX9NqHa1Tf",
                gd_id: "1VH1ICXA6NRtbF9nbP9GDM9bX9NqHa1Tf",
                label: "Audit Énergétique",
                nodes: [],
              },
            ],
          },
        ],
        oil_rig_mechanics: [
          {
            key: "1Imvu55pbg0VmTG46FTWzXnccNpk-WhxR",
            gd_id: "1Imvu55pbg0VmTG46FTWzXnccNpk-WhxR",
            label: "First semester",
            nodes: [
              {
                key: "1UuFZNmnJ6S9gXfrBK3H6wgq2eOKMQt6E",
                gd_id: "1UuFZNmnJ6S9gXfrBK3H6wgq2eOKMQt6E",
                label: "Anglais technique",
                nodes: [],
              },
              {
                key: "1WUEmhFBBzvGERq-0EAFyOGFMjtqvOKyA",
                gd_id: "1WUEmhFBBzvGERq-0EAFyOGFMjtqvOKyA",
                label: "Energie, enjeux et perspectives",
                nodes: [],
              },
              {
                key: "1WZwAdlOf9Rm9dhtYaOmGr_kl2zDh9spD",
                gd_id: "1WZwAdlOf9Rm9dhtYaOmGr_kl2zDh9spD",
                label: "Communication écrite et orale",
                nodes: [],
              },
              {
                key: "1UykHODJpddu41QRonHKskbe2c7W7hphs",
                gd_id: "1UykHODJpddu41QRonHKskbe2c7W7hphs",
                label: "Analyse numérique 1",
                nodes: [],
              },
              {
                key: "1WMYxXNrFfsNj1EDdZ6h6BtHI-xI8du8W",
                gd_id: "1WMYxXNrFfsNj1EDdZ6h6BtHI-xI8du8W",
                label: "Résistance des matériaux",
                nodes: [],
              },
              {
                key: "1WNY4A-TmZnCeB-o0JQA2qvLykdnec_RF",
                gd_id: "1WNY4A-TmZnCeB-o0JQA2qvLykdnec_RF",
                label: "Fabrication et métallurgie",
                nodes: [],
              },
              {
                key: "1WYDncFDA1I9PKaTm8C68KRLUrbacg6JJ",
                gd_id: "1WYDncFDA1I9PKaTm8C68KRLUrbacg6JJ",
                label: "Corrosion et protection 2",
                nodes: [],
              },
              {
                key: "1WKzmLvcQOQRE1nLr7Kz73dpUE39foKIP",
                gd_id: "1WKzmLvcQOQRE1nLr7Kz73dpUE39foKIP",
                label: "Thermodynamique 2",
                nodes: [],
              },
            ],
          },
          {
            key: "1IkS43TSaIniHKEtPM3kTeZvyie2b0Egq",
            gd_id: "1IkS43TSaIniHKEtPM3kTeZvyie2b0Egq",
            label: "Second semester",
            nodes: [
              {
                key: "1W2gEWUqeBN5CPAvCuWrVpRYQzFkBxifQ",
                gd_id: "1W2gEWUqeBN5CPAvCuWrVpRYQzFkBxifQ",
                label: "Diagnostic-technique",
                nodes: [],
              },
              {
                key: "1W8G3tVPwnK4cSrzU8-zrGNCa_o9WC_Va",
                gd_id: "1W8G3tVPwnK4cSrzU8-zrGNCa_o9WC_Va",
                label: "Audit Énergétique",
                nodes: [],
              },
              {
                key: "1Vldz02GfgIkEx2suKCXEr4mJelEIlL_B",
                gd_id: "1Vldz02GfgIkEx2suKCXEr4mJelEIlL_B",
                label: "TMM",
                nodes: [],
              },
              {
                key: "1VrHBBLBF_AGSVrzNamYL1TUl8G4jiJRH",
                gd_id: "1VrHBBLBF_AGSVrzNamYL1TUl8G4jiJRH",
                label: "mécanique des fluides avancé",
                nodes: [],
              },
              {
                key: "1W-juiGIQzaAIKmbxufs3gWIo1Peq3teK",
                gd_id: "1W-juiGIQzaAIKmbxufs3gWIo1Peq3teK",
                label: "HSE",
                nodes: [],
              },
              {
                key: "1WJF7M-Y33rpMKmTD0cwqnvkFqwKubaQu",
                gd_id: "1WJF7M-Y33rpMKmTD0cwqnvkFqwKubaQu",
                label: "Analyse numérique II",
                nodes: [],
              },
              {
                key: "1ViHDCmtKU2Nch_845hezAZk2NPmS4OeC",
                gd_id: "1ViHDCmtKU2Nch_845hezAZk2NPmS4OeC",
                label: "Éléments de Machine",
                nodes: [],
              },
              {
                key: "1ViSKFiv5YdUxKSF42n58YqZYYMWtXTq2",
                gd_id: "1ViSKFiv5YdUxKSF42n58YqZYYMWtXTq2",
                label: "Transfer de chaleur",
                nodes: [],
              },
            ],
          },
        ],
      },
      second_year: {
        production_professional: [
          {
            key: "1YhgOoM1UWY2PO7Tglq5Xy4oTh5L77Vtv",
            gd_id: "1YhgOoM1UWY2PO7Tglq5Xy4oTh5L77Vtv",
            label: "First semester",
            nodes: [
              {
                key: "1aYQxr3gyAs9qVnpPYXTXmMIJg8pGPYdx",
                gd_id: "1aYQxr3gyAs9qVnpPYXTXmMIJg8pGPYdx",
                label: "Méthodes d’Exploration Pétrolières",
                nodes: [],
              },
              {
                key: "1bXhTBEq_HbijLeTate_uz6_XDmIqZvxz",
                gd_id: "1bXhTBEq_HbijLeTate_uz6_XDmIqZvxz",
                label: "Recherche Opérationnelle",
                nodes: [],
              },
              {
                key: "1a_ZgEzVouaTTb12BuNPHWIFhvo6goOtb",
                gd_id: "1a_ZgEzVouaTTb12BuNPHWIFhvo6goOtb",
                label: "Maintenance des Equipements Pétroliers",
                nodes: [],
              },
              {
                key: "1agp8RvDTG7AT1KOQrmSKAnyRQm_7e4Qp",
                gd_id: "1agp8RvDTG7AT1KOQrmSKAnyRQm_7e4Qp",
                label: "Equipements Electriques et Régulation Industrielle",
                nodes: [],
              },
              {
                key: "1bSX6FXUDiGglm5IsYRHAUIBYnnzj2ycP",
                gd_id: "1bSX6FXUDiGglm5IsYRHAUIBYnnzj2ycP",
                label: "Stimulation des Réservoirs",
                nodes: [],
              },
              {
                key: "1aScYvPGceFfZf6tdl_oLzWtIBrHq_VPz",
                gd_id: "1aScYvPGceFfZf6tdl_oLzWtIBrHq_VPz",
                label: "Production de Surface et Traitement de Gaz",
                nodes: [],
              },
              {
                key: "1aa4Jz3V10Y1zIfzG0RK3gtI1XsIIvUQQ",
                gd_id: "1aa4Jz3V10Y1zIfzG0RK3gtI1XsIIvUQQ",
                label: "Les Essais de Puits",
                nodes: [],
              },
              {
                key: "1aNd9TXBR3iv3zOs63qcx362J8or2sGsM",
                gd_id: "1aNd9TXBR3iv3zOs63qcx362J8or2sGsM",
                label: "Puits Horizontaux",
                nodes: [],
              },
            ],
          },
        ],
        production_academic: [
          {
            key: "1YsaROmMfZvGE05oP0SaM82DfzuVWI336",
            gd_id: "1YsaROmMfZvGE05oP0SaM82DfzuVWI336",
            label: "First semester",
            nodes: [
              {
                key: "1_mE-ysJ1jrtaBI2WcxW_chYNSiJkxTvp",
                gd_id: "1_mE-ysJ1jrtaBI2WcxW_chYNSiJkxTvp",
                label: "Recherche Opérationnelle",
                nodes: [],
              },
              {
                key: "1_tnAdz9aEFSoUAFrQPQfRGRxW78XY90S",
                gd_id: "1_tnAdz9aEFSoUAFrQPQfRGRxW78XY90S",
                label: "Méthodes d’Exploration Pétrolières",
                nodes: [],
              },
              {
                key: "1_icTwDGsfuuoC9wbeDAnwtITGcgqXPCY",
                gd_id: "1_icTwDGsfuuoC9wbeDAnwtITGcgqXPCY",
                label: "Stimulation des Réservoirs",
                nodes: [],
              },
              {
                key: "1a878apzxaixMxQjaE1qe-HQpXIZDdXac",
                gd_id: "1a878apzxaixMxQjaE1qe-HQpXIZDdXac",
                label: "Mécanique des Fluides Compressible",
                nodes: [],
              },
              {
                key: "1aB-SadZN8XVRIgDDi6ga9KoEHeLCp_Mk",
                gd_id: "1aB-SadZN8XVRIgDDi6ga9KoEHeLCp_Mk",
                label: "Maintenance des Equipements Pétroliers",
                nodes: [],
              },
              {
                key: "1aCtDXTvegXL0BemwpxxtzAKNJ2Bi5Aa_",
                gd_id: "1aCtDXTvegXL0BemwpxxtzAKNJ2Bi5Aa_",
                label: "Equipement Electrique et Régulation Industrielle",
                nodes: [],
              },
              {
                key: "1_iDGwginn5Fm0shh0L2kznuYTyc0RDl_",
                gd_id: "1_iDGwginn5Fm0shh0L2kznuYTyc0RDl_",
                label: "Traitement du Gaz",
                nodes: [],
              },
              {
                key: "1_oXV3WNH9o5AMzIqNZ5SZKCc8fTywRBP",
                gd_id: "1_oXV3WNH9o5AMzIqNZ5SZKCc8fTywRBP",
                label: "Production de Surface",
                nodes: [],
              },
              {
                key: "1aI9nRXWmsobpUC9xD3lq7tOH4umR9g46",
                gd_id: "1aI9nRXWmsobpUC9xD3lq7tOH4umR9g46",
                label: "Corrosion et Protection Cathodique",
                nodes: [],
              },
              {
                key: "1_nL1nPyNHrmklGNM1MR1_VB5OaxpC_yx",
                gd_id: "1_nL1nPyNHrmklGNM1MR1_VB5OaxpC_yx",
                label: "Puits Horizontaux",
                nodes: [],
              },
            ],
          },
        ],
        drilling: [
          {
            key: "1YkMHXY61khQF7o7F9Kzsb-lZOiHpZdoh",
            gd_id: "1YkMHXY61khQF7o7F9Kzsb-lZOiHpZdoh",
            label: "First semester",
            nodes: [
              {
                key: "1_RpaoTDlS_3_MBwprGwfjRC0pMZAmfoE",
                gd_id: "1_RpaoTDlS_3_MBwprGwfjRC0pMZAmfoE",
                label: "Problèmes de forage études et analyses",
                nodes: [],
              },
              {
                key: "1_T4_kppiJmLi6hW1HTImYySqN27eiqy7",
                gd_id: "1_T4_kppiJmLi6hW1HTImYySqN27eiqy7",
                label: "Management des chantier pétroliers",
                nodes: [],
              },
              {
                key: "1_TsJxTHNvYlseVlf1QJ_XQTgURFUQAVn",
                gd_id: "1_TsJxTHNvYlseVlf1QJ_XQTgURFUQAVn",
                label: "Maintenance des équipements pétroliers",
                nodes: [],
              },
              {
                key: "1_cphNk8e_2RmDQBbQsiOEnnOjrVQOLZj",
                gd_id: "1_cphNk8e_2RmDQBbQsiOEnnOjrVQOLZj",
                label: "Equipements électriques et régulation industrielle",
                nodes: [],
              },
              {
                key: "1b8zmAOLAffJdo9xUEcHkuS4UZ90IBMqP",
                gd_id: "1b8zmAOLAffJdo9xUEcHkuS4UZ90IBMqP",
                label: "Recherche opérationnelle",
                nodes: [],
              },
              {
                key: "1b705prKwcj7dNrdn4WDAr8KvP3_gJF5j",
                gd_id: "1b705prKwcj7dNrdn4WDAr8KvP3_gJF5j",
                label: "Well control avancé",
                nodes: [],
              },
              {
                key: "1_W_isQzizcTjjinXo8nnvIW5LP-SDvwR",
                gd_id: "1_W_isQzizcTjjinXo8nnvIW5LP-SDvwR",
                label: "Forage en underbalanced",
                nodes: [],
              },
            ],
          },
        ],
        oil_rig_mechanics: [
          {
            key: "1YhgOoM1UWY2PO7Tglq5Xy4oTh5L77Vtv",
            gd_id: "1YhgOoM1UWY2PO7Tglq5Xy4oTh5L77Vtv",
            label: "First semester",
            nodes: [
              {
                key: "1aYQxr3gyAs9qVnpPYXTXmMIJg8pGPYdx",
                gd_id: "1aYQxr3gyAs9qVnpPYXTXmMIJg8pGPYdx",
                label: "Méthodes d’Exploration Pétrolières",
                nodes: [],
              },
              {
                key: "1bXhTBEq_HbijLeTate_uz6_XDmIqZvxz",
                gd_id: "1bXhTBEq_HbijLeTate_uz6_XDmIqZvxz",
                label: "Recherche Opérationnelle",
                nodes: [],
              },
              {
                key: "1a_ZgEzVouaTTb12BuNPHWIFhvo6goOtb",
                gd_id: "1a_ZgEzVouaTTb12BuNPHWIFhvo6goOtb",
                label: "Maintenance des Equipements Pétroliers",
                nodes: [],
              },
              {
                key: "1agp8RvDTG7AT1KOQrmSKAnyRQm_7e4Qp",
                gd_id: "1agp8RvDTG7AT1KOQrmSKAnyRQm_7e4Qp",
                label: "Equipements Electriques et Régulation Industrielle",
                nodes: [],
              },
              {
                key: "1bSX6FXUDiGglm5IsYRHAUIBYnnzj2ycP",
                gd_id: "1bSX6FXUDiGglm5IsYRHAUIBYnnzj2ycP",
                label: "Stimulation des Réservoirs",
                nodes: [],
              },
              {
                key: "1aScYvPGceFfZf6tdl_oLzWtIBrHq_VPz",
                gd_id: "1aScYvPGceFfZf6tdl_oLzWtIBrHq_VPz",
                label: "Production de Surface et Traitement de Gaz",
                nodes: [],
              },
              {
                key: "1aa4Jz3V10Y1zIfzG0RK3gtI1XsIIvUQQ",
                gd_id: "1aa4Jz3V10Y1zIfzG0RK3gtI1XsIIvUQQ",
                label: "Les Essais de Puits",
                nodes: [],
              },
              {
                key: "1aNd9TXBR3iv3zOs63qcx362J8or2sGsM",
                gd_id: "1aNd9TXBR3iv3zOs63qcx362J8or2sGsM",
                label: "Puits Horizontaux",
                nodes: [],
              },
            ],
          },
        ],
      },
    },
  },

  geology: {
    licence: {
      first_year: { common_year: [] },
      second_year: { common_year: [] },

      third_year: {
        applied_geology: [],
        fondamental_geology: [],
      },
    },
    master: {
      first_year: {
        fundamental_geology: [],
        geology_of_hydrocarbons: [],
        hydrogeology: [],
        petroleum_geology: [],
      },
      second_year: {
        fundamental_geology: [],
        geology_of_hydrocarbons: [],
        hydrogeology: [],
        petroleum_geology: [],
      },
    },
  },
  renewable_energies: {
    licence: {
      first_year: { common_year: [] },
      second_year: {
        applied_renewable_energy: [],
      },
      third_year: {
        applied_renewable_energy: [],
      },
    },
    master: {
      first_year: {
        renewable_energy_in_mechanics: [],
      },
      second_year: {
        renewable_energy_in_mechanics: [],
      },
    },
  },
};
