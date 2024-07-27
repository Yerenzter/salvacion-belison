export function GenerateCertificateOfIndigency(
  filename,
  fullname,
  civilStatus,
  reason,
  day,
  month,
  year,
  captain,
  MyName 
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
    .fontSize(16)
    .text("OFFICE OF THE PUNONG BARANGAY", { align: "center" });

  doc.moveDown().moveDown().text("TO WHOM IT MAY CONCERN:");

  doc
    .moveDown()
    .text(
      `     This is to certify that ${fullname} of legal age, ${civilStatus} and a resident of Barangay, Salvacion, Belison, Antique is enlisted as one of the indigent in the Barangay due to their ${reason}.`
    )
    .moveDown()
    .text(
      `     This Certification is being issued upon request of the interested party to be used for whatever legal purpose it may serve.`
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
    .text(MyName , { align: "right "})
    .text(captain, { align: "right" })
    // .text(" DOMINGO T. SERASPE", { align: "right" })
    .text("Punong Barangay", { align: "right" });


  doc.end();
}

export default { GenerateCertificateOfIndigency };
