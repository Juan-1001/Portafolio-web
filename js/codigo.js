// nav
$(document).ready(main);

var contador = 1;


function main (){
    $('.menu_bar').click(function(){
        if (contador == 1){
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }
    });
    // mostramos y ocultamos dropdwon
    $('.submenu').click(function(){
        $(this).children('.children').slideToggle();
    });
}

// Hablidades técnicas

// Ofimatica
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 70) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
// Ai
var i = 0;
function move2() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar2");
    var width = 10;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 65) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
// Ps
var i = 0;
function move3() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar3");
    var width = 10;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 55) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
// HTML
var i = 0;
function move4() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar4");
    var width = 10;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 60) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
// CSS
var i = 0;
function move5() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar5");
    var width = 10;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 55) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
// InDesign
var i = 0;
function move6() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar6");
    var width = 10;
    var id = setInterval(frame, 60);
    function frame() {
      if (width >= 15) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
// Animate
var i = 0;
function move7() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar7");
    var width = 10;
    var id = setInterval(frame, 25);
    function frame() {
      if (width >= 30) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
// Protools
var i = 0;
function move8() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar8");
    var width = 10;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 40) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
//  Js
var i = 0;
function move9() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar9");
    var width = 10;
    var id = setInterval(frame, 50);
    function frame() {
      if (width >= 15) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
// Git
var i = 0;
function move10() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar10");
    var width = 10;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 60) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
// Bootstrap
var i = 0;
function move11() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar11");
    var width = 10;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 40) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}

// Habiliddes blandas


// Creatividad
var i = 0;
function move12() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar12");
    var width = 10;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 82) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
// Sociable
var i = 0;
function move13() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar13");
    var width = 10;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 76) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
// Acertivo
var i = 0;
function move14() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar14");
    var width = 10;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 66) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
// Paciente o adaptable
var i = 0;
function move15() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar15");
    var width = 10;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 65) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
// Comunicación
var i = 0;
function move16() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar16");
    var width = 10;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 85) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
// Cultura empresarial
var i = 0;
function move17() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar17");
    var width = 10;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 78) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
// Servicio al cliente
var i = 0;
function move18() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar18");
    var width = 10;
    var id = setInterval(frame, 25);
    function frame() {
      if (width >= 75) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
// Inteligencia emocional
var i = 0;
function move19() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar19");
    var width = 10;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 70) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
//  Productividad
var i = 0;
function move20() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar20");
    var width = 10;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 78) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
// Git
var i = 0;
function move21() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar21");
    var width = 10;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 60) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
// Bootstrap
var i = 0;
function move22() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar22");
    var width = 10;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 65) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}

// que hago

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior', //botones
			next: '.carousel__siguiente' //botones
		},
		responsive: [
			{
			  // pantallas mayores >= 800px
			  breakpoint: 300,
			  settings: {
				// cantidad de imagenes en el carousel
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},{
			  // pantallas mayores >= 1024px
			  breakpoint: 800,
			  settings: {
        // cantidad de imagenes en en carousel
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // pantallas mayores >= 1330px
			  breakpoint: 1430,
			  settings: {
        // cantidad de imagenes en en carousel
				slidesToShow: 3,
				slidesToScroll: 3
			  }
			}
		]
	});
});
// formulario

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
