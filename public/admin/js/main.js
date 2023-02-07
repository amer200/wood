const showElement = (id) => {
  const showE = document.getElementById(id);
  const hideE = Array.from(document.getElementsByClassName('all-forms'));
  hideE.forEach(e => {
    if (!Array.from(e.classList).includes('d-none')) {
      e.classList.add('d-none');
    }
  })
  showE.classList.remove('d-none');
}
/*************  slider*/
var sliderArEditor = new RichTextEditor("#tinyAr");
var sliderEnEditor = new RichTextEditor("#tinyEn");
/*********************************** */
const sliderAr = document.getElementById('sliderAr');
const sliderEn = document.getElementById('sliderEn');
const sliderImg = document.getElementById('sliderImg');
const sliderPrev = (lang) => {
  const box = document.getElementById('sliderPrev');
  const img = sliderImg.files[0];
  console.log(img);
  box.style.backgroundImage = `url('${URL.createObjectURL(img)}')`;
  if (lang == 'ar') {
    box.innerHTML = sliderArEditor.getHTMLCode();
  } else {
    box.innerHTML = sliderEnEditor.getHTMLCode();
  }
}

const submitSlider = () => {
  const form = document.getElementById('sliderForm');
  sliderAr.value = sliderArEditor.getHTMLCode();
  sliderEn.value = sliderEnEditor.getHTMLCode();
  form.submit();
}
/********************* about */
var aboutArEditor = new RichTextEditor("#aboutinaAr");
var aboutEnEditor = new RichTextEditor("#aboutinaEn");
/*********************************** */
const aboutAr = document.getElementById('aboutAr');
const aboutEn = document.getElementById('aboutEn');

const submitabout = () => {
  const form = document.getElementById('aboutForm');
  aboutAr.value = aboutArEditor.getHTMLCode();
  aboutEn.value = aboutEnEditor.getHTMLCode();
  form.submit();
}
/********************* project */
var projectArEditor = new RichTextEditor("#projectTinaAr");
var projectEnEditor = new RichTextEditor("#projectTinaEn");
/*********************************** */
const projectAr = document.getElementById('projectAr');
const projectEn = document.getElementById('projectEn');

const projectSubmit = () => {
  const form = document.getElementById('projectForm');
  projectAr.value = projectArEditor.getHTMLCode();
  projectEn.value = projectEnEditor.getHTMLCode();
  form.submit();
}
