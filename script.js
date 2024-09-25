document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  const human = new Human('Name Surname');
  const fullNameFromTextField = document.getElementById('fullname').value;
  human.setNameSurname(fullNameFromTextField);

  const name = document.createElement('td');
  name.textContent = human.name;
 console.log(name);

  const surname = document.createElement('td');
  surname.textContent = human.surname;
  console.log(surname);
 
  const row = document.createElement('tr');
  row.append(name, surname);
  console.log(row);

  document.querySelector('table > tbody').append(row);
})

class Human{
  contructor(fullName){
    setNameSurname(fullName);
  }

  setNameSurname(fullName){
    const names = fullName.split(' ');
    this.name = this.capitalize(names[0]);
    this.surname = this.capitalize(names[1]);
  }

    capitalize(text){
    const firstLetter = text.charAt(0).toUpperCase();
    const followingLetters = text.slice(1).toLowerCase();

    return firstLetter.concat(followingLetters);
  }
}