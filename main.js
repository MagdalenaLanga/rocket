//3. ta funkcja bierze 5 ze zmiennej counter i:
function counter() {
            
    //b. jezeli counter jest rowny 1, to usuwa klase hidden z obrazka ognia i on sie wtedy pojawia
    if (count===1){
      fire.classList.remove("hidden");
    } //c. jezeli count jest 0 to usuwam juz animacje, wyswietlam w p "GO" i do listy class diva w ktorym jest rakieta dodaje klase z animacja rakiety
    else if (count===0) {
      para.classList.remove("animate");
      para.textContent = "GO";
      square.className += " blastof";
    } 

    //a. jezeli counter jest wiekszy od 0, to przypisuje wartosc counteru do p, odejmuje od counteru 1 i wywoluje sie jeszcze raz z 1sek opuznieniem
    if (count > 0) {
      para.textContent = count;
      count--; 
      setTimeout(counter, 1000);
    }
}
//2. po wyzwolniu kliknieciem, funkcja ustawia zmienna count na 5, dodaje do p klase animate, ktora wlacza mruganie (css), wywoluje funkcje counter (odpowiedzialna za wyswietlanie liczenia i start rakiety) i usuwa event listenera ze start zeby nie mozna bylo kliknac kilka razy i efekty funkcji by sie na siebie nalozyly
function startClickHandler() {
  count = 5;
  para.classList.add("animate");
  counter();
  start.removeEventListener('click', startClickHandler);
}
//ustawiam count na -1, nie moge na zero bo jezeli counter jeszcze leci, to gdy count jest 0 to wykonuje sie tam if
function reset() {
  count = -1;
  square.classList.remove("blastof"); //usuwam animacje rakiety, zeby wrocila na swoje miejsce
  para.classList.remove("animate");//usuwam mruganie cyfr (animate), ktore potem doda sie jeszcze raz po nacisnieciu start
  start.addEventListener('click', startClickHandler); //dodaje znowu mozliwosc naciesniecia przycisku start
  para.textContent = ""; //ustawiam p na pusty string zeby 'GO' zniknelo
  fire.classList.add("hidden"); //chowam plomyczki
}

let circle = document.querySelector('.circle');
let para = circle.querySelector('.number');
let fire = document.getElementById("width30");
let start = document.getElementById("start");
let square = document.querySelector(".rocket");
let resetButton = document.getElementById("reset");
let count = 0;
start.addEventListener('click', startClickHandler); //1. na przycisku start mam event listener, który wyzwala funkcję
resetButton.addEventListener("click", reset);