export function GenerateCertificateOfResidency(
  filename,
  fullname,
  sex,
  civilStatus,
  duration,
  day,
  month,
  year,
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
    .fontSize(16)
    .moveDown()
    .moveDown()
    .text("OFFICE OF THE PUNONG BARANGAY", { align: "center" });

  doc.moveDown().text("CERTIFICATION OF RESIDENCY", { align: "center" });

  doc.moveDown().text("TO WHOM IT MAY CONCERN:");

  doc
    .moveDown()
    .text(
      `     This is to certify that ${fullname} of legal age, ${sex}, ${civilStatus} and bonafide resident of Barangay Salvacion, Belison, Antique. She live for almost ${duration} years here in Barangay Salvacion, Belison, Antique.`
    )
    .moveDown()
    .text(
      `     This Certification is being issued upon request of the interested party to be used for whatever legal purposes.`
    )
    .moveDown()
    .text(
      `     Issued this ${day} of ${month}, ${year} at Barangay Salvacion, Belison, Antique.`
    );

  doc
    .moveDown()
    .moveDown()
    .moveDown()
    .moveDown()
    .text(captain, { align: "right" })
    .text("Punong Barangay", { align: "right" });

  doc
    .moveDown()
    .moveDown()
    .moveDown()
    .text(`Fees paid under:`)
    .moveDown()
    .text(`O.R. number: ${orNumber}`)
    .text(`Issued at: ${issuedAt}`)
    .text(`Issued on: ${issuedOn}`)
    .text(`Amount: ${amount}`);

  doc.end();
}

export default { GenerateCertificateOfResidency };
