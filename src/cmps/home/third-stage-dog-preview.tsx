import { Dog } from "../../interface/shared/dogs-interface"

export const ThirdStageDogPreview = ({ dog }: { dog: Dog }) => {
    return <article className="dog-preview app-card">
        <div className="dog-image-wrapper">
            <img src={dog.imgSrc.thumbnail} alt="" />
        </div>
        <div className="actions">
            <div className="button-left-wrapper">
                <button></button>
            </div>
            <div className="button-right-wrapper">
                <button></button>
            </div>
        </div>
    </article>
}