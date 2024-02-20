/* messages.js */
const googleForm = document.getElementById('google-form')

if (googleForm){
    const googleFormContent = googleForm.contentWindow;

    googleFormContent.console.log = function () {};
}
else {
    console.error('There is no google form')
}