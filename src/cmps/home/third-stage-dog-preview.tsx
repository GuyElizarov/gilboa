import { Dog } from "../../interface/dog.interface"
import { Hearts } from "../icons/hearts"
import { SexType } from "../icons/sex-type"
import { Cake } from "../icons/cake"
import { Weight } from "../icons/weight"
import { Calender } from "../icons/calender"
import { useState } from "react"

export const ThirdStageDogPreview = ({ dog }: { dog: Dog }) => {

    const [isLiked, setLiked] = useState<boolean>(false)

    return <article className="dog-preview app-card">
        <div className="dog-image-wrapper">
            <img src={dog.imgSrc.thumbnail} alt="" />
            <span className="flex align-center">{dog.name}</span>
        </div>
        <div className="actions">
            <div className="top-buttons">
                <div>{<SexType />}<span>{dog.sex}</span></div>
                <div>{<Cake />}<span>{dog.age}</span></div>
                <div>{<Weight />}<span>{`${dog.weightKG} ק״ג`}</span></div>
            </div>
            <div className="bottom-buttons">
                <button onClick={() => setLiked(!isLiked)}>{<Hearts isLiked={isLiked} />}</button>
                <button>{<Calender />}</button>
            </div>
        </div>
    </article>
}