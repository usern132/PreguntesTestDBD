const preguntes = {
    tema0:[
        {
            "pregunta": "PostgreSQL és una base de dades.",
            "opcions": ["Cert", "Fals"],
            "correcta": 1
          },
          {
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
            "pregunta": "Un sistema d'informació decisional es considera...",
            "opcions": ["Read-only", "Write-only", "Read-write"],
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
            "pregunta": "Quina afirmació és falsa?",
            "opcions": ["Una tupla que avalua el predicat d'un CHECK a 'desconegut' no viola la restricció d'integritat", "Una tupla que avalua el predicat del WHERE a 'desconegut' no surt al resultat de la consulta", "Una tupla que té un valor nul a la clau forana no viola la restricció d'integritat", "Cap de les anteriors afirmacions és falsa"],
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
              "Poden generar bucles infinits"
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
            "pregunta": "Hi ha casos en què podem implementar una associació ternària amb simplement una clau forana.",
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
          }
    ],
    tema3: [
        {
            "pregunta": "Quina no és una conseqüència de les anomalies que motiven la teoria de la normalització?",
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
            "pregunta": "Una relació està en 1NF si tots els seus atributs són atòmics.",
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
            "opcions": ["Quan les taules s’haurien d’ajuntar (join) molt sovint", "Quan la base de dades és molt petita","Quan la consist`encia de les dades es pot garantir d’alguna altra manera", "Quan no s’esperen canvis a les dades"],
            "correcta": 1
          },
          {
            "pregunta": "Les relacions en 4NF ho estan també en ...",
            "opcions": ["... NF2", "... 3NF","... BCNF", "... totes les anteriors"],
            "correcta": 3
          },
          {
            "pregunta": "La 4NF no permet tenir depend`encies multivaluades.",
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
            "correcta": 1
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
            "correcta": 3
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
            "pregunta": "De quin tipus de valors faciliten el càlcul les clausules 'GROUPING SETS'?",
            "opcions": ["Agregats", "Derivats", "Atòmics", "Marginals"],
            "correcta": 3
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
            "pregunta": "Podem tenir un document JSON que segueixi BCNF.",
            "opcions": ["Cert", "Fals"],
            "correcta": 0
          },
          {
            "pregunta": "NO podem tenir claus foranes en documents JSON.",
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
      "pregunta": "Quina NO és un dels quatre problemes associats a les vistes?",
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
      "pregunta": "Sempre es pot modificar una taula a través d’una vista que no conté cap altra taula.",
      "opcions": ["Cert", "Fals"],
      "correcta": 1
    },
    {
      "pregunta": "No podem modificar una taula a través d’una vista que tingui un agregat.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
    },
    {
      "pregunta": "No podem modificar una taula a través d’una vista que faci una join.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
    },
    {
      "pregunta": "Quan NO podem propagar els canvis d’una taula a les seves vistes materialitzades?",
      "opcions": ["On commit", "On statement", "On demand", "Podem propagar-los de les tres maneres"],
      "correcta": 1
    },
    {
      "pregunta": "Només cal crear un log per fer manteniment de vistes incremental.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
    },
    {
      "pregunta": "Sempre podem utilitzar una vista materialitzada per implementar una aserció.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
    },
    {
      "pregunta": "Per implementar una aserció amb una vista materialitzada, cal que la vista sempre estigui buida.",
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
      "pregunta": "Per a triar el conjunt òptim de vistes materialitzades, podem utilitzar un algorisme greedy.",
      "opcions": ["Cert", "Fals"],
      "correcta": 1
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
