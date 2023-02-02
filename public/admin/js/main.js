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
let Font = Quill.import('formats/font');
Font.whitelist = ['times-new-roman', 'arial'];
Quill.register(Font, true);
const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block', 'link'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
  ]
};
/*********************************** */
const sliderQuillEn = new Quill('#sliderEditorEn', {
  modules: modules,
  theme: 'snow'
});
const sliderQuillAr = new Quill('#sliderEditorAr', {
  modules: modules,
  theme: 'snow'
});
const sliderAr = document.getElementById('sliderAr');
const sliderEn = document.getElementById('sliderEn');
const sliderImg = document.getElementById('sliderImg');
const sliderPrev = (lang) => {
  const box = document.getElementById('sliderPrev');
  const img = sliderImg.files[0];
  console.log(img);
  box.style.backgroundImage = `url('${URL.createObjectURL(img)}')`;
  if (lang == 'ar') {
    box.innerHTML = sliderQuillAr.root.innerHTML;
  } else {
    box.innerHTML = sliderQuillEn.root.innerHTML;
  }
}
// con () => {
//   const img = sliderImg.value;
//   const content = sliderQuillAr.root.innerHTML;
//   sliderPrev(img, content)
// });
const submitSlider = () => {
  const form = document.getElementById('sliderForm');
  sliderAr.value = sliderQuillAr.root.innerHTML;
  sliderEn.value = sliderQuillEn.root.innerHTML;
  form.submit();
}
