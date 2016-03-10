/**
 * prevent default form submit, submit query to google custom search
 * @returns {boolean}
 */
function search() {
  document.getElementById('gsc-i-id1').value = document.getElementById('query').value;
  document.getElementsByClassName('gsc-search-button')[1].click();
  return false;
}

document.getElementsByClassName('clear-search')[0].onclick=function(){
  document.getElementById('query').value = '';
}
