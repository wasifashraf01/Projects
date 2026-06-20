let form = document.querySelector("form");
form.addEventListener("submit", function(details){
    details.preventDefault(); 

    let inputs = document.querySelectorAll("input[type='text']");

    let card = document.createElement("div");
    card.classList.add("card");

    let profileImage = document.createElement("div");
    profileImage.classList.add("profileImage");

    let image = document.createElement("img");
    image.setAttribute("src", inputs[0].value);
    image.setAttribute("alt", "Image-Error");

    profileImage.append(image);

    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value;

    let p = document.createElement("p");
    p.textContent = inputs[2].value;

    card.append(profileImage);
    card.append(h3);
    card.append(p);


    let main = document.querySelector(".main")
    main.append(card);

    for (const input of inputs) {
            input.value = " ";
    }
})