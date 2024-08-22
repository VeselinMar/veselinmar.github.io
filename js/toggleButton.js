// Function for collapsible section toggling
    function setupCollapsibleSections() {
        let coll = document.getElementsByClassName("collapsible");

        for (let i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                console.log("Button clicked!");
                this.classList.toggle("active");

                // The content will automatically show/hide based on the CSS rule
            });
        }
    }

    setupCollapsibleSections();
