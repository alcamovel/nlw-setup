const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)
//função para adicionar os dias atuais no formulario
function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia ja incluso")
    return
  }
  alert("Dia adicionado com sucesso 👍")
  nlwSetup.addDay(today)
}
//função para salvar as alterações do formulario
function save() {
  localStorage.setItem("NLWsetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWsetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
