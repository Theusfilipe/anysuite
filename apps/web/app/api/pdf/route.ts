import jsreport from "jsreport-core";

export async function GET() {
    const report = jsreport();
    await report.init();

    const data = {
        revisao: "D",
        numero_os: "475",
        tipo_manutencao: "Corretiva",
        setor_solicitante: "Manutenção",
        data_inicial: "24/01/2025",
        executantes: "Pedro e Raveli",
        data_final: "24/01/2025",
        equipamento: {
            nome: "Compressor",
            modelo: "N/A",
            identificacao: "RCS-TVCH-001",
            tipo: "N/A"
        },
        servico: "Instalação do Disjuntor 63A Trifásico e caixa do disjuntor.",
        materiais: ["Disjuntor 63A tripolar", "Caixa de Disjuntor"],
        observacoes: "Operacional.",
        status: "OK",
        conferente: "Gerente Responsável"
    };

    const res = await report.render({
        template: {
            content: `<!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; }
            h1 { text-align: center; text-transform: uppercase; }
            .container { width: 80%; margin: auto; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid black; padding: 8px; text-align: left; }
            .section { margin-top: 20px; font-weight: bold; }
            .signature { margin-top: 50px; text-align: center; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Ordem de Serviço Interna</h1>
            <p><strong>Revisão:</strong> {{revisao}}</p>
            <p><strong>Ordem de Serviço Nº:</strong> {{numero_os}}</p>
            <p><strong>Tipo de Manutenção:</strong> {{tipo_manutencao}}</p>
            <p><strong>Setor Solicitante:</strong> {{setor_solicitante}}</p>
            <p><strong>Data Inicial:</strong> {{data_inicial}}</p>
            <p><strong>Executantes:</strong> {{executantes}}</p>
            <p><strong>Data Final:</strong> {{data_final}}</p>

            <div class="section">Equipamento ou Ativo:</div>
                <table>
                    <tr><th>Nome</th><td>{{equipamento.nome}}</td></tr>
                    <tr><th>Modelo</th><td>{{equipamento.modelo}}</td></tr>
                    <tr><th>Identificação</th><td>{{equipamento.identificacao}}</td></tr>
                    <tr><th>Tipo</th><td>{{equipamento.tipo}}</td></tr>
                </table>

                <div class="section">Serviço a ser executado:</div>
                    <p>{{servico}}</p>

                    <div class="section">Materiais Necessários:</div>
                        <ul>
                            {{#each materiais}}
                            <li>{{this}}</li>
                            {{/each}}
                        </ul>

                        <div class="section">Observações:</div>
                        <p>{{observacoes}}</p>

                        <div class="section">Status do Equipamento:</div>
                            <table>
                                <tr><th>Equipamento</th><th>Status</th><th>Executante</th><th>Conferente</th></tr>
                                <tr>
                                    <td>{{equipamento.identificacao}}</td>
                                    <td>{{status}}</td>
                                    <td>{{executantes}}</td>
                                    <td>{{conferente}}</td>
                                </tr>
                            </table>

                            <div class="signature">
                                <p>__________________________</p>
                                <p>Assinatura da Manutenção</p>
                            </div>
        
                            <div class="signature">
                                <p>__________________________</p>
                                <p>Assinatura da Gerência</p>
                            </div>

                            <p style="text-align: center; font-size: 12px;">
                            RCS SUBAQUÁTICA ENGENHARIA LTDA.<br>
                            Rod. Amaral Peixoto, km 87, s/n, Lj 16c, Cond. Rodoshop - Vila Capri , Araruama/RJ , CEP 28981-630<br>
                            Av. das Américas, 171150 , sala 144, bloco A , Rio de Janeiro/RJ CEP 22790-704<br>
                            CNPJ 08.621.247/0001-37 | Telefone +55 22 3111-0017<br>
                            www.rcssubaquatica.com.br / contato@rcssubaquatica.com.br
                        </p>
                    </div>
                </body>
            </html>`,
            engine: "handlebars",
            recipe: "chrome-pdf"
        },
        data
    });

    return new Response(res.content, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": "attachment; filename=ordem_servico.pdf"
        }
    });
}