

export function GenerateBrgyClearance(
  filename,
  fullname,
  sex,
  purpose,
  means,
  address,
  captain,
  orNumber,
  issuedAt,
  issuedOn,
  amount
) {
  const pdf = require("pdfkit");
  const fs = require("fs");
  const doc = new pdf({ size: "LETTER", margin: 32 });
  doc.pipe(fs.createWriteStream(`../src/assets/pdf/${filename}.pdf`));

  doc
    .fontSize(12)
    .text("Republic of the Philippines", { align: "center" })
    .text("Province of Antique", { align: "center" })
    .text("Municipality of Belison", { align: "center" })
    .text("Barangay Salvacion", { align: "center" });

  doc
    .moveDown()
    .moveDown()
    .fontSize(12)
    .text("OFFICE OF THE PUNONG BARANGAY", { align: "center" });

  doc.moveDown().fontSize(16).text("BARANGAY CLEARANCE", { align: "center" });

  doc.moveDown().moveDown().moveDown().text("TO WHOM IT MAY CONCERN:");

  doc
    .moveDown()
    .text(
      `     This is to certify that ${fullname}, of legal age, ${sex} and a resident of Barangay Salvacion, Belison, Antique is a person of good moral character and a law abiding citizen. ${
        sex === "he" ? "He" : "She"
      } has no derogatory records or any case recorded on the Blotter of this Barangay.`
    );

  doc.moveDown().text("For the purpose of,");
  doc.moveDown().text(purpose, { align: "center" });
  doc.moveDown().text(`For ${means} located at ${address}.`);

  doc
    .moveDown()
    .moveDown()
    .moveDown()
    .moveDown()
    .text(captain, { align: "right" })
    .text("Punong Barangay", { align: "right" });

  doc.moveDown().moveDown().moveDown().text("Fees paid under:");

  doc
    .moveDown()
    .text(`O.R. No: ${orNumber}`)
    .text(`Issued at: ${issuedAt}`)
    .text(`Issued on: ${issuedOn}`)
    .text(`Amount: ${amount}`);

  doc.end();
}

export default { GenerateBrgyClearance };
