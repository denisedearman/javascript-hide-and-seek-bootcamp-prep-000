function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector('#nested .target');
}
function increaseRankBy(n){
  const lists = document.querySelectorAll('ul.ranked-list li');
  for(var i = 0; i<lists.length; i++)
  {
    lists[i].innerHTML = parseInt(lists[i].innerHTML) + n;
  }
}

function deepestChild(){
var current = document.querySelector('#grand-node');
var child = current.querySelectorAll('div');
while(child[0])
{
  current = child[0];
  child = current.querySelectorAll('div');
}
return current;

}
