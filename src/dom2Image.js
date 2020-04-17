import html2canvas from "html2canvas";

var options = {
  useCORS: true
};

const saveImage = element => {
  let fileName = `${new Date().toISOString().substring(0, 10)}.png`;
  html2canvas(document.getElementById(element), options).then(canvas => {
    const button = document.getElementById(element);
    const data = canvas.toDataURL("image/png");
    if (window.navigator.msSaveBlob) {
      window.navigator.msSaveBlob(canvas.msToBlob(), fileName);
    } else {
      const downloadLink = document.createElement("a");
      button.appendChild(downloadLink);
      downloadLink.setAttribute("download", fileName);
      downloadLink.setAttribute("href", data);
      downloadLink.click();
      button.removeChild(downloadLink);
    }
  });
};

export default saveImage;
