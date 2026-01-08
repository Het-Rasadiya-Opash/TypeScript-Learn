// Type Assertions
const title = document.getElementById("title") as HTMLHeadingElement;
if (title) {
  title.innerText = "heading";
}

const paragraph = document.getElementById("para") as HTMLParagraphElement;
if (paragraph) {
  paragraph.innerText = "Paragraph";
}

const box = document.getElementById("box") as HTMLDivElement;
if (box) {
  box.style.backgroundColor = "red";
}

// Query Selector with Generic Type
const btn = document.querySelector<HTMLButtonElement>("#btn");
btn?.addEventListener("click", (e: MouseEvent) => {
  alert("Button Clicked...");
});

const input = document.querySelector<HTMLInputElement>("#input");
const output = document.querySelector<HTMLParagraphElement>("#output");
input?.addEventListener("input", () => {
  if (output && input) {
    output.textContent = input.value;
  }
});

const a = document.querySelector<HTMLAnchorElement>("a");
a?.setAttribute("href", "http://www.google.com");

const form = document.querySelector<HTMLFormElement>("form");
const email = document.querySelector<HTMLInputElement>("#email");

form?.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  if (email) {
    console.log(email.value);
  }
});

const ul = document.querySelector<HTMLUListElement>("ul");
const li: HTMLLIElement = document.createElement("li");
li.textContent = "three";
ul?.appendChild(li);

const user = "User";
const info = document.querySelector<HTMLDivElement>(".user");
info!.innerHTML = `
    <h2>Welcome</h2>
    <p>Hello, ${user}</p>
`;

document.addEventListener("click", (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  if (target.tagName === "BUTTON") {
    console.log("buttomn click");
  }
});
