const vragen = [
  {
      "vraag": "Hoeveel personen zijn er ouder dan 35 jaar?",
      "antwoord": (database) => {
          let aantalPersonen = 0;
          for(const persoon of database) {
              if(persoon.leeftijd > 35) {
                  aantalPersonen++;
              }
          }
          return aantalPersonen;
      }
  },
  {
      "vraag": "Wie heeft er meer dan 2 kenissen?",
      "antwoord": (database) => {
          return "geen idee meneer Baas ;(";
      }
  },
  {
      "vraag": "Wie is er op vakantie?",
      "antwoord": (database) => {
          return "geen idee meneer Baas ;(";
      }
  },
  {
      "vraag": "Wie is er niet op vakantie?",
      "antwoord": (database) => {
          return "geen idee meneer Baas ;(";
      }
  },
  {
      "vraag": "Wie is jonger dan 30 of ouder dan 50?",
      "antwoord": (database) => {
          return "geen idee meneer Baas ;(";
      }
  },
  {
      "vraag": "Wie is er op vakantie in Berlijn?",
      "antwoord": (database) => {
          return "geen idee meneer Baas ;(";
      }
  },
  {
      "vraag": "Wie is er niet op vakantie in Amsterdam?",
      "antwoord": (database) => {
          return "geen idee meneer Baas ;(";
      }
  },
  {
      "vraag": "Wie heeft er meer dan 2 kenissen?",
      "antwoord": (database) => {
          return "geen idee meneer Baas ;(";
      }
  },
  {
      "vraag": "Wie heeft er meer dan 2 kenissen?",
      "antwoord": (database) => {
          return "geen idee meneer Baas ;(";
      }
  },
  {
      "vraag": "Wie heeft er tenminste 1 '@hotmail.com' mail adres?",
      "antwoord": (database) => {
          return "geen idee meneer Baas ;(";
      }
  },
]