const currencyFormatter = new Intl.NumberFormat(undefined,{
    currency :"CHF", style: "currency"}
)

export function formatCurrency(number){
    return currencyFormatter.format(number)
}