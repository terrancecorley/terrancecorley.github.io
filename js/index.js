const main = (() => {
    window.onload = () => {
        const commonLaptopDisplayWidth = 1366;
        if (window.innerWidth >= commonLaptopDisplayWidth) {
            const docBody = document.querySelector('body');
    
            docBody.addEventListener('mousemove', (e) => {
                let spotlightSize = '#fdfdfd 120px, rgba(248, 247, 244, 1) 200px)';
    
                docBody.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 80}%, ${spotlightSize}`;
            })
        }
    };
})();