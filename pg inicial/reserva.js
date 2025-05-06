document.getElementById('form-reserva').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio real
  
    // Simula envio e mostra mensagem de sucesso
    document.getElementById('form-reserva').style.display = 'none';
    document.getElementById('mensagem-sucesso').classList.remove('oculto');
  });
  