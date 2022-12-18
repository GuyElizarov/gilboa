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
    answer: null | 'כן' | 'לא';

}

export interface FilterCard {
    topic: string
    answer: string
    options: string[]
    filterTitle: string
}

export interface FilterBy {
    [key: string]: string
    sex: string,
    ageRange: string,
    sizeAndWeight: string,
    breed: string,
    willAdoptTwo: string

}
