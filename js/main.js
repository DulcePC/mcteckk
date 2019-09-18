window.onscroll = () => {
    const header = document.querySelector('#header');
    if(this.scrollY <= 150) {
        header.classList.remove("scroll");
    } else {
        header.classList.add("scroll");
    }
};