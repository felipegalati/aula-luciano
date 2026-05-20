let hinoAudio;
let popup;

function interagir() {
    if (!document.getElementById("estilo-palmeiras")) {
        const style = document.createElement("style");
        style.id = "estilo-palmeiras";
        style.innerHTML = `
            body.tema-palmeiras {
                background-image: url('assets/fundo.webp') !important;
                background-size: cover !importan;
                background-attachment: fixed !important;
            }
            body.tema-palmeiras #container {
                background-color: rgba(0, 100, 55, 0.9) !important;
                border-color: #ffffff !important;
                color: #ffffff !important;
            }
            body.tema-palmeiras header h1 {
                color: #ffffff !important;
                border-bottom-color: #ffffff !important;
            }
            body.tema-palmeiras .caixa {
                background-color: #004225 !important;
                border-color: #ffffff !important;
                color: #ffffff !important;
            }
            body.tema-palmeiras .caixa h2 {
                color: #a3ffc2 !important;
                border-bottom-color: #a3ffc2 !important;
            }
            body.tema-palmeiras .frase-devops {
                color: #ffffff !important;
            }
            body.tema-palmeiras button {
                background-color: #004225 !important;
                color: white !important;
                border-color: #ffffff !important;
            }
        `;
        document.head.appendChild(style);
    }

    if (!hinoAudio) {
        hinoAudio = new Audio("assets/hino.mp3"); 
        hinoAudio.loop = true;
    }

    if (!popup) {
        popup = document.createElement("div");
        popup.id = "popup-palmeiras";
        
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)"; 
        popup.style.backgroundColor = "#006437"; 
        popup.style.border = "5px ridge #ffffff";
        popup.style.padding = "20px";
        popup.style.zIndex = "9999"; 
        popup.style.textAlign = "center";
        popup.style.boxShadow = "0px 0px 50px rgba(0,0,0,0.8)"; 
        
        const titulo = document.createElement("h2");
        titulo.innerHTML = "<marquee scrollamount='20'>AVANTI PALESTRA!!!</marquee>";
        titulo.style.color = "#ffffff";
        titulo.style.margin = "0 0 15px 0";
        titulo.style.fontSize = "24px";
        popup.appendChild(titulo);

        const escudo = document.createElement("img");
        escudo.src = "assets/escudo.png"; 
        escudo.alt = "Escudo do Palmeiras";
        escudo.style.width = "300px";
        popup.appendChild(escudo);

        const btnFechar = document.createElement("button");
        btnFechar.innerText = "Parar";
        btnFechar.style.display = "block";
        btnFechar.style.margin = "20px auto 0 auto";
        btnFechar.style.color = "red";
        btnFechar.style.cursor = "pointer";
        
        btnFechar.onclick = function() {
            hinoAudio.pause();
            hinoAudio.currentTime = 0;
            popup.style.display = "none";
            document.body.classList.remove("tema-palmeiras");
        };
        
        popup.appendChild(btnFechar);
        document.body.appendChild(popup);
    }

    document.body.classList.add("tema-palmeiras");
    popup.style.display = "block";
    hinoAudio.play();
}