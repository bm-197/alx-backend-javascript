export default function returnHowManyArguments(...args) {
    return args.reduce((len, _) => len+1, 0)
}