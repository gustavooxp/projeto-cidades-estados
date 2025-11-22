$(document).ready(function () {
  if (window.location.pathname.endsWith('estados.html')) {
    const $estados = $('#estados');
    const $btn = $('#verCidades');

    $.ajax({
      url: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
      method: 'GET',
      success: function (estados) {
        $estados.empty();
        $estados.append('<option value="">Selecione um estado</option>');
        estados.sort((a, b) => a.nome.localeCompare(b.nome));
        estados.forEach(estado => {
          $estados.append(`<option value="${estado.id}">${estado.nome}</option>`);
        });
      },
      error: function () {
        alert('Erro ao carregar os estados!');
      }
    });

    $estados.on('change', function () {
      $btn.prop('disabled', !$(this).val());
    });

    $btn.on('click', function () {
      const estadoId = $estados.val();
      const estadoNome = $("#estados option:selected").text();
      window.location.href = `cidades.html?id=${estadoId}&nome=${estadoNome}`;
    });
  }
});