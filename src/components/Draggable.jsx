export const Draggable = () => {
    const dragItems = [
        { id: 2, value: "drag 1"},
        { id: 1, value: "drag 2"},
        { id: 3, value: "drag 3"},
        { id: 4, value: "drag 4"},
    ]
    return(
        <>
        {
            dragItems.map(item => (
                <div
                key={item.id}
                id={item.id}
                className="item"
                draggable
                >
                    {item.value}
                </div>
            ))
        }
            {/* <div>One</div>
            <div>Two</div>
            <div>Three</div> */}
        </>
    )
}