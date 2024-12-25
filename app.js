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
            "opcions": ["Una tupla que avalua el predicat d'un CHECK a 'desconegut' no viola la restricció d'integritat", "Una tupla que avalua el predicat del WHERE a 'desconegut' no surt al resultat de la consulta", "Una tupla que té un valor nul a la clau forana no viola la restricció d'integritat", "Alguna de les anteriors afirmacions és falsa"],
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
      "pregunta": "Els SGBDs no permeten modificar una taula a través d’una vista que tingui un agregat.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
    },
    {
      "pregunta": "Els SGBDs no permeten modificar una taula a través d’una vista que faci una join.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
    },
    {
      "pregunta": "Quan NO podem propagar els canvis d’una taula a les seves vistes materialitzades?",
      "opcions": ["On commit", "On statement", "On demand", "Podem propagar-los de les tres maneres"],
      "correcta": 3
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
  ],
  tema7:[
    {
        "pregunta": "Quina NO és una de les tasques bàsiques del disseny físic?",
        "opcions": ["Escollir les estructures de dades", "Reconsiderar l'esquema relacional", "Testejar el rendiment", "Adaptar l'esquema lògic al SGBD", "Reconsiderar els requisits"],
        "correcta": 4
    },
    {
        "pregunta": "Quin NO és un criteri per prendre decisions sobre el disseny físic?",
        "opcions": ["Escalabilitat", "Millora de rendiment", "Disponibilitat", "Integritat", "Benefici econòmic", "Simplicitat de l'administració"],
        "correcta": 4
    },
    {
        "pregunta": "Quina NO és una dificultat en el disseny físic?",
        "opcions": ["Tenir recursos limitats", "Les imperfeccions del SGBD", "Els usuaris", "La xarxa", "La normalització", "L'existència de criteris contraposats"],
        "correcta": 4
    },
    {
        "pregunta": "Les estructures d'accés (és a dir, els índexs) són ... respecte a les taules.",
        "opcions": ["Complementàries", "Redundants"],
        "correcta": 0
    },
    {
        "pregunta": "Què NO podem trobar en una entrada d'un índex?",
        "opcions": ["El registre sencer", "Una llista d'adreces físiques de registres", "Una funció de hash", "Un mapa de bits", "Una adreça física del registre"],
        "correcta": 2
    },
    {
        "pregunta": "Els blocs de la taula contenen apuntadors als registres.",
        "opcions": ["Cert", "Fals"],
        "correcta": 0
    },
    {
        "pregunta": "Els nodes d'un índex tipus arbre estan normalment plens al 100%.",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
    },
    {
        "pregunta": "Els buckets d'un índex tipus hash estan normalment plens al 100%.",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
    },
    {
        "pregunta": "Els buckets d'un índex tipus hash estan normalment més plens que els nodes d'un arbre.",
        "opcions": ["Cert", "Fals"],
        "correcta": 0
    },
    {
        "pregunta": "Un índex cluster manté ordenades les dades de la taula segons l'atribut d'indexació.",
        "opcions": ["Cert", "Fals"],
        "correcta": 0
    },
    {
        "pregunta": "Quin és típicament l'ordre (normalment representat per la lletra “d”) d'un índex tipus arbre?",
        "opcions": ["Menor que 10", "Entre 10 i 50", "Entre 50 i 100", "Major que 100"],
        "correcta": 3
    },
    {
        "pregunta": "Els índexs tipus arbre i hash són molt útils en consultes poc selectives.",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
    },
    {
        "pregunta": "Els índexs ocupen sempre menys espai que la taula i conseqüentment mai generaran problemes d'espai.",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
    },
    {
        "pregunta": "Els índexs tipus hash només són útils si tinc una condició de selecció per igualtat.",
        "opcions": ["Cert", "Fals"],
        "correcta": 0
    },
    {
        "pregunta": "Els índexs són útils a qualsevol taula.",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
    },
    {
        "pregunta": "NO haig de definir un índex tipus arbre o hash si l'atribut té pocs valors.",
        "opcions": ["Cert", "Fals"],
        "correcta": 0
    },
    {
        "pregunta": "Index-only query answering vol dir que el SGBD no accedirà a la taula per a resoldre la consulta.",
        "opcions": ["Cert", "Fals"],
        "correcta": 0
    }
],
tema8:[
  {
      "pregunta": "¿Quina NO és una de les tres fases de la optimització de consultes?",
      "opcions": ["Lògica", "Sintàctica", "Semàntica", "Física"],
      "correcta": 0
  },
  {
      "pregunta": "En quina posició se situa l'optimització dins del procés de processament de consultes?",
      "opcions": ["Primera", "Segona", "Tercera", "Última"],
      "correcta": 3
  },
  {
      "pregunta": "L'optimització de consultes tradueix d'un llenguatge declaratiu a un de procedural.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
  },
  {
      "pregunta": "L'optimitzador de consultes sempre troba el millor pla d'accés.",
      "opcions": ["Cert", "Fals"],
      "correcta": 1
  },
  {
      "pregunta": "L'optimització semàntica canvia el llenguatge de representació de la consulta.",
      "opcions": ["Cert", "Fals"],
      "correcta": 1
  },
  {
      "pregunta": "L'optimització sintàctica canvia el llenguatge de representació de la consulta.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
  },
  {
      "pregunta": "L'optimització sintàctica resol totes les vistes no-materialitzades que hi hagi a la consulta.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
  },
  {
      "pregunta": "L'optimització sintàctica canvia el cost de la consulta.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
  },
    {
        "pregunta": "Les dues regles heurístiques utilitzades a l'optimització sintàctica sempre milloren el cost de la consulta.",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
    },
    {
        "pregunta": "L'optimització sintàctica sempre redueix el nombre d'operacions a l'arbre sintàctic.",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
    },
    {
        "pregunta": "Després de l'optimització sintàctica poden quedar dos subgrafs iguals a l'arbre sintàctic.",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
    },
    {
        "pregunta": "L'optimització sintàctica mai elimina operacions de l'arbre sintàctic.",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
    },
    {
        "pregunta": "La selecció commuta sempre amb qualsevol operació de conjunts (és a dir, unió, intersecció i diferència).",
        "opcions": ["Cert", "Fals"],
        "correcta": 0
    },
    {
        "pregunta": "La projecció commuta sempre amb qualsevol operació de conjunts (és a dir, unió, intersecció i diferència).",
        "opcions": ["Cert", "Fals"],
        "correcta": 1
    },
    {
        "pregunta": "Quines propietats compleix la join?",
        "opcions": ["Commutativa", "Associativa", "Cap de les dues", "Totes dues"],
        "correcta": 3
    },
    {
        "pregunta": "Quina operació deixa de ser explícita en l'arbre de procés?",
        "opcions": ["Projecció", "Selecció", "Join", "Cap de les anteriors"],
        "correcta": 0
    },
    {
        "pregunta": "Què NO genera alternatives en l'espai de cerca de l'optimització basada en costos?",
        "opcions": ["Algorismes existents per cada operació", "Utilització de la cache", "Estructures d'accés disponibles", "L'ordre de les joins"],
        "correcta": 1
    },
    {
        "pregunta": "El cost d'una consulta és la suma dels costos de totes les operacions del seu arbre de procés.",
        "opcions": ["Cert", "Fals"],
        "correcta": 0
    }
],
tema9: [
  {
      "pregunta": "Les cardinalitats dels resultats intermitjos es calculen top-down a l'arbre de procés.",
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
      "pregunta": "La longitud d’un registre és la suma de les longituds dels seus atributs.",
      "opcions": ["Cert", "Fals"],
      "correcta": 1
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
      "pregunta": "Les operacions amb bitmaps són equivalents a les operacions de llistes de RIDs.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
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
tema10:[
  {
      "pregunta": "L’opció que dona el cost més baix per a fer una join és sempre tenir les dues taules en una estructura cluster.",
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
      "pregunta": "L’algorisme de Block Nested Loops requereix que una de les taules càpiga a memòria.",
      "opcions": ["Cert", "Fals"],
      "correcta": 1
  },
  {
      "pregunta": "L’algorisme de Hash-join requereix l’existència d’un índex hash a priori.",
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
      "pregunta": "L’algorisme de Sort-Match només es pot utilitzar si la comparació de la join és la igualtat.",
      "opcions": ["Cert", "Fals"],
      "correcta": 1
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
      "pregunta": "L’algorisme de Sort-Match deixa el resultat ordenat.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
  }
],
tema11:[
  {
      "pregunta": "¿Quin NO és un dels tres espais d'un SGBD?",
      "opcions": ["Físic", "Lògic", "Virtual", "Conceptual"],
      "correcta": 3
  },
  {
      "pregunta": "Què NO hi ha a l’espai lògic d’un SGBD?",
      "opcions": ["Vistes", "Files", "Taules", "Columnes"],
      "correcta": 0
  },
  {
      "pregunta": "Què NO hi ha a l’espai virtual d’un SGBD?",
      "opcions": ["Taules", "Clusters", "Índexs", "Pàgines", "Particions", "Tablespaces", "Vistes"],
      "correcta": 0
  },
  {
      "pregunta": "Què NO hi ha a l’espai físic d’un SGBD?",
      "opcions": ["Extensions", "Índexs", "Blocks", "Fitxers"],
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
      "pregunta": "El fillfactor és el percentatge màxim que pot tenir mai ple un bloc de la taula.",
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
      "pregunta": "Quin tipus d’índex és millor en cas de consultes que involucrin múltiples valors d’un atribut?",
      "opcions": ["Cluster", "Hash", "Arbre", "Bitmap"],
      "correcta": 3
  },
  {
      "pregunta": "Quin tipus d’índex és millor en cas que l’atribut indexat tingui moltes repeticions?",
      "opcions": ["Hash", "Cluster", "Arbre", "Bitmap"],
      "correcta": 3
  },
  {
      "pregunta": "Quin tipus d’usuari s’encarrega del tuning de la base de dades?",
      "opcions": ["Administrador", "Programador d’aplicacions", "Dissenyador", "Tots els anteriors"],
      "correcta": 3
  },
  {
      "pregunta": "Quina dada de les que no trobem al pla d’accés NO és rellevant per a fer tuning de l’execució de les consultes?",
      "opcions": ["Nombre de deadlocks", "Grandària del dietari", "Temps en les cues de bloquejos", "Hits a la cache", "Nombre de bloquejos"],
      "correcta": 1
  },
  {
      "pregunta": "El nombre d’índexos que podem crear a una base de dades és lineal respecte al nombre de taules i atributs existents.",
      "opcions": ["Cert", "Fals"],
      "correcta": 1
  },
  {
      "pregunta": "Un índex que no sigui de tipus cluster mai empitjorarà l’execució d’una consulta.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
  },
  {
      "pregunta": "És millor no posar índexs a les taules petites.",
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
  }
],
tema12:
[
  {
      "pregunta": "Pel que fa a l’aïllament, volem tenir només històries serials.",
      "opcions": ["Cert", "Fals"],
      "correcta": 1
  },
  {
      "pregunta": "El nivell d’aïllament serializable sempre bloqueja tota la taula fins al final de la transacció.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
  },
  {
      "pregunta": "Quin dels següents conceptes NO afecta al temps d’execució de la transacció?",
      "opcions": ["Nombre de bloquejos", "Moment d’alliberament dels bloquejos", "Moment d’assignació del timestamp", "Tipus de bloquejos"],
      "correcta": 2
  },
  {
      "pregunta": "Quina de les següents accions NO serveix per millorar el rendiment de les transaccions?",
      "opcions": ["Trossejar les transaccions", "Eliminar bloquejos innecessaris", "Evitar (o endarrerir) l’accés a granuls molt demandats", "Configurar l’interval de detecció de deadlock adequat", "Relaxar el nivell d’aïllament", "Utilitzar les sentencies de DDL quan hi hagi pocs usuaris", "Assignar el timestamp el més tard possible"],
      "correcta": 6
  },
  {
      "pregunta": "El control de concurrència multi-versió fa que dues transaccions que s’executin concurrentment puguin llegir dades diferents.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
  },
  {
      "pregunta": "Amb control de concurrència multi-versió les operacions de lectura no bloquegen mai res.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
  },
  {
      "pregunta": "Amb control de concurrència multi-versió només hi ha bloquejos entre escriptures.",
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
      "pregunta": "Quina NO és una raó per a necessitar una reconstrucció?",
      "opcions": ["Fallada elèctrica", "Incendi", "Fallada del disc", "Cap de les anteriors"],
      "correcta": 0
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
      "pregunta": "Què NO es guarda al dietari?",
      "opcions": ["Valor vell del granull modificat", "Pla d’accés de la consulta", "Valor nou del granull modificat", "Tipus d’operació", "Punter a l’operació següent de la transacció", "Identificador de l’objecte", "Punter a l’operació anterior de la transacció"],
      "correcta": 1
  },
  {
      "pregunta": "¿Quan NO es fa un flush dels buffers del SGBD?",
      "opcions": ["Quan el nombre de pàgines de memòria modificades supera un cert llindar", "A intervals regulars", "Quan el dietari s’omple", "Durant un backup", "Durant una operació de DDL"],
      "correcta": 4
  },
  {
      "pregunta": "El Write Ahead Log Protocol estableix que abans de confirmar qualsevol operació de DML, aquesta s’ha d’escriure al dietari.",
      "opcions": ["Cert", "Fals"],
      "correcta": 1
  },
  {
      "pregunta": "Si fem backups de forma regular, no ens cal el dietari per a reconstruir la base de dades.",
      "opcions": ["Cert", "Fals"],
      "correcta": 1
  },
  {
      "pregunta": "Si configurem de forma adequada el dietari, no ens cal fer backups.",
      "opcions": ["Cert", "Fals"],
      "correcta": 1
  },
  {
      "pregunta": "Endarrerir els flush tan com sigui possible millora el rendiment del sistema.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
  },
  {
      "pregunta": "Trossejar les transaccions read-write millora el rendiment del sistema.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
  },
  {
      "pregunta": "El fet que trossejar una transacció afecti o no al seu aïllament depèn només d’ella mateixa i no de cap altra transacció que es pugui executar de forma concurrent.",
      "opcions": ["Cert", "Fals"],
      "correcta": 1
  },
  {
      "pregunta": "Les transaccions llargues són un problema tant pel control de concurrència, com per a la recuperació.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
  },
  {
      "pregunta": "Si totes les transaccions són prou curtes, podem substituir el control de concurrència per un sistema de cues.",
      "opcions": ["Cert", "Fals"],
      "correcta": 0
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
