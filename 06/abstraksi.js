class Kendaraan {



    constructor(jenis) {

        if (this.constructor === Kendaraan) {

            throw new Error("Kelas Kendaraan adalah kelas abstrak dan tidak dapat diinstansiasi.");

        }

        this.jenis = jenis;

    }



    bergerak() {

        throw new Error("Metode 'bergerak()' harus diimplementasikan.");

    }

}



class Mobil extends Kendaraan {

    constructor() {

        super('Mobil');

    }



    bergerak() {

        console.log(`${this.jenis} bergerak dengan roda.`);

    }

}



class Kapal extends Kendaraan {

    constructor() {

        super('Kapal');

    }



    bergerak() {

        console.log(`${this.jenis} bergerak di atas air.`);

    }

}



class Kereta extends Kendaraan {

    constructor() {

        super('Kereta');

    }

    

    bergerak() {

        console.log(`${this.jenis} bergerak di atas rel.`);

    }

}



const mobil = new Mobil();

mobil.bergerak();



const kapal = new Kapal();

kapal.bergerak();



const kereta = new Kereta();

kereta.bergerak();
