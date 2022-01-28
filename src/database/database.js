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
      first_year: { common_year: [] },
      second_year: {
        production_professional: [],
        production_academic: [],
        drilling: [],
        oil_rig_mechanics: [],
      },
      third_year: {
        production_professional: [
          {
            gd_id: "",
            label: "Professional Production",
            key: "17Rhc6GYSyiWByQVELg6hzrvUBvqopjdR",
            nodes: [
              {
                label: "First semester",
                key: "1jOz7aLaQXm3YyFNkZ1Ak9ssM1GzSzU_B",
                nodes: [
                  {
                    key: "1gqp2VCNclwe4z_J58hGGmp9t9TP2FRCq",
                    nodes: [
                      {
                        label: "Others",
                        key: "1Cx9u5W_lFtDjklGM9SC2lcS_S_G7-KEM",
                        gd_id: "1Cx9u5W_lFtDjklGM9SC2lcS_S_G7-KEM",
                        nodes: [],
                      },
                      {
                        label: "Exams",
                        gd_id: "1GgjpgY18pfvcRrrgHS-ZnwqZAm9dymQB",
                        nodes: [
                          {
                            label: "Rattrapage",
                            nodes: [],
                            key: "15C0pSrUGgofR3G_ArVFppLB1cLFWUWQa",
                            gd_id: "15C0pSrUGgofR3G_ArVFppLB1cLFWUWQa",
                          },
                          {
                            key: "1cUQFMm4GbVsL9J0vkMilPCEN2hZjRloh",
                            nodes: [
                              {
                                label: "2",
                                gd_id: "1DoDlcdVO_EZ-bk0p2OdrToE81koO24lh",
                                key: "1DoDlcdVO_EZ-bk0p2OdrToE81koO24lh",
                                nodes: [],
                              },
                              {
                                nodes: [],
                                key: "1ZL4J2WACIj7gphWX3H-bh43-SmLMlOGm",
                                label: "3",
                                gd_id: "1ZL4J2WACIj7gphWX3H-bh43-SmLMlOGm",
                              },
                              {
                                nodes: [],
                                label: "1",
                                gd_id: "1ZgXjnxKZs1eYs0GZkun_8u80G4kBGM3T",
                                key: "1ZgXjnxKZs1eYs0GZkun_8u80G4kBGM3T",
                              },
                            ],
                            gd_id: "1cUQFMm4GbVsL9J0vkMilPCEN2hZjRloh",
                            label: "Avec solution",
                          },
                          {
                            gd_id: "1hRlzV1MJNIRwSVcQRdeAHRJSYd3NPXSQ",
                            nodes: [],
                            key: "1hRlzV1MJNIRwSVcQRdeAHRJSYd3NPXSQ",
                            label: "Controle td",
                          },
                        ],
                        key: "1GgjpgY18pfvcRrrgHS-ZnwqZAm9dymQB",
                      },
                      {
                        key: "1skvEcYrk-pR6vvF8IQ2ZFR2bI6MxphcX",
                        gd_id: "1skvEcYrk-pR6vvF8IQ2ZFR2bI6MxphcX",
                        label: "Td & exercices",
                        nodes: [
                          {
                            key: "1o3s34zz-T4hCJvy61Ra9Rt4K4-6c6TTk",
                            gd_id: "1o3s34zz-T4hCJvy61Ra9Rt4K4-6c6TTk",
                            label: "Td 4 similar",
                            nodes: [],
                          },
                        ],
                      },
                      {
                        key: "1zserDbSpKY74lL0T2r65CBdGI8GelPMS",
                        label: "Courses",
                        nodes: [],
                        gd_id: "1zserDbSpKY74lL0T2r65CBdGI8GelPMS",
                      },
                    ],
                    label: "Collecte et Séparation 1",
                    gd_id: "1gqp2VCNclwe4z_J58hGGmp9t9TP2FRCq",
                  },
                ],
                gd_id: "1jOz7aLaQXm3YyFNkZ1Ak9ssM1GzSzU_B",
              },
            ],
          },
        ],
        production_academic: [],
        drilling: [],
        oil_rig_mechanics: [],
      },
    },
    master: {
      first_year: {
        production_professional: [],
        production_academic: [],
        drilling: [],
        oil_rig_mechanics: [],
      },
      second_year: {
        production_professional: [],
        production_academic: [],
        drilling: [],
        oil_rig_mechanics: [],
      },
    },
  },
};

export const geology = [];
export const Renewable_Energies = [];
