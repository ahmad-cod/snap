const primaryNavToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('#primary-navigation');
const featuresNavToggle = document.querySelector('.features-nav-toggle');
const featuresNav = document.querySelector('#features-dropdown');
const companyNavToggle = document.querySelector('.company-nav-toggle');
const companyNav = document.querySelector('#company-dropdown');


primaryNavToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if(visibility === 'false') {
        primaryNav.setAttribute('data-visible', true);
        primaryNavToggle.setAttribute('aria-expanded', true);
    } else {
        primaryNav.setAttribute('data-visible', false);
        primaryNavToggle.setAttribute('aria-expanded', false);
    }
})
console.log(featuresNav, featuresNavToggle);

featuresNavToggle.addEventListener('click', () => {
    console.log('features menu')
    const visibility = featuresNav.getAttribute('data-visible');

    if(visibility === 'false') {
        featuresNav.setAttribute('data-visible', true);
        featuresNavToggle.setAttribute('aria-expanded', true);
    }
    else {
        featuresNav.setAttribute('data-visible', false);
        featuresNavToggle.setAttribute('aria-expanded', false)
    }
})

companyNavToggle.addEventListener('click', () => {
    console.log('company dropdown');
    const visibility = companyNav.getAttribute('data-visible');

    if (visibility === 'false') {
        companyNav.setAttribute('data-visible', true);
        companyNavToggle.setAttribute('aria-expanded', true)
    }else {
        companyNav.setAttribute('data-visible', false);
        companyNavToggle.setAttribute('aria-expanded', false)
    }
})