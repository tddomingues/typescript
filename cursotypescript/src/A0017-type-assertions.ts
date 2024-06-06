//como monstrar p/ o ts que um objeto não é null?

//1 - condicional
const body1 = document.querySelector("body")
if(body1) body1.style.background = "red"

//2 - non-null assertion (!)
const body2 = document.querySelector("body")!
body2.style.background = "red"

//3 - type assertion
const body3 = document.querySelector("body") as HTMLBodyElement
body3.style.background = "red"
