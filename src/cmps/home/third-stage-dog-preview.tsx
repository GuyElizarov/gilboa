import { Dog } from "../../interface/shared/dogs-interface"
import calenderImg from '../../assets/imgs/stage3/calender.png'
import sexTypeImg from '../../assets/imgs/stage3/sex-type.png'
import cakeImg from '../../assets/imgs/stage3/cake.png'
import weightImg from '../../assets/imgs/stage3/weight.png'
import emptyHeartImg from '../../assets/imgs/stage3/empty-heart.png'
import fullHeartImg from '../../assets/imgs/stage3/full-heart.png'

export const ThirdStageDogPreview = ({ dog }: { dog: Dog }) => {
    return <article className="dog-preview app-card">
        <div className="dog-image-wrapper">
            <img src={dog.imgSrc.thumbnail} alt="" />
        </div>
        <div className="actions">
            <div className="top-buttons">
                <button><img src={sexTypeImg} alt="" /><span>זכר</span></button>
                <button><img src={cakeImg} alt="" /><span>{dog.age}</span></button>
                <button><img src={weightImg} alt="" /><span>{`${dog.weightKG} ק״ג`}</span></button>
            </div>
            <div className="bottom-buttons">
                <button><img src={emptyHeartImg} alt="" /></button>
                <button><img src={calenderImg} alt="" /></button>
            </div>
        </div>
    </article>
}