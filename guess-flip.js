import minimist from 'minimist'
import { flipACoin } from "./modules/coin.mjs";

const args = (process.argv.slice(2))
const call = minimist(args)['call']


if (call == null || call != 'heads' || call != "tails") {
    console.log('Error: no input.')
    console.log('Usage: node guess-flip --call=[heads|tails]')
    process.exit(1)
}
console.log(flipACoin(call))
