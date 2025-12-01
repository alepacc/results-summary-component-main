// import data json 
function getData(){
    var data
    fetch('data.json')
        .then(Response => Response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error loading JSON:', error))

    return data
}

const data = getData()

data.forEach(item => {
    // create elements
    const container = document.createElement('div');
    container.classList.add('result-item', item.category.toLowerCase());

    const icon = document.createElement('img');
    icon.src = `assets/images/icon-${item.category.toLowerCase()}.svg`;
    icon.alt = `${item.category} icon`;

    const category = document.createElement('span');
    category.classList.add('category-name');
    category.textContent = item.category;

    const score = document.createElement('span');
    score.classList.add('category-score');
    score.textContent = item.score;

    // append elements
    container.appendChild(icon);
    container.appendChild(category);
    container.appendChild(score);

    document.querySelector('.results-summary .results-container').appendChild(container);
});