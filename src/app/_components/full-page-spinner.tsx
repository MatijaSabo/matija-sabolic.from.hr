import { BeatLoader } from "react-spinners";

export default function FullPageSpinner() {
    return (
        <div className="spinner-container">
            <div className="spinner">
                <BeatLoader />
            </div>
        </div>
    )
}