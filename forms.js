const ellipsisForSigninSignup = document.querySelector('.ellipsis-for-signin-signup');
const svgEllipsisForSigninSignup = document.getElementById("edi");
const signinAndRegister = document.querySelector('.signin-and-register');
const mediaQuery = window.matchMedia('(max-width: 550px)');

console.log(window.getComputedStyle(svgEllipsisForSigninSignup).backgroundColor);

ellipsisForSigninSignup.addEventListener('click', (event) => {
    event.stopPropagation();

    signinAndRegister.style.display = signinAndRegister.style.display === 'flex' ? 'none' : 'flex';
});

// document.addEventListener('click', (event) => {
//     // Check kung nasa labas ang click ng ellipsisForSigninSignup o signinAndRegister
//     if (!ellipsisForSigninSignup.contains(event.target) && !signinAndRegister.contains(event.target)) {
//         signinAndRegister.style.display = 'none';
//     }
// });

function handleScreenChange(e) {
    if (e.matches) {

        console.log('owkay')
        if (signinAndRegister.style.display === 'flex') {
            signinAndRegister.style.display = 'none';
        }

        document.addEventListener('click', (event) => {
            if (!ellipsisForSigninSignup.contains(event.target) && !signinAndRegister.contains(event.target)) {
                signinAndRegister.style.display = 'none';
            }
        })
    } else {
        signinAndRegister.style.display = 'flex';
    }
}

mediaQuery.addListener(handleScreenChange);
handleScreenChange(mediaQuery);

svgEllipsisForSigninSignup.addEventListener('mouseenter', () => {
    if (window.getComputedStyle(svgEllipsisForSigninSignup).backgroundColor !== 'rgba(0, 0, 0)') {
        svgEllipsisForSigninSignup.backgroundColor = 'none';
    }
});
