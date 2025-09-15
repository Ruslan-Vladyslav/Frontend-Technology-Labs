document.addEventListener("DOMContentLoaded", () => {
  const element6 = document.getElementById("element6");
  const element7 = document.querySelector("#element7");

  element6.addEventListener("click", () => {
    element6.classList.toggle("colored1");
  });

  element7.addEventListener("click", () => {
    element7.classList.toggle("colored2");
  });
});


const imgContainer = document.getElementById("imgContainer");

function getLastImage() {
  return imgContainer.querySelector(".img-wrapper:last-of-type img");
}

document.getElementById("addBtn").addEventListener("click", () => {
  const wrapper = document.createElement("div");
  wrapper.className = "img-wrapper";

  const newImg = document.createElement("img");
  newImg.src = "images/image.png";
  newImg.alt = "Панорама улюбленого міста з набережною";
  newImg.dataset.scale = "1";
  newImg.style.transform = "scale(1)";

  const link = document.createElement("a");
  link.href = "https://continentestate.com/uk/valencia/";
  link.target = "_blank";
  link.rel = "noopener";

  link.appendChild(newImg);
  wrapper.appendChild(link);
  imgContainer.appendChild(wrapper);
});

document.getElementById("increaseBtn").addEventListener("click", () => {
  const lastImg = getLastImage();
  if (lastImg) {
    let scale = parseFloat(lastImg.dataset.scale || "1");
    scale += 0.2;
    lastImg.dataset.scale = scale;
    lastImg.style.transform = `scale(${scale})`;
  }
});

document.getElementById("decreaseBtn").addEventListener("click", () => {
  const lastImg = getLastImage();
  if (lastImg) {
    let scale = parseFloat(lastImg.dataset.scale || "1");

    if (scale > 1) {
      scale -= 0.2;
      lastImg.dataset.scale = scale;
      lastImg.style.transform = `scale(${scale})`;
    }
  }
});

document.getElementById("removeBtn").addEventListener("click", () => {
  const lastWrapper = imgContainer.querySelector(".img-wrapper:last-of-type");

  if (lastWrapper) {
    lastWrapper.remove();
  }
});

