const resourceButton = document.getElementById('resource-button')
const formContainer = document.getElementById("form-container")
const closeIcon = document.getElementById("close-icon-container")
const deleteIcon = document.getElementById("delete-icon")
const dataContainer = document.getElementById("data-container")
const titleOfResource = document.getElementById("input-website")
const linkOfResource = document.getElementById("input-link")
const descriptionOfResource = document.getElementById("input-description")


resourceButton.addEventListener("click", function(event){
    formContainer.style.display = "flex"
})
closeIcon.addEventListener("click", function(event){
    formContainer.style.display = "none"
})

deleteIcon.addEventListener("click",function(event){
    dataContainer.style.display = "none"
} )

const arrayOfDataCollection = []

formContainer.addEventListener("submit", function(event){
    event.preventDefault()

    let dataFromTitle = titleOfResource.value
    let dataFromLink = linkOfResource.value
    let dataFromDescription = descriptionOfResource.value

    const dataFromUser = {
        postTitle : dataFromTitle,
        postLink : dataFromLink,
        postDescription : dataFromDescription
    }

    arrayOfDataCollection.push(dataFromUser)

    displayData(dataFromUser);

    formContainer.style.display = "none";
    formContainer.reset();
});

function displayData(data) {
    const newDataContainer = document.createElement("div")
    newDataContainer.classList.add("data-container")

    const titleAndDeleteIcon = document.createElement("div")
    titleAndDeleteIcon.classList.add("title-and-delete-icon")

    const titleOfResource = document.createElement("div")
    titleOfResource.classList.add("title-of-resource")
    const title = document.createElement("h4")
    title.textContent = data.postTitle
    titleOfResource.appendChild(title)

    const deleteIcon = document.createElement("div")
    deleteIcon.classList.add("delete-icon")
    const deleteIconElement = document.createElement("i")
    deleteIconElement.classList.add("fa-solid", "fa-trash-can")
    deleteIcon.appendChild(deleteIconElement)
    deleteIcon.addEventListener("click", function() {
        newDataContainer.remove()
    })

    titleAndDeleteIcon.appendChild(titleOfResource)
    titleAndDeleteIcon.appendChild(deleteIcon)

    const linkContainer = document.createElement("div")
    linkContainer.classList.add("link-0f-website-container")
    const link = document.createElement("p")
    link.textContent = data.postLink
    linkContainer.appendChild(link)

    const descriptionContainer = document.createElement("div")
    descriptionContainer.classList.add("description-of-website")
    const description = document.createElement("p")
    description.textContent = data.postDescription
    descriptionContainer.appendChild(description)

    newDataContainer.appendChild(titleAndDeleteIcon)
    newDataContainer.appendChild(linkContainer)
    newDataContainer.appendChild(descriptionContainer)

    document.querySelector(".second-container").appendChild(newDataContainer)
}
