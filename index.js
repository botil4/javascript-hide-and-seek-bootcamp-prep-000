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
  let parent = document.querySelector('#grand-node').querySelectorAll('div')
  let len = parent.length
  return parent[len-1]
}