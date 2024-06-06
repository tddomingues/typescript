import validator from "validator"

const SHOW_ERROR_MESSAGES = "show-error-message"

const form = document.querySelector(".form") as HTMLFormElement
const username = document.getElementById("username") as HTMLInputElement
const email = document.querySelector(".email") as HTMLInputElement
const password = document.querySelector(".password") as HTMLInputElement
const confirmPassword = document.querySelector(".password2") as HTMLInputElement



form.addEventListener("submit", function (e) {
  e.preventDefault()
  hideErrorMessages(this)
  checkForEmptyFields(username, email, password, confirmPassword)
  checkEmail(email)
  checkEqualPasswords(password, confirmPassword)
  if (shouldSendForm(this)) console.log("enviado...")
})

function checkForEmptyFields(...inputs: HTMLInputElement[]) {
  inputs.forEach(input => {
    if (!input.value) showErrorMessage(input, "Campo vazio.")
  })
}

function hideErrorMessages(form: HTMLFormElement): void {
  form.querySelectorAll("." + SHOW_ERROR_MESSAGES).forEach(item => item.classList.remove(SHOW_ERROR_MESSAGES))
}

function checkEqualPasswords(password: HTMLInputElement, confirmPassword: HTMLInputElement) {
  if (password.value !== confirmPassword.value) {
    showErrorMessage(password, "Senhas não correspondentes.")
    showErrorMessage(confirmPassword, "Senhas não correspondentes.")
  }
}

function checkEmail(input: HTMLInputElement) {
  if (!(validator.isEmail(input.value))) showErrorMessage(input, "Email inválido.")
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement
  const errorMessage = formFields.querySelector(".error-message") as HTMLSpanElement
  errorMessage.innerText = msg
  formFields.classList.add(SHOW_ERROR_MESSAGES)
}

function shouldSendForm(form: HTMLFormElement) {
  let send = true
  form.querySelectorAll("." + SHOW_ERROR_MESSAGES).forEach(() => send = false)
  return send

}


