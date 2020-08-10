const dropdown = document.querySelectorAll(".gallery-listing")

dropdown.forEach(section => {
  const toggler = section.querySelector(".toggler")
  const panel = section.querySelector(".panel")

  toggler.addEventListener("click", function (event) {
    section.classList.toggle("open")
      event.preventDefault()

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px"
      }
  })
})
