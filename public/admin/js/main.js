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
const sliderQuillEn = new Quill('#sliderEditorEn', {
  modules: modules,
  theme: 'snow'
});
const sliderQuillAr = new Quill('#sliderEditorAr', {
  modules: modules,
  theme: 'snow'
});
const submitSlider = () => {
  const form = document.getElementById('sliderForm');
  const ar = document.getElementById('sliderAr');
  const en = document.getElementById('sliderEn');
  ar.value = sliderQuillAr.root.innerHTML;
  en.value = sliderQuillEn.root.innerHTML;
  form.submit();
}
