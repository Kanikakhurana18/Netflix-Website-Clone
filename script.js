const emailInput = document.querySelector('.email-input');
const getStartedButton = document.querySelector('.get-started-btn');
getStartedButton.addEventListener('click', function () {
    const email = emailInput.value.trim();
    if (email === '') {
        alert('Please enter your email address.');
    } else {
        alert('Welcome to Netflix! Email entered: ' + email);
    }
});

emailInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        getStartedButton.click();
    }
});

const signInButton = document.querySelector('.sign-in-btn');
signInButton.addEventListener('click', function () {
    alert('Sign In button clicked!');
});

const languageButton = document.querySelector('.language-btn');
languageButton.addEventListener('click', function () {
    alert('Language selection clicked!');
});

const faqBoxes = document.querySelectorAll('.faqbox');
faqBoxes.forEach(function (faq) {
    faq.addEventListener('click', function () {
        faq.classList.toggle('active');
    });
});

