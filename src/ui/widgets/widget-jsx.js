import QuestionComponent from "../react/components/QuestionComponent";
import AnswerComponent from "../react/components/AnswerComponent";
import CommentComponent from "../react/components/CommentComponent";

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

function drawComment(comment) {
    return () => CommentComponent(comment);
}
