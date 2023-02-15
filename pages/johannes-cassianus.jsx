/* eslint-disable prettier/prettier */
import Head from 'next/head'
import styles from '../../css/Synaxarium.module.css'
import events from '../data/staticdata'
// import Footnote from '@/components/Footnote';

const event = events.find((event) => event.id === 5)

export default function JohannesCassianus() {
  const { title, description } = event
  const pageTitle = `${title} - Synaxarium`

  return (
    <div className={styles.container}>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{description}</h2>
      <p className={styles.paragraph}>
        Johannes Cassianus, född omkring år 360 i Dakien (dagens Rumänien), var en munk och
        författare som var aktiv under 400-talet. Han var verksam i olika delar av det östra
        Romarriket, däribland i Palestina, Egypten och Konstantinopel.
      </p>
      <p className={styles.paragraph}>
        Cassianus var en av de första som förmedlade den östliga munktraditionens ljus till Väst,
        och han skrev flera verk om munklivet och det kristna andliga livet. Hans verk, bland annat
        "Om inre kamp"
        {/* <sup className={styles.footnoteNumber}>
    <a href="#footnote1" id="ref1">
      1
    </a>
  </sup> */}
        , "Institutioner" och "Om profeterna", blev mycket inflytelserika och användes som
        läroböcker för munkar under medeltiden.
      </p>
      <p className={styles.paragraph}>
        Johannes Cassianus betonade vikten av att leva ett balanserat liv med fokus på både bön och
        praktiskt arbete. Han betonade också betydelsen av att känna sinnesrörelsens olika stadier
        och hur man ska hantera dem, vilket han kallade "åtta onda tankar". Cassianus lärde ut att
        genom att erkänna dessa tankar och genom att vända sig till Gud, så kunde man förvandla dem
        till något positivt.
      </p>
      <p className={styles.paragraph}>
        Johannes Cassianus är en av de mest inflytelserika kristna författarna under senantiken och
        medeltiden, och hans verk fortsätter att ha betydelse för kristna än idag.
      </p>
      <p className={styles.paragraph}>
        <b>
          Själva öknen var för dem som en levande bibliotek av asketiska lärdomar och teologisk
          visdom.
        </b>{' '}
        Genom att söka upp och tillbringa tid med öknens fäder och mödrar, förvärvade Johannes
        Cassianus en djup förståelse för den östliga munktraditionen och det asketiska livet. Efter
        flera år i öknen reste Johannes till Konstantinopel, där han studerade teologi och
        prästvigdes. Han vistades också en tid i Rom och Italien, där han kom i kontakt med den
        västliga kristna kyrkan och dess asketiska traditioner. Johannes Cassianus är mest känd för
        sitt verk "Collationes Patrum in Scetica Eremo ", eller "Konferenser med fäderna i Sketis
        öken". Verket består av tjugofem konferenser som Johannes höll med öknens fäder och mödrar,
        där han samlade deras visdom och lärdomar om det asketiska livet. Johannes Cassianus är en
        viktig person inom både den östliga och västliga kristna kyrkan. Han var en brygga mellan de
        två kyrkorna och förmedlade den östliga munktraditionens ljus till Väst. Hans verk har haft
        en stor påverkan på den kristna spiritualiteten och har inspirerat generationer av munkar
        och troende. Idag, den 9 december, firar den ortodoxa kyrkan Johannes Cassianus minnesdag
        och minns hans viktiga bidrag till den kristna spiritualiteten och det asketiska livet.
      </p>
      <b>
        {' '}
        På den 29:e denna månad firar vi minnet av vår vördade fader Johannes Cassianus och hans
        följeslagare Germain.
      </b>
      <p className={styles.paragraph}>
        {' '}
        Vår fader Johannes Cassianus, som genom Guds vilja förde ljuset från den orientaliska
        munktraditionen till väst, föddes som ett gott resultat av Guds försyn i området vid
        munterna till Donau i Mindre Scythien (nutidens Dobroudja i Rumänien), runt år 365. Han kom
        från en framstående familj och hade framgångsrikt avslutat sina klassiska studier. Men då
        han brann av en stark längtan efter fullkomning, valde han att som ung avstå från världens
        bedrägliga locktoner och resa till Heliga landet tillsammans med sin vän Germain, som han
        såg som sin "broder, inte genom födelse, men i anden". De blev munkar i ett kloster i
        Bethlehem.
      </p>
      <p className={styles.paragraph}>
        Efter att ha fått en grundläggande introduktion till cenobitiskt liv och ha lärt sig om
        livet för munkarna i Palestina, Mesopotamien och Kapadokien, kände de en stark önskan att
        söka en större fullkomning och beslöt sig för att resa till ökenen i Egypten för att vara
        nära de anachoreter som de hade hört så mycket om från helgen Pinufe [27 nov.].
        Klosterchefen gav dem med viss tvekan sin välsignelse, men fick dem att lova att snart
        återvända. Efter att ha beundrat livet och ordningen i cenobitiska samfunden vid Nilens
        delta, begav sig Johannes och Germain in i öknen. De sökte överallt efter heliga
        ensamvandrare för att beundra den gudomliga nåden och dess frukter och att ställa dem många
        frågor om själens vetande.
      </p>
      <p className={styles.paragraph}>
        När de insåg att de behövde tillbringa längre tid för att assimilera deras gudomliga
        undervisning, och då de kände sig besvärade av deras löfte, vände de sig till abboten Joseph
        med sitt problem. Efter en natt av bön, försäkrade abboten dem att det skulle vara till
        deras fördel att stanna i Egypten, utan att bry sig om deras brådskande löfte. Trösta av den
        äldste stannade de i sju år i Egypten, och fortsatte med hängivenhet sin andliga
        undersökning.
      </p>
      <p className={styles.paragraph}>
        Från ställe till ställe kom våra vördade fäder Johannes Cassianus och Germain fram till den
        berömda öknen Scété, grundad av helgonet Macaire, "den berömda öknen, värd att hyllas bland
        alla". Där kämpade en stor mängd munkar med askes, däribland särskilt helgon som Abbas
        Moise, Sérapion, Théonas, Isaac och prästen Paphnuce. Sistnämnda imponerade stort på dem när
        han sa att det inte räcker för en munk att kroppsligt avstå från världen genom att avstå
        från sina tillgångar för att ägna sig åt sin själsomsorg genom askes och tystnad, utan att
        man måste också genomföra "det andra avståndet", som innebär att avstå från sina gamla vanor
        och passioner genom en lång och tålmodig kamp full av hinder, men som leder till hjärtats
        renhet. Det är munkens mål: att ständigt hålla samtal med Gud genom den ständiga bön som
        förståelsen, inte spridd i världens bekymmer, med lugn och frid höjer i det rengjorda
        hjärtats helgedom. Och målet med hans verk är den eviga livet, unionen med Gud, som man
        redan här på jorden kan erhålla förskott genom den heliga kärleken. Faktum är att när man
        har nått målet för "det andra avståndet" och själen är helt riktad mot det enda önskvärda,
        måste munken genomföra "det tredje avståndet", som innehåller all fullkomlighet och innebär
        att förbjuda all minnesbild från den här världen för att låta Gud bära bort honom till de
        eviga boningarna, i en känsla av ofattbar glädje och en flod av gudomlig ljus.
      </p>
      <p className={styles.paragraph}>
        {' '}
        Då kommer den fullkomliga kärleken till Gud att genomströmma vårt hjärta genom den renas
        bön, utan form eller ord. Gud kommer att vara all vår kärlek och all vår längtan, all vår
        sökning och själ." Då kommer den fullkomliga kärleken till Gud att flöda in i vårt hjärta
        genom den rena bönen, utan form eller ord. Gud kommer att bli all vår kärlek och all vår
        längtan, all vår sökning och själen av alla våra ansträngningar, all vår tanke, vårt liv,
        vår tal och vår andning. Enheten mellan Fadern och Sonen och Sonen och Fadern kommer att
        strömma in i vår själs innersta vrå och precis som Gud älskar oss med en sann och ren kärlek
        som aldrig dör, så kommer vi att vara förenade med honom med en oföränderlig
        kärleksförbindelse. Detta kommer att vara så mycket som möjligt på jorden, uppfyllelsen av
        apostlens ord: "Gud i allt och allt i Gud" och när vi har blivit fullt ut Guds söner genom
        en så fullkomlig kommunikation med Fadern, så kan vi säga, som efterbildning av den som är
        Son och ärftling av naturen: "Allt det som Fadern har är mitt" (Johannes 16:15). Detta är
        målet för all fullkomlighet: att själen är så lättade från kroppsliga byrder att den stiger
        varje dag mot andliga verkligheters höjder, tills hela livet, all hjärtats rörelse blir en
        enda, oförbrytlig bön. Denna bön sysslar inte med betraktelser av några bilder, tvärtom
        uttrycks den inte med ord eller med ord, men den brister ut i en eldslåga, en ofattbar
        hjärtstransport, en hänryckt glädje i anden. Borttagen från sinnen och allt synligt, är det
        då med obeskrivliga stönanden och suckar som själen strömmar ut mot Gud. Detta är resultatet
        av en perfekt kärlek till Gud, där vi har förenats med honom i en oavbruten och sann kärlek.
        Vi har släppt alla jordiska bekymmer och vår själ är helt fokuserad på att älska och tjäna
        Gud. Vi talar inte till honom med ord eller bilder, utan vår kärlek strömmar fritt från vårt
        hjärta som en brinnande eld, med en outhärdlig glädje i vårt sinne. Själen är upplyft från
        alla sinnen och allt som är synligt, och uttrycker sin kärlek till Gud med obeskrivliga
        stönanden och suckar.
        {/* <p>
    <b>Fotnoter</b> <br />
   
  </p>
  <p>
    På icke-skottår firas helgonen av denna dag dagen innan. Sankt Germain kanoniserades av Rumäniens patriarkat 1992.
    <sup class="footnote">2</sup>
  </p>
  <p>
    Innan grundandet av Sankt Jeromes kloster [30 september].
    <sup class="footnote">3</sup>
  </p>
  <p>
    Det var dessa konferenser som Sankt Johannes Cassianus skrev ner på sin ålderdom för de provensalska munkarna, och han infogade sin personliga doktrinära syntes.
    <sup class="footnote">4</sup>
  </p>
  <p>
    Konferens XVIII, 7, SC 64, 28.
    <sup class="footnote">5</sup>
  </p>
  <p>
    Se konferens III, 6-10, SC 54, 145-155, för de tre avkallandena.
    <sup class="footnote">6</sup>
  </p> */}
      </p>
      <p>
        Alla våra ansträngningar, all vår tanke, vårt liv, vår talan och till och med vår andning,
        strävar efter att uppnå denna fullkomliga kärlek till Gud. Enhetens band mellan Fadern och
        Sonen, och mellan Sonen och Fadern, kommer att strömma in i vår själs innersta, och på samma
        sätt som Gud älskar oss med en sann, ren och oförgänglig kärlek, kommer vi att vara förenade
        med Honom i en oskiljaktig kärlek utan svaghet. Detta kommer så långt det är möjligt på
        jorden att uppfylla apostelns ord: Gud kommer att vara allt i alla, och genom denna
        fullkomliga kommunikation med Fadern kommer vi att bli fullständiga söner. Vi kan säga, likt
        Honom som är Son och arvinge genom sin natur: Allt vad Fadern har är mitt (Joh 16:15). Detta
        är fullkomlighetens mål: att själen ska bli befriad från de köttsliga bördorna, att den ska
        stiga upp varje dag mot de andliga verkligheternas höjder, så att hela dess liv, alla dess
        rörelser och hela dess hjärtslag blir en enda oföränderlig bön. Denna bön är inte fokuserad
        på några bilder eller uttryckt med ord. Istället sprudlar den fram ur en eldig ström, en
        ineffektiv hjärteglädje och en överväldigande andlig{' '}
        <span className={styles.tooltip}>
          extas
          <span className={styles.tooltiptext}>
            En extas är en stark andlig upplevelse som kan ta form av en vision, en uppenbarelse
            eller en djup känsla av närvaro hos Gud.
          </span>
        </span>{' '}
        När själen upplyfts ur sinnenas värld och bortom all synlig verklighet, översvämmas den av
        omskakande suckar och outtröttliga gnyenden medan den öser ut sig mot Gud.
      </p>
      <p>
        Således, upplysta från höjderna av det monastiska livet och betraktande dess levande
        förverkligande hos dessa berömda ankoriter, ägnade de två vännerna sig med stor stränghet åt
        det kontemplativa livet under de år de tillbringade i Skete. I tystnaden i sin cell kunde
        helige Cassianus själv uppleva den hårda kampen i själen som är förälskad i Gud mot
        passionerade tankar och avundsjuka demoner, särskilt mot frestelsen av acedia (
        <span className={styles.tooltip}>
          tristess
          <span className={styles.tooltiptext}>
            Acedia, eller "tristess", är en av de åtta grundläggande passionerna inom kristen
            teologi. Det beskrivs som en andlig sjukdom som innebär likgiltighet, depression och en
            brist på motivation eller intresse för andliga övningar.
          </span>
        </span>
        ) som plågar eremiter för att få dem att lämna sin reträtt. Från denna personliga erfarenhet
        och undervisning från den store Evagrius 7 (
        <span className={styles.tooltip}>
          Evagrius 7
          <span className={styles.tooltiptext}>
            Evagrius Ponticus var <span className={styles.footnote} id="footnote1"></span> en
            kristen munk och teolog på 300-talet som också var en elev till Sankt Johannes
            Cassianus.
          </span>
        </span>
        ), som han mötte i Nitria, utvecklade han en fin lära om andlig kamp och de åtta
        grundläggande passionerna: girighet, sexuell lust, girighet, ilska, sorg, acedia,
        fåfänglighet och högmod 8 (
        <span className={styles.tooltip}>
          De åtta passionerna
          <span className={styles.tooltiptext}>
            De åtta passionerna är en lista över psykiska passioner som Evagrius Ponticus och Sankt
            Johannes Cassianus beskrev och analyserade. Dessa passioner var grunden för senare
            kristna författares läror om synd och andlig kamp.
          </span>
        </span>
        ).
      </p>
      {/* <sup className={styles.footnoteNumber}>
    <a href="#footnote1" id="ref1">
      1 Själens fullkomlighet uppnås genom Guds fullkomliga kärlek som flödar in i vårt hjärta genom den rena bönen, utan ord eller form. Gud blir all vår kärlek och längtan, vår sökning och vår själs allt.
    
    </a>
  </sup> */}
      <b>Fotnoter</b> <br />
    </div>
  )
}
