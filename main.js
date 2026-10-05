const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const button = item.querySelector(".btn");
  const content = item.querySelector(".content");

  button.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("open");
        otherItem.querySelector(".content").style.maxHeight = null;
      }
    });
    if (isOpen) {
      item.classList.remove("open");
      content.style.maxHeight = null;
    } else {
      item.classList.add("open");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
