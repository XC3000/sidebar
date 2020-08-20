var accordians = document.getElementsByClassName("accordian");
/* console.log(accordians); */
for (var i = 0; i < accordians.length; i++) {
  accordians[i].onclick = function () {
    console.log(this);
    this.classList.toggle("is-open");
    /* console.log("clicked"); */
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
}
