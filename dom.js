// practice innerText and InnerHTML
// let inText = document.getElementById("main").innerText;
// console.log(inText)

// let inHtm = document.getElementById("main").innerHTML;
// console.log(inHtm)


// let abc = document.getElementById("para").innerHTML = "<h1> hi </h1>";
// console.log(abc)

// // practice setAttribute
// let efg = document.getElementById("para").setAttribute("class", "xyx");
// // practice getAttribute
// efg = document.getElementById("para").getAttribute("class")
//     // practice Attribute
// efg = document.getElementById("para").attributes[0]
// console.log(efg);

// // practice querySelector
// const select = document.getElementsByTagName("p");
// console.log(select);

// practice style method className classList;

// document.querySelector("#red").classList.remove("xyz");
// let abc = document.querySelector("#red").classList;
// document.querySelector("#red").classList.remove("xyz")
// const a = document.querySelector("#red").classList
// const a = document.querySelector(".item");
// const b = a.closest(".para")
// console.log(b)

// console.log(abc)

// practice addEventListener
// const abc = document.querySelector("#red").addEventListener("click", function() {
//     document.getElementById("#red").style
// })

// practice createElement,createTextNode,createComment.
// const h1Element = document.createElement("h1");
// const text = document.createTextNode("hello sizan")
// const abc = h1Element.appendChild(text)
// const p = document.getElementById("para")
// const s = document.querySelector(".ull");
// const ans = s.insertBefore(p, s)
// const ans = ulls.appendChild(h1Element)
// const final = s.insertBefore(abc, s.children[0])
// const ans = document.createTextNode("hello world");
// const newComment = document.createComment("hello world");
// console.log(final)

// const p = document.querySelector(".abc");
// const result = p.innerHTML;
// console.log(result)

// let liElement = document.createElement("li");
// let textElement = document.createTextNode("hello ms sizan");
// liElement.appendChild(textElement);
// console.log(liElement);

// let target = document.querySelector(".ull");
// const item = target.children[1];
// target.removeChild(item)
// console.log(item)

// practice cloneNode
// const abc = document.getElementById("sm");
// const xyz = abc.cloneNode(true);
// const copy = document.querySelector(".ull");
// const result = copy.insertBefore(xyz, copy.children[1])
// console.log(result)