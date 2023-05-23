import {useOnDraw} from './Hooks'
import { useEffect } from 'react'


function Canvas() {

    const {
        onMouseDown, 
        setCanvasRef, 
        canvasRef
    } = useOnDraw(onDraw) 

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = canvas.parentNode;
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }, []);

    function onDraw(ctx, point, prevPoint) {
      drawLine(prevPoint, point, ctx, '#b5a771', 1)
    }

    function drawLine(start, end, ctx, color, width) {
        if (!start) return;
      
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
      
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
        ctx.fill();
    }
      

    function clearCanvas() {
        console.log('Clearing canvas...');
        const canvas = canvasRef.current;
        if (!canvas) return;
      
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
    }
      
      
      

    return (
        <section>
            <h2>Create Your Own Constellation</h2>
            <button onClick={clearCanvas}>Clear</button>
            <br />
            <div className="canvas-container">
                <canvas 
                    onMouseDown={onMouseDown}
                    ref={setCanvasRef}
                />
            </div>
        </section>
    )
}

export default Canvas