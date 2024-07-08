document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal-add-project");
    const btnAdd = document.getElementById("btn_add");
    const spanClose = document.getElementById("close-modal");
    const form = document.getElementById("add-project-form");
    const projectContainer = document.querySelector(".project_detail_container");

    // Open the modal
    btnAdd.onclick = () => {
        modal.style.display = "block";
    };

    // Close the modal
    spanClose.onclick = () => {
        modal.style.display = "none";
    };

    // Close the modal when clicking outside of the modal content
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Handle form submission
    form.onsubmit = (event) => {
        event.preventDefault();

        const title = document.getElementById("project-title").value;
        const description = document.getElementById("project-description").value;
        const issuedTo = document.getElementById("issued_to").value;
        const dateIssued = document.getElementById("date_issued").value;
        const dateOfCompletion = document.getElementById("date_of_completion").value;

        // Create a new project card element
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        // Project content
        const projectContent = document.createElement("div");
        projectContent.classList.add("project-content");
        projectContent.innerHTML = `
            <h2>${title}</h2>
            <p>${description}</p>
            <p><b>Issued To: ${issuedTo}</b></p>
            <p><b>Date Issued: ${dateIssued}</b></p>
            <p><b>Date of Completion: ${dateOfCompletion}</b></p>
            <button class="btn" id ="btn_done" type="button">Mark as done</button>
            <button class="btn"  id = "btn_delete" type="button">Delete</button>
        `;

        // Append content to card
        projectCard.appendChild(projectContent);

        // Prepend the new project card to the container
        projectContainer.insertBefore(projectCard, projectContainer.firstChild);

        // Add event listener for the delete button
        const deleteButton = projectCard.querySelector("#btn_delete");
        deleteButton.onclick = () => {
            projectContainer.removeChild(projectCard);
        };


         // Add event listener for the mark as done button
         // Add event listener for the mark as done button
        const doneButton = projectCard.querySelector("#btn_done");
        doneButton.onclick = () => {
            projectCard.classList.add("done");
            doneButton.disabled = true;
        };

        // Clear the form and close the modal
        form.reset();
        modal.style.display = "none";
    };
});
