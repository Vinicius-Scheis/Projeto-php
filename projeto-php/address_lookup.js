document.getElementById('user-cep').addEventListener('blur', function (event) {
  const cep = this.value.replace(/\D/g, ''); // Remove caracteres não numéricos do CEP

  if (cep.length !== 8) {
    // Exibe a mensagem de erro abaixo da caixa de CEP
    document.getElementById('cep-error').textContent = "O CEP deve conter 8 dígitos";
    return; // Retorna sem fazer a requisição Ajax se o formato do CEP estiver incorreto
  }

  // Limpa a mensagem de erro quando o formato do CEP estiver correto
  document.getElementById('cep-error').textContent = "";

  // Envia a requisição Ajax para obter os detalhes do endereço
  fetch('get_address.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `cep=${cep}`
  })
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        // Se o serviço retornar uma mensagem de erro, exibe-a
        document.getElementById('cep-error').textContent = "CEP não encontrado";
        return; // Retorna sem preencher os campos do endereço
      }

      // Preenche os campos do formulário com os detalhes do endereço
      document.getElementById('logradouro').textContent = `Logradouro: ${data.logradouro ? data.logradouro : ''}`;
      document.getElementById('bairro').textContent = `Bairro: ${data.bairro ? data.bairro : ''}`;
      document.getElementById('localidade').textContent = `Localidade: ${data.localidade ? data.localidade : ''}`;
      document.getElementById('uf').textContent = `UF: ${data.uf ? data.uf : ''}`;
      // Adicione os outros campos de endereço conforme necessário
    })
    .catch(error => {
      console.error('Erro ao buscar dados do CEP:', error);
    });
});
