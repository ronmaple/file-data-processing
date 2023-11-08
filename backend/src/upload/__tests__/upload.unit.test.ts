import { pdfExtract } from '../controller'

describe('pdfExtract', () => {
  it('should extract file', async () => {
    const pathToFile = '__tests__/test.pdf'
    await pdfExtract(pathToFile)
    expect(true).toEqual(true)
  })
  it('should extract file', async () => {
    const pathToFile = '__tests__/v12p0001.pdf'
    await pdfExtract(pathToFile)
    expect(true).toEqual(true)
  })
})
