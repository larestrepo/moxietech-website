// src/components/RayoAnimacion.js

import React, { useEffect } from 'react';

const RayoAnimacion = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let lastTime = 0;  // Variable para llevar el control del tiempo

    function dibujarRayo(x1, y1, length, angle, lineWidth, isBranch) {
        if (length < 2) return;
      
        const x2 = x1 + Math.cos(angle) * length;
        const y2 = y1 + Math.sin(angle) * length;
      
        // Dibujamos la rama
        if (isBranch) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = 'rgba(215, 240, 217, 0.8)';
        ctx.stroke();
        }
      
        // Recursión para crear ramas
        const newLength = length * 0.7;
        const newLineWidth = lineWidth * 0.7;
        const angleVariation = Math.random() * Math.random() + Math.random();
      
        // Llamadas recursivas para las ramas
        dibujarRayo(x2, y2, newLength, angle - angleVariation, newLineWidth, true);
        dibujarRayo(x2, y2, newLength, angle + angleVariation, newLineWidth, true);
      }
      
      function animar(currentTime) {
        // Controlamos el tiempo para hacer la animación más lenta
        if (currentTime - lastTime >= 2000) {  // 100 ms entre cada frame (puedes ajustar este valor)
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        //   dibujarRayo( Math.random()-4, canvas.height -30, 350, -Math.PI / 4, 5, true);
          dibujarRayo( Math.random()-4, canvas.height -30, 350,-Math.PI / 4, 3, true);
          lastTime = currentTime;
        }
      
        requestAnimationFrame(animar);  // Continuamos animando
      }
      
      requestAnimationFrame(animar);  // Comenzamos la animación
      
    
    
      
  }, []);

  return <canvas id="canvas" style={{ position: 'absolute', top: 0, left: 0 }} />;
};

export default RayoAnimacion;
