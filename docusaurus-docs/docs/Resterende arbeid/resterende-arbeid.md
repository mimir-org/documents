# Resterende arbeid
Sett vekk frå å oversette denne sida til engelsk...

Mange av problema til Mimir oppsto av feil bruk av punkta over her. Derfor er det viktig at desse feila ikkje blir gjort på nytt no som vi endelig har fått gått gjennom mange av dei og fiksa dei.

## Flytting av komponenter til komponentbiblioteket.
Der er en del enkle oppgåver som må gjerast for å få rydda litt. Desse er det ikkje hast med, men legge ved ei liste over ting vi veit som skal flyttast, det er godt mulig der er fleire.

### Assets
Noke av det enklaste som skal flyttast no er ikona som brukast i Mimir, desse høyrer til i komponentbiblioteket. Der er også et problem som har opptstått en plass med `alt` propen til desse ikona som må fiksast på et tidspunkt. Sjek A11y best practises for å finne ut om SVG ikon trenge alt prop eller ikkje.

ikona som skal flyttast ligger i dag her (`/src/assets/icons/`):
![](./img/Pasted%20image%2020230921160337.png)

Der er også fleire ting som ikkje har noke å gjere i Assets mappa, slik som `Size.ts` då dette passar seg betre i for eksempel ei `lib` mappe eller lignande.

### src/client/src/compLibrary
I denne mappa så finn du ein del komponentar som kan flyttast, men det må sjekkast om det er nødvendig eller til fordel å flytte desse komponenta, det er godt mulig enkelte av dei er for skreddersydde til mimir at det er noke poeng å flytte dei, men dei fleste komponenta her kan nok flyttast eller byttast ut med allereie eksisterande komponent i komponentbiblioteket.

## Nye komponenter og funksjonalitet

### Hovedmenyen
På startskjermen i dag så er der en del knappar som ikkje gjer noke:
![](./img/Pasted%20image%2020230921160932.png)

Den viktigaste av desse er å lagre et prosjekt, dette må implementerast før Mimir når en MVP. Så dette er nok det viktigaste til neste sprint om det hastar med å få mimir live.

Import og eksport ser eg ikkje på som noke "must-have" per dags dato, men kjem nok til å bli veldig relevant for framtida. Det samme gjeld subprosjekt. Eg trur open project funka som det skal, men uten å kunne lagre et prosjekt så er det heller ikkje mulig å åpne noke nytt prosjekt.

### Visual filter

![](./img/Pasted%20image%2020230921161217.png)

Det visuelle filteret er i dag ikkje fungerande, denne menyen skal åpne en modal som lar deg skru av og på edges i grafen i tegnevinduet. Du skal velge om du skal vise parent-child edges eller edges mellom forskjellige noder (tenk høgre/venstre edges). Det skal (skulle i alle fall før) vere mulig å skru av og på animasjonar på edges mellom noder.

![](./img/Pasted%20image%2020230921161451.png)

### Library module
![](./img/Pasted%20image%2020230921161549.png)

![](./img/Pasted%20image%2020230921161640.png)

Denne modulen (til høgre i mimir) kan du i dag ikkje filtrere i. Dette skal vere ei enkel oppgåve å implementere.

### Blokkvisning
![](./img/Pasted%20image%2020230921161824.png)


I blokkvisning så skal det vere mulig å vri viewporten 90 grader slik at dei som er vandt med å tegne frå topp til bunn skal kunne bruke denne visninga (denne visninga heiter electromode).

Det er også her sortering av terminalar hadde vert nice, då et AspectObject kan få mange terminalar og for å unngå at edges mellom nodar går i krøll.

### InspectorModule
![](./img/Pasted%20image%2020230921162142.png)

Denne trenger en refresh, då eg ikkje er 100% sikker på ka som skal vere i denne fana, dette har sikkert Jørgen greie på, det er også mulig at dene fana skal vekk, men det kjem ann på den korleis den nye tylen blir.

### Explorer panel
![](./img/Pasted%20image%2020230921162502.png)

Dette er panelet til venstre i menyen til Mimir, denne må reimplementerast, den skal berre vise heile tegneflata som en tre-struktur, tenk trestrukturen i VSCode for eksempel. Det skal også vere mulig å skru av visninga til nodar og heile "tred" i denne menyen.

### Lock og Delete
![](./img/Pasted%20image%2020230921162743.png)

Delete skal slette noden frå tegneflata, her hadde det sikkert vert fint med en reset knapp óg.

Lock treng ein ikkje tenke på akkurat no, då denne funksjonaliteten er for å låse den slik at andre ikkje skal kunne redigere noden medan du jobbar på den. I og med at Mimir ikkje har implementert web-sockets i dag, så er denne knappen også ikkje i bruk. Då den ikkje pusha noke state changes til backend.

### Tilkobling til backend - lagring av prosjekt
Dette er nok den største oppgåva, men vanskelig å prioritere då vi ikkje veit om backend og frontend snakkar ilag lenger. Her er det berre prøving og feiling som må til, då eg ikkje har sett på denne oppgåva sjøl.

### OBS
Når det kjem til visning av element, så er det viktig at element berre blir fjerna visuellt, ikkje faktisk fjerna frå tredet, då dette vil føre til at prosjekt staten endra seg via React Flow.
