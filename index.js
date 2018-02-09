function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let original = document.querySelectorAll('.ranked-list li')
  
  for (let i = 0; i < original.length; i++) {
    original[i].innerHTML = parseInt(original[i].innerHTML)+n
  }
}

function deepestChild() {
  let parent = document.querySelector('#grand-node')
  let next = parent.children[0]
  
  while(next) {
    parent = next
    next = parent.children[0]
  }
  return next
}