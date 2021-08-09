window.addEventListener("load", function () {
    const skillItems = document.getElementById('skills-wrapper').getElementsByClassName('skills-progress-bar');
    const skills = [3, 5, 2, 5, 4, 2, 1, 3, 5, 3, 1];

    for (let i = 0; i < skillItems.length; i++) {
        for (let f = 0; f < skills[i]; f++) {
            let dot = document.createElement('span');
            dot.className = 'dot';
            dot.style.opacity = ((f + 0.5) * 0.2).toString();

            skillItems[i].innerHTML += dot.outerHTML;
        }
    }
});