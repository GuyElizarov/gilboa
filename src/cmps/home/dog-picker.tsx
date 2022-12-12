import { DogFilter } from './dog-filter'
import { dogsData } from '../../data/dog'
import { DynamicList } from './dynamic-list'

export const DogPicker = () => {


    return <div className="third-stage dog-picker">
        <DogFilter />
        <DynamicList type='dog' content={dogsData} />
    </div>
}