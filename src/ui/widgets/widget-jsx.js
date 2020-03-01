import QuestionComponent from "../react/components/QuestionCard";
import AnswerComponent from "../react/components/AnswerComponent";

export const widgetJsx = {
    drawQuestion,
    drawAnswer,
    drawComment
};

function drawQuestion(question) {
    return () => QuestionComponent(question);
}

function drawAnswer(answer) {
    return () => AnswerComponent(answer);
}

function drawComment() {

}
