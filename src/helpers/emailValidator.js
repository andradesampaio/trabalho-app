export function emailValidator(email) {
  const rex = /\S+@\S+\.\S+/
  if (!email) return "Preencha o campo de Email!."
  if (!rex.test(email)) return 'Digite um e-mail válido.'
  return ''
}
