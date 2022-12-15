
import { FirstStage } from '../cmps/home/first-stage'
import { SecondStage } from '../cmps/home/second-stage'
import { ThirdStage } from '../cmps/home/third-stage'
import { ForthStage } from '../cmps/home/forth-stage'
import { FifthStage } from '../cmps/home/fifth-stage'
import { fifthStageQuestionnaireData } from '../data/conditionsData'

import { AdoptionStages, FifthStageQuestionnaire } from '../interface/home/home-interface'
import { useState } from 'react'


export const Home = () => {

        const [adoptionProcessStage, setAdoptionProcessStage] = useState<AdoptionStages>('first')
        const [QuestionnaireData, setQuestionnaireData] = useState<FifthStageQuestionnaire[]>(fifthStageQuestionnaireData)

        return <>

                {/* {adoptionProcessStage === 'first' && <FirstStage setAdoptionProcessStage={setAdoptionProcessStage} />}
                {adoptionProcessStage === 'second' && <SecondStage setAdoptionProcessStage={setAdoptionProcessStage} />}
                {adoptionProcessStage === 'third' && <ThirdStage setAdoptionProcessStage={setAdoptionProcessStage} />}
                {adoptionProcessStage === 'forth' && <ForthStage setAdoptionProcessStage={setAdoptionProcessStage} />}
                {adoptionProcessStage === 'fifth' && <FifthStage />} */}
                {/* <ThirdStage setAdoptionProcessStage={setAdoptionProcessStage} /> */}
                <FifthStage QuestionnaireData={QuestionnaireData} setQuestionnaireData={setQuestionnaireData} />
        </>
}
