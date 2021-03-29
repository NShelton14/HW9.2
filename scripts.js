document.querySelector("#username").addEventListener("focus", () => {
  console.log("Entered input!");
});
(method)console.log(message?: any, ...optionalParams: any[]): void(+2 overloads)

document.querySelector("#username").addEventListener("blur", () => {
  console.log("Left input!");
});

document.querySelector("form").addEventListener("submit", () => {
  console.log("Submitted form!");
});
