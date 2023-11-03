
export const upload = (req: any, res: any) => {
  console.log('---- Upload  ----')
  console.log(req.body)
  console.log(req.file)
  res.json('OK')
}
