window.addEventListener('DOMContentLoaded', () => {
    const selectHoras = document.getElementById('horas');
    const selectAños = document.getElementById('años');

    for (let i = 0; i <= 50; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectHoras.appendChild(option);
    }

    for (let i = 0; i <= 40; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectAños.appendChild(option);
    }

   
    calcularSalarioNeto();
});

function calcularSalarioNeto() {
    const puesto = parseInt(document.getElementById('puesto').value);
    const horas = parseInt(document.getElementById('horas').value) || 0;
    const años = parseInt(document.getElementById('años').value) || 0;

   
    let sueldoHora = 0;
    switch (puesto) {
        case 1:
            sueldoHora = 300; 
            break;
        case 2:
            sueldoHora = 100; 
            break;
        case 3:
            sueldoHora = 120; 
            break;
        default:
            sueldoHora = 0;
    }

    
    const sueldoBase = parseFloat(sueldoHora * horas);
    const canastaBásica = parseFloat(sueldoBase * 0.025); 
    const apoyo = parseFloat(sueldoBase * 0.05);          
    const antigüedad = parseFloat(años * 150);            
    const estímulo = parseFloat(sueldoBase * 0.02);       

    const totalPercepciones = sueldoBase + canastaBásica + apoyo + antigüedad + estímulo;

   
    const isr = parseFloat(sueldoBase * 0.10);            
    const servicioSalud = parseFloat(sueldoBase * 0.035); 
    const afore = parseFloat(sueldoBase * 0.04);           
    const sindicato = parseFloat(sueldoBase * 0.01);       

    const totalDeducciones = isr + servicioSalud + afore + sindicato;

   
    const salarioNeto = totalPercepciones - totalDeducciones;

   
    document.getElementById('sueldoBase').innerHTML = '<b>$' + sueldoBase.toFixed(2) + '</b>';
    document.getElementById('canastaBásica').innerHTML = '<b>$' + canastaBásica.toFixed(2) + '</b>';
    document.getElementById('apoyo').innerHTML = '<b>$' + apoyo.toFixed(2) + '</b>';
    document.getElementById('antigüedad').innerHTML = '<b>$' + antigüedad.toFixed(2) + '</b>';
    document.getElementById('estímulo').innerHTML = '<b>$' + estímulo.toFixed(2) + '</b>';
    document.getElementById('totalPercepciones').innerHTML = '<b>$' + totalPercepciones.toFixed(2) + '</b>';

    document.getElementById('isr').innerHTML = '<b>$' + isr.toFixed(2) + '</b>';
    document.getElementById('servicioSalud').innerHTML = '<b>$' + servicioSalud.toFixed(2) + '</b>';
    document.getElementById('afore').innerHTML = '<b>$' + afore.toFixed(2) + '</b>';
    document.getElementById('sindicato').innerHTML = '<b>$' + sindicato.toFixed(2) + '</b>';
    document.getElementById('totalDeducciones').innerHTML = '<b>$' + totalDeducciones.toFixed(2) + '</b>';

    document.getElementById('salarioNeto').innerHTML = '<b>$' + salarioNeto.toFixed(2) + '</b>';
}