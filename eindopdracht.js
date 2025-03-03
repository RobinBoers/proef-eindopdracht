const vragen = [
  {
    vraag: "Hoeveel personen zijn er ouder dan 35 jaar?",
    antwoord: (database) => {
      let n = 0;
      for (const p of database) if (p.leeftijd > 35) n++;
      return n;
    },
  },
  {
    vraag: "Wie heeft er meer dan 2 kenissen?",
    antwoord: (database) => {
      let n = [];
      for (const p of database) if (p.kennissen.length > 2) n.push(p);
      return n;
    },
  },
  {
    vraag: "Wie is er op vakantie?",
    antwoord: (database) => {
      let n = [];
      for (const p of database) if (p.opVakantie) n.push(p);
      return n;
    },
  },
  {
    vraag: "Wie is er niet op vakantie?",
    antwoord: (database) => {
      let n = [];
      for (const p of database) if (!p.opVakantie) n.push(p);
      return n;
    },
  },
  {
    vraag: "Wie is jonger dan 30 of ouder dan 50?",
    antwoord: (database) => {
      let n = [];
      for (const p of database)
        if (p.leeftijd < 30 || p.leeftijd > 50) n.push(p);
      return n;
    },
  },
  {
    vraag: "Wie is er op vakantie in Berlijn?",
    antwoord: (database) => {
      let n = [];
      for (const p of database)
        if (p.locatie.stad == "Berlijn" && p.opVakantie) n.push(p);
      return n;
    },
  },
  {
    vraag: "Wie is er niet op vakantie in Amsterdam?",
    antwoord: (database) => {
      let n = [];
      for (const p of database)
        if (p.locatie.stad == "Amsterdam" && p.opVakantie) n.push(p);
      return n;
    },
  },
  {
    vraag: "Wie heeft er meer dan 2 kenissen?",
    antwoord: (database) => {
      return "Deze vraag heeft u al gesteld.";
    },
  },
  {
    vraag: "Wie heeft er meer dan 2 kenissen?",
    antwoord: (database) => {
      return "Deze vraag heeft u al twee keer gesteld";
    },
  },
  {
    vraag: "Wie heeft er tenminste 1 '@hotmail.com' mail adres?",
    antwoord: (database) => {
      let n = [];

      for (const p of database) {
        for (const e of p.emails) {
          if (e.endsWith("@hotmail.com")) n.push(p);
        }
      }

      return n;
    },
  },
];
