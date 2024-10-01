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

    const animar = (targetId, animacao) => {
        const targetElement = document.querySelector(targetId);
        
        let targetTop = 0;
        let currentElement = targetElement;
        
        while (currentElement) {
            targetTop += currentElement.offsetTop;
            currentElement = currentElement.offsetParent;
        }
    
        let windowTop = window.scrollY;
        let windowBottom = windowTop + window.innerHeight; 
        
        if (targetTop < windowBottom) {
                targetElement.style.animation = animacao;
        }
    }
    
    window.addEventListener('scroll', () => {

        // Sobre mim 
        id = "#minha-foto";
        animacao = "slideLeft 2s"
        animar(id, animacao);

        id = ".direita-2";
        animacao = "slideUp 2s"
        animar(id, animacao);

        id = "#caneta-design-2";
        animacao = "scaleIn 1s"
        animar(id, animacao);

        id = "#tinta-laranja-2";
        animacao = "slideRight 1s"
        animar(id, animacao);

        // Habilidades 
        id = ".figma-3";
        animacao = "scaleIn 2s"
        animar(id, animacao);

        id = ".illustrator-3";
        animacao = "scaleIn 2.5s"
        animar(id, animacao);

        id = ".psp-3";
        animacao = "scaleIn 3s"
        animar(id, animacao);

        id = ".indesign-3";
        animacao = "scaleIn 3.5s"
        animar(id, animacao);

        id = ".card1";
        animacao = "slideUp 2s"
        animar(id, animacao);

        id = ".card2";
        animacao = "slideUp 2.5s"
        animar(id, animacao);

        id = ".card3";
        animacao = "slideUp 3s"
        animar(id, animacao);

        // Projetos 
        id = "#titulo-id-visual";
        animacao = "slideLeft 1.5s"
        animar(id, animacao);

        id = ".apresentacao-toda-4";
        animacao = "slideUp 1.5s"
        animar(id, animacao);

        id = ".id-toda-4";
        animacao = "scaleIn 1.5s"
        animar(id, animacao);

        id = ".apresentacao-psidaisy-4";
        animacao = "slideUp 1.5s"
        animar(id, animacao);

        id = ".id-psidaisy-4";
        animacao = "scaleIn 1.5s"
        animar(id, animacao);

        id = ".apresentacao-aviaonamao-4";
        animacao = "slideUp 1.5s"
        animar(id, animacao);

        id = ".id-aviaonamao-4";
        animacao = "scaleIn 1.5s"
        animar(id, animacao);
        
        id = "#titulo-design-rs";
        animacao = "slideLeft 1.5s"
        animar(id, animacao);

        id = "#img-design-rs";
        animacao = "scaleIn 1.5s"
        animar(id, animacao);

        id = "#titulo-pap-digital";
        animacao = "slideLeft 1.5s"
        animar(id, animacao);

        id = ".apresentacao-circle-4";
        animacao = "slideUp 1.5s"
        animar(id, animacao);

        id = ".id-circle-4";
        animacao = "scaleIn 1.5s"
        animar(id, animacao);

        id = ".apresentacao-icone-4";
        animacao = "slideUp 1.5s"
        animar(id, animacao);

        id = ".id-icone-4";
        animacao = "scaleIn 1.5s"
        animar(id, animacao);

        id = "#curva-branca";
        animacao = "slideRight 2s"
        animar(id, animacao);

        id = "#flor-branca";
        animacao = "slideLeft 1.5s"
        animar(id, animacao);
        
        id = ".conteudo-footer";
        animacao = "scaleIn 1s"
        animar(id, animacao);
        
    });
    
    
})

