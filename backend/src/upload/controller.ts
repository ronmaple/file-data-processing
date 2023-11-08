import fs from 'fs'
import pdfParse from 'pdf-parse'

export const upload = (req: any, res: any) => {
  console.log('---- Upload  ----')
  console.log(req.body)
  console.log(req.file)
  // TODO maybe to s3 or something
  const pathToFile = `public/data/uploads/${req.file.fieldname}-${req.file.originalname}`
  let dataBuffer = fs.readFileSync(pathToFile)
  pdfParse(dataBuffer).then(function(data) {
    console.log(data)
  })
  res.json('OK')
}

// console.log(data):
// main issue is that the text has no space in the middle, and the spaces are weird.
/**
 {
  numpages: 1,
  numrender: 1,
  info: {
    PDFFormatVersion: '1.4',
    IsAcroFormPresent: false,
    IsXFAPresent: false,
    Title: 'test',
    Producer: 'Skia/PDF m120 Google Docs Renderer'
  },
  metadata: null,
  text: '\n\nHelloThere',
  version: '1.10.100'
} 
 */
