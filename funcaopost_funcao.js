let yesPost = false;
let noPost = false;

function fazerPost() {
  if (yesPost) {
    return "Já existe um post agendado para esta data";
  } else{
    return "Você precisa fazer um post para hoje.";
  } 
}

fazerPost();
console.log(fazerPost(yesPost));
