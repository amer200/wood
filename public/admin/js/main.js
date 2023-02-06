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
/************* */
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
    box.innerHTML = tinyMCE.get('tinyAr').getContent();
  } else {
    box.innerHTML = tinyMCE.get('tinyEn').getContent();
  }
}

const submitSlider = () => {
  const form = document.getElementById('sliderForm');
  sliderAr.value = sliderArEditor.getHTMLCode();
  sliderEn.value = sliderEnEditor.getHTMLCode();
  form.submit();
}
/********************* */
// var editor1 = new RichTextEditor("#div_editor1");
