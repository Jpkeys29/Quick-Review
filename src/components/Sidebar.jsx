import Questions from "./Questions";

export default function SideBar({children}) {
    return (
        <div className="sidebar">
            {children}
            <button>Experiment Design</button>
            <button>Descriptive Statistics</button> 
        </div>
        )
}