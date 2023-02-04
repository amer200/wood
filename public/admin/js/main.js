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
var Size = Quill.import('attributors/style/size');
Quill.register(Font, true);
Quill.register(Size, true);
Size.whitelist = ['14px', '16px', '18px'];
Font.whitelist = ['inconsolata', 'roboto', 'mirza', 'arial'];

var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];
const sliderQuillEn = new Quill('#sliderEditorEn', {
  modules: {
    toolbar: toolbarOptions
  },
  theme: 'snow'
});
const sliderQuillAr = new Quill('#sliderEditorAr', {
  modules: {
    toolbar: toolbarOptions
  },
  theme: 'snow'
});
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
