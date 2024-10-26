const ellipsisForSigninSignup = document.querySelector('.ellipsis-for-signin-signup');
const svgEllipsisForSigninSignup = document.getElementById("edi");
const signinAndRegister = document.querySelector('.signin-and-register');
const mediaQuery = window.matchMedia('(max-width: 550px)');

console.log(window.getComputedStyle(svgEllipsisForSigninSignup).backgroundColor);

ellipsisForSigninSignup.addEventListener('click', (event) => {
    event.stopPropagation(); // Pigilan ang pag-propagate para hindi masama ang document click
    console.log('yehey');
    // Toggle display ng signinAndRegister
    signinAndRegister.style.display = signinAndRegister.style.display === 'flex' ? 'none' : 'flex';
});

document.addEventListener('click', (event) => {
    // Check kung nasa labas ang click ng ellipsisForSigninSignup o signinAndRegister
    if (!ellipsisForSigninSignup.contains(event.target) && !signinAndRegister.contains(event.target)) {
        signinAndRegister.style.display = 'none';
    }
});

function handleScreenChange(e) {
    console.log('ewan');
    if (e.matches) {
        if (signinAndRegister.style.display === 'flex') {
            signinAndRegister.style.display = 'none';
            console.log(window.getComputedStyle(ellipsisForSigninSignup).backgroundColor);
        }
    } else {
        console.log('Desktop view');
    }
}

mediaQuery.addListener(handleScreenChange);
handleScreenChange(mediaQuery);

svgEllipsisForSigninSignup.addEventListener('mouseenter', () => {
    if (window.getComputedStyle(svgEllipsisForSigninSignup).backgroundColor !== 'rgba(0, 0, 0)') {
        svgEllipsisForSigninSignup.backgroundColor = 'none';
    }
});
