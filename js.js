const conditionVictoire = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
var taquinAffichage = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]

const divInfo = document.querySelector('.info')
var firstPassage = true
var partieOn = false
var clickCompteur = 0
//window.localStorage.clear();

function entierAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function melangeTableau() {
  var i = 0
  while (i < 16) {
    var double = false
    var randomChiffre = Math.floor(Math.random() * (16)) + 1
    for (var y = 0; y < 16; y++) {

      if (taquinAffichage[y] === randomChiffre) {
        double = true
      }
    }
    if (double === false) {
      taquinAffichage[i] = randomChiffre
      i++
    }

  }
}

function affichageTableau() {

  const grille = document.querySelector(".grille")
  grille.innerHTML = ""
  for (var i = 0; i < 16; i++) {

    const item = document.createElement('div')
    item.setAttribute("onclick", "verif('" + i + "-" + taquinAffichage[i] + "')")
    if (taquinAffichage[i] == 16) {
      item.classList = "vide"
    } else {
      item.classList = "item"
      item.innerHTML = taquinAffichage[i]
     
    } 
    imageFond ()
    grille.appendChild(item)

  }
}
function imageFond ()
{
  const items= document.querySelectorAll('.item')
  items.forEach(elem => {

elem.style.backgroundImage = "url('https://api.lorem.space/image/fashion?w=400&h=400')"
var position = elem.innerHTML
 
  if(position==1)
  {
    elem.style.backgroundPosition = "top 400px left 400px"
  }
  if(position==2)
  {
    elem.style.backgroundPosition = "top 400px left 300px"
  }
  if(position==3)
  {
    elem.style.backgroundPosition = "top 400px left 200px"
  }
  if(position==4)
  {
    elem.style.backgroundPosition = "top 400px left 100px"
  }

  if(position==5)
  {
    elem.style.backgroundPosition = "top 300px left 400px"
  }
  if(position==6)
  {
    elem.style.backgroundPosition = "top 300px left 300px"
  }
  if(position==7)
  {
    elem.style.backgroundPosition = "top 300px left 200px"
  }
  if(position==8)
  {
    elem.style.backgroundPosition = "top 300px left 100px"
  }
  if(position==9)
  {
    elem.style.backgroundPosition = "top 200px left 400px"
  }
  if(position==10)
  {
    elem.style.backgroundPosition = "top 200px left 300px"
  }
  if(position==11)
  {
    elem.style.backgroundPosition = "top 200px left 200px"
  }
  if(position==12)
  {
    elem.style.backgroundPosition = "top 200px left 100px"
  }
  if(position==13)
  {
    elem.style.backgroundPosition = "top 100px left 400px"
  }
  if(position==14)
  {
    elem.style.backgroundPosition = "top 100px left 300px"
  }
  if(position==15)
  {
    elem.style.backgroundPosition = "top 100px left 200px"
  }
 
  })

  
}

function triche() {
  taquinAffichage = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
  for (var o = 0; o < 16; o++) {
    taquinAffichage[o] = o + 1

  }
  affichageTableau()

}


function verif(bouton) {
  var decoupe = bouton.split('-')
  var positionItem = decoupe[0]
  var valueItem = decoupe[1]
  if (partieOn == false) {
    return
  }
  clickCompteur++
  AfficherInfo ()
  
  if (positionItem == 0) {
    if (taquinAffichage[1] == 16) {
      taquinAffichage[1] = valueItem
      taquinAffichage[0] = 16
      

    }
    if (taquinAffichage[4] == 16) {
      taquinAffichage[4] = valueItem
      taquinAffichage[0] = 16
     
    }
  }
  if (positionItem == 1) {
    if (taquinAffichage[0] == 16) {
      taquinAffichage[0] = valueItem
      taquinAffichage[1] = 16
      

    }
    if (taquinAffichage[2] == 16) {
      taquinAffichage[2] = valueItem
      taquinAffichage[1] = 16
     
    }
    if (taquinAffichage[5] == 16) {
      taquinAffichage[5] = valueItem
      taquinAffichage[1] = 16
    
    }
  }
  if (positionItem == 2) {
    if (taquinAffichage[1] == 16) {
      taquinAffichage[1] = valueItem
      taquinAffichage[2] = 16
  
    }
    if (taquinAffichage[3] == 16) {
      taquinAffichage[3] = valueItem
      taquinAffichage[2] = 16
   
    }
    if (taquinAffichage[6] == 16) {
      taquinAffichage[6] = valueItem
      taquinAffichage[2] = 16
 
    }
  }
  if (positionItem == 3) {
    if (taquinAffichage[2] == 16) {
      taquinAffichage[2] = valueItem
      taquinAffichage[3] = 16

    }
    if (taquinAffichage[7] == 16) {
      taquinAffichage[7] = valueItem
      taquinAffichage[3] = 16
  
    }
  }

  if (positionItem == 4) {
    if (taquinAffichage[0] == 16) {
      taquinAffichage[0] = valueItem
      taquinAffichage[4] = 16
  
    }
    if (taquinAffichage[5] == 16) {
      taquinAffichage[5] = valueItem
      taquinAffichage[4] = 16
 
    }
    if (taquinAffichage[8] == 16) {
      taquinAffichage[8] = valueItem
      taquinAffichage[4] = 16
  
    }
  }
  if (positionItem == 5) {
    if (taquinAffichage[1] == 16) {
      taquinAffichage[1] = valueItem
      taquinAffichage[5] = 16
   
    }
    if (taquinAffichage[4] == 16) {
      taquinAffichage[4] = valueItem
      taquinAffichage[5] = 16

    }
    if (taquinAffichage[6] == 16) {
      taquinAffichage[6] = valueItem
      taquinAffichage[5] = 16

    }
    if (taquinAffichage[9] == 16) {
      taquinAffichage[9] = valueItem
      taquinAffichage[5] = 16

    }
  }


  if (positionItem == 6) {
    if (taquinAffichage[2] == 16) {
      taquinAffichage[2] = valueItem
      taquinAffichage[6] = 16

    }
    if (taquinAffichage[5] == 16) {
      taquinAffichage[5] = valueItem
      taquinAffichage[6] = 16

    }
    if (taquinAffichage[7] == 16) {
      taquinAffichage[7] = valueItem
      taquinAffichage[6] = 16

    }
    if (taquinAffichage[10] == 16) {
      taquinAffichage[10] = valueItem
      taquinAffichage[6] = 16

    }
  }

  if (positionItem == 7) {
    if (taquinAffichage[3] == 16) {
      taquinAffichage[3] = valueItem
      taquinAffichage[7] = 16

    }
    if (taquinAffichage[6] == 16) {
      taquinAffichage[6] = valueItem
      taquinAffichage[7] = 16

    }
    if (taquinAffichage[11] == 16) {
      taquinAffichage[11] = valueItem
      taquinAffichage[7] = 16

    }

  }
  if (positionItem == 8) {
    if (taquinAffichage[4] == 16) {
      taquinAffichage[4] = valueItem
      taquinAffichage[8] = 16

    }
    if (taquinAffichage[9] == 16) {
      taquinAffichage[9] = valueItem
      taquinAffichage[8] = 16

    }
    if (taquinAffichage[12] == 16) {
      taquinAffichage[12] = valueItem
      taquinAffichage[8] = 16

    }

  }
  if (positionItem == 9) {
    if (taquinAffichage[5] == 16) {
      taquinAffichage[5] = valueItem
      taquinAffichage[9] = 16

    }
    if (taquinAffichage[8] == 16) {
      taquinAffichage[8] = valueItem
      taquinAffichage[9] = 16
      
    }
    if (taquinAffichage[10] == 16) {
      taquinAffichage[10] = valueItem
      taquinAffichage[9] = 16
   
    }
    if (taquinAffichage[13] == 16) {
      taquinAffichage[13] = valueItem
      taquinAffichage[9] = 16
    
    }

  }
  if (positionItem == 10) {
    if (taquinAffichage[6] == 16) {
      taquinAffichage[6] = valueItem
      taquinAffichage[10] = 16

    }
    if (taquinAffichage[9] == 16) {
      taquinAffichage[9] = valueItem
      taquinAffichage[10] = 16
 
    }
    if (taquinAffichage[11] == 16) {
      taquinAffichage[11] = valueItem
      taquinAffichage[10] = 16

    }
    if (taquinAffichage[14] == 16) {
      taquinAffichage[14] = valueItem
      taquinAffichage[10] = 16
 
    }

  }
  if (positionItem == 11) {
    if (taquinAffichage[7] == 16) {
      taquinAffichage[7] = valueItem
      taquinAffichage[11] = 16
   
    }
    if (taquinAffichage[10] == 16) {
      taquinAffichage[10] = valueItem
      taquinAffichage[11] = 16
   
    }
    if (taquinAffichage[15] == 16) {
      taquinAffichage[15] = valueItem
      taquinAffichage[11] = 16
 
    }


  }

  if (positionItem == 12) {
    if (taquinAffichage[8] == 16) {
      taquinAffichage[8] = valueItem
      taquinAffichage[12] = 16
 
    }
    if (taquinAffichage[13] == 16) {
      taquinAffichage[13] = valueItem
      taquinAffichage[12] = 16

    }

  }

  if (positionItem == 13) {
    if (taquinAffichage[9] == 16) {
      taquinAffichage[9] = valueItem
      taquinAffichage[13] = 16

    }
    if (taquinAffichage[12] == 16) {
      taquinAffichage[12] = valueItem
      taquinAffichage[13] = 16

    }
    if (taquinAffichage[14] == 16) {
      taquinAffichage[14] = valueItem
      taquinAffichage[13] = 16

    }


  }
  if (positionItem == 14) {
    if (taquinAffichage[10] == 16) {
      taquinAffichage[10] = valueItem
      taquinAffichage[14] = 16

    }
    if (taquinAffichage[13] == 16) {
      taquinAffichage[13] = valueItem
      taquinAffichage[14] = 16

    }
    if (taquinAffichage[15] == 16) {
      taquinAffichage[15] = valueItem
      taquinAffichage[14] = 16

    }

  }
  if (positionItem == 15) {
    if (taquinAffichage[11] == 16) {
      taquinAffichage[11] = valueItem
      taquinAffichage[15] = 16

    }
    if (taquinAffichage[14] == 16) {
      taquinAffichage[14] = valueItem
      taquinAffichage[15] = 16

    }

  }

  deleteChild()
  affichageTableau()
  imageFond ()
  
  gagne()
}

function deleteChild() {
  var e = document.querySelector(".grille");


  var child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}
 const displayNone = document.querySelector(".melange")
  const displayON = document.querySelector(".arret")
function start() {
  taquinAffichage = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
  melangeTableau()
  affichageTableau()
  imageFond ()
  partieOn = true
  chronoStart()
  clickCompteur = 0
 
  displayNone.style.display = 'none'
  displayON.style.display = 'block'

}

triche()
affichageTableau()


function gagne() {
  var win = true
  for (var t = 0; t < 16; t++) {
    if (taquinAffichage[t] != t + 1) {
      win = false
    }
  }
  if (win == true) {
    console.log("gagne")
    partieOn = false
    stop()
    const timer = localStorage.getItem("seconde")
    console.log(timer)
    if (timer === null) {
      localStorage.setItem("heure", h)
      localStorage.setItem("minute", m)
      localStorage.setItem("seconde", s)
      localStorage.setItem("click",clickCompteur)    
      bestTime()    
    } else {
      const heureTest = localStorage.getItem("heure")
      const minuteTest = localStorage.getItem("minute")
      const secondeTest = localStorage.getItem("seconde")
      var comparValeurStorage = ((heureTest * 3600000) + (minuteTest * 60000) + (secondeTest * 1000))
      var comparValeurNow = ((h * 3600000) + (m * 60000) + (s * 1000))
      if (comparValeurNow < comparValeurStorage) {
        localStorage.setItem("heure", h)
        localStorage.setItem("minute", m)
        localStorage.setItem("seconde", s)
        localStorage.setItem("click",clickCompteur) 
      }
      bestTime()
      displayNone.style.display = 'block'
  displayON.style.display = 'none'
    }

  } else {
    console.log("perdu")
  }
}


var s = 0
var m = 0
var h = 0

var seconde
var minute
var heure

function setSecond() {
  s += 1
  if (s == 60) {
    s = 0
  }

  document.getElementById('s').innerHTML = s + ' Sec'
}
function AfficherInfo () {

  var infoClick = "Nombre de click = "+clickCompteur
  divInfo.innerHTML= infoClick
}
AfficherInfo()

function setMinute() {
  m += 1
  if (m == 60) {
    m = 0
  }

  document.getElementById('m').innerHTML = m + ' min'
}

function setHeure() {
  h += 1
  document.getElementById('h').innerHTML = h + ' h'
}

function chronoStart() {
  heure = setInterval(setHeure, 3600000)
  minute = setInterval(setMinute, 60000)
  seconde = setInterval(setSecond, 1000)

}

function stop() {
  clearInterval(heure)
  clearInterval(seconde)
  clearInterval(minute)


}
function bestTime ()
{
    const bestTime = document.querySelector('.bestTime')
    const heureAffichage = localStorage.getItem("heure")
    const minuteAffichage = localStorage.getItem("minute")
    const secondeAffichage = localStorage.getItem("seconde")
    const clickAffichage = localStorage.getItem("click")
    
    bestTime.style.backgroundColor = 'darkslateblue';
  


    var temps = ''
    if( heureAffichage != 0)
    {
        temps= temps + heureAffichage +" h "
    }
        temps= temps + minuteAffichage +" min "
        temps= temps + secondeAffichage +" sec"
    bestTime.innerHTML = '<h2>Votre meilleur temps est de</h2>'+temps+'</br> Le nombre de click est de : '+clickAffichage
    s = 0
    m = 0
    h = 0
}

const test = localStorage.getItem("seconde")
if (test != null)
{
    bestTime()
}
const arret = document.querySelector(".arret")
function arretGame (){
  location.reload(true)

}