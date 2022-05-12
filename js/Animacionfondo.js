window.onload =
    function () {
        document.onmousemove =
            function (evento) {
                var x = -evento.clientX / 20;
                var y = -evento.clientY / 20;
                document.body.style.backgroundPosition = x + 'px ' + y + 'px';
            }
    } 