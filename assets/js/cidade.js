$(document).ready(function () {
    const params = new URLSearchParams(window.location.search);
    const estadoId = params.get('id');
    const estadoNome = params.get('nome');
    $('#tituloEstado').text(`Cidades ${estadoNome}`);

    $.ajax({
        url: `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`,
        method: 'GET',
        success: function (cidades) {
            const $lista = $('#listaCidades');
            $lista.empty();
            cidades.sort((a, b) => a.nome.localeCompare(b.nome));
            cidades.forEach(cidade => {
                $lista.append(`<li>${cidade.nome}</li>`);
            });
        },
        error: function () {
            $('#listaCidades').html('<li>Erro ao carregar as cidades!</li>');
        }
    });

    $('#voltar').on('click', function () {
        window.location.href = 'index.html';
    });

    $('#pesquisa').on('input', function () {
        let texto = $(this).val().toLowerCase();

        $('#listaCidades li').filter(function () {
            const nome = $(this).text().toLowerCase();
            $(this).toggle(nome.includes(texto));
        });
    });
});