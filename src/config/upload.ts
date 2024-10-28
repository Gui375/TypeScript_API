import multer, { StorageEngine } from 'multer'
import path from 'node:path'
import crypto from 'node:crypto'

//Define o tipo de estrutura de dados que vamos ter por padrão (Default)
type UploadConfig = {
  directory: string
  storage: StorageEngine
}
//Variavel global do node __dirname
const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads')

export default {
  //passamos o diretorio definido acima
  directory: uploadFolder,
  //Definimos como vamos salvar, no caso será dentro do disco
  storage: multer.diskStorage({
    destination: uploadFolder,
    //configura o nome que o arquivo irá para o diretorio
    filename(request, file, callback) {
      const filHash = crypto.randomBytes(10).toString('hex')
      const filename = `${filHash}_${file.originalname}`
      callback(null, filename)
    },
  }),
} as UploadConfig
