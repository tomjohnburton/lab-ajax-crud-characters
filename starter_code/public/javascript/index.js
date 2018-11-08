const charactersAPI = new APIHandler("http://localhost:8000/characters/")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then(characters=>{
      return characters
    })
  
}
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.getElementById('character-id').value ;

    charactersAPI.getOneRegister(id)
    .then(characters=>{
      document.querySelector('div .name').textContent = 'Character Name: '
      document.querySelector('div .occupation').textContent = 'Character Occupation: '
      document.querySelector('div .cartoon').textContent = 'Is a Cartoon?: '
      document.querySelector('div .weapon').textContent = 'Character Weapon: '
      document.querySelector('div .name').textContent += characters.name;
      document.querySelector('div .occupation').textContent += characters.occupation;
      document.querySelector('div .cartoon').textContent += characters.cartoon;
      document.querySelector('div .weapon').textContent += characters.weapon;
    })
    
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = document.querySelector('input[name=character-id-delete]').value 
    charactersAPI.deleteOneRegister(id)

        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    let id = document.querySelector('#edit-character-form input[name=chr-id]').value 
    let name = document.querySelector('#edit-character-form input[name=name]').value
    let occupation = document.querySelector('#edit-character-form input[name=occupation]').value
    let weapon = document.querySelector('#edit-character-form input[name=weapon]').value
    let cartoon = document.querySelector('#edit-character-form input[name=cartoon]').checked
    let editCharacter = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon,
    }
    charactersAPI.updateOneRegister(id,editCharacter)
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    let name = document.querySelector('#new-character-form input[name=name]').value
    let occupation = document.querySelector('#new-character-form input[name=occupation]').value
    let weapon = document.querySelector('#new-character-form input[name=weapon]').value
    let cartoon = document.querySelector('#new-character-form input[name=cartoon]').checked
    let newCharacter = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon,
    }
      charactersAPI.createOneRegister(newCharacter)
  }
})
