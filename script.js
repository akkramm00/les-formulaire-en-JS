//création des varialbes par ciblage :

 let entertainment = document.querySelector('select');
 let animalRadioButtons = document.querySelectorAll('input[type = "radio"]');
 let tos = document.querySelector('input[type="checkbox"]')

 entertainment.addEventListener('change' ,(event) => {
    console.log(`${event.target.name} : ${event.target.value}`)
 });
 
 // On peut de ce fait changer la valeur du champ select depuis le fichier script comme cela :
 entertainment.value = 'movies';// il faut jste saisir une valeur existante 

 // pour les elements radio il faut à chaque un événement avec la  fonction 'forEach' comme cela :

 animalRadioButtons.forEach((animalRadioButton) => {
    animalRadioButton.addEventListener('change', function (event) {
        console.log(`${event.target.id}: ${event.target.checked}`);
    }) ;
 });
 animalRadioButtons[3].checked = true;
 // le checked va nous permettre de récupérer une valeur booleen 'true'ou 'false' cad si une valeur parmis la liste  est cochée ou pas 

 tos.addEventListener('change' , function(event) {
    console.log(`${event.target.name} : ${event.target.checked}`);
 });

 // on peut cocher la case par defaut en manipulant la valeur du tos:
 tos.checked = true ;