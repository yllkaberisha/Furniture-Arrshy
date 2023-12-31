

console.warn("Script Starts")

    var emri = "Lura";
    console.log("Emri: " + emri);

    var numri1 = 5;
    var numri2 = 10;
    var shuma = numri1 + numri2;
    console.log("Shuma: " + shuma);


    var mosha = 25;
    console.log("Mosha: " + mosha);

    var eshteStudent = true;
    console.log("Eshte student: " + eshteStudent);

    var numrat = [1, 2, 3, 4, 5];
    console.log("Vargu i numrave: " + numrat);
    console.log("Elementi i tretë i vargut: " + numrat[2]);


    // Përdorimi i JS operatorëve

    // Operatori i mbledhjes
    var a = 5;
    var b = 10;
    var shumaOperatorit = a + b;
    console.log("Shuma e operatorit të mbledhjes: " + shumaOperatorit);

    //  Operatori i zbritjes
    var c = 15;
    var d = 7;
    var ndryshimiOperatorit = c - d;
    console.log("Ndryshimi i operatorit të zbritjes: " + ndryshimiOperatorit);

    // Operatori i shumzimit
    var e = 4;
    var f = 6;
    var produktiOperatorit = e * f;
    console.log("Produkti i operatorit të shumzimit: " + produktiOperatorit);

    // Operatori i pjestimit
    var g = 20;
    var h = 5;
    var pjesetimiOperatorit = g / h;
    console.log("Pjesëtuesi i operatorit të pjestimit: " + pjesetimiOperatorit);



    

    // Krijimi dhe përdorimi i objekteve në JS 

    const tavolina = {
        lloji: "tavolinë",
        materiali: "druri",
        ngjyra: "kafe",
        lartësia: 75
    };
    console.log("Objekti tavolina: ", tavolina);
    console.log("Lloji i tavolinës: " + tavolina.lloji);
    console.log("Materiali i tavolinës: " + tavolina.materiali);
    console.log("Ngjyra e tavolinës: " + tavolina.ngjyra);
    console.log("Lartësia e tavolinës: " + tavolina.lartësia);

    const karrike = {
        lloji: "karrikë",
        materiali: "plastik",
        ngjyra: "e zeza",
        kembë: 4
    };
    console.log("Objekti karrike: ", karrike);
    console.log("Lloji i karrikës: " + karrike.lloji);
    console.log("Materiali i karrikës: " + karrike.materiali);
    console.log("Ngjyra e karrikës: " + karrike.ngjyra);
    console.log("Ka : " + karrike.kembë + "kembë");

    
    // Krijimi dhe përdorimi i funksioneve në JS me dhe pa parametra 

    // Funksioni pa parameter 
    function shfaqInfoTavoline() {
        console.log("Tavolina është një element i shtëpisë.");
    }
    // Thirrja e funksionit
    shfaqInfoTavoline();

    // Funksioni me parameter 
    function shtypNgjyren(ngjyra) {
        console.log("Ngjyra e tavolinës është: " + ngjyra);
    }
    // Thirrja e funksionit me parameter
    shtypNgjyren("kafe");




    // Përdorimi i kushtëzimeve në JS në lidhje 

    // IF statement për vlerën e llojit të një mobilje
    var llojiMobiljes = "karrige";
    if (llojiMobiljes === "karrige") {
        console.log("Ky është një lloj karrige.");
    }

    // IF...ELSE statement për vlerën e llojit dhe materialit të një mobilje
    var lloji = "tavoline";
    var materiali = "druri";
    if (lloji === "tavoline" && materiali === "druri") {
        console.log("Ky është një tavolinë e bërë nga druri.");
    } else {
        console.log("Ky nuk është një tavolinë e bërë nga druri.");
    }

    // SWITCH statement për treguar mesazh bazuar në llojin e një mobiljeje
    var mobilja = "krevat";
    switch (mobilja) {
        case "tavoline":
            console.log("Ky është një tavolinë.");
            break;
        case "karrige":
            console.log("Ky është një karrige.");
            break;
        case "krevat":
            console.log("Ky është një krevat.");
            break;
        default:
            console.log("Ky nuk njihet si një lloj mobiljeje.");
    }

    //FOR loop për shfaqjen e llojeve të mobiljeve
    var llojet = ["tavoline", "karrige", "krevat"];
    for (var i = 0; i < llojet.length; i++) {
        console.log("Lloji i mobiljes: " + llojet[i]);
    }

    // WHILE loop për shfaqjen e materialeve të mobiljeve
    var materiale = ["plastik", "metall", "druri"];
    var j = 0;
    while (j < materiale.length) {
        console.log("Materiali i mobiljes: " + materiale[j]);
        j++;
    }


    // Perdorimi i filter/reducer/map

    var mobiljet = [
        { lloji: "tavoline", materiali: "druri", ngjyra: "kafe" },
        { lloji: "karrige", materiali: "plastik", ngjyra: "e zeza" },
        { lloji: "krevat", materiali: "metall", ngjyra: "e bardhe" }
    ];


    var allMobiljet = mobiljet.map((x) =>{
        console.log("Mobiljet me map: ",x)
    })

    var tavolinat = mobiljet.filter(function (mobilja) {
        return mobilja.lloji === "tavoline";
    });
    console.log("Tavolinat: ", tavolinat);

    var numriTotalMobiljeve = mobiljet.reduce(function (total, mobilja) {
        return total + 1;
    }, 0);
    console.log("Numri total i mobiljeve: ", numriTotalMobiljeve);

    if (numriTotalMobiljeve < 10 ){
        console.warn("Duhet sa me shpejt te furnizohemi me mobilje")
    }



    //A callback is a function passed as an argument to another function.

    function shfaqInfoMobilje(mobilja) {
        var info = "Lloji: " + mobilja.lloji + ", Materiali: " + mobilja.materiali + ", Ngjyra: " + mobilja.ngjyra;
        console.log(info);
    }

    // Thirrja e callback funksionit për çdo element në array-in e mobiljeve
    mobiljet.forEach(shfaqInfoMobilje);





console.warn("Script Ends")
