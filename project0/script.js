const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

// declare global itemCount & unCheckedCount
let itemCount = 0
let uncheckedCount = 0

// declare global itemID used for unique list and checkbox IDs
let itemID = 0

function newTodo() {

  // increment unique ID for DOM manipulation
  itemID += 1

  // create unique IDs for list and checkbox
  listID = 'list' + itemID // this is needed for deletion of item
  checkboxID = 'checkbox' + itemID // this is needed for onclick function

  // create list item
  let todoItem = document.createElement('li')
  todoItem.setAttribute('id', listID)
  todoItem.setAttribute('class', classNames.TODO_ITEM)

  // create description
  let todoText = document.createElement('span')
  todoText.setAttribute('class', classNames.TODO_TEXT)
  let description = document.createTextNode('description')
  todoText.appendChild(description)

  // create checkbox
  let checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  checkbox.setAttribute('id', checkboxID)
  checkbox.setAttribute('class', classNames.TODO_CHECKBOX)
  checkbox.addEventListener('click', function() {

    if(this.checked === true) {
      // decrement uncheckedCount
      uncheckedCount -= 1
      uncheckedCountSpan.innerHTML = uncheckedCount
    }
    else {
      // increment uncheckedCount
      uncheckedCount += 1
      uncheckedCountSpan.innerHTML = uncheckedCount
    }


  })

  // append to list item
  todoItem.append(checkbox)
  todoItem.append(todoText)

  // add the new list item to DOM
  document.getElementById("todo-list").appendChild(todoItem)

  // increment counters and update page.
  itemCount += 1
  itemCountSpan.innerHTML = itemCount

  uncheckedCount += 1
  uncheckedCountSpan.innerHTML = uncheckedCount


}


