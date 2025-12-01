// import data json 
async function getData(){
    const url = 'data.json'
    
    try {
        const response = await fetch(url)
        if (!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }
            
        const result = await response.json()
        console.log(result)

        return result
    } catch (error) {
        console.error(error.message)
    }
}


async function init(){
    const data = await getData()

    data.forEach(item => {
        // create elements
        const container = document.createElement('div')
        container.classList.add(`summary__item--${item.category.toLowerCase()}`)
        container.classList.add('summary__item')

        const info = document.createElement('div')
        info.classList.add('summary__item-info')

        const icon = document.createElement('img')
        const path = (item.icon).slice(2) // remove ./ from path 
        icon.src = path
        icon.alt = `${item.category} icon`

        const category = document.createElement('p')
        category.classList.add('category-name')
        category.textContent = item.category

        const score = document.createElement('span')
        score.classList.add('summary__item-score')
        score.textContent = `${item.score} / 100`

        // append elements
        info.appendChild(icon)
        info.appendChild(category)
        container.appendChild(info)
        container.appendChild(score)
        document.querySelector('.summary').appendChild(container)
    })

    const button = document.createElement('button')
    button.textContent = 'Continue'
    button.ariaLabel = 'Continue'
    document.querySelector('.summary').appendChild(button)
}

init()