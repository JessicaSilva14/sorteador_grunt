document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('Sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numeroMaximo = document.getElementById('max').value;
        let numeroSorteado = Math.floor(Math.random() * numeroMaximo) + 1;
        document.getElementById('resultado').textContent = 'Número sorteado: ' + numeroSorteado;

        let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;
        alert('Número aleatório gerado: ' + numeroAleatorio);

        document.getElementById('resultado').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    });
});