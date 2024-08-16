# Nuxt Test Project

Focus del task, creare un progetto che segua i seguenti step:

- STEP 1: Aggiunta di Tailwind CSS

  1. Aggiungi Tailwind CSS al progetto
  2. Configura Tailwind utilizzando la configurazione standard.
  3. Modifica il file di configurazione di Tailwind (`tailwind.config.js`) per includere:
    - Colori personalizzati: aggiungi almeno due colori personalizzati al tema.
    - Dimensioni del font personalizzate: aggiungi almeno due dimensioni del font personalizzate.
  4. Mostra come applicare questi colori e font in un componente Nuxt.
 

- STEP 2: Configurazione di Pinia

  1. Aggiungi e configura Pinia nel progetto
  Crea un nuovo store globale in Pinia chiamato “useGlobalStore”.
  2. Aggiungi una variabile globale chiamata “message” con valore predefinito "Hello World!".
  3. Crea un metodo chiamato ”etMessage” nello store che permette di modificare il valore di “message”.
  4. Includi il “message” in una pagina, visualizzandolo in un componente, e fornisci un input o un pulsante per modificarne il valore usando il metodo “setMessage”.
 

- STEP 3: Creazione di una Funzione Asincrona con Chiamata API

  1. Crea una funzione asincrona in Nuxt 3 che effettua una chiamata GET a “https://fakestoreapi.com/products”.
  2. Visualizza i risultati della chiamata API in una pagina del progetto.
  3. Implementa una logica di loading: mentre la chiamata API è in corso, visualizza un messaggio o un'animazione di caricamento (assicurati che la logica di loading sia visibile fino a quando i dati non vengono caricati completamente).
 

- STEP FACOLTATIVO: Styling Avanzato

  1. Utilizzando Tailwind CSS, crea una visualizzazione stilizzata per i prodotti recuperati dall'API.
  2. Ogni prodotto deve essere mostrato con il suo nome, prezzo e immagine.
  3. Utilizza i colori e le dimensioni del font personalizzati che hai configurato precedentemente.

## Idee per la personalizzazione 

Per organizzare il progetto in modo che mantenga una coerenza e un flusso logico, l’idea è di strutturarlo come un piccolo sito demo che introduce le funzionalità che sto costruendo. Ogni step è rappresentato in una pagina dedicata.

#### Struttura delle pagine
Il progetto è strutturato in 4 pagine principali:

- Homepage ( / ): Una breve introduzione al progetto, con link alle altre pagine

- Colors & Typography (/style-demo): Mostra i colori personalizzati e le dimensioni dei font, con un componente che li visualizza

- Global State Menagement (/state-demo): Una pagina con un input che modifica un valore globale nello store di pinia, visualizzando un messaggio dinamico

- Product List Page (/products): Recupera e mostra prodotti fittizi tramite una chiamata API