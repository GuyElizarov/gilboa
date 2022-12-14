import { Dog } from "../../interface/shared/dogs-interface"
import calenderImg from '../../assets/imgs/stage3/calender.png'

export const ThirdStageDogPreview = ({ dog }: { dog: Dog }) => {
    return <article className="dog-preview app-card">
        <div className="dog-image-wrapper">
            <img src={dog.imgSrc.thumbnail} alt="" />
        </div>
        <div className="actions">
            <div className="top-actions">

            </div>
            <div className="bottom-actions">
                <div className="button-left-wrapper">
                    <button></button>
                </div>
                <div className="button-right-wrapper">
                    <button></button>
                </div>
            </div>
        </div>
    </article>
}