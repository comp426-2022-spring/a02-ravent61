import minimist from 'minimist'
import { flipACoin } from "./modules/coin.mjs";

const args = (process.argv.slice(2))
const call = minimist(args)['call']

console.log(String(call))
if (call == 'heads' || call == 'tails') {
    console.log(flipACoin(call))
}else{
    console.log('Error: no input.')
    console.log('Usage: node guess-flip --call=[heads|tails]')
}
