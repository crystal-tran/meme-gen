const form = document.querySelector("#meme-form");
const imgInput = document.querySelector("input[name='image']");
const topText = document.querySelector("#top-text");
const bottomText = document.querySelector("#bottom-text");
const results = document.querySelector("#results");


/*Create a new meme element with the given parameters: image, top text, and bottom text
and append it with a delete button to the results container
*/
function generateMeme(img, topText, bottomText){
  const newDiv = document.createElement("div");
  const newImage = document.createElement("img");
  const top = document.createElement("span");
  const bottom = document.createElement("span");
  const deleteBtn = document.createElement("button");

  newImage.src = img;
  top.innerText = topText;
  bottom.innerText = bottomText;
  deleteBtn.innerText = "Delete";

  newDiv.classList.add("meme-container")
  newImage.classList.add("meme");
  top.classList.add("text","top");
  bottom.classList.add("text","bottom");
  deleteBtn.classList.add("button", "delete-button");
  newDiv.append(newImage, top, bottom, deleteBtn);
  results.append(newDiv);
}


/*A click event listener is added to the results container. If the
clicked event is a button, remove the corresponding meme-container*/
results.addEventListener("click", function(e){
  if(e.target.tagName === "BUTTON"){
    e.target.parentElement.remove();
  }
});

/*A function to retrieve the image URL when an image is uploaded*/
function getImageURL(imgInput){
  const selectedImg = imgInput.files[0]
  const imageURL = URL.createObjectURL(selectedImg);
  return imageURL;
}
/*A submit event listener is added to the form container. Image URL is retrieved.
The generateMeme function is called with the user inputs as parameters to create a new meme element.
Input values are cleared*/
form.addEventListener("submit", function(e){
  e.preventDefault();
  const img = getImageURL(imgInput);
  generateMeme(img, topText.value, bottomText.value);
  topText.value = "";
  bottomText.value = "";
  imgInput.value = "";
});