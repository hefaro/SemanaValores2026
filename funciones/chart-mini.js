// Motor de renderizado en Canvas (Reemplazo gratuito y offline de Highcharts)
const Highcharts = {
    chart: function(containerId, options) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';
        const canvas = document.createElement('canvas');
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        container.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        const width = container.clientWidth;
        const height = container.clientHeight;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);

        const rawData = (options.series && options.series[0] && options.series[0].data) || [];
        if (rawData.length === 0) return;

        // Normalización de datos: soporta arrays simples [y1, y2] o de pares [[x1, y1], [x2, y2]]
        const data = rawData.map((d, i) => Array.isArray(d) ? {x: Number(d[0]), y: Number(d[1])} : {x: i, y: Number(d)});

        const padding = { top: 30, right: 25, bottom: 40, left: 45 };
        const chartW = width - padding.left - padding.right;
        const chartH = height - padding.top - padding.bottom;

        const xValues = data.map(d => d.x);
        const yValues = data.map(d => d.y);

        let minX = Math.min(...xValues), maxX = Math.max(...xValues);
        let minY = Math.min(0, Math.min(...yValues)), maxY = Math.max(...yValues);
        if (minX === maxX) { minX -= 1; maxX += 1; }
        if (minY === maxY) { minY -= 1; maxY += 1; }

        const getX = (val) => padding.left + ((val - minX) / (maxX - minX)) * chartW;
        const getY = (val) => padding.top + chartH - ((val - minY) / (maxY - minY)) * chartH;

        // Cuadrícula y Etiquetas
        ctx.strokeStyle = '#222222';
        ctx.lineWidth = 1;
        ctx.fillStyle = '#888888';
        ctx.font = '11px monospace';

        const steps = 5;
        for (let i = 0; i <= steps; i++) {
            // Eje Y
            const yVal = minY + (i / steps) * (maxY - minY);
            const yPos = getY(yVal);
            ctx.beginPath();
            ctx.moveTo(padding.left, yPos);
            ctx.lineTo(width - padding.right, yPos);
            ctx.stroke();
            ctx.fillText(yVal.toFixed(1), 8, yPos + 4);

            // Eje X
            const xVal = minX + (i / steps) * (maxX - minX);
            const xPos = getX(xVal);
            ctx.beginPath();
            ctx.moveTo(xPos, padding.top);
            ctx.lineTo(xPos, height - padding.bottom);
            ctx.stroke();
            ctx.fillText(xVal.toFixed(1), xPos - 10, height - 12);
        }

        // Gradiente inferior
        const gradient = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
        gradient.addColorStop(0, 'rgba(0, 242, 255, 0.35)');
        gradient.addColorStop(1, 'rgba(0, 242, 255, 0.0)');

        ctx.beginPath();
        ctx.moveTo(getX(data[0].x), getY(data[0].y));
        for (let i = 1; i < data.length; i++) {
            ctx.lineTo(getX(data[i].x), getY(data[i].y));
        }
        ctx.lineTo(getX(data[data.length - 1].x), getY(minY));
        ctx.lineTo(getX(data[0].x), getY(minY));
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();

        // Trazo Principal
        ctx.beginPath();
        ctx.moveTo(getX(data[0].x), getY(data[0].y));
        for (let i = 1; i < data.length; i++) {
            ctx.lineTo(getX(data[i].x), getY(data[i].y));
        }
        ctx.strokeStyle = '#00f2ff';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Nodos / Puntos
        for (let i = 0; i < data.length; i++) {
            const px = getX(data[i].x);
            const py = getY(data[i].y);
            ctx.beginPath();
            ctx.arc(px, py, 5, 0, 2 * Math.PI);
            ctx.fillStyle = '#00f2ff';
            ctx.fill();
            ctx.strokeStyle = '#050505';
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        return { reflow: () => {} };
    }
};