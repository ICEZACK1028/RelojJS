(function(){

    var actualizarHora = function(){
        var fecha = new Date(),
            horas = fecha.getHours(),
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            ampm,
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year= fecha.getFullYear();
        
        var pHoras = document.getElementById("horas"),
            pMinutos = document.getElementById("minutos"),
            pSegundos = document.getElementById("segundos"),
            pAmPm = document.getElementById("ampm");
            pDiaSemana = document.getElementById("diaSemana"),
            pDia = document.getElementById("dia"),
            pMes = document.getElementById("mes"),
            pYear = document.getElementById("year");

        var semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
        pDiaSemana.textContent = semana[diaSemana];

        pDia.textContent = dia;

        var mesList = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
        pMes.textContent = mesList[mes];

        pYear.textContent = year;
        
        if (horas >= 12){
            horas = horas;
            ampm = "PM";
        }else{
            ampm = "AM";
        };
        
            pAmPm.textContent = ampm;
        
        if(horas == 0 ){
            horas = 12;
        };
        
            pHoras.textContent = horas;

        if(minutos < 10){
            minutos = "0" + minutos;
        }
        
            pMinutos.textContent = minutos;
        
        if(segundos < 10){
            segundos = "0" + segundos;
        }

            pSegundos.textContent = segundos;


    };
    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);

}());