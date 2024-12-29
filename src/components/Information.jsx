import Interests from "./Interests.jsx";
import Education from "./Education.jsx";

export default function Information() {
    return (
        <>
            <div className="grid grid-cols-2 gap-[30px] xl:grid-cols-12 xl:gap-[30px]">
                <Interests />
                <Education />
            </div>
        </>
    )
}