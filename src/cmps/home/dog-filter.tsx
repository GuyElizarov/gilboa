import { useRef, useState } from 'react'
import { FilterBy, FilterCard } from '../../interface/home/home-interface'
import { FilterCardPreview } from './filter-card-preview'


export const DogFilter = ({ setFilter }: { setFilter: Function }) => {
    const [filterSubjects, setFilterSubjects] = useState<FilterCard[]>([{ topic: 'מין הכלב', filterTitle: 'sex', options: ['זכר', 'נקבה', 'לא משנה'], answer: '' }, { topic: 'טווח גילאים', filterTitle: 'ageRange', options: ['זכר', 'נקבה'], answer: '' }, { topic: 'גודל ומשקל רצויים', filterTitle: 'sizeAndWeight', options: ['זעיר - 1-5 ק"ג', 'קטן - 5-10 ק"ג ', 'בינוני - 10-20 ק"ג ', 'גדול - 20-35 ק"ג ', 'ענק - 35+ ק"ג'], answer: '' }, { topic: 'סוג', filterTitle: 'breed', options: ['בולדוג', 'גולדן רטריבר', 'לברדור', 'פיטבול', 'ג׳ק ראסל'], answer: '' }, { topic: 'חיות נוספות בבית', filterTitle: 'willAdoptTwo', options: ['מוכן', 'לא מוכן'], answer: '' }])
    const filterBy = useRef<FilterBy>({ sex: '', ageRange: '', sizeAndWeight: '', breed: '', willAdoptTwo: '' })

    const setFilterAnswer = (val: string, filterTopic: string) => {
        const filterSubjectsReplika = [...filterSubjects]
        const relevantSubject = filterSubjectsReplika.find(subject => subject.topic === filterTopic)!
        relevantSubject.answer = val
        const { filterTitle } = relevantSubject
        filterBy.current[filterTitle] = val
        setFilterSubjects([...filterSubjectsReplika])

        setFilter(filterBy.current)
    }

    return <div className="third-stage-dog-filter ">
        <div className="subject-list">
            {filterSubjects.map(subject => <FilterCardPreview subject={subject} setFilterAnswer={setFilterAnswer} key={subject.topic} />)}
        </div>
    </div>
}