const inactiveEmployees = [
    "User inactive 1",
    "User inactive 2",
]

const defaultFrontEnd = [
    "User front 1",
    "User front 2",
]

const defaultBackEnd = [
    "User back 1",
    "User back 2",
]

const getSuggestedReviewerListItems = () => {
    return document.getElementsByClassName("suggested-reviewer-list-item");
}

const getReviewersGroup = () => {
    return document.getElementById("id_reviewers_group");
}

const removeInactiveEmployees = () => {
    const reviewers = getSuggestedReviewerListItems();

    for (i = 0; i < reviewers.length; i++) {
        const reviewerObject = reviewers[i];
        const reviewer = reviewerObject.getAttribute("data-display-name");

        if (inactiveEmployees.indexOf(reviewer) !== -1) {
            console.log('inactive => ', reviewer)
            setTimeout(() => reviewerObject.parentNode.removeChild(reviewerObject), 100);
            continue;
        }
    }
}

const setDefaultReviewers = (reviewersGroup) => {
    const reviewers = getSuggestedReviewerListItems();

    for (i = 0; i < reviewers.length; i++) {
        const reviewerObject = reviewers[i];
        const reviewer = reviewerObject.getAttribute("data-display-name");

        if (reviewersGroup.indexOf(reviewer) !== -1) {
            console.log(reviewer)
            console.log('selected')
            reviewerObject.click();
        }
    }
}

const setDefaultFrontEndReviewers = () => {
    console.log('setDefaultFrontEndReviewers')
    setDefaultReviewers(defaultFrontEnd)
}

const setDefaultBackEndReviewers = () => {
    console.log('setDefaultBackEndReviewers')
    setDefaultReviewers(defaultBackEnd)
}

const createButton = (label) => {
    let button = document.createElement('button');
    let text = document.createTextNode(label);
    button.appendChild(text);
    button.style.padding = "2px";
    button.style.marginRight = "5px";
    button.style.width = "200px";
    button.type = 'button';
    return button;
}

const createActions = () => {
    let buttonFrontend = createButton('FrontEnd Reviewers');
    buttonFrontend.addEventListener('click', () => {
        setDefaultFrontEndReviewers();
        setDefaultFrontEndReviewers();
        removeInactiveEmployees();
    });

    let buttonBackend = createButton('BackEnd Reviewers');
    buttonBackend.addEventListener('click', () => {
        setDefaultBackEndReviewers();
        setDefaultBackEndReviewers();
        removeInactiveEmployees();
    });

    let container = getReviewersGroup();
    container.appendChild(buttonFrontend);
    container.appendChild(buttonBackend);
}

const process = () => {
    removeInactiveEmployees();
    createActions();
}

console.log('Extension loaded!');

setTimeout(function () {
    process();
}, 200);
