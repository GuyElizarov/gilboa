import { Dog } from "../../interface/dog.interface"
import { ThirdStageDogPreview } from './third-stage-dog-preview'

export const ThirdStageDogsList = ({ dogs }: { dogs: Dog[] }) => {
    return <div className="third-stage-dog-list">
        {dogs.map(dog => <ThirdStageDogPreview dog={dog} />)}
    </div>
}