(function (d, w) {
  let input = d.getElementById("file-input")
  let grid = d.getElementById("grid")
  let colls = d.getElementById("colls")

  function updatePreview () {
    grid.innerHTML = "";
    if (input.files) {
      [].forEach.call(input.files, readAndPreview);
    }
    function readAndPreview (file) {
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        var image = new Image();
        image.title = file.name;
        image.style.width = "100%";
        image.onload = () => {image.height = image.naturalHeight;}
        image.src = this.result;
        grid.appendChild(image);
      });
      reader.readAsDataURL(file);
    }
  }
  updatePreview()
  grid.style.columnCount = colls.value
  colls.addEventListener("change", () => {updatePreview(); grid.style.columnCount = colls.value})
  input.addEventListener("change", updatePreview)

})(document, window);