export default function SideBar({onSelectedQuestion, question}) {
    return <aside id="sidebar">
        <h2>Topics</h2>
        <menu>
            <ul><button onClick={() => onSelectedQuestion(question) }>Experiment Design</button></ul>
            <ul><button onClick={() => onSelectedQuestion(question)}>Descriptive Statistics</button></ul>
            <ul><button>Introduction to Probability</button></ul>
            <ul><button>Probaility</button></ul>
            <ul><button>Normal Distribution</button></ul>
        </menu>
    </aside>
}