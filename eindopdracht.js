const count = (condition) => {
  return (database) => {
    return query(condition)(database).length;
  };
};

const query = (condition) => {
  return (database) => {
    let acc = [];
    for (const p of database) {
      if (condition(p)) acc.push(p.naam);
    }
    return acc;
  };
};

const vragen = [
  {
    vraag: "Hoeveel personen zijn er ouder dan 35 jaar?",
    antwoord: count((p) => p.leeftijd > 35),
  },
  {
    vraag: "Wie heeft er meer dan 2 kenissen?",
    antwoord: query((p) => p.kennissen.length > 2),
  },
  {
    vraag: "Wie is er op vakantie?",
    antwoord: query((p) => p.opVakantie),
  },
  {
    vraag: "Wie is er niet op vakantie?",
    antwoord: query((p) => !p.opVakantie),
  },
  {
    vraag: "Wie is jonger dan 30 of ouder dan 50?",
    antwoord: query((p) => p.leeftijd < 30 || p.leeftijd > 50),
  },
  {
    vraag: "Wie is er op vakantie in Berlijn?",
    antwoord: query((p) => p.locatie.stad == "Berlijn" && p.opVakantie),
  },
  {
    vraag: "Wie is er niet op vakantie in Amsterdam?",
    antwoord: query((p) => p.locatie.stad == "Amsterdam" && p.opVakantie),
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
      return "Deze vraag heeft u al twee keer gesteld.";
    },
  },
  {
    vraag: "Wie heeft een naam die met een K begint?",
    antwoord: query((p) => p.naam.startsWith("K")),
  },
  {
    vraag: "Wie heeft er tenminste 1 '@hotmail.com' mail adres?",
    antwoord: (database) => {
      let n = [];

      for (const p of database) {
        for (const e of p.emails) {
          if (e.endsWith("@hotmail.com") && !n.includes(p.naam)) {
            n.push(p.naam);
          }
        }
      }

      return n;
    },
  },
];
