
class Banco {
    constructor(nombre, edad, dni) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.saldoPesos = 0;
        this.saldoDolares = 0;
        this.limiteDolares = 200;
        this.tasaConversion = 1200;
    }

    ingresarPesos(cantidad) {
        if (cantidad > 0) {
            this.saldoPesos += cantidad;
            console.log(`Has ingresado $${cantidad} pesos. Saldo actual en pesos: $${this.saldoPesos}`);
        } else {
            console.log("La cantidad debe ser mayor a 0.");
        }
    }

    comprarDolares(cantidad) {
        const costoEnPesos = cantidad * this.tasaConversion;

        if (cantidad <= 0) {
            console.log("La cantidad de dólares debe ser mayor a 0.");
        } else if (cantidad + this.saldoDolares > this.limiteDolares) {
            console.log(`No puedes comprar más de ${this.limiteDolares} dólares.`);
        } else if (costoEnPesos > this.saldoPesos) {
            console.log(`No tienes suficientes pesos para comprar ${cantidad} dólares.`);
        } else {
            this.saldoPesos -= costoEnPesos;
            this.saldoDolares += cantidad;
            console.log(`Has comprado ${cantidad} dólares. Saldo actual en dólares: $${this.saldoDolares}, Saldo en pesos: $${this.saldoPesos}`);
        }
    }

    consultarSaldo() {
        console.log(`Saldo en pesos: $${this.saldoPesos}, Saldo en dólares: $${this.saldoDolares}`);
    }

    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, DNI: ${this.dni}`);
    }
}

let usuario;

function iniciarUsuario() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const dni = document.getElementById("dni").value;

    if (nombre && edad && dni) {
        usuario = new Banco(nombre, edad, dni);
        document.getElementById("output").innerHTML = "Usuario creado con éxito.";
    } else {
        document.getElementById("output").innerHTML = "Por favor, completa todos los campos.";
    }
}

function ingresarPesos() {
    const cantidad = parseFloat(document.getElementById("pesos").value);
    if (usuario) {
        usuario.ingresarPesos(cantidad);
        document.getElementById("output").innerHTML = `Has ingresado $${cantidad} pesos.`;
    } else {
        document.getElementById("output").innerHTML = "Debes crear un usuario primero.";
    }
}

function comprarDolares() {
    const cantidad = parseFloat(document.getElementById("dolares").value);
    if (usuario) {
        usuario.comprarDolares(cantidad);
        document.getElementById("output").innerHTML = `Has comprado ${cantidad} dólares.`;
    } else {
        document.getElementById("output").innerHTML = "Debes crear un usuario primero.";
    }
}

function consultarSaldo() {
    if (usuario) {
        usuario.consultarSaldo();
        document.getElementById("output").innerHTML = `Saldo en pesos: $${usuario.saldoPesos}, Saldo en dólares: $${usuario.saldoDolares}.`;
    } else {
        document.getElementById("output").innerHTML = "Debes crear un usuario primero.";
    }
}

function mostrarInformacion() {
    if (usuario) {
        document.getElementById("output").innerHTML = `Nombre: ${usuario.nombre}, Edad: ${usuario.edad}, DNI: ${usuario.dni}.`;
    } else {
        document.getElementById("output").innerHTML = "Debes crear un usuario primero.";
    }
}


document.addEventListener("DOMContentLoaded", iniciarUsuario);