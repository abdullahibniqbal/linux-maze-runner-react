/*
    To mediate the functionality between the ui and the domain layer
 */
export const mediator = {
    addQuestion: addQuestion
};

function addQuestion() {
    console.log("mediator.addQuestion() is called...");
}

