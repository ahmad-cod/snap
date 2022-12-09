const primaryNavToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('#primary-navigation');
const featuresNavToggle = document.querySelector('.features-nav-toggle');
const featuresNav = document.querySelector('#features-dropdown');
const companyNavToggle = document.querySelector('.company-nav-toggle');
const companyNav = document.querySelector('#company-dropdown');


//create a utility function for toggling (Don't repeat yourself!)
const toggle = (nav, navToggle) => {
    const visibility = nav.getAttribute('data-visible');
    if(visibility === 'false') {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
}

primaryNavToggle.addEventListener('click', () => toggle(primaryNav, primaryNavToggle));

featuresNavToggle.addEventListener('click', () => toggle(featuresNav, featuresNavToggle));
companyNavToggle.addEventListener('click', () => toggle(companyNav, companyNavToggle))