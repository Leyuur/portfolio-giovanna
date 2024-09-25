document.addEventListener('DOMContentLoaded', () => {
    const projetosBtn = document.getElementById("projetos-nav");
    const projetosDiv = document.querySelector(".projetos-click");

    projetosBtn.addEventListener('click', (e) => {
        e.preventDefault();
        projetosDiv.classList.toggle("hidden");
    });

    const scrollBtns = document.querySelectorAll(".scrollBtn");

    scrollBtns.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = button.id + "_";

            const targetElement = document.getElementById(targetId);

            let targetTop = 0;
            let currentElement = targetElement;
            
            while (currentElement) {
                targetTop += currentElement.offsetTop;
                currentElement = currentElement.offsetParent;
            }

            window.scrollTo({
                top: targetTop - 120,
                behavior: "smooth",
            });

            if (button.id == "id-visual" || button.id == "design-rs" || button.id == "pap-digital") projetosDiv.classList.toggle("hidden");
        })

        
    })
})