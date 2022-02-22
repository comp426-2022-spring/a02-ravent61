import minimist from 'minimist'
import { coinFlip } from "./modules/coin.mjs";
import { coinFlips } from "./modules/coin.mjs";
import { countFlips } from "./modules/coin.mjs";
import { flipACoin } from "./modules/coin.mjs";

const args = (process.argv.slice(2))
const number = minimist(args)['number'] || 1

const flips = coinFlips(number)
const count = countFlips(flips)
console.log(number)
console.log(flips)
if (count.heads == 0 && count.tails == 1) {
    console.log({tails: 1})
}else{
    if (count.heads == 1 && count.tails == 0) {
        console.log({heads: 1})
    }else{
        console.log(count)
    }
}

