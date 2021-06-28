window.onscroll = () => {
    const nav = document.querySelector('nav');
    if(this.scrollY <= 10) nav.className = null; else nav.className = 'scroll';
};