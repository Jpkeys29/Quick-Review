import { use } from "react";
import { useEffect, useState, useRef } from "react";
import { SidePage } from "./SidePage";

export const Draggable = () => {
    const initialValues = [
        { id: 1, value: "item 1"},
        { id: 2, value: "item 2"},
        { id: 3, value: "item 3"},
        { id: 4, value: "item 4"},
    ];

    const [position, setPosition] = useState(
        Object.fromEntries(initialValues.map(item => [item.id,{x:0, y:0}])));

    const [draggingId, setDraggingId] = useState(null);
    const [isOpen, setIsOpen] = useState(
        initialValues.map(item => ({
            id: item.id, 
            toggled: false
        }))
    );
    const dragStartPositionsRef = useRef({});

    const handleToggle = (idToggle) => {
            setIsOpen(prevItem => prevItem.map(item => 
                item.id === idToggle ? {...item, toggled: !item.toggled} : item
                ))
    }

    const handleMouseDown = (e,id) => {
        setDraggingId(id);
        dragStartPositionsRef.current = {
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
                    x: e.clientX - dragStartPositionsRef.current.x,
                    y: e.clientY - dragStartPositionsRef.current.y,
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
            onClick={() => handleToggle(item.id)}
            onMouseDown={(e) => handleMouseDown(e, item.id)}
            style={{
                transform: `translate(${position[item.id].x}px, ${position[item.id].y}px)`,
                cursor: draggingId === item.id ? 'grabbing' : 'grab',
                // backgroundColor: draggingId === item.id ? '#a5d6a7' : '#e0e0e0',
              }}
            >
                {isOpen.find(openItem => openItem.id === item.id)?.toggled && (<SidePage itemId={item.id}/>)}
                {item.value}
            </div>
            ))
        }
        </div>
    )
}