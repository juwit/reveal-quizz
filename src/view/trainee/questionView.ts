import {Question} from '../../model/question.js';
import {TraineeAnswerView} from './answerView.js';
import {Deck} from '../deck.js';

export class TraineeQuestionView {
    question: Question;
    section: Element;
    answerViews: TraineeAnswerView[] = [];
    private deck: Deck;

    constructor(question: Question, section, deck: Deck) {
        this.question = question;
        this.section = section;
        this.deck = deck;
    }

    submitQuestion() {
        console.log(`Question ${this.question.text} submitted !`);

        this.question.answer();
        this.answerViews.forEach(it => it.computeState());

        // lock the question to disallow futher answers
        this.answerViews.forEach(it => it.lock());

        // remove submit button
        this.section.getElementsByTagName('button')[0].remove();

        const showResponseCallback = () => {
            console.log('received event showResponses')
            this.showReponses();
            this.deck.off('showResponses', showResponseCallback);
        };
        this.deck.on('showResponses', showResponseCallback);

        console.log('Sending questionAnswered event');
        this.deck.dispatchEvent({type: 'questionAnswered', data: this.question});
    }

    /**
     * Show the correct and incorrect responses on the question
     */
    showReponses() {
        this.answerViews.forEach(it => it.showResponse());

        if(this.section.getElementsByTagName('button').length > 0){
            // remove submit button
            this.section.getElementsByTagName('button')[0].remove();
        }
    }

    renderAnswers(form: HTMLFormElement) {
        const multipleCorrectAnswers = this.question.answers.filter(it => it.correct).length > 1;
        const questionType = multipleCorrectAnswers ? 'checkbox' : 'radio';
        this.question.answers.forEach(it => it.type = questionType);

        this.question.answers.forEach(it => {
            const div = document.createElement('div');
            form.append(div);
            const view = new TraineeAnswerView(it, div);
            view.renderAnswer();
            this.answerViews.push(view);
        });
    }

    renderQuestion() {
        this.section.innerHTML = `
            <h1>${this.question.text}</h1>
            <form>
                <button type="button">Submit</button>
            </form>
        `;
        this.section.classList.add('reveal-quiz-question');
        const button = this.section.getElementsByTagName('button')[0];
        button.addEventListener('click', () => {
            this.submitQuestion();
        });

        const form = this.section.getElementsByTagName('form')[0];
        this.renderAnswers(form);
    }
}