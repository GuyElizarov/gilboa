
import { FirstStage } from '../cmps/home/first-stage'
import { SecondStage } from '../cmps/home/second-stage'
import { ThirdStage } from '../cmps/home/third-stage'
import { ForthStage } from '../cmps/home/forth-stage'

import { AdoptionStages } from '../interface/home/home-interface'
import { useState } from 'react'


export const Home = () => {

        const [adoptionProcessStage, setAdoptionProcessStage] = useState<AdoptionStages>('first')
        console.log('Home  adoptionProcessStage', adoptionProcessStage)

        return <>

                {/* {adoptionProcessStage === 'first' && <FirstStage setAdoptionProcessStage={setAdoptionProcessStage} />} */}
                {/* {adoptionProcessStage === 'second' && <SecondStage setAdoptionProcessStage={setAdoptionProcessStage} />}
                {adoptionProcessStage === 'third' && <ThirdStage setAdoptionProcessStage={setAdoptionProcessStage} />}
                {adoptionProcessStage === 'forth' && <ForthStage setAdoptionProcessStage={setAdoptionProcessStage} />} */}
                <ThirdStage setAdoptionProcessStage={setAdoptionProcessStage} />

        </>
}
