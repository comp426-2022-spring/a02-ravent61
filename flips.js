import minimist from 'minimist'
import { coinFlip } from "./modules/coin.mjs";
import { coinFlips } from "./modules/coin.mjs";
import { countFlips } from "./modules/coin.mjs";
import { flipACoin } from "./modules/coin.mjs";

const args = (process.argv.slice(2))
const number = minimist(args)['number'] || 1

const flips = coinFlips(number)
const count = countFlips(flips)

print(args)
console.log(flips)
console.log(count)

