import { NextResponse } from "next/server";
import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

export async function GET() {
    const doc = new PDFDocument({ margin: 50 });
    const chunks: Buffer[] = [];

    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => {});

    const pageWidth = doc.page.width;
    const margin = 20;
    const col1X = margin; // First column (left)
    const col2X = pageWidth / 3; // Second column (center)
    const col3X = (pageWidth / 3) * 2 - 30; // Third column (moved leftward)
    let y = 50;

    // Load logo image
    const logoPath = path.join(process.cwd(), "public", "RCS SUB LOGO.png");
    if (fs.existsSync(logoPath)) {
        doc.image(logoPath, col1X, 25, { width: 140 });
    }

    // Title (Center Column)
    doc.fontSize(16).text("Ordem de Serviço Interna", col2X, y, { width: pageWidth / 3, align: "center" });

    // Right Column (Shifted Left for Better Spacing)
    doc.fontSize(12).text("F-RCS-MAN-33", col3X, y, { width: pageWidth / 3 - 40, align: "right" });
    doc.text("Revisão: D", col3X, y + 15, { width: pageWidth / 3 - 40, align: "right" });
    y += 50;

    // Section: Order Information with Gray Background
    doc.rect(margin, y, pageWidth - margin * 2, 20).fill("#DDDDDD"); // Gray Background
    doc.fillColor("black").fontSize(12);
    doc.text("ORDEM DE SERVIÇO: Nº 475", col1X + 5, y + 5);
    doc.text("TIPO DE MANUTEÇÃO: Corretiva", col3X, y + 5);
    y += 20;

    // Add a horizontal line
    doc.moveTo(margin, y).lineTo(pageWidth - margin, y).stroke();
    y += 10;

    // Section: Additional Details
    doc.text("Setor Solicitante: Manutenção", col1X, y);
    doc.text("Data Inicial: 24/01/2025", col3X, y);
    y += 20;

    // Add a horizontal line
    doc.moveTo(margin, y).lineTo(pageWidth - margin, y).stroke();
    y += 10;

    doc.text("Executante pela Manutenção: Pedro e Raveli", col1X, y);
    doc.text("Data Final: 24/01/2025", col3X, y);
    y += 20;

    // Add another horizontal line
    doc.moveTo(margin, y).lineTo(pageWidth - margin, y).stroke();
    y += 1;

    // Section: Order Information with Gray Background
    doc.rect(margin, y, pageWidth - margin * 2, 20).fill("#DDDDDD"); // Gray Background
    doc.fillColor("black").fontSize(12);
    doc.text("Equipamento ou Ativo:", col1X + 5, y + 5);
    
    y += 20;

    doc.moveTo(margin, y).lineTo(pageWidth - margin, y).stroke();
    y += 10;

    doc.text("Nome: Compressor", col1X, y);
    doc.text("Modelo: N/A", col3X, y);
    y += 20;

    doc.moveTo(margin, y).lineTo(pageWidth - margin, y).stroke();
    y += 10;

    doc.text("Identificação: RCS-TVCH-001", col1X, y);
    doc.text("Tipo: N/A", col3X, y);
    y += 20;

    doc.moveTo(margin, y).lineTo(pageWidth - margin, y).stroke();
    y += 1;

    doc.rect(margin, y, pageWidth - margin * 2, 20).fill("#DDDDDD"); // Gray Background
    doc.fillColor("black").fontSize(12);
    doc.text("Serviço a ser executado:", col1X + 5, y + 5);

    y += 20;

    doc.moveTo(margin, y).lineTo(pageWidth - margin, y).stroke();
    y += 10;

    doc.text("Instalação do Disjuntor 63A Trifásico e caixa do disjuntor.", col1X, y);

    y += 50;

    doc.moveTo(margin, y).lineTo(pageWidth - margin, y).stroke();
    y += 1;
    doc.rect(margin, y, pageWidth - margin * 2, 20).fill("#DDDDDD"); // Gray Background
    doc.fillColor("black").fontSize(12);
    doc.text("Materiais Necessários:", col1X + 5, y + 5);
    y += 20;

    doc.moveTo(margin, y).lineTo(pageWidth - margin, y).stroke();
    y += 10;
    doc.text("Disjuntor 63A tripolar.", col1X, y);
    y += 20;
    doc.text("Caixa de Disjuntor.", col1X, y);
    y += 40;
    

    doc.moveTo(margin, y).lineTo(pageWidth - margin, y).stroke();
    y += 1;
    doc.rect(margin, y, pageWidth - margin * 2, 20).fill("#DDDDDD"); // Gray Background
    
    doc.fillColor("black").fontSize(12);
    doc.text("Observações:", col1X + 5, y + 5);
    y += 20;
    
    doc.moveTo(margin, y).lineTo(pageWidth - margin, y).stroke();
    y += 5;
    doc.text("Operacional.", col1X, y);
    y += 20;

    doc.moveTo(margin, y).lineTo(pageWidth - margin, y).stroke();
    y += 1;
    doc.rect(margin, y, pageWidth - margin * 2, 20).fill("#DDDDDD"); // Gray Background
    doc.fillColor("black").fontSize(12);
    doc.text("Responsável.", col1X+5, y+5);
    y += 20;
    doc.moveTo(margin, y).lineTo(pageWidth - margin, y).stroke();

    doc.text("Equipamento", col1X + 5, y + 5);

    doc.text("Status", col1X + 120, y + 5);

    doc.text("Executante", col2X + 5, y + 5);

    doc.text("Conferente", col3X + 5, y + 5);

    y += 20;
    doc.moveTo(margin, y).lineTo(pageWidth - margin, y).stroke();

    doc.text("RCS-TVCH-001", col1X + 5, y + 5);

    doc.text("OK", col1X + 120, y + 5);

    y += 20;
    doc.moveTo(margin, y).lineTo(pageWidth - margin, y).stroke();

    y += 50;

    doc.text("Assinatura da Manutenção", col1X + 30, y + 5);
    
    doc.text("Assinatura da Gerência", col3X + 5, y + 5);


    // Finalize the document
    doc.end();

    await new Promise((resolve) => doc.on("end", resolve));

    // Create a response with the final buffer
    const pdfBuffer = Buffer.concat(chunks);
    return new NextResponse(pdfBuffer, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": "attachment; filename=ordem_servico.pdf",
        },
    });
}