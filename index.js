document.addEventListener('DOMContentLoaded', inital);
function inital () {
    document.querySelector('button').addEventListener('click', info);
}
function info () {
    alert('John Doe (masculine) and Jane Doe (feminine) are multiple-use placeholder names that are used when the true name of a person is unknown or is being intentionally concealed.');
}