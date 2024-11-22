import { readdirSync, writeFileSync } from 'fs'

const dir = readdirSync('./public/fractals')

const rscs = dir.map(x => ({
  name: x,
  path: `/fractals/${x}`,
}))

writeFileSync('./src/ressources.json', JSON.stringify(rscs))
