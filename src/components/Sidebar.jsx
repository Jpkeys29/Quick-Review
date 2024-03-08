export default function SideBar({onSelectedQuestion}) {
    return <aside id="sidebar">
        <h2>Topics</h2>
        <menu>
            <ul><button onClick={onSelectedQuestion}>Experiment Design</button></ul>
            <ul><button>Descriptive Statistics</button></ul>
            <ul><button>Introduction to Probability</button></ul>
            <ul><button>Probaility</button></ul>
            <ul><button>Normal Distribution</button></ul>
        </menu>
    </aside>
}