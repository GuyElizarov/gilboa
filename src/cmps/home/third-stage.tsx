import { DogFilter } from './dog-filter'
import { dogsData } from '../../data/dog'
import { ThirdStageDogsList } from './third-stage-dogs-list'

export const ThirdStage = ({ setAdoptionProcessStage }: { setAdoptionProcessStage: Function }) => {
    return <div className="third-stage dog-picker">
        <DogFilter />
        <ThirdStageDogsList dogs={dogsData} />
    </div>
}
