import { use } from "react";
import { useEffect, useState, useRef } from "react";

export const Draggable = () => {
    const initialValues = [
        { id: 1, value: "drag 1"},
        { id: 2, value: "drag 2"},
        { id: 3, value: "drag 3"},
        { id: 4, value: "drag 4"},
    ];

    const [position, setPosition] = useState(
        Object.fromEntries(initialValues.map(item => [item.id,{x:0, y:0}])));

    const [draggingId, setDraggingId] = useState(null);
    const dragStartPositions = useRef({});

    const handleMouseDown = (e,id) => {
        setDraggingId(id);
        dragStartPositions.current = {
            x: e.clientX - position[id].x,
            y: e.clientY - position[id].y,
        };
    };

    const handleMouseUp = () => {
        setDraggingId(null);
    }
    
    const handleMouseMove = (e) => {
        if (draggingId !== null) {
            setPosition(prev => ({
                ...prev,
                [draggingId] : {
                    x: e.clientX - dragStartPositions.current.x,
                    y: e.clientY - dragStartPositions.current.y,
                }
            }));
        }
    };
    

    return(
        <div
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        >
        {initialValues.map(item => (
            <div
            key={item.id}
            className="item"
            onMouseDown={(e) => handleMouseDown(e, item.id)}
            style={{
                transform: `translate(${position[item.id].x}px, ${position[item.id].y}px)`,
                cursor: draggingId === item.id ? 'grabbing' : 'grab',
                backgroundColor: draggingId === item.id ? '#a5d6a7' : '#e0e0e0',
              }}
            >
                {item.value}
            </div>
            ))
        }
        </div>
    )
}