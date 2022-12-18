import { useState } from "react"
import { TriangleOrangeUp } from "../icons/triangle-orange-up"
import { TriangleOrangeDown } from "../icons/triangle-orange-down"
import { TriangleBlue } from "../icons/triangle-blue"


interface Subject {
    topic: string
    options: string[]
    answer: string
}

export const FilterCardPreview = ({ subject, setFilterAnswer }: { subject: Subject, setFilterAnswer: Function }) => {
    const [isFilterTopicOpen, setIsFilterTopicOpen] = useState<boolean>(false)


    const onSetNewAnswer = (option: string, filterTopic: string) => {
        setIsFilterTopicOpen(false)
        setFilterAnswer(option, filterTopic)
    }

    return <div className='filter-card app-card' >
        <div onClick={() => setIsFilterTopicOpen(true)} className={`topic-wrapper ${subject.answer ? 'is-answered' : ''}`}><span>{subject.answer ? `${subject.answer}` : `${subject.topic}`}</span>{!subject.answer && <TriangleOrangeDown />}{subject.answer && <TriangleBlue />}</div>
        {/* {isFilterTopicOpen && <ul {() => setIsFilterTopicOpen(false)} className="app-card"> */}
        {isFilterTopicOpen && <ul className="app-card">
            {subject.options.map((option, idx) => {
                if (idx === 0) return <>
                    <li onClick={() => onSetNewAnswer('', subject.topic)}> <span> {subject.topic}</span> <span>{<TriangleOrangeUp />}</span></li>
                    <li key={idx} className={`${subject.answer === option ? 'chosen' : ''}`} onClick={() => onSetNewAnswer(option, subject.topic)}>{option}</li>
                </>
                else return <li className={`${subject.answer === option ? 'chosen' : ''}`} onClick={() => onSetNewAnswer(option, subject.topic)}>{option}</li>
            })}
        </ul>}
    </div>
}