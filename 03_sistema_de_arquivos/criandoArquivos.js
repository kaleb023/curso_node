import path from 'path';
import url from 'url';
import {promises as fs} from 'fs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const arquivo = path.join(__dirname,'boas_vindas.txt');

try{
    await fs.appendFileFile(arquivo, '\nSaudações')
} catch (error) {
    console.log('Erro ao criar arquivo', error)
}