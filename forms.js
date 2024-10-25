const ellipsisForSigninSignup = document.querySelector('.ellipsis-for-signin-signup')
const signinAndRegister = document.querySelector('.signin-and-register')
const mediaQuery = window.matchMedia('(max-width: 550px)');

ellipsisForSigninSignup.addEventListener('click', () => {
    console.log('yehey')
    // Check current display status and toggle it
    if (signinAndRegister.style.display === 'flex') {
        signinAndRegister.style.display = 'none';
    } else {
        signinAndRegister.style.display = 'flex';
    }
});

function handleScreenChange(e) {
    console.log('ewan')
    if (e.matches) {
        if (signinAndRegister.style.display === 'flex') {
            signinAndRegister.style.display = 'none';
            console.log(ellipsisForSigninSignup.style.backgroundColor)
        }
    } else {
        console.log('Desktop view');
    }
}


mediaQuery.addListener(handleScreenChange);
handleScreenChange(mediaQuery); 





