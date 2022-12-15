export interface Condition {
    title: string,
    text: string
    imgSrc: string
}

export interface QuestionnaireCard {
    title: string,
    imgSrc: string,
    answers: string[]
}

export type AdoptionStages = 'first' | 'second' | 'third' | 'forth' | 'fifth'

export type PreviewTypes = 'dog' | 'questionnaire' | 'condition'

export interface FifthStageQuestionnaire {
    id: string;
    question: string;
    answer: null | 'yes' | 'no';

}
