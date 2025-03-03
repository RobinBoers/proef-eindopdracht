const queries = [
  {
    title: "Hoeveel personen zijn er ouder dan 35 jaar?",
    query: "SELECT COUNT(*)::int as amount FROM people WHERE leeftijd > 35",
  },
  {
    title: "Wie heeft er meer dan 2 kennissen?",
    query: "SELECT naam, len(kennissen) as aantal FROM people WHERE len(kennissen) > 2",
  },
  {
    title: "Wie is er op vakantie?",
    query: "SELECT naam FROM people WHERE opVakantie = true",
  },
  {
    title: "Wie is er niet op vakantie?",
    query: "SELECT naam FROM people WHERE opVakantie = false",
  },
  {
    title: "Wie is jonger dan 30 of ouder dan 50?",
    query: "SELECT naam, leeftijd FROM people WHERE leeftijd < 30 OR leeftijd > 50",
  },
  {
    title: "Wie is er op vakantie in Berlijn?",
    query: "SELECT naam FROM people WHERE opVakantie = true AND locatie.stad = 'Berlijn'",
  },
  {
    title: "Wie is er niet op vakantie in Amsterdam?",
    query: "SELECT naam, opVakantie, locatie.stad FROM people WHERE opVakantie = false AND locatie.stad = 'Amsterdam'",
  },
  {
    title: "Wie is er niet in Amsterdam op vakantie?",
    query: "SELECT naam, opVakantie, locatie.stad FROM people WHERE opVakantie = true AND locatie.stad != 'Amsterdam'",
  },
  {
    title: "Wie heeft er tenminste één '@hotmail.com' mail adres?",
    query: "SELECT p.naam, e.email FROM people AS p, UNNEST(p.emails) AS e(email) WHERE e.email LIKE '%hotmail.com'",
  },
];

export default queries;
