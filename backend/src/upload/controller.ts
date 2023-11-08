import fs from 'fs'
import pdfParse from 'pdf-parse'

// TODO: proper design pattern
// TODO: global error handler
export const pdfExtract = async (pathToFile: string) => {
  if (!pathToFile)  {
    throw new Error('No path to file')
  }
  console.log(__dirname)
  let dataBuffer = fs.readFileSync(__dirname + '/' + pathToFile)
  console.log(dataBuffer)
  const data = await pdfParse(dataBuffer)
  console.log(data)
}
export const upload = async (req: any, res: any) => {
  console.log('---- Upload  ----')
  console.log(req.body)
  console.log(req.file)
  // TODO maybe to s3 or something
  const pathToFile = `public/data/uploads/${req.file.fieldname}-${req.file.originalname}`
  await pdfExtract(pathToFile)

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
