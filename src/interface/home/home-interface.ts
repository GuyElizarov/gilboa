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

export type AdoptionStages = 'first' | 'second' | 'third' | 'forth'

export type PreviewTypes = 'dog' | 'questionnaire' | 'condition'


