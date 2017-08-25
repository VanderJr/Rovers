/* Desenvolvido por Vander Junior */

function coordinates() {
    var coordXPlato = document.getElementById("coordXPlato").value;
    var coordYPlato = document.getElementById("coordYPlato").value;
    var coordXRover = document.getElementById("coordXRover").value;
    var coordYRover = document.getElementById("coordYRover").value;
    var direInicial = document.getElementById("direInicial").value;
    var instruction = document.getElementById("instruction").value;
    var finalX = coordXRover - 0;
    var finalY = coordYRover - 0;
    //position define a rosa dos ventos N E S W
    var position = 0;
    if (coordXPlato > 0 && coordYPlato > 0 && coordXRover > 0 && coordYRover > 0 && direInicial.length > 0 && instruction.length > 0) {
        // posição inicial do rover
        if (direInicial == "N") {
            position = 0;
        } else if (direInicial == "E") {
            position = 90;
        } else if (direInicial == "S") {
            position = 180;
        } else if (direInicial == "W") {
            position = 270;
        }
        // monta array com instruções
        var arrayInstruction = instruction.split("");
        for (var i = 0; i < arrayInstruction.length; i++) {
            //define a nova posição 
            if (arrayInstruction[i] == "l" || arrayInstruction[i] == "L") {
                position = position - 90;
            } else if (arrayInstruction[i] == "r" || arrayInstruction[i] == "R") {
                position = position + 90;
            } else if (arrayInstruction[i] == "m" || arrayInstruction[i] == "M") {
                if (position == 0) {
                    finalY += 1;
                } else if (position == 90) {
                    finalX += 1;
                } else if (position == 180) {
                    finalY -= 1;
                } else if (position == 270) {
                    finalX -= 1;
                }

            }
            if (position > 270) {
                position = 0;
            } else if (position < 0) {
                position = 270;
            }
        }
        if (position == 0) {
            direction = "N";
        } else if (position == 90) {
            direction = "E";
        } else if (position == 180) {
            direction = "S";
        } else if (position == 270) {
            direction = "W";
        }
        // Monta resposta 
        document.getElementById("result").innerHTML = "Rover final position: " + finalX + " " + finalY + " " + direction;
    }

}