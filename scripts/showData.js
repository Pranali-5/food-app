async function getData(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data.meals;
  } catch (err) {
    console.log(err);
  }
}

function appendData(d, parent) {
  console.log("p,p:", d, parent);
  d.forEach(({ strMealThumb, strMeal, strInstructions }) => {
    let div = document.createElement("div");
    div.setAttribute("id", "div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let img = document.createElement("img");
    img.setAttribute("id", "img");
    img.src = strMealThumb;
    p1.setAttribute("id", "p");
    p1.innerText = strMeal;
    p2.innerText = strInstructions;
    div.append(img, p1, p2);
    parent.append(div);
  });
}
export { getData, appendData };
