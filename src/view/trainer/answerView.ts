import {Answer} from "../../model/answer.js";

export class TrainerAnswerView {
    answer: Answer;
    private div: HTMLDivElement;

    constructor(answer: Answer, div: HTMLDivElement) {
        this.answer = answer;
        this.div = div;
    }

    renderAnswer() {
        this.div.classList.add("reveal-quizz-answer");
        this.div.innerHTML = `
            <input type="${this.answer.type}" name="answer" id="${this.answer.text}" />
            <label for="${this.answer.text}">${this.answer.text}</label>
        `;
    }

    computeState() {
        const input = this.div.getElementsByTagName("input")[0];
        this.answer.selected = input.checked;
    }

    lock() {
        const input = this.div.getElementsByTagName("input")[0];
        input.classList.add("locked");
        input.disabled = true;
    }

    showResponse() {
        console.log(this.answer);
        // selected correct answer
        if (this.answer.correct) {
            this.div.classList.add("correct");
        }
    }
}
