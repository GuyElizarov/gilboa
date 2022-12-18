
import { FirstStage } from '../cmps/home/first-stage'
import { SecondStage } from '../cmps/home/second-stage'
import { ThirdStage } from '../cmps/home/third-stage'
import { ForthStage } from '../cmps/home/forth-stage'
import { FifthStage } from '../cmps/home/fifth-stage'
import { fifthStageQuestionnaireData } from '../data/conditionsData'

import { AdoptionStages, FifthStageQuestionnaire, FilterBy } from '../interface/home/home-interface'
import { useEffect, useRef, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../store/hooks'
import { selectDogs } from '../store/dog/dog.slice'
import { fetchDogs } from '../store/dog/dog.actions'
import { Answers } from '../interface/answers.interface'
import { Dog } from '../interface/dog.interface'
import { getFilteredDogs } from '../services/dog.service'


export const Home = () => {

        const dispatch = useAppDispatch()
        const dogs = useAppSelector(selectDogs)
        const [filteredDogs, setFilteredDogs] = useState<Dog[] | null>(null)
        useEffect(() => {
                dispatch(fetchDogs())
        }, [])

        const [adoptionProcessStage, setAdoptionProcessStage] = useState<AdoptionStages>('first')
        const [QuestionnaireData, setQuestionnaireData] = useState<FifthStageQuestionnaire[]>(fifthStageQuestionnaireData)

        const setFilter = (filterSubjects: FilterBy) => {
                const filteredDogs = getFilteredDogs(filterSubjects)
                if (filteredDogs.length === dogs.length) setFilteredDogs(null)
                else setFilteredDogs(filteredDogs)
        }
        console.log(filteredDogs);



        // const [answers, setAnswers] = useState<Answers>(
        //         {
        //                 amountOfDogsInThePast: null,
        //                 averageNumOfActivity: null,
        //                 lowestAgeInHousehold: null,
        //                 whereWillTheDogLive: null,
        //                 hoursDogWillBeAlone: null,
        //                 isThereAGarden: null,

        //         })

        if (dogs.length === 0) return <div></div>


        return <>

                {/* {adoptionProcessStage === 'first' && <FirstStage setAdoptionProcessStage={setAdoptionProcessStage} />} */}
                {/* {adoptionProcessStage === 'second' && <SecondStage setAdoptionProcessStage={setAdoptionProcessStage} />} */}
                {/* {adoptionProcessStage === 'third' && <ThirdStage setAdoptionProcessStage={setAdoptionProcessStage} dogs={dogs} />} */}
                {/* {adoptionProcessStage === 'forth' && <ForthStage setAdoptionProcessStage={setAdoptionProcessStage} />} */}
                {/* {adoptionProcessStage === 'fifth' && <FifthStage />} */}
                <ThirdStage setAdoptionProcessStage={setAdoptionProcessStage} dogs={filteredDogs ? filteredDogs : dogs} setFilter={setFilter} />
                <FifthStage QuestionnaireData={QuestionnaireData} setQuestionnaireData={setQuestionnaireData} />
        </>
}
