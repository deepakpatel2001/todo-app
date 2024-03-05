// selectors
let sbtBtn = document.querySelector('.adder-btn');
let input = document.querySelector('input');
let listParent = document.querySelector('.list-parent');

sbtBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let inputData = input.value;
    let listDiv = document.createElement('div');
    listDiv.className = 'para-adder';
    let para = document.createElement('p');
    para.className = 'list-content'
    para.innerHTML = inputData;
    let button = document.createElement('button');
    button.innerHTML = 'delete';
    button.classList.add('adder-btn', 'danger');
    listDiv.append(para, button);
    listParent.append(listDiv);
});

listParent.addEventListener('click', (e) => {
    console.log(e.target.parentElement);
    if (
        e.target.classList.contains('adder-btn') &&
        e.target.classList.contains('danger')
    ) {
        listParent.removeChild(e.target.parentElement);
    }
});
