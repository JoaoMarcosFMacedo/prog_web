function validaForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Você deve preencher o formulário com o valor do seu salário.");
    return false;
  }
}