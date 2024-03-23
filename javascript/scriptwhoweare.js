const planos = [
    {
      "name": "VISITA INICIAL",
      "description": "Visitação do imóvel e identificação de suas necessidades para poder hospedar",
      "completo": true,
      "online": true,
      "foto": "caminho_para_foto1.jpg"
    },
    {
      "name": "FOTOGRAFIA",
      "description": "Produção de fotografias atuais do local para que o anúncio seja verossímil",
      "completo": true,
      "online": true,
      "foto": "caminho_para_foto2.jpg"
    },
    // Adicione mais objetos com a propriedade "foto" conforme necessário
  ];
  
  document.getElementById('lista').innerHTML= planos.map(item =>`
  <li>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p>Completo: ${item.completo ? 'Sim' : 'Não'}</p>
      <p>Online: ${item.online ? 'Sim' : 'Não'}</p>
      <img src="${item.foto}" alt="${item.name}" />
  </li>`
  ).join(' ')