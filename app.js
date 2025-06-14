import preguntes from './preguntes.js';

let preguntesSeleccionades = [];
let indexPreguntaActual = 0;
let puntuacio = 0;
let preguntesFavorites = [];
let currentKeydownListener = null; // Variable per emmagatzemar l'oient de teclat actual
let currentSpacebarListener = null; // Variable per emmagatzemar l'oient de la barra espaiadora

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
    // Elimina qualsevol oient de teclat anterior per C/F
    if (currentKeydownListener) {
        document.removeEventListener('keydown', currentKeydownListener);
        currentKeydownListener = null;
    }
    // Elimina qualsevol oient de teclat anterior per la barra espaiadora
    if (currentSpacebarListener) {
        document.removeEventListener('keydown', currentSpacebarListener);
        currentSpacebarListener = null;
    }

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

        // Comprova si les opcions originals són "Cert" i "Fals" per a l'entrada de teclat
        if (preguntaActual.opcions.length === 2 &&
                                   preguntaActual.opcions[0] === "Cert" &&
                                   preguntaActual.opcions[1] === "Fals") {
            currentKeydownListener = function(event) {
                const opcionsButtons = opcionsDiv.getElementsByTagName('button');
                // Comprova si els botons ja estan desactivats (resposta enviada)
                if (opcionsButtons.length > 0 && opcionsButtons[0].disabled) {
                    return;
                }

                const key = event.key.toLowerCase();
                let selectedIndexByKey = -1;

                if (key === 'c') {
                    // "Cert" és a l'índex 0 a opcionsBarrejades per a aquestes preguntes
                    selectedIndexByKey = 0;
                } else if (key === 'f') {
                    // "Fals" és a l'índex 1 a opcionsBarrejades per a aquestes preguntes
                    selectedIndexByKey = 1;
                }

                if (selectedIndexByKey !== -1) {
                    event.preventDefault(); // Evita l'acció per defecte del navegador per 'c' o 'f'
                    comprovaResposta(selectedIndexByKey, novaCorrectaIndex);
                    // L'oient s'eliminarà a comprovaResposta o al proper mostraPregunta
                }
            };
            document.addEventListener('keydown', currentKeydownListener);
        }

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
    // Elimina l'oient de teclat tan bon punt es processi una resposta
    if (currentKeydownListener) {
        document.removeEventListener('keydown', currentKeydownListener);
        currentKeydownListener = null;
    }
    // Elimina l'oient de la barra espaiadora si n'hi hagués un d'anterior (poc probable aquí, però per seguretat)
    if (currentSpacebarListener) {
        document.removeEventListener('keydown', currentSpacebarListener);
        currentSpacebarListener = null;
    }

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

    // Afegeix l'oient per a la barra espaiadora per passar a la següent pregunta
    currentSpacebarListener = function(event) {
        if (event.code === 'Space' || event.key === ' ') {
            event.preventDefault(); // Evita l'acció per defecte de la barra espaiadora (scroll, etc.)
            document.getElementById('següent-pregunta').click();
            // L'oient s'eliminarà a la propera crida de mostraPregunta o mostraResultatFinal
        }
    };
    document.addEventListener('keydown', currentSpacebarListener);
}

// Passar a la següent pregunta
document.getElementById('següent-pregunta').addEventListener('click', function() {
    document.getElementById('següent-pregunta').classList.add('hidden');
    mostraPregunta();
});

// Funció per mostrar el resultat final
function mostraResultatFinal() {
    // Elimina l'oient de la barra espaiadora si està actiu
    if (currentSpacebarListener) {
        document.removeEventListener('keydown', currentSpacebarListener);
        currentSpacebarListener = null;
    }
    // Elimina l'oient de C/F si estigués actiu (poc probable aquí)
    if (currentKeydownListener) {
        document.removeEventListener('keydown', currentKeydownListener);
        currentKeydownListener = null;
    }

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
    if (array[0] === "Cert" && array[1] === "Fals") {
            // Si les opcions són "cert" i "fals", no les barreja
            return array;
    }
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
