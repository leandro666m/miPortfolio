
                const elementosNombre = document.getElementsByClassName('textoNombre');
                for (let i = 0; i <= elementosNombre.length; i++) {
                    elementosNombre[i].addEventListener('animationend', function (e) {
                        elementosNombre[i].classList.remove('animado');
                    });
                    elementosNombre[i].addEventListener('mouseover', function (e) {
                        elementosNombre[i].classList.add('animado')
                    });
                }
  