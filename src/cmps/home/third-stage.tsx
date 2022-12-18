import { DogFilter } from './dog-filter'
import { dogsData } from '../../data/dog'
import { ThirdStageDogsList } from './third-stage-dogs-list'
import { Dog } from '../../interface/dog.interface'

export const ThirdStage = ({ setAdoptionProcessStage, dogs, setFilter }: { setAdoptionProcessStage: Function, dogs: Dog[], setFilter: Function }) => {
    return <div className="third-stage dog-picker">
        <DogFilter setFilter={setFilter} />
        <ThirdStageDogsList dogs={dogs} />
    </div>
}
