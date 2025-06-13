const preguntes = {
    tema0:[
        {
            "pregunta": "PostgreSQL és una base de dades.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
          },
          {       "correcta": 3
            "pregunta": "Quin NO podem considerar un sinònim?",
            "opcions": ["Taula", "Registre", "Dataset", "Fitxer", "Relació", "Classe"],
            "correcta": 1
          },
          {
            "pregunta": "Quin NO podem considerar un sinònim?",
            "opcions": ["Característica", "Individu", "Registre", "Tupla", "Fila", "Instància"],
            "correcta": 0
          },
          {
            "pregunta": "Quin NO podem considerar un sinònim?",
            "opcions": ["Característica", "Camp", "Atribut", "Registre", "Columna"],
            "correcta": 3
          },
          {
            "pregunta": "Quin NO és un dels subsistemes d'una organització?",
            "opcions": ["Producció", "Decisió", "Informació", "Econòmic"],
            "correcta": 3
          },
          {
            "pregunta": "A quin dels subsistemes d'una organització dona suport el subsistema d'informació?",
            "opcions": ["Només al de producció", "Només al de decisió", "A tots dos", "A cap dels dos"],
            "correcta": 2
          },
          {
            "pregunta": "Quin és un tipus de sistema d'informació operational?",
            "opcions": ["DW", "OLTP", "Machine Learning", "OLAP"],
            "correcta": 1
          },

 {
    "pregunta": "¿Quin tipus de sistema d'informació és orientat a temes?",
    "opcions": ["Operational", "Decisional"],
    "correcta": 1
  },
  {
    "pregunta": "¿Quin tipus de sistema d'informació té més usuaris?",
    "opcions": ["Decisional", "Operational"],
    "correcta": 1
  },
  {
    "pregunta": "¿Les consultes de quin tipus de sistema d'informació accedeixen, en general, més tuples?",
    "opcions": ["Operational", "Decisional"],
    "correcta": 1
  },
  {
    "pregunta": "¿Quin tipus de sistema d'informació utilitza menys fonts de dades?",
    "opcions": ["Decisional", "Operational"],
    "correcta": 1
  },
  {
    "pregunta": "¿Quin tipus de sistema d'informació accedeix dades atòmiques?",
    "opcions": ["Operational", "Decisional"],
    "correcta": 0
  },
  {
    "pregunta": "¿Quin tipus de sistema d'informació utilitza principalment dades històriques?",
    "opcions": ["Decisional", "Operational"],
    "correcta": 0
  },
          {
            "pregunta": "Un sistema d'informació decisional es considera...",
            "opcions": ["Read-only", "Write-only", "Read-write"],
            "correcta": 0
          },
  {
  "pregunta": "¿Quin tipus de sistema d'informació utilitza transaccions?",
  "opcions": ["Operational", "Decisional"],
  "correcta": 0
},
          {
            "pregunta": "Per a quin tipus de sistemes d'informació és rellevant el seu rendiment (performance)?",
            "opcions": ["Només operationals", "Només decisionals", "Tots dos", "Cap dels dos"],
            "correcta": 2
          },
          {
            "pregunta": "Quin NO és una de les tres fases principals del disseny de bases de dades?",
            "opcions": ["Físic", "Lògic", "Conceptual", "Captura de requisits"],
            "correcta": 3
          },
          {
            "pregunta": "El disseny dels sistemes decisionals es fa segons...",
            "opcions": ["Estats", "Funcionalitats", "Temes", "Problemes"],
            "correcta": 2
          },
          {
            "pregunta": "El disseny de la base de dades relacional per a un sistema d'informació segueix els mateixos tres passos, independentment que aquest sigui operacional o decisional.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
          {
            "pregunta": "En què es basa el disseny de la base de dades?",
            "opcions": ["Només amb les dades", "Només amb els processos", "En les dues coses", "En cap de les dues coses"],
            "correcta": 2
          },
          {
            "pregunta": "Què és el més rellevant pel disseny de la base de dades?",
            "opcions": ["Diagrama d'estats", "Casos d'ús", "Diagrames de seqüència", "Diagrama de classes"],
            "correcta": 3
          },
          {
            "pregunta": "Quin dels models ha de ser més expressiu?",
            "opcions": ["El conceptual", "El lògic", "Els dos igual", "No importa"],
            "correcta": 0
          },
{
"pregunta": "¿Quin tipus de sistema d'informació ha de gestionar un volum de dades més gran?",
"opcions": ["Decisional", "Operational"],
"correcta": 0
},
{
"pregunta": "La diferència en la fase de disseny conceptual d'un sistema operacional i un decisional és que l'operacional utilitza qualsevol estructura de classes i interrelacions, mentre que el decisional utilitza una molt concreta.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "La diferència en la fase de disseny lògic d'un sistema operacional i un decisional és que el decisional utilitza qualsevol estructura de taules i restriccions d'integritat, mentre que l'operacional utilitza una molt concreta.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Es fonamental que l'esquema lògic l'entenguin els usuaris del sistema.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "¿En quina dècada va aparèixer la primera versió de SQL?",
"opcions": ["70s", "80s", "90s", "00s"],
"correcta": 1
}
    ],
    tema1:[
        {
            "pregunta": "Quina NO és una alternativa de disseny?",
            "opcions": ["Definició de procediments", "Automàtica", "Manual", "Integració de vistes"],
            "correcta": 0
          },
          {
            "pregunta": "Quina és la fase de disseny més tardana?",
            "opcions": ["Control de rendiment (monitorització i pla d'accés)", "Afinació (Tuning)", "Quantificació de volums i freqüències", "Consideracions respecte a temps de resposta, concurrència, recuperació i seguretat"],
            "correcta": 0
          },
          {
            "pregunta": "Què NO és relativisme semàntic?",
            "opcions": ["Dues taules amb dades equivalents, però amb noms diferents", "Dos procediments emmagatzemats que fan el mateix, però en llenguatges de programació diferents", "Dues classes del mateix concepte, però amb noms diferents", "Dos atributs que representen el mateix valor, però en unitats de mesura diferents"],
            "correcta": 1
          },
          {
            "pregunta": "En quin cas NO s'haurien d'utilitzar valors nulls?",
            "opcions": ["Per a poder inserir una tupla amb un valor desconegut", "Per a afegir una columna a una taula que no està buida", "Per no haver de tractar casos especials en les funcions d'agregació", "Per a poder inserir una tupla amb un valor que mai pot tenir"],
            "correcta": 3
          },
          {
            "pregunta": "El valor nul és un dels del domini de l'atribut.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
          },
          {
            "pregunta": "Quina afirmació és certa?",
            "opcions": ["Un valor nul ocupa el mateix espai que qualsevol altre valor", "El valor nul dividit per zero dóna error", "Un nul igualat amb ell mateix ('NULL=NULL') avalua cert", "Cap de les anteriors afirmacions és certa"],
            "correcta": 3
          },
          {
            "pregunta": "Quina afirmació és certa?",
            "opcions": ["Una tupla que avalua el predicat d'un CHECK a 'desconegut' viola la restricció d'integritat", "Una tupla que avalua el predicat del WHERE a 'desconegut' surt al resultat de la consulta", "Una tupla que té un valor null a la clau forana viola la restricció d'integritat", "Cap de les anteriors afirmacions és certa"],
            "correcta": 3
          },
          {
            "pregunta": "Quina de les següents expressions dóna error en SQL estàndard?",
            "opcions": ["0/NULL", "NULL/0", "NULL/NULL", "Cap d'elles dóna error"],
            "correcta": 3
          },
          {
            "pregunta": "El GROUP BY genera un grup per a cada valor nul que troba.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
          },
          {
            "pregunta": "El UNIQUE permet tenir més d'un valor nul.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
          {
            "pregunta": "Quin NO és un tipus de Generalització/Especialització?",
            "opcions": ["Complete", "Imbalanced", "Disjoint", "Overlapping"],
            "correcta": 1
          },
          {
            "pregunta": "Quina de les tres implementacions de Generalització/Especialització NO genera mai nuls ni repeteix valors?",
            "opcions": ["Creació d'una única taula corresponent a la superclasse", "Creació d'una taula per cada classe (tant per a la superclasse com per a les subclasses)", "Creació d'una taula per cada subclasse, però no per a la superclasse", "Cap de les tres, totes poden generar problemes depenent del tipus de Generalització/Especialització"],
            "correcta": 1
          },
          {
            "pregunta": "Quin dels tres tipus de join NO genera mai valors nuls?",
            "opcions": ["Left outer join", "Full outer join", "Right outer join", "Tots tres en poden generar"],
            "correcta": 3
          },
          {
            "pregunta": "Quina NO és una raó per a crear un surrogate?",
            "opcions": ["No existeix una clau externa", "Els atributs de la clau externa canvien molt sovint", "La clau externa requereix massa espai", "Totes ho són"],
            "correcta": 3
          },
          {
            "pregunta": "Una SEQUENCE de PostgreSQL es pot utilitzar a taules diferents.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
{
"pregunta": "El mètode de disseny que utilitzem NO depèn de la mida de la companyia.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "El mètode de disseny que utilitzem és diferent si ja existeix una base de dades prèviament o no.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Per ajudar-nos a entendre millor les multiplicitats de les associacions, podem dibuixar algunes instàncies i les seves interrelacions.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "L'esquema lògic de la base de dades, només hauria de permetre instanciacions correctes de l'esquema conceptual.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Un atribut d'una classe, es pot representar també mitjançant una associació d'aquesta amb una segona classe.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Una especialització mai pot ser equivalent a una aggregació.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Parlem de relativisme semàntic només quan els dos (o més) esquemes representen exactament la mateixa realitat.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Parlem de relativisme semàntic només quan els dos (o més) esquemes contenen exactament el mateix nombre de taules.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Utilitzar un zero és equivalent a utilitzar un valor null, sempre que el primer no pertanyi al domini de l'atribut.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "El problema d'utilitzar valors null és que malbaratem espai.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Les taules de veritat de lògica binària són un subconjunt de les de lògica ternària, on simplement eliminem les files i columnes que fan referència a 'Desconegut'.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Si a l'entrada de l'operació algebraica d'unió hi ha dues files que només tenen valor null a tots els seus atributs, a la sortida tindré només una fila.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Si a l'entrada de l'operació algebraica d'intersecció hi ha dues files (una a cada taula) que només tenen valor null a tots els seus atributs, a la sortida no apareixerà aquesta fila.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Si a l'entrada de l'operació algebraica de diferència hi ha dues files (una a cada taula) que només tenen valor null a tots els seus atributs, a la sortida no apareixerà aquesta fila.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Si com a resultat d'una operació algebraica de projecció queda més d'una fila que només té valor null a tots els seus atributs, a la sortida apareixerà aquesta fila tantes vegades com la tingues a l'entrada.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Sempre puc implementar una diferència indistintament amb un 'NOT IN' o un 'NOT EXISTS'.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "En qualsevol dels tres tipus d'implementació de Generalització/Especializació posem un atribut discriminant.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "En cap dels tres tipus d'implementació de Generalització/Especializació posem claus foranes.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Quan implementem una Generalització/Especializació en un SGBD relacional, sempre cal fer una join per consultar juntes totes les dades de la superclasse.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Quan implementem una Generalització/Especializació en un SGBD relacional, sempre cal utilitzar una outer join per consultar juntes totes les dades de qualsevol de les subclasses.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Si una consulta té només dues taules al FROM, podem intercanviar LEFT per RIGHT i obtenir el mateix resultat, simplement canviant a la vegada l'ordre de les taules.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "La FULL OUTER JOIN de dues taules permet obtenir el mateix resultat que una LEFT OUTER JOIN o una RIGHT OUTER JOIN, simplement afegint un cert predicat al WHERE.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "La FULL OUTER JOIN de dues taules és equivalent a fer la unió d'una LEFT OUTER JOIN i una RIGHT OUTER JOIN.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Quan utilitzem la implementació de l'herència en PostgreSQL, quina de les següents afirmacions és certa?",
"opcions": ["Només podem inserir dades a la taula de la subclasse", "Només podem inserir dades a la taula de la superclasse", "Podem inserir dades indistintament a qualsevol de les dues taules i tindrem el mateix resultat", "Podem inserir dades a qualsevol de les dues taules, però no tindrem el mateix resultat"],
"correcta": 3
},
{
"pregunta": "Un atribut tipus SERIAL sempre tindrà valors consecutius tret que haguem esborrat alguna fila de la taula.",
"opcions": ["Cert", "Fals"],
"correcta": 1
}
    ],
    tema2:[
        {
            "pregunta": "Com podem implementar les restriccions d'integritat?",
            "opcions": [
              "Dins del CREATE TABLE",
              "Amb Persistent Stored Modules",
              "Amb JDBC",
              "Amb qualsevol de les anteriors"
            ],
            "correcta": 3
          },
          {
            "pregunta": "La clau primària d'una taula sempre genera automàticament un índex B+ associat?",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
          {
            "pregunta": "Un deadlock provocat per claus foranes entre dues taules es pot resoldre creant una tercera taula.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
          {
            "pregunta": "Quina és la millor opció per inserir tuples quan tenim un deadlock provocat per claus foranes entre dues taules?",
            "opcions": [
              "Diferir la comprovació de les claus foranes",
              "Esborrar una de les claus foranes i tornar a crear-la després",
              "Desactivar una de les claus foranes i tornar a activar-la després",
              "Cap de les anteriors"
            ],
            "correcta": 0
          },
          {
            "pregunta": "Què perdem si esborrem una taula que només té l'atribut identificador i una clau forana que l'apunta?",
            "opcions": [
              "La restricció d'integritat",
              "Una part del disseny",
              "La seva informació",
              "Les seves dades"
            ],
            "correcta": 0
          },
          {
            "pregunta": "Quin NO és un criteri per a triar la clau primària entre les alternatives que hi hagin?",
            "opcions": [
              "Frequència d'ús a les consultes",
              "Frequència de canvi",
              "Espai requerit",
              "Nombre de dependències funcionals"
            ],
            "correcta": 3
          },
          {
            "pregunta": "Quina de les següents afirmacions respecte a les associacions reflexives és falsa?",
            "opcions": [
              "Gairebé sempre tenen zeros",
              "Poden ser simètriques o no",
              "En podem trobar amb qualsevol multiplicitat",
              "Poden generar cadenes amb infinites instàncies"
            ],
            "correcta": 3
          },
          {
            "pregunta": "En una associació reflexiva simètrica, cal guardar a la base de dades les dues versions de la parella.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
          },
          {
            "pregunta": "La implementació d'una associació ternària genera...",
            "opcions": [
              "Una clau candidata",
              "Dues claus candidates",
              "Una o dues claus candidates",
              "Una, dues o tres claus candidates"
            ],
            "correcta": 3
          },
          {
            "pregunta": "Hi ha casos en que podem implementar una associació ternària amb simplement una clau forana (sense cap taula intermitja).",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
          },
          {
            "pregunta": "Una classe pot ser part de dues amb una agregació composta.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
          },
          {
            "pregunta": "En una agregació composta, tots dos costats poden tenir un zero.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
          },
          {
            "pregunta": "Podem encadenar tantes agregacions compostes com vulguem.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
          {
            "pregunta": "Una clau forana de dos atributs és equivalent a dues claus foranes d'un atribut cadascuna.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
          },
          {
            "pregunta": "A les associacions binàries, només les *-* poden tenir atributs propis.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
          },
          {
            "pregunta": "Si una associació binària té un atribut, el posem...",
            "opcions": [
              "A la taula del costat que té zero",
              "A la taula del costat que no té zero",
              "A la taula on posem la clau forana",
              "A qualsevol de les taules"
            ],
            "correcta": 2
          },
          {
            "pregunta": "Una associació dóna lloc realment a una classe associativa quan...",
            "opcions": [
              "Té molts atributs",
              "Correspon a una associació *-*",
              "És part d'una agregació composta",
              "Té identificador"
            ],
            "correcta": 3
          },
          {
            "pregunta": "Quan un atribut multivaluat pot tenir molts valors, és millor emmagatzemar-ho per columnes.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
          },
          {
            "pregunta": "Un atribut multivaluat emmagatzemat per columnes ocupa menys espai.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
          {
            "pregunta": "Un atribut multivaluat emmagatzemat per files és més difícil d'agregar.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
          },
          {
            "pregunta": "Un atribut multivaluat emmagatzemat per files permet un grau més alt de concurrència.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
{
"pregunta": "Les claus alternatives no tenen una clàusula pròpia a l'estàndard per a crear-les?",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "La millor manera per a resoldre un deadlock provocat per claus foranes entre dues taules, és sempre crear una de les taules sense clau forana i afegir-li a posteriori.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Què és menys important en una associació binària quan fem el disseny conceptual de la base de dades?",
"opcions": ["Si la multiplicitat màxima de cada costat", "Si la multiplicitat mínima de cada costat", "El nom de l'associació", "La direcció de navegació"],
"correcta": 3
},
{
"pregunta": "En quin tipus d'associació binària és totalment irrellevant si un dels costats admet zeros o no?",
"opcions": ["*-*", "1-*", "1-1", "Sempre és rellevant"],
"correcta": 0
},
{
"pregunta": "Quin tipus d'associació binària s'ha d'implementar sempre amb una taula pròpia (a més de les dues corresponents a les classes)?",
"opcions": ["*-*", "1-*", "1-1", "Totes les anteriors"],
"correcta": 0
},
{
"pregunta": "En quin tipus d'associació binària podem triar a quina taula posem la clau forana?",
"opcions": ["*-*", "1-*", "1-1", "Totes les anteriors"],
"correcta": 2
},
{
"pregunta": "Independentment de les multiplicitats d'una associació binària, sempre hi ha una opció per evitar que es puguin generar valors null.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "El millor és sempre triar la implementació d'una associació binària que no genera mai valors null.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "En el model relacional clàssic, en presència de quin tipus d'associació binària podem fusionar les dues taules en una?",
"opcions": ["*-*", "1-*", "1-1", "Totes les anteriors"],
"correcta": 2
},
{
"pregunta": "En una associació reflexiva simètrica, només pot trobar-se amb multiplicitat 1-1.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Per tal de garantir la simetria d'una associació binària, sempre haurem d'utilitzar triggers.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "La implementació d'una associació ternària en un SGBD relacional mai genera valors null.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Quan en l'esquema conceptual trobem una associació binària, independentment de la multiplicitat, sempre podem transformar-la en una classe que tingui el mateix nom que l'associació i dues associacions amb les classes originals.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Un atribut multivaluat emmagatzemat per files mai genera valors null.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Un atribut multivaluat emmagatzemat per columnes genera un únic accés a disc per recuperar tots els valors.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Sempre podem implementar totes les restriccions d'integritat corresponents a les multiplicitats '1' i '*' de les associacions binàries amb només claus primàries, foranes i 'NOT NULL'.",
"opcions": ["Cert", "Fals"],
"correcta": 1
}
    ],
    tema3: [
        {
            "pregunta": "Quina NO és una conseqüència de les anomalies que motiven la teoria de la normalització?",
            "opcions": ["Es generen joins innecessàries", "Un únic canvi pot provocar moltes modificacions a la base de dades", "Algunes dades es poden perdre sense voler", "No podem inserir una certa dada de forma independent"],
            "correcta": 0
          },
          {
            "pregunta": "Quin és el propòsit fonamental de la normalització?",
            "opcions": ["Cada relació correspon a una entitat", "Cada relació correspon a una funcionalitat", "Cada relació correspon a un concepte semàntic", "Cada relació correspon a una classe"],
            "correcta": 2
          },
          {
            "pregunta": "Una clau primària correspon a ... entre la instància i el valor",
            "opcions": ["Una funció exhaustiva", "Una funció injectiva", "Una funció bijectiva", "Cap de les anteriors"],
            "correcta": 1
          },
          {
            "pregunta": "Una clau primària i un altre atribut de la mateixa relació poden estar relacionats amb...",
            "opcions": ["Una funció exhaustiva", "Una funció injectiva", "Una funció bijectiva", "Qualsevol de les anteriors"],
            "correcta": 3
          },
          {
            "pregunta": "Una dependència funcional de X a Y ({X} → {Y}) vol dir que si sabem el valor de X, podem saber el de Y.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
          {
            "pregunta": "Una dependència funcional plena és una dependència funcional amb un únic atribut a la part dreta.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
          },
          {
            "pregunta": "Una relació està en 1NF si tots els seus atributs són atòmics (és a dir, indivisibles).",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
          {
            "pregunta": "Una relació està en 2NF si totes les dependències funcionals cap als atributs que no formen part d'una clau són plenes.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
          {
            "pregunta": "Una relació està en 3NF si cap dels seus atributs està a la part esquerra d'una dependència funcional.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
          },
          {
            "pregunta": "Quines formes normals tenen excepció?",
            "opcions": ["1NF i 2NF", "2NF i 3NF", "1NF i 3NF", "1NF, 2NF, 3NF"],
            "correcta": 1
          },
          {
            "pregunta": "BCNF no permet tenir claus alternatives.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
          },
          {
            "pregunta": "No tots els casos es poden normalitzar fins a BCNF.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
          },
          {
            "pregunta": "Quina NO és una de les regles d'Armstrong?",
            "opcions": ["Reflexivitat", "Augmentativitat", "Transitivitat", "Distributivitat", "Pseudo-transitivitat", "Adició", "Projectabilitat/Descomposició"],
            "correcta": 3
          },
          {
            "pregunta": "Què NO puc deduir a partir de la clausura de dependències funcionals?",
            "opcions": ["Si un esquema és correcte", "Tot el conjunt de claus candidates", "Si una dependència funcional és certa o no", "Si dos esquemes relacionals són equivalents"],
            "correcta": 0
          },
          {
            "pregunta": "Amb l'algorisme de normalització d'anàlisi es poden perdre dependències funcionals.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
          {
            "pregunta": "Donades les dependències funcionals, la normalització es pot automatitzar totalment.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
          {
            "pregunta": "Quina NO és una raó per a desnormalitzar?",
            "opcions": ["Quan les taules s’haurien d’ajuntar (join) molt sovint", "Quan la base de dades és molt petita","Quan la consistència de les dades es pot garantir d’alguna altra manera", "Quan no s’esperen canvis a les dades"],
            "correcta": 1
          },
          {
            "pregunta": "La BCNF es va definir perquè 2NF i 3NF no garanteixen l’absència d’anomalies.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
          {
            "pregunta": "La 4NF no permet tenir dependències multivaluades.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
          },
{
"pregunta": "Les anomalies a les que fa referència la normalització no afecten a les consultes.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "La normalització formalitza les propietats que ha de complir un disseny de bases de dades relacionals per a ser considerat de qualitat.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "El producte cartesià de dos conjunts és també un tipus de relació, però no funcional.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "El principal propòsit de les formes normals del model relacional és millorar el rendiment (és a dir, temps de resposta) del sistema.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Quin dels següents tipus de dades és atòmic?",
"opcions": ["JSON", "Matriu", "Tots dos ho són", "Cap dels dos ho és"],
"correcta": 3
},
{
"pregunta": "Si una relació que no està en 2FN i volem que ho estigui, el que hem de fer és dividir els seus atributs en subconjunts disjunts tant com calgui fins que ho estigui.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Si una relació que no està en 3FN i volem que ho estigui, el que hem de fer és dividir els seus atributs en subconjunts disjunts tant com calgui fins que ho estigui, però deixant en cada divisió com clau forana entre les parts el determinant que provoca la violacio de la forma normal.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "La normalització fins a BCNF és única.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "La clausura de dependències funcionals conté totes les dependències implícites al disseny.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Si executem l'algorisme de normalització d'anàlisi diverses vegades, podem obtenir resultats diferents.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "L'algorisme de normalització d'anàlisi NO garanteix que al final complim BCNF.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "L'algorisme de normalització d'anàlisi tracta de trobar la 'relació universal'.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Un esquema normalitzat és millor que un que no ho està, perquè el primer conté redundàncies que el segon no té.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Donada la seqüència de conjunts d'esquemes tals que compleixen una certa dependència funcional: E1NF, E2NF, E3NF, EBCNF i E4NF (per exemple, E3NF representa tots el esquemes que compleixen 3NF). Si considerem qualsevol parella EX-EY tal que EX apareix abans que EY en aquesta seqüència, podem afirmar que:",
"opcions": ["EX ∩ EY = ∅ (no hi ha cap esquema que compleixi X i Y alhora)", "EX ⊇ EY (tots els que compleixen Y, també compleixen X)", "EX ⊆ EY (tots els que compleixen X, també compleixen Y)", "Cap de les anteriors"],
"correcta": 1
},
{
"pregunta": "Qualsevol relació està en NF2.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Una dependència multivaluada és un tipus de dependència funcional.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Si una relació està en 4NF ho està també en BCNF.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Per normalitzar una relació que no estigui en 4FN, hem de fer el producte cartesià del atributs que l'estiguin violant.",
"opcions": ["Cert", "Fals"],
"correcta": 1
}   
    ],
    tema4: [
        {
            "pregunta": "Quin tipus de sistema té un ús més repetitiu?",
            "opcions": ["Operacional", "Decisional", "Els dos similar"],
            "correcta": 0
          },
          {
            "pregunta": "Quin tipus de sistema té més usuaris?",
            "opcions": ["Operacional", "Decisional", "Els dos similar"],
            "correcta": 0
          },
          {
            "pregunta": "En quin tipus de sistema les consultes accedeixen més tuples?",
            "opcions": ["Operacional", "Decisional", "Els dos similar"],
            "correcta": 1
          },
          {
            "pregunta": "Quin tipus de sistema té més dades històriques?",
            "opcions": ["Operacional", "Decisional", "Els dos similar"],
            "correcta": 1
          },
          {
            "pregunta": "Quin tipus de sistema té més operacions de modificació?",
            "opcions": ["Operacional", "Decisional", "Els dos similar"],
            "correcta": 0
          },
          {
            "pregunta": "Quin tipus de sistema utilitza transaccions?",
            "opcions": ["Operacional", "Decisional", "Els dos", "Cap dels dos"],
            "correcta": 0
          },
          {
            "pregunta": "Quin tipus de sistema té consultes més complexes?",
            "opcions": ["Operacional", "Decisional", "Els dos similar"],
            "correcta": 1
          },
          {
            "pregunta": "En quin tipus de sistema és més important el seu rendiment?",
            "opcions": ["Operacional", "Decisional", "En els dos"],
            "correcta": 2
          },
          {
            "pregunta": "Quin tipus de sistema emmagatzema més dades?",
            "opcions": ["Operacional", "Decisional", "Els dos similar"],
            "correcta": 1
          },
          {
            "pregunta": "Quina NO és una de les quatre característiques d'un magatzem de dades?",
            "opcions": ["No volàtil", "Integrat", "Orientat a temes", "Històric", "Transaccional"],
            "correcta": 4
          },
          {
            "pregunta": "Quin tipus de temps ha de gestionar un magatzem de dades?",
            "opcions": ["Temps de Transacció", "Temps de Validesa", "Els dos", "Cap dels dos"],
            "correcta": 2
          },
          {
            "pregunta": "Quina diferència hi ha entre una arquitectura d'un sol nivell i una de dos d'emmagatzemament de dades (data warehousing)?",
            "opcions": ["La d'un nivell no té cap base de dades", "La d'un nivell no té cap base de dades operacional", "La d'un nivell no té cap base de dades decisional", "Cap de les anteriors"],
            "correcta": 2
          },
          {
            "pregunta": "Quin tipus de tasca NO fa un procés ETL?",
            "opcions": ["Encapsular l'accés a les dades", "Carregar les dades a una base de dades", "Treure dades de les fonts", "Netejar les dades"],
            "correcta": 0
          },
          {
            "pregunta": "Les bases de dades decisionals admeten redundàncies.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
          {
            "pregunta": "Les bases de dades decisionals sempre actualitzen les dades en temps real.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
          },
          {
            "pregunta": "Les bases de dades decisionals NO necessiten control de concurrència.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
          {
            "pregunta": "Quina NO és una característica de les eines OLAP?",
            "opcions": ["Respon consultes ràpidament", "Serveix per a fer anàlisi de dades", "Permet compartir dades", "Gestiona dades multidimensionals", "Integra dades"],
            "correcta": 4
          },
          {
            "pregunta": "Quina NO és una operació de les eines OLAP?",
            "opcions": ["Roll-up", "Cube", "Drill-down", "Slice", "Dice"],
            "correcta": 1
          },
          {
            "pregunta": "Quina multiplicitat permet un esquema en estrella entre el fet i les dimensions?",
            "opcions": ["1-1", "1-*", "*-*", "Totes les anteriors"],
            "correcta": 1
          },
          {
            "pregunta": "Un esquema en estrella té un únic fet.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
          {
            "pregunta": "Quin tipus de SGBD utilitzen les eines ROLAP?",
            "opcions": ["Multidimensional", "NOSQL", "Relacional", "Cap"],
            "correcta": 2
          },
          {
            "pregunta": "Quantes claus primàries té la taula de fets d'un esquema en estrella?",
            "opcions": ["Tantes com dimensions", "Una", "Tantes com dimensions menys una", "Un número indeterminat"],
            "correcta": 1
          },
          {
            "pregunta": "Quants atributs té la clau primària de la taula de fets d'un esquema en estrella?",
            "opcions": ["Un", "Tants com dimensions menys una", "Tants com dimensions", "Un número indeterminat"],
            "correcta": 2
          },
          {
            "pregunta": "De quin tipus de valors faciliten el càlcul les clàusules 'GROUPING SETS'?",
            "opcions": ["Agregats", "Derivats", "Atòmics", "Marginals"],
            "correcta": 3
          },
{
"pregunta": "Quin tipus de sistema NO forma part del suport a la presa de decisions?",
"opcions": ["Machine Learning", "ETL", "Reporting", "OLAP", "ERP", "Data Warehouse"],
"correcta": 4
},
{
"pregunta": "Quina característica té un magatzem de dades?",
"opcions": ["Orientat a temes", "Orientat a la funcionalitat", "Orientat a decisions", "Orientat a transaccions"],
"correcta": 0
},
{
"pregunta": "Que un magatzem de dades sigui 'timevariant' vol dir que el software està en permanent evolució?",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Que un magatzem de dades sigui 'non-volatile' vol dir que mai s'esborra cap dada?",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Que un magatzem de dades sigui 'integrated' vol dir que els seus components de programari interactuen com si fos un sistema monolític?",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Una arquitectura d'un sol nivell d'emmagatzemament de dades (data warehousing), genera un magatzem de dades virtual.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "En una arquitectura de dos nivells d'emmagatzemament de dades (data warehousing), les dades es poden replicar com a màxim dues vegades.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Quina NO es considera una limitació dels fulls de càlcul per analitzar dades multidimensionals?",
"opcions": ["No gestiona metadades", "No permeten operacions d'àlgebra lineal", "Permet un número limitat de cel·les", "La posició de les dades limita certes operacions", "No gestiona jerarquies d'agregació"],
"correcta": 1
},
{
"pregunta": "Les eines OLAP guarden les dades en una estructura de dades física en forma de cub n-dimensional.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Un cub de dades és una metàfora per a una taula estadística.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Una taula relacional és equivalent a un cub de dades.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Les operacions de 'Slice&Dice' són seleccions sobre les dades.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Les operacions de 'Roll-up' i 'Drill-Down' indiquen agrupacions de dades.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Quin avantatge de la modelització de dades operacionals ens és útil també per modelitzar dades decisionals?",
"opcions": ["Facilita la comprensió del domini per part dels usuaris finals", "Resulta en sistemes molt eficients quan tenen canvis freqüents", "Redueix la quantitat de dades redundants", "Elimina la necessitat de modificar molts registres per un sol canvi"],
"correcta": 0
},
{
"pregunta": "Què busquem quan fem un esquema en estrella?",
"opcions": ["Posar el focus en un tema concret", "Simplificar l'esquema conceptual", "Tots dos", "Cap dels dos"],
"correcta": 2
},
{
"pregunta": "Un esquema en estrella no pot tenir més de quatre dimensions.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Quins nivells té una eina ROLAP?",
"opcions": ["Emmagatzemament i consulta", "Consulta i traducció", "Emmagatzemament i traducció", "Tots els anteriors"],
"correcta": 2
},
{
"pregunta": "Cada SGBD té la seva pròpia llibreria ROLAP.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "El principal problema de les eines ROLAP és que generen massa joins.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Els sistemes OLAP i OLTP implementats sobre SGBDs relacionals segueixen les mateixes tres fases de disseny.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Una Cube-Query fa tantes joins com dimensions tingui el cub més una.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Una Cube-Query sobre una eina ROLAP retorna una taula relacional.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Quin NO és un possible significat del valor null?",
"opcions": ["Desconegut", "Agregat", "Integrat", "Inexistent"],
"correcta": 2
},
{
"pregunta": "Qualsevol consulta que utilitzi ROLLUP i/o CUBE, sempre es pot rescriure utilitzant només GROUPING SETS.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Sempre que es pugui, és millor utilitzar ROLLUP i/o CUBE, en lloc de GROUPING SETS, perquè facilita l'optimització de la consulta.",
"opcions": ["Cert", "Fals"],
"correcta": 0
}
    ],
    tema5:[
        {
            "pregunta": "Els SGBDs relacionals permeten implementar qualsevol tipus de sistema d'informació de forma eficient.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
          },
          {
            "pregunta": "Els sistemes NOSQL són schemaless.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
          {
            "pregunta": "Els sistemes NOSQL garanteixen les restriccions d'integritat, tal com fan els sistemes relacionals.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
          },
          {
            "pregunta": "Quina NO és una conseqüència d'acceptar la variabilitat de l'esquema?",
            "opcions": ["Es guanya en flexibilitat", "Es perd semàntica", "Es perd el principi d'independència de dades", "Es guanya eficiència en les consultes"],
            "correcta": 3
          },
          {
            "pregunta": "La independència física, d'acord amb l'arquitectura ANSI/SPARC, garanteix que un canvi en l'esquema intern no afectarà a les taules de la base de dades.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
          {
            "pregunta": "La independència lògica, d'acord amb l'arquitectura ANSI/SPARC, garanteix que un canvi en les vistes no afectarà a les taules de la base de dades.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
          {
            "pregunta": "Un SGBD relacional pot contenir una base de dades que segueixi a la vegada el model relacional i corelacional.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
          {
            "pregunta": "Un atribut multivaluat guardat en un array generarà tants accessos a disc com elements tingui l'array.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
          },
          {
            "pregunta": "Un atribut multivaluat guardat en un array ocuparà més espai de disc que guardant-ho per files, però menys que fent-ho per columnes.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
          },
          {
            "pregunta": "En general, la funció per calcular agregats a partir d'un array, l'ha de definir l'usuari.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
          {
            "pregunta": "El nivell de concurrència que permet guardar un atribut multivaluat en un array és el mateix que si el guardem per columnes.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
          {
            "pregunta": "XML és un model de base de dades semi-estructurat.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
          {
            "pregunta": "Quan tenim documents JSON, els hem de guardar en un SGBD relacional utilitzant el tipus de dades corresponent.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
          },
          {
            "pregunta": "Podem tenir claus foranes en documents JSON.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
          },
{
"pregunta": "Impedance mismatch vol dir que el format de les dades al disc i a la memoria és diferent.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "El fet de niar unes instàncies dins d'unes altres trenca la 1NF.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "La independència lògica, d'acord amb l'arquitectura ANSI/SPARC, garanteix que un canvi en una taula no afectarà a cap vista de la base de dades, tret que el canvi afecti els atributs o taules utilitzats en la vista.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "En PostgreSQL, per canviar el valor d'una posició concreta d'un array, hem de reassignar tot l'array complet a la fila corresponent.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Un array en PostgreSQL té un nombre fix de valors, indicat en la seva declaració.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Un array en PostgreSQL pot contenir valors nulls.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "PostgreSQL disposa de funcions booleanes específiques que permeten definir fàcilment restriccions d'integritat sobre cadascun dels elements d'un array.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "La principal diferència entre un gestor de documents i un de parelles clau-valor és que el primer aprofita l'estructura dels documents per a permetre la definició d'índexs secundaris.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "JSON és un model de base de dades semi-estructurat.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Podem tenir claus primàries en documents JSON.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "El principal propòsit de niuar diferents instàncies en un mateix document JSON és evitar joins.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "En un gestor de documents, podem definir l'esquema que aquests han de seguir.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Un gestor de documents guarda sempre al disc exactament el mateix que posa a la memòria.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "El tipus JSONB de PostgreSQL preserva l'ordre de les claus al document.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "El tipus JSONB de PostgreSQL elimina claus duplicades al document.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Podem tenir un document JSON que compleixi la mateixa propietat de la BCNF (és a dir, cada determinant determina per ell mateix tots els atributs del document, ja sigui directa o indirectament).",
"opcions": ["Cert", "Fals"],
"correcta": 0
}
    ],
    tema6: [
    {
      "pregunta": "Quin NO és un dels quatre nivells de l’arquitectura ANSI/SPARC?",
      "opcions": ["Conceptual", "Internal", "External", "Lògic"],
      "correcta": 3
    },
    {
      "pregunta": "Quina de les següents possibilitats no existeix en els SGBDs relacionals?",
      "opcions": ["Taules materialitzades", "Vistes materialitzades", "Taules no materialitzades", "Vistes no materialitzades"],
      "correcta": 2
    },
    {
      "pregunta": "Quina NO és una utilitat de les vistes?",
      "opcions": ["Comprovar restriccions d’integritat", "Simplificar el manteniment", "Amagar dades", "Simplificar esquemes complexos", "Simplificar consultes"],
      "correcta": 1
    },
    {
      "pregunta": "Quin NO és un dels quatre problemes associats a les vistes?",
      "opcions": ["View updating", "Query rewriting", "View expansion", "Update through views", "View materialization"],
      "correcta": 4
    },
    {
      "pregunta": "Una vista sempre es pot expandir.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
    },
    {
      "pregunta": "Mai expandim vistes materialitzades.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
    },
    {
      "pregunta": "No podem expandir vistes dins d’una altra vista.",
      "opcions": ["Cert", "Fals"],
      "correcta": 1
    },
    {
      "pregunta": "Els SGBDs sempre permeten modificar una taula a través d’una vista que no conté cap altra taula.",
      "opcions": ["Cert", "Fals"],
      "correcta": 1
    },
    {
      "pregunta": "Els SGBDs sempre permeten modificar una taula a través d’una vista que tingui un agregat.",
      "opcions": ["Cert", "Fals"],
      "correcta": 1
    },
    {
      "pregunta": "Els SGBDs sempre permeten modificar una taula a través d’una vista que faci una join.",
      "opcions": ["Cert", "Fals"],
      "correcta": 1
    },
    {
      "pregunta": "Quan NO podem propagar els canvis d’una taula a les seves vistes materialitzades?",
      "opcions": ["Next <date>", "On commit", "On statement", "On demand", "Podem propagar-los de totes les maneres anteriors"],
      "correcta": 4
    },
    {
      "pregunta": "Només cal crear un log per fer manteniment de vistes incremental.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
    },
    {
      "pregunta": "Sempre podem utilitzar una vista materialitzada per implementar una asserció.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
    },
    {
      "pregunta": "Per implementar una asserció amb una vista materialitzada, cal que la vista sempre estigui buida.",
      "opcions": ["Cert", "Fals"],
      "correcta": 1
    },
    {
      "pregunta": "Quin NO és un dels requisits per a poder rescriure una consulta en termes d’una vista materialitzada?",
      "opcions": ["Les taules utilitzades a la consulta han de ser un subconjunt de les que hi ha a la vista", "El nivell d’agregació de la consulta ha de ser tan alt o més que el de la vista", "El predicat de la consulta ha d’estar subsumit pel de la vista", "Els agregats de la vista han de coincidir o ser calculables a partir dels de la vista"],
      "correcta":  0
    },
    {
      "pregunta": "Si, en general, utilitzar vistes materialitzades millora el rendiment de les consultes, NO és perquè ...",
      "opcions": ["tenen menys atributs", "generen menys accessos a disc", "generen menys contenció", "ocupen menys espai", "tenen menys files"],
      "correcta": 2
    },
    {
      "pregunta": "Si el nostre SGBD no proporciona vistes materialitzades, podríem implementar-les nosaltres mateixos amb disparadors.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
    },
    {
      "pregunta": "Quan es varen introduir les vistes materialitzades a l’estàndard SQL?",
      "opcions": ["Al seu inici", "Al 1992", "Al 2023", "Encara no ho estan"],
      "correcta": 3
    },
    {
      "pregunta": "Només tenint en compte les diferents possibilitats d’agregació, el nombre de potencials vistes materialitzades que podem crear ja és exponencial.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
    },
    {
      "pregunta": "Quina NO és una bona heurística per a triar quines vistes materialitzar en un esquema multidimensional?",
      "opcions": ["Materialitzar els nivells d’agregació més baixos", "Materialitzar els nivells d’agregació més alts", "Materialitzar una vista si coincideix amb una consulta crítica", "No materialitzar una vista si ja s’ha materialitzat una altra que és un ancestre proper en la jerarquia d’agregació", "Totes les heurístiques anteriors són bones"],
      "correcta": 4
    },
    {
      "pregunta": "Hem de considerar com a vista candidata a materialitzar la que conté un “GROUP BY” que és la intersecció dels “GROUP BY” de dues consultes crítiques.",
      "opcions": ["Cert", "Fals"],
      "correcta": 1
    },
{
"pregunta": "En quin nivell de l'arquitectura ANSI/SPARC trobem més esquemes?",
"opcions": ["Internal", "Conceptual", "External", "Trobem a tots el mateix nombre"],
"correcta": 2
},
{
"pregunta": "La consulta que defineix una vista sempre està guardada al catàleg de la base de dades.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Quin és un exemple paradigmàtic de vistes materialitzades?",
"opcions": ["DW", "NOSQL", "Tots dos", "Cap dels dos"],
"correcta": 0
},
{
"pregunta": "Quin problema aplica només a vistes no-materialitzades?",
"opcions": ["Update through views", "Query rewriting", "View expansion", "View updating", "Tots quatre problemes apliquen a qualsevol tipus de vista"],
"correcta": 2
},
{
"pregunta": "Quan es dóna el problema de View expansion?",
"opcions": ["Quan modifiquem una taula", "Quan consultem una vista", "Quan modifiquem una vista", "Quan consultem una taula"],
"correcta": 1
},
{
"pregunta": "Quan es dóna el problema de Query rewriting?",
"opcions": ["Quan consultem una taula", "Quan modifiquem una vista", "Quan modifiquem una taula", "Quan consultem una vista"],
"correcta": 0
},
{
"pregunta": "Quan es dóna el problema de View updating?",
"opcions": ["Quan modifiquem una vista", "Quan modifiquem una taula", "Quan consultem una vista", "Quan consultem una taula"],
"correcta": 1
},
{
"pregunta": "Quan es dóna el problema de Update through views?",
"opcions": ["Quan consultem una taula", "Quan consultem una vista", "Quan modifiquem una vista", "Quan modifiquem una taula"],
"correcta": 2
},
{
"pregunta": "Quants dels tres problemes teòrics que tenen associats a les vistes materialitzades podem veure explícitament reflectits a la seva sentència de creació d'Oracle?",
"opcions": ["Cap", "Un", "Dos", "Tres"],
"correcta": 3
},
{
"pregunta": "View Expansion consisteix simplement en substituir el nom de la vista que apareix a la consulta per la corresponent definició que podem trobar al catàleg de la base de dades.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Update Through Views consisteix a utilitzar les vistes en comptes dels índexs per accedir més ràpid a les dades quan les hem de modificar.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Els SGBDs permeten modificar una taula a través d'una vista independentment del predicat lògic que es posi al WHERE de la definició de la vista, sempre que aquest no contingui cap subconsulta.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Els SGBDs permeten modificar una taula a través d'una vista definida sobre una altra vista si les dues definicions de les vistes compleixen, per separat, les condicions necessàries.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "View Updating consisteix a propagar els canvis que es produeixen a una taula a totes les vistes materialitzades definides sobre ella.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Hem de crear un únic log a cada taula que tingui vistes materialitzar a mantenir de forma incremental, independentment del seu nombre.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Fer el manteniment d'una vista materialitzada de forma incremental sempre és el més eficient.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Sempre es pot fer el manteniment d'una vista materialitzada de forma incremental si el log conté les dades adequades.",
"opcions": ["Cert", "Fals"],
"correcta": 0
},
{
"pregunta": "Query Rewriting consisteix en que l'usuari rescrigui la seva consulta aprofitant les vistes materialitzades existents, en comptes de les taules.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "En general, els SGBDs fan una cerca exhaustiva de totes les possibilitats de rescriptura d'una consulta emprant les vistes materialitzades que s'hagin definit amb anterioritat.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Per decidir si val la pena materialitzar o no una certa consulta, cal tenir en compte...",
"opcions": ["la freqüència amb que s'executa", "l'espai que ocuparà el seu resultat", "la freqüència amb que es modifiquen les taules que accedeix", "totes les anteriors"],
"correcta": 3
},
{
"pregunta": "Les vistes materialitzades que podem materialitzar ve limitat per...",
"opcions": ["l'espai disponible en el disc", "el temps disponible per fer el seu manteniment", "totes les anteriors", "cap de les anteriors"],
"correcta": 2
},
{
"pregunta": "Utilitzant un algorisme greedy, sempre tindrem el conjunt òptim de vistes materialitzades.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Utilitzant un algorisme greedy, mai tindrem el conjunt òptim de vistes materialitzades.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Si hem utilitzat un algorisme greedy per seleccionar-les, ja no hem de canviar mai el conjunt de vistes que hem decidit materialitzar.",
"opcions": ["Cert", "Fals"],
"correcta": 1
},
{
"pregunta": "Podem estimar la cardinalitat del resultat d'una consulta amb agregats sobre la taula T(a1, ..., an) com...",
"opcions": ["| T |", "dist(a1) · ... · dist(an)", "min(| T |, dist(a1) · ... · dist(an))", "max(| T |, dist(a1) · ... · dist(an))"],
"correcta": 2
}
    ],
    tema7: [
      {
          "pregunta": "El disseny físic tracta d'adaptar l'esquema lògic a les particularitats d'un SGBD i una càrrega de treball concretes.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Quina NO és una de les tasques bàsiques del disseny físic?",
          "opcions": ["Reconsiderar els requisits", "Escollir les estructures de dades", "Adaptar l'esquema lògic al SGBD", "Reconsiderar l'esquema relacional", "Testejar el rendiment"],
          "correcta": 0
      },
      {
          "pregunta": "Quin NO és un criteri per prendre decisions sobre el disseny físic?",
          "opcions": ["Benefici econòmic", "Disponibilitat", "Escalabilitat", "Simplicitat de l'administració", "Millora de rendiment", "Integritat"],
          "correcta": 0
      },
      {
          "pregunta": "Quina NO és una dificultat en el disseny físic?",
          "opcions": ["La xarxa", "Els usuaris", "La normalització", "Les imperfeccions del SGBD", "Tenir recursos limitats", "L’existència de criteris contraposats"],
          "correcta": 2
      },
      {
          "pregunta": "Quina afirmació NO és certa respecte al catàleg?",
          "opcions": [
              "Conté la informació del sistema que el propi SGBD necessita per funcionar",
              "La seva estructura i continguts difereixen d'un SGBD a un altre, tot i que existeix un conjunt de vistes standard",
              "Conté totes les modificacions (insercions, modificacions i esborrats) realitzades des de l'última còpia de seguretat",
              "És útil per gestionar i afinar el funcionament de la base de dades"
          ],
          "correcta": 2
      },
      {
          "pregunta": "Quin dels següents continguts del catàleg NO considerem estàtic?",
          "opcions": [
              "Informació de les vistes, com ara el seu nom, o la consulta associada",
              "Informació dels usuaris, com ara els intents de connexió",
              "Informació de les taules, com ara el seu nom, atributs, o restriccions d'integritat",
              "Informació dels índexs, com ara el seu nom, tipus, o atributs implicats",
              "Paràmetres del sistema, com ara la grandària del pool de buffers o la grandària de pàgina"
          ],
          "correcta": 1
      },
      {
          "pregunta": "Quin dels següents continguts del catàleg NO considerem dinàmic?",
          "opcions": [
              "Informació de les taules, com ara la seva cardinalitat o el nombre de blocs",
              "Informació dels usuaris, com ara els intents de connexió",
              "Informació de les vistes, com ara si estan materialitzades o es poden expandir",
              "Informació dels índexs, com ara la seva alçada o el rang de valors"
          ],
          "correcta": 2
      },
      {
          "pregunta": "L'estàndard SQL'03 defineix quines han de ser les taules del catàleg de qualsevol SGBD.",
          "opcions": ["Cert", "False"],
          "correcta": 1
      },
      {
          "pregunta": "L'estàndard SQL'03 distingeix entre la informació del catàleg necessària per l'administrador i la necessària pels usuaris de la base de dades.",
          "opcions": ["Cert", "False"],
          "correcta": 0
      },
      {
        "pregunta": "Les estructures d'accés (és a dir, els índexs) són ... respecte a les taules.",
        "opcions": ["Complementàries", "Redundants"],
        "correcta": 0
      },
      {
          "pregunta": "Un índex sempre té menys atributs que la taula.",
          "opcions": ["Cert", "False"],
          "correcta": 1
      },
      {
          "pregunta": "Sempre que posem un índex, la taula queda ordenada pels atributs indexats.",
          "opcions": ["Cert", "False"],
          "correcta": 1
      },
      {
          "pregunta": "Què NO podem trobar en una entrada d'un índex?",
          "opcions": ["El registre sencer", "Un mapa de bits", "Una adreça física del registre", "Una funció de hash", "Una llista d'adreces físiques de registres"],
          "correcta": 3
      },
      {
          "pregunta": "Els valors null sempre es troben a l'índex.",
          "opcions": ["Cert", "False"],
          "correcta": 1
      },
      {
          "pregunta": "Els blocs de la taula contenen apuntadors als registres.",
          "opcions": ["Cert", "False"],
          "correcta": 0
      },
      {
          "pregunta": "Els blocs de la taula contenen metadades.",
          "opcions": ["Cert", "False"],
          "correcta": 0
      },
      {
          "pregunta": "Tots el registres continguts al mateix bloc tenen la mateixa longitud.",
          "opcions": ["Cert", "False"],
          "correcta": 1
      },
      {
          "pregunta": "Les entrades que trobem a les fulles d'un índex tipus arbre sempre estan ordenades.",
          "opcions": ["Cert", "False"],
          "correcta": 0
      },
      {
          "pregunta": "Tots els nodes d'un índex tipus arbre estan normalment plens al 100%.",
          "opcions": ["Cert", "False"],
          "correcta": 1
      },
      {
          "pregunta": "Un índex tipus arbre incrementa la grandària de la taula.",
          "opcions": ["Cert", "False"],
          "correcta": 1
      },
      {
          "pregunta": "Les entrades que trobem als buckets d'un índex tipus hash sempre estan ordenades.",
          "opcions": ["Cert", "False"],
          "correcta": 1
      },
      {
          "pregunta": "Tots els buckets d'un índex tipus hash estan normalment plens al 100%.",
          "opcions": ["Cert", "False"],
          "correcta": 1
      },
      {
          "pregunta": "Els buckets d'un índex tipus hash estan normalment més plens que els nodes d'un tipus arbre.",
          "opcions": ["Cert", "False"],
          "correcta": 0
      },
      {
        "pregunta": "Un índex tipus hash incrementa la grandària de la taula.",
        "opcions": ["Cert", "False"],
        "correcta": 1
      },
      {
          "pregunta": "Un índex tipus cluster manté ordenades les dades de la taula segons l'atribut d'indexació.",
          "opcions": ["Cert", "False"],
          "correcta": 0
      },
      {
          "pregunta": "Un índex tipus cluster incrementa la grandària de la taula.",
          "opcions": ["Cert", "False"],
          "correcta": 0
      },
      {
          "pregunta": "| T | representa el nombre de ... de la taula T.",
          "opcions": ["Atributs", "Bytes", "Blocs", "Files"],
          "correcta": 3
      },
      {
          "pregunta": "Quin és típicament l'ordre (normalment representat per la lletra “d”) d'un índex tipus arbre?",
          "opcions": ["Menor que 10", "Entre 10 i 50", "Entre 50 i 100", "Major que 100"],
          "correcta": 3
      },
      {
          "pregunta": "Els índexs ocupen sempre menys espai que la taula i conseqüentment mai generaran problemes d’espai.",
          "opcions": ["Cert", "False"],
          "correcta": 1
      },
      {
          "pregunta": "Un índex tipus arbre sempre ocupa menys espai que l'índex cluster corresponent.",
          "opcions": ["Cert", "False"],
          "correcta": 0
      },
      {
          "pregunta": "El nombre de blocs ocupats per qualsevol estructura de dades, sempre ha de ser un nombre enter.",
          "opcions": ["Cert", "False"],
          "correcta": 0
      },
      {
          "pregunta": "El cost d'utilitzar un índex sempre és més petit que el de llegir la taula sencera.",
          "opcions": ["Cert", "False"],
          "correcta": 1
      },
      {
          "pregunta": "Per estimar el cost d'accedir a una certa estructura, comptem només el cost corresponent a accedir els blocs de la taula.",
          "opcions": ["Cert", "False"],
          "correcta": 1
      },
      {
          "pregunta": "Per estimar el cost d'accedir a una certa estructura, comptem només el cost corresponent a accedir els blocs de disc.",
          "opcions": ["Cert", "False"],
          "correcta": 0
      },
      {
          "pregunta": "El cost d'accés estimat per a una estructura d'accés, sempre ha de ser un nombre enter.",
          "opcions": ["Cert", "False"],
          "correcta": 1
      },
      {
          "pregunta": "Els índexs tipus arbre i hash són molt útils quan l'atribut indexat té molts repetits.",
          "opcions": ["Cert", "False"],
          "correcta": 1
      },
      {
          "pregunta": "Posar un índex sempre és útil, independentment del tipus de consulta.",
          "opcions": ["Cert", "False"],
          "correcta": 1
      },
      {
          "pregunta": "Posar índexs mai empitjorarà el temps de resposta del sistema.",
          "opcions": ["Cert", "False"],
          "correcta": 1
      },
      {
          "pregunta": "El millor és sempre definir tants índexs com puguem, però sense arribar a omplir el disc del tot.",
          "opcions": ["Cert", "False"],
          "correcta": 1
      },
      {
          "pregunta": "Els índexs tipus arbre i hash són molt útils en consultes amb condicions poc selectives.",
          "opcions": ["Cert", "False"],
          "correcta": 1
      },
      {
          "pregunta": "Els índexs tipus hash només són útils si tinc una condició de selecció per igualtat.",
          "opcions": ["Cert", "False"],
          "correcta": 0
      },
      {
          "pregunta": "Els índexs són útils a qualsevol taula.",
          "opcions": ["Cert", "False"],
          "correcta": 1
      },
      {
          "pregunta": "NO haig de definir un índex tipus arbre o hash si l'atribut té pocs valors.",
          "opcions": ["Cert", "False"],
          "correcta": 0
      },
      {
          "pregunta": "Index-only query answering vol dir que el SGBD no accedirà a la taula corresponent per a resoldre la consulta.",
          "opcions": ["Cert", "False"],
          "correcta": 0
      }
    ],

    tema8: [
      {
          "pregunta": "En quina posició se situa l'optimització dins del procés de processament de consultes que du a terme el gestor de consultes?",
          "opcions": ["Primera", "Segona", "Tercera", "Ultima"],
          "correcta": 3
      },
      {
          "pregunta": "L’optimització de consultes tradueix d'un llenguatge declaratiu a un de procedural.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Quina NO és una de les tres fases de l'optimització de consultes?",
          "opcions": ["Sintàctica", "Semàntica", "Física", "Lògica"],
          "correcta": 3
      },
      {
          "pregunta": "L’optimització escaneja les taules involucrades en la consulta per a calcular les estadístiques que necessita.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "L’optimitzador de consultes sempre troba el millor pla d’accés.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "L’optimitzador prioritza acabar ràpid la tasca d’optimizació per davant de trobar el millor pla d’accés.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "L’optimització semàntica canvia el llenguatge de representació de la consulta.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "L’optimització semàntica considera només la pròpia consulta i les lleis de la lògica.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "L’optimització semàntica pot fer que el cost d’execució d’una consulta sigui zero.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "L’optimització semàntica pot fer més curta la clàusula WHERE.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "L’optimització semàntica pot fer més llarga la clàusula WHERE.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
        "pregunta": "L’optimització sintàctica canvia el llenguatge de representació de la consulta.",
        "opcions": ["Cert", "Fals"],
        "correcta": 0
    },
    {
        "pregunta": "L’optimització sintàctica resol totes les vistes no-materialitzades que hi hagi a la consulta.",
        "opcions": ["Cert", "Fals"],
        "correcta": 0
    },
    {
        "pregunta": "L’optimització sintàctica canvia el cost de la consulta.",
        "opcions": ["Cert", "Fals"],
        "correcta": 0
    },
    {
        "pregunta": "Les dues regles heurístiques utilitzades a l’optimització sintàctica sempre milloren el cost de la consulta.",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
    },
    {
        "pregunta": "Quina heurística utilitza l’optimització sintàctica?",
        "opcions": [
            "Baixar les projeccions i seleccions tant com sigui possible",
            "Reduir el nombre d’operacions tant com sigui possible",
            "Pujar les projeccions i seleccions tant com sigui possible",
            "Reduir el cost de la consulta tant com sigui possible"
        ],
        "correcta": 0
    },
    {
        "pregunta": "L’optimització sintàctica sempre redueix el nombre d’operacions a l’arbre sintàctic.",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
    },
    {
        "pregunta": "L’optimització sintàctica mai deixa una projecció just a sobre d’una fulla de l’arbre sintàctic.",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
    },
    {
        "pregunta": "Després de l’optimització sintàctica poden quedar dos subgrafs iguals a l’arbre sintàctic.",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
    },
    {
        "pregunta": "El resultat de l’optimització sintàctica sempre és un arbre.",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
    },
    {
        "pregunta": "L’optimització sintàctica mai elimina operacions de l’arbre sintàctic.",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
    },
    {
        "pregunta": "Si una selecció té un predicat complex, sempre la podem dividir en dues seleccions consecutives.",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
    },
    {
        "pregunta": "La selecció sempre commuta (sense posar ni treure res) amb la join.",
        "opcions": ["Cert", "Fals"],
        "correcta": 0
    },
    {
        "pregunta": "La selecció sempre commuta (sense posar ni treure res) amb qualsevol operació de conjunts (és a dir, unió, intersecció i diferència).",
        "opcions": ["Cert", "Fals"],
        "correcta": 0
    },
    {
        "pregunta": "La selecció sempre commuta (sense posar ni treure res) amb la projecció.",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
    },
    {
        "pregunta": "La projecció sempre commuta (sense posar ni treure res) amb la join.",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
    },
    {
        "pregunta": "La projecció sempre commuta (sense posar ni treure res) amb qualsevol operació de conjunts (és a dir, unió, intersecció i diferència).",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
    },
    {
        "pregunta": "Quines propietats compleix la join respecte a ella mateixa?",
        "opcions": ["Commutativa", "Associativa", "Cap de les dues", "Totes dues"],
        "correcta": 3
    },
    {
        "pregunta": "Quin nom NO rep l’algorisme que segueix l’execution manager per obtenir el resultat d’una consulta?",
        "opcions": [
            "Pla d’accés de la consulta",
            "Pla d’execució de la consulta",
            "Arbre de procés de la consulta",
            "Arbre d’execució de la consulta"
        ],
        "correcta": 3
    },
    {
        "pregunta": "Què NO considera l’optimització física per a generar el pla d’execució d’una consulta?",
        "opcions": [
            "Les estructures físiques disponibles",
            "Els camins d’accés que permet el predicat de la consulta",
            "Els algorismes que té disponibles el SGBD",
            "Les propietats ACID"
        ],
        "correcta": 3
    },
    {
        "pregunta": "Quina operació deixa de ser explícita en l’arbre de procés?",
        "opcions": ["Join", "Projecció", "Unió", "Selecció"],
        "correcta": 1
    },
    {
        "pregunta": "L’arbre de procés mai té menys operacions que l’arbre sintàctic un cop optimitzat.",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
    },
    {
        "pregunta": "L’arbre de procés mai té més operacions que l’arbre sintàctic un cop optimitzat.",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
    },
    {
        "pregunta": "Què NO genera alternatives en l’espai de cerca de l’optimització basada en costos?",
        "opcions": [
            "Les estructures d’accés disponibles",
            "Els algorismes existents per cada operació",
            "L’ordre de les joins",
            "La utilització de la cache"
        ],
        "correcta": 3
    },
    {
        "pregunta": "Quines propietats de la join utilitza l’optimització física per a generar possibles alternatives d’execució?",
        "opcions": [
            "Associativitat i transitivitat",
            "Commutativitat i transitivitat",
            "Commutativitat i associativitat",
            "Totes tres propietats"
        ],
        "correcta": 2
    },
    {
        "pregunta": "L’encarrilament (pipelining) és una tècnica d’execució de consultes que evita la materialització de resultats intermitjos.",
        "opcions": ["Cert", "Fals"],
        "correcta": 0
    },
    {
        "pregunta": "L’encarrilament (pipelining) es pot fer servir només quan tenim un esquema en estrella.",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
    },
    {
        "pregunta": "Quan fem encarrilament (pipelining), l’ordre de les joins és ...",
        "opcions": [
            "Decreixent (de més selectiva a menys selectiva)",
            "Creixent (de menys selectiva a més selectiva)",
            "Irrellevant",
            "El mateix que l’ordre dels atributs a la clau primària de la taula de fets"
        ],
        "correcta": 0
    },
    {
        "pregunta": "El cost d’una operació de l’arbre de procés és el cost de llegir l’entrada i d’executar la pròpia operació.",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
    },
    {
        "pregunta": "El cost d’una consulta és la suma dels costos de totes les operacions del seu arbre de procés.",
        "opcions": ["Cert", "Fals"],
        "correcta": 0
    }
    ],

    tema9: [
      {
          "pregunta": "L’optimitzador calcula el cost de totes les alternatives d’execució que genera.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "El factor de selecció de qualsevol operació és el percentatge de files al resultat respecte a mínim de files que podem tenir.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Un factor de selecció “1” és el més selectiu que pot haver.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "La cardinalitat màxima d’una join coincideix amb la del producte cartesià.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "El càlcul del factor de selecció de la UNION és el mateix que el de la UNION ALL.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "El càlcul del factor de selecció de la join és el mateix que el de la intersecció.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Les cardinalitats dels resultats intermitjos es calculen top-down a l’arbre de procés.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "El SGBD manté sempre actualitzades les estadístiques de les taules.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "El SGBD típicament assumeix una distribució normal dels valors de cada atribut.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "El SGBD típicament assumeix la independència estadística de tots els atributs de les taules.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "El SGBD sempre calcula totes les estadístiques de la base de dades de cop.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "El SGBD pot calcular les estadístiques de la base de dades només a partir d’un mostreig.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "El factor de selecció d’un predicat mai pot ser “0”.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "El factor de selecció d’un predicat mai pot ser “1”.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "El factor de selecció d’una clàusula “IN” és exactament el mateix que el d’un predicat complex amb la disjunció de les igualtats del mateix atribut amb cadascun dels valors al conjunt de la “IN”.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Què NO afecta al factor de selecció d’una join?",
          "opcions": ["Que un dels atributs sigui clau primària", "Que un dels atributs accepti valor nulls", "Que un dels atributs sigui clau forana", "Que un dels atributs tingui un check"],
          "correcta": 3
      },
      {
          "pregunta": "El factor de selecció de la θ-join amb “<>” és el mateix que el del producte cartesià.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "La longitud d’un registre és la suma de les longituds dels seus atributs.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Estimem el nombre de registres a un bloc com la grandària del bloc dividit per la longitud del registre arrodonit per excés.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Estimem el nombre de blocs d’una taula com la cardinalitat de la taula dividida pel nombre de registres per bloc arrodonit per excés.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
        "pregunta": "El primer pas per a processar una selecció d’un predicat complex és posar-ho en forma normal disjuntiva.",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
      },
      {
          "pregunta": "Si després de posar el predicat lògic d’una selecció en forma normal conjuntiva una de les condicions dins d’un parèntesi no permet utilitzar cap índex, llavors no podem utilitzar-ne cap tampoc a les altres condicions dins del parèntesi.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Si després de posar el predicat lògic d’una selecció en forma normal conjuntiva un dels parèntesi queda negat, simplement l’eliminem del procés.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "La resolució de predicats de selecció amb operacions de llistes de RID, fa que no haguem de fer mai cap comprovació sobre les dades.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "La resolució de predicats de selecció amb operacions de llistes de RID, fa que no haguem de fer mai un table scan.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Els índexs tipus arbre serveixen per avaluar clàusules lògiques amb qualsevol tipus de comparació.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Els índexs tipus hash serveixen per avaluar clàusules lògiques només amb comparacions per igualtat.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Un bitmap guarda un bit per cada fila de la taula.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Un bitmap guarda una llista de bits per cada valor diferent de la taula.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Les operacions amb bitmaps són equivalents a les operacions de llistes de RIDs.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Els índexs tipus bitmaps serveixen per avaluar clàusules lògiques amb qualsevol tipus de comparació.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Un índex tipus arbre multi-atribut no necessàriament utilitza més espai que si indexem només el primer dels seus atributs.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Un índex tipus arbre multi-atribut permet resoldre qualsevol selecció amb un predicat lògic que involucri tots els atributs indexats.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "L’ordre dels atributs en un índex tipus arbre multi-atribut és irrellevant per a les consultes que es puguin fer amb ell.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "L’operació d’ordenació pot aparèixer en l’arbre de procés de consultes que NO tinguin ORDER BY.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Un índex tipus arbre es pot utilitzar per ordenar les dades.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Un índex tipus hash es pot utilitzar per ordenar les dades.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Quin algorisme d’ordenació a memòria utilitza el External Merge Sort?",
          "opcions": ["Bubble Sort", "Quick Sort", "Cap", "Es irrellevant"],
          "correcta": 3
      },
      {
          "pregunta": "El External Merge Sort requereix d’una zona d’espai temporal per a realitzar l’ordenació, de l’ordre de la grandària de la pròpia taula.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "El nombre de vegades que l’algorisme External Merge Sort ha de llegir i escriure la taula és logarítmic respecte a la grandària de la pròpia taula.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "L’operació de projecció sense eliminació de repetits no té cap cost associat quan la consulta té alguna altra operació.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "L’eliminació de repetits considera les mateixes alternatives d’algorismes que l’ordenació.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      }
    ],
  
    tema10: [
        {
            "pregunta": "Una estructura cluster incrementa l’espai requetis per les taules que l’ocupen.",
            "opcions": ["Cert", "False"],
            "correcta": 0
        },
        {
            "pregunta": "Una estructura cluster incrementa el cost d’accedir les dades de només una de les taules que l’ocupen.",
            "opcions": ["Cert", "False"],
            "correcta": 0
        },
        {
            "pregunta": "L’opció que dona el cost més baix per a fer una join és sempre tenir les dues taules en una estructura cluster.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
        },
        {
            "pregunta": "L’algorisme de Row Nested Loops és simètric.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
        },
        {
            "pregunta": "L’algorisme de Row Nested Loops requereix l’existència d’un índex a priori.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
        },
        {
            "pregunta": "L’algorisme de Row Nested Loops només es pot utilitzar si, en l’arbre de procés, l’operació de join està situada directament sobre la taula de l’índex utilitzat.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
        },
        {
            "pregunta": "L’algorisme de Row Nested Loops només es pot utilitzar si la comparació de la join és la igualtat.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
        },
        {
            "pregunta": "El cost de l’algorisme de Row Nested Loops és sempre més baix si no hem d’accedir atributs de la taula interna que no siguin els del propi índex utilitzat per l’algorisme.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
        },
        {
            "pregunta": "L’algorisme de Row Nested Loops només permet utilitzar un índex tipus cluster si requerim atributs de la taula interna que no siguin els del propi índex.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
        },
        {
            "pregunta": "L’algorisme de Block Nested Loops sempre es pot utilitzar.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
        },
        {
            "pregunta": "L’algorisme de Block Nested Loops és simètric.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
        },
        {
            "pregunta": "L’algorisme de Block Nested Loops sempre té un cost més baix si posem la taula més gran al bucle extern.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
        },
        {
            "pregunta": "L’algorisme de Block Nested Loops requereix que una de les taules càpiga a memòria.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
        },
        {
            "pregunta": "L’algorisme de Hash-join requereix l’existència d’un índex tipus hash a priori.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
        },
        {
            "pregunta": "L’algorisme de Hash-join només es pot utilitzar si la comparació de la join és la igualtat.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
        },
        {
            "pregunta": "L’algorisme de Hash-join és simètric.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
        },
        {
            "pregunta": "L’algorisme de Hash-join requereix que una de les taules càpiga a memòria.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
        },
        {
            "pregunta": "L’algorisme de Hash-join requereix dues passades si una de les taules no hi cap a memòria.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
        },
        {
            "pregunta": "Si la taula més petita no hi cap a memòria, l’algorisme de Hash-join particiona les dues.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
        },
        {
            "pregunta": "L’algorisme de Sort-Match només es pot utilitzar si la comparació de la join és la igualtat.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
        },
        {
            "pregunta": "El cost de l’algorisme de Sort-Match depèn de la comparació de la join.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
        },
        {
            "pregunta": "L’algorisme de Sort-Match requereix que alguna de les taules estigui ordenada a priori.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
        },
        {
            "pregunta": "L’algorisme de Sort-Match requereix l’existència d’un índex cluster a priori.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
        },
        {
            "pregunta": "L’algorisme de Sort-Match deixa el resultat ordenat per l’atribut de join.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
        }
    ], 

    tema11: [
      {
          "pregunta": "Quin NO és un dels tres espais d’un SGBD?",
          "opcions": ["Lògic", "Físic", "Conceptual", "Virtual"],
          "correcta": 2
      },
      {
          "pregunta": "Què NO hi ha a l’espai lògic d’un SGBD?",
          "opcions": ["Files", "Vistes", "Columnes", "Taules"],
          "correcta": 1
      },
      {
          "pregunta": "Què NO hi ha a l’espai virtual d’un SGBD?",
          "opcions": ["Pàgines", "Clusters", "Particions", "Índexs", "Vistes", "Taules", "Tablespaces"],
          "correcta": 5
      },
      {
          "pregunta": "Què NO hi ha a l’espai físic d’un SGBD?",
          "opcions": ["Fitxers", "Índexs", "Blocks", "Extensions"],
          "correcta": 1
      },
      {
          "pregunta": "Les extensions serveixen per a garantir que el sistema operatiu assigni espai físicament consecutiu al disc.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Un Tablespace pot tenir associats més d’un fitxer.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Els Tablespaces faciliten disposar d’espai il·limitat a la base de dades.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Cal definir un Tablespace per a cada usuari del sistema.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Cal definir un Tablespace per a cada patró d’accés diferent al sistema.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Els paràmetres del SGBD serveixen per a configurar el comportament dels seus subsistemes.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "El fillfactor és el percentatge màxim que pot tenir mai ple un bloc de la taula.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Reduir el fillfactor sempre fa que les taules ocupin més espai.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Reduir el fillfactor fa que les modificacions de les dades sempre siguin més ràpides.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "El nombre de repeticions de cada valor és irrellevant per a la utilitat d’un índex tipus arbre.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Un cop s’ha creat un índex tipus bitmap, es poden continuar fent insercions a la taula, però no de valors nous de l’atribut indexat.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Fer una inserció a una taula que té un índex tipus bitmap no incrementa la grandària de l’índex, tret que el valor de l’atribut corresponent no existís abans a la taula.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Fer una modificació (UPDATE) a una taula que té un índex tipus bitmap no incrementa la grandària de l’índex, tret que el nou valor assignat a l’atribut corresponent no existís abans a la taula.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "En el cas de l’índex bitmap, el factor de selecció indica el percentatge de blocs de la taula que caldrà accedir.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "L’índex tipus bitmap és especialment útil en atributs UNIQUE.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Quin tipus d’índex és millor en cas de consultes que involucrin múltiples valors d’un atribut?",
          "opcions": ["Hash", "Bitmap", "Arbre", "Cluster"],
          "correcta": 1
      },
      {
          "pregunta": "Quin tipus d’índex és millor en cas que l’atribut indexat tingui moltes repeticions?",
          "opcions": ["Bitmap", "Cluster", "Hash", "Arbre"],
          "correcta": 0
      },
      {
          "pregunta": "L’índex tipus bitmap millora el temps de resposta d’una consulta quan el factor de selecció és inferior al 50%.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "L’índex tipus bitmap incrementa el grau de concurrència del sistema.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "L’índex tipus bitmap no es pot utilitzar si l’atribut indexat conté valors null.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "L’índex tipus bitmap facilita la comprovació d’unicitat en l’atribut corresponent.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Quin tipus d’usuari s’encarrega del tuning de la base de dades?",
          "opcions": ["Dissenyador", "Programador d’aplicacions", "Administrador", "Tots els anteriors"],
          "correcta": 3
      },
      {
          "pregunta": "Què NO forma part de l’entrada del procés de millora del rendiment del sistema?",
          "opcions": ["Llista d'operacions de modificació, juntament amb les seves freqüències", "Espai de disc disponible", "Llista d’operacions de consulta, juntament amb les seves freqüències", "Llista de restriccions d’integritat, juntament amb les probabilitats de ser violades", "Objectiu de rendiment a assolir"],
          "correcta": 3
      },
      {
          "pregunta": "Què NO forma part de la sortida del procés de millora del rendiment del sistema?",
          "opcions": ["Rescriptura de cada consulta  (segons els criteris de l’optimització semàntica)", "Normalització/Desnormalització de les taules", "Conjunt de vistes materialitzades", "Conjunt d’índexs", "Particionament de les taules"],
          "correcta": 0
      },
      {
          "pregunta": "Quina dada del pla d’accés NO és rellevant per a fer tuning de l’execució de les consultes?",
          "opcions": ["Nombre d’abraçades mortals", "Temps en les cues de bloquejos", "Grandària del dietari (log)", "Nombre de bloquejos", "Hits a la cache"],
          "correcta": 2
      },
      {
          "pregunta": "El nombre d’índexs que podem crear a una base de dades és lineal respecte al nombre de taules i atributs existents.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "L’única limitació que tenim per a crear índexs és l’espai de disc disponible.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Un índex que no sigui de tipus cluster mai empitjorarà l’estimació del temps d’execució d’una consulta.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "És millor no posar índexos a les taules petites.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Pot ser que un índex no millori el rendiment de cap operació DML concreta, però tot i així sigui bo crear-ho des del punt de vista del rendiment del sistema.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "El predicat de les consultes és irrellevant per a triar el tipus d’índex d’una taula.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "L’ordre dels atributs d’un índex multiatribut afecta a la seva utilitat.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Una taula pot tenir com a màxim un índex tipus cluster.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Com més repeticions tingui un atribut, millor serà posar un índex tipus hash en comptes d’un arbre.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Com més repeticions tingui un atribut, millor serà posar un índex tipus bitmap en comptes d’un arbre.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "L’algorisme greedy de selecció d’índexs és bàsicament el mateix que el de selecció de vistes materialitzades.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Quan utilitzem l’algorisme greedy, cal calcular el temps d’execució considerant també les estructures que no hi càpiguen, perque podem guanyar l’espai necessari per elles eliminant una altra estructura que haguem triat amb anterioritat.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      }
    ],

    tema12: [
      {
          "pregunta": "Pel que fa a l’aïllament, volem tenir només històries serials.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "El nivell d’aïllament read uncommitted només bloqueja escriptures.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "El nivell d’aïllament read committed manté tots els bloquejos fins al final de la transacció.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "El nivell d’aïllament repeatable read genera dos bloquejos per cada lectura.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "El nivell d’aïllament serializable sempre bloqueja tota la taula fins al final de la transacció.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Com més garanties d’aïllament tinguem, millor serà el rendiment del sistema.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Quin dels següents conceptes NO afecta al temps d’execució de la transacció?",
          "opcions": ["Tipus de bloquejos", "Moment d’assignació del timestamp", "Nombre de bloquejos", "Moment d’alliberament dels bloquejos"],
          "correcta": 1
      },
      {
          "pregunta": "Quina de les següents accions NO serveix per millorar el rendiment de les transaccions?",
          "opcions": [
              "Trossejar les transaccions",
              "Assignar el timestamp el més tard possible",
              "Relaxar el nivell d’aïllament",
              "Eliminar bloquejos innecessaris",
              "Configurar l’interval de detecció de deadlock adequat",
              "Evitar (o endarrerir) l’accés a grànuls molt demandats",
              "Utilitzar les sentencies de DDL quan hi hagi pocs usuaris"
          ],
          "correcta": 1
      },
      {
          "pregunta": "El control de concurrència multi-versió fa que dues transaccions que s’executin concurrentment puguin llegir dades diferents.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Amb control de concurrència multi-versió, cada operació d’escriptura genera una nova versió del grànul.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Amb control de concurrència multi-versió, l’usuari ha de decidir quina versió del grànul llegeix.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Amb control de concurrència multi-versió, les operacions de lectura no bloquegen mai res.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Amb control de concurrència multi-versió, només hi ha bloquejos entre escriptures.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Amb control de concurrència multi-versió, fer rollback d’una transacció és equivalent a eliminar les versions generades per la transacció.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Amb control de concurrència multi-versió, tenim implícit una base de dades temporal amb temps de transacció.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "El principal problema del control de concurrència multi-versió, és que hem d’esborrar les versions obsoletes dels grànuls per a mantenir la grandària de la base de dades dins d’uns límits.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Fent vacuum, eliminem les versions obsoletes de les dades en el control de concurrència multi-versió.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Amb un control de concurrència multi-versió basat en bloquejos, s’aplica un control de concurrència diferent depenent de si la transacció és read-only o read-write.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Amb un control de concurrència multi-versió basat en bloquejos, les transaccions read-only assignen un timestamp ...",
          "opcions": ["En acabar la transacció", "A l’inici de la transacció", "No n’assignen mai cap", "En intentar accedir un grànul bloquejat"],
          "correcta": 1
      },
      {
          "pregunta": "Amb un control de concurrència multi-versió basat en bloquejos, les transaccions read-write assignen un timestamp ...",
          "opcions": ["En intentar accedir un grànul bloquejat", "En acabar la transacció", "A l’inici de la transacció", "No n’assignen mai cap", "Al fer la primera operació d’escriptura"],
          "correcta": 1
      },
      {
          "pregunta": "Quina NO és una raó per a necessitar una reconstrucció?",
          "opcions": ["Incendi", "Fallada del disc", "Fallada elèctrica", "Totes les anteriors ho són"],
          "correcta": 2
      },
      {
          "pregunta": "Quina de les quatre propietats ACID està relacionada principalment amb la restauració?",
          "opcions": ["Atomicitat", "Consistència", "Aïllament", "Durabilitat"],
          "correcta": 0
      },
      {
          "pregunta": "Quina de les quatre propietats ACID està relacionada principalment amb la reconstrucció?",
          "opcions": ["Atomicitat", "Consistència", "Aïllament", "Durabilitat"],
          "correcta": 3
      },
      {
          "pregunta": "Què fa el gestor de la cache quan rep una petició de Fetch?",
          "opcions": ["Llegeix de la memòria i escriu al disc", "Llegeix del disc i la memòria", "Llegeix del disc i escriu a la memòria", "Escriu tant al disc com a la memòria"],
          "correcta": 2
      },
      {
          "pregunta": "Què fa el gestor de la cache quan rep una petició de Flush?",
          "opcions": ["Escriu tant al disc com a la memòria", "Llegeix del disc i la memòria", "Llegeix de la memòria i escriu al disc", "Llegeix del disc i escriu a la memòria"],
          "correcta": 2
      },
      {
          "pregunta": "Què NO es guarda al dietari?",
          "opcions": [
              "Tipus d’operació",
              "Pla d’accés de la consulta",
              "Punter a l’operació anterior de la transacció",
              "Valor vell del grànul modificat",
              "Identificador de l’objecte",
              "Punter a l’operació següent de la transacció",
              "Valor nou del grànul modificat"
          ],
          "correcta": 1
      },
      {
          "pregunta": "Quan NO es fa un flush dels buffers del SGBD?",
          "opcions": [
              "Durant un backup",
              "Quan el nombre de pàgines de memòria modificades supera un cert llindar",
              "Quan el dietari s’omple",
              "A intervals regulars",
              "Durant una operació de DDL"
          ],
          "correcta": 4
      },
      {
          "pregunta": "El Write Ahead Log Protocol estableix que abans de confirmar qualsevol operació de DML, aquesta s’ha d’escriure al dietari (log).",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Com evita el SGBD que s’ompli el dietari (log)?",
          "opcions": [
              "Dedicant-li un disc de forma exclusiva",
              "Limitant el nombre d’escriptures al mínim indispensable",
              "Esborrant-ho i creant-ho de nou a intervals regulars",
              "Gestionant el fitxer com si fos cíclic"
          ],
          "correcta": 3
      },
      {
          "pregunta": "Si fem backups de forma regular, no ens cal el dietari (log) per a reconstruir la base de dades.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Just quan acabem de fer un backup, podem esborrar el dietari (log).",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Si configurem de forma adequada el dietari (log), no ens cal fer backups.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Mentre s’executa un backup, el rendiment del sistema empitjora.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "És important posar el dietari (log) en un disc dedicat exclusivament per a ell, perquè així evitem moviments innecessaris del capçal i afavorim la seva escriptura seqüencial.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Endarrerir els flush tan com sigui possible millora el rendiment del sistema.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Quin NO és un problema de que les transaccions read-write siguin innecessàriament llargues?",
          "opcions": [
              "És més probable que el sistema falli durant la seva execució",
              "La pròpia transacció és probable que es bloquegi",
              "Altres transaccions han d’esperar massa",
              "En cas de fallida, la transacció trigara molt a recuperar-se",
              "Totes les anteriors ho són"
          ],
          "correcta": 4
      },
      {
          "pregunta": "El fet que trossejar una transacció afecti o no al seu aıllament depen nomes d’ella mateixa i no de cap altra transaccio que es pugui executar de forma concurrent",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Trossejar una transacció afecta només a ella mateixa i no a cap altra transacció concurrent.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Les transaccions llargues són un problema tant pel control de concurrència, com per a la recuperació.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Si concatenem (chain) dues transaccions, no s’alliberen els bloquejos de la primera fins que acaba la segona.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Si concatenem (chain) dues transaccions, no s’alliberen els recursos de la primera (p.e., memoria) de la primera i aquests es reutilitzen en la segona, que manté la mateixa configuració (p.e., nivell d'aïllament).",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Si totes les transaccions són prou curtes, no cal paral·lelitzar les escriptures i podem substituir el control de concurrència per un sistema de cues.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      },
      {
          "pregunta": "Si tenim prou memòria com per a contenir tota la base de dades, podem fer directament allà totes les operacions i no cal escriure mai al disc.",
          "opcions": ["Cert", "Fals"],
          "correcta": 1
      },
      {
          "pregunta": "Si tenim un sistema que només fa lectures, podem prescindir tant dels mecanismes de control de concurrència com dels de recuperació.",
          "opcions": ["Cert", "Fals"],
          "correcta": 0
      }
    ] 
};

let preguntesSeleccionades = [];
let indexPreguntaActual = 0;
let puntuacio = 0;
let preguntesFavorites = [];

// Carregar favorits des de LocalStorage en carregar la pàgina
document.addEventListener('DOMContentLoaded', function() {
    carregaFavoritsLocal();  // Carrega preguntes favorites guardades
});

function afegirTreureFavorits(preguntaActual, favoritBtn) {
  // Comprova si la pregunta ja és un favorit
  let jaFavorit = preguntesFavorites.some(p => p.pregunta === preguntaActual.pregunta);

  if (jaFavorit) {
      // Si la pregunta ja és un favorit, la traiem de la llista
      preguntesFavorites = preguntesFavorites.filter(p => p.pregunta !== preguntaActual.pregunta);
      favoritBtn.classList.remove('favorit-actiu');  // Traiem el color actiu
      
  } else {
      // Si no és un favorit, la afegim
      preguntesFavorites.push(preguntaActual);
      favoritBtn.classList.add('favorit-actiu');  // Apliquem el color actiu
      
  }

  // Guarda la llista de favorits actualitzada
  guardaFavoritsLocal();
}

// Funció per guardar favorits a LocalStorage
function guardaFavoritsLocal() {
    localStorage.setItem('preguntesFavorites', JSON.stringify(preguntesFavorites));
}

// Funció per carregar favorits des de LocalStorage
function carregaFavoritsLocal() {
    let favoritsGuardats = localStorage.getItem('preguntesFavorites');
    if (favoritsGuardats) {
        preguntesFavorites = JSON.parse(favoritsGuardats);
    }
}

// Selecció de temes
document.getElementById('iniciar-test').addEventListener('click', function() {
    

    preguntesSeleccionades = [];
    if(document.getElementById('favorits').checked){
      preguntesSeleccionades = preguntesFavorites;
    }
    else{
      if (document.getElementById('tema0').checked) {
        preguntesSeleccionades = preguntesSeleccionades.concat(preguntes.tema0);
    }
    if (document.getElementById('tema1').checked) {
        preguntesSeleccionades = preguntesSeleccionades.concat(preguntes.tema1);
    }
    if (document.getElementById('tema2').checked) {
        preguntesSeleccionades = preguntesSeleccionades.concat(preguntes.tema2);
    }
    if (document.getElementById('tema3').checked) {
        preguntesSeleccionades = preguntesSeleccionades.concat(preguntes.tema3);
    }
    if (document.getElementById('tema4').checked) {
        preguntesSeleccionades = preguntesSeleccionades.concat(preguntes.tema4);
    }
    if (document.getElementById('tema5').checked) {
        preguntesSeleccionades = preguntesSeleccionades.concat(preguntes.tema5);
    }
    if (document.getElementById('tema6').checked) {
      preguntesSeleccionades = preguntesSeleccionades.concat(preguntes.tema6);
  }
  if (document.getElementById('tema7').checked) {
    preguntesSeleccionades = preguntesSeleccionades.concat(preguntes.tema7);
}
if (document.getElementById('tema8').checked) {
  preguntesSeleccionades = preguntesSeleccionades.concat(preguntes.tema8);
}
if (document.getElementById('tema9').checked) {
  preguntesSeleccionades = preguntesSeleccionades.concat(preguntes.tema9);
}
if (document.getElementById('tema10').checked) {
  preguntesSeleccionades = preguntesSeleccionades.concat(preguntes.tema10);
}
if (document.getElementById('tema11').checked) {
  preguntesSeleccionades = preguntesSeleccionades.concat(preguntes.tema11);
}if (document.getElementById('tema12').checked) {
  preguntesSeleccionades = preguntesSeleccionades.concat(preguntes.tema12);
}
    }
    

    if (preguntesSeleccionades.length === 0) {
        alert("Selecciona almenys un tema per començar.");
        return;
    }

    // Barreja les preguntes seleccionades
    preguntesSeleccionades = barrejaArray(preguntesSeleccionades);

    if (preguntesSeleccionades.length > 0) {
        document.getElementById('pagina-inici').classList.add('hidden');
        document.getElementById('pagina-test').classList.remove('hidden');
        document.getElementById('barra-progres-container').style.display = 'block';
        mostraPregunta();
    } else {
        alert("Selecciona almenys un tema per començar.");
    }
});

// Funció per mostrar la pregunta actual
function mostraPregunta() {
    if (indexPreguntaActual < preguntesSeleccionades.length) {
        let preguntaActual = preguntesSeleccionades[indexPreguntaActual];
        document.getElementById('pregunta-text').innerText = preguntaActual.pregunta;

        let opcionsDiv = document.getElementById('opcions');
        opcionsDiv.innerHTML = '';  // Neteja les opcions anteriors

        let correctaOriginal = preguntaActual.opcions[preguntaActual.correcta];

        // Barrejar les opcions abans de crear els botons
        let opcionsBarrejades = barrejaArray([...preguntaActual.opcions]);  // Còpia de les opcions barrejades

        // Trobar el nou índex de la resposta correcta en les opcions barrejades
        let novaCorrectaIndex = opcionsBarrejades.indexOf(correctaOriginal);

        // Crear botons per a les opcions barrejades
        opcionsBarrejades.forEach((opcio, index) => {
            let btn = document.createElement('button');
            btn.innerText = opcio;
            btn.classList.add('opcio-boto');
            btn.addEventListener('click', function() {
                comprovaResposta(index, novaCorrectaIndex);  // Passem el nou índex correcte
            });
            opcionsDiv.appendChild(btn);
        });

        let favoritBtn = document.createElement('button');
        favoritBtn.innerText = "⭐ Afegir a Favorits";
        favoritBtn.classList.add('favorit-boto');  // Classe CSS per favorits

        // Comprova si la pregunta ja és als favorits per canviar el color del botó
        let jaFavorit = preguntesFavorites.some(p => p.pregunta === preguntaActual.pregunta);
        if (jaFavorit) {
            favoritBtn.classList.add('favorit-actiu');  // Si ja és un favorit, marquem el botó
        }

        favoritBtn.addEventListener('click', function() {
            afegirTreureFavorits(preguntaActual, favoritBtn);  // Afegir o treure de favorits
        });

        document.getElementById('favorits-container').innerHTML = '';  // Neteja botons anteriors
        document.getElementById('favorits-container').appendChild(favoritBtn);  // Afegir el botó

    } else {
        mostraResultatFinal();
    }
}

// Funció per comprovar la resposta
function comprovaResposta(opcioSeleccionada, respostaCorrecta) {
    let totsElsBotons = document.getElementById('opcions').getElementsByTagName('button');
    for (let i = 0; i < totsElsBotons.length; i++) {
        totsElsBotons[i].disabled = true;  // Deshabilita tots els botons

        if(i === opcioSeleccionada){
            totsElsBotons[i].classList.add('seleccionat')
        }
    }

    // Pintar la resposta correcta en verd i les incorrectes en vermell
    for (let i = 0; i < totsElsBotons.length; i++) {
        if (i === respostaCorrecta) {
            totsElsBotons[i].classList.add('correcta');  // Pintem la correcta de verd
        } else {
            totsElsBotons[i].classList.add('incorrecta');  // Pintem les incorrectes de vermell
        }
    }

    // Comprova si la resposta és correcta
    if (opcioSeleccionada === respostaCorrecta) {
        puntuacio++;
        
    }

    // Incrementa l'índex de la pregunta actual
    indexPreguntaActual++;

    // Actualitzar la barra de progrés
    let percentatgeProgres = (indexPreguntaActual /  preguntesSeleccionades.length) * 100;
    document.getElementById('barra-progres').style.width = percentatgeProgres + '%';

    // Mostra el botó de la següent pregunta
    document.getElementById('següent-pregunta').classList.remove('hidden');
}

// Passar a la següent pregunta
document.getElementById('següent-pregunta').addEventListener('click', function() {
    document.getElementById('següent-pregunta').classList.add('hidden');
    mostraPregunta();
});

// Funció per mostrar el resultat final
function mostraResultatFinal() {
    document.getElementById('pagina-test').classList.add('hidden');
    document.getElementById('pagina-resultat').classList.remove('hidden');
    document.getElementById('resultat').innerText = `Has encertat ${puntuacio} de ${preguntesSeleccionades.length} preguntes.`;
}

// Reiniciar el test
document.getElementById('reiniciar-test').addEventListener('click', function() {
    indexPreguntaActual = 0;
    puntuacio = 0;
    document.getElementById('pagina-inici').classList.remove('hidden');
    document.getElementById('pagina-resultat').classList.add('hidden');
});

// Funció per barrejar un array (algoritme Fisher-Yates)
function barrejaArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
