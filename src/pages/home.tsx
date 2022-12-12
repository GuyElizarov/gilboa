import { Introduction } from '../cmps/home/introduction'
import { Questionnaire } from '../cmps/home/questionnaire'
import { DogPicker } from '../cmps/home/dog-picker'
import { AdoptionStages } from '../interface/home/home-interface'
import { useState } from 'react'


export const Home = () => {

    const [adoptionProcessStage, setAdoptionProcessStage] = useState<AdoptionStages>('first')

    return <>
        {adoptionProcessStage === 'first' && <Introduction setAdoptionProcessStage={setAdoptionProcessStage} />}
        {adoptionProcessStage === 'second' && <Questionnaire />}
        {adoptionProcessStage === 'third' && <DogPicker />}
    </>
}
