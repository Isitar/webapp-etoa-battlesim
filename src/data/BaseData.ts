import {Ship} from "@/models/Ship";
import {Defence} from "@/models/Defence";

const ships: Ship[] = [
    {
        id: 1,
        name: "AIN Sonde",
        costTitan: 3000,
        costSilicon: 1500,
        costPVC: 2000,
        structure: 1,
        shield: 1,
        weapon: 1,
        regeneration: 0,
        capacity: 15000,
        experience: false
    },
    {
        id: 2,
        name: "ALAMAK Trümmersammler",
        costTitan: 20000,
        costSilicon: 13000,
        costPVC: 7000,
        structure: 3000,
        shield: 2000,
        weapon: 20,
        regeneration: 0,
        capacity: 150000,
        experience: false
    },
    {
        id: 3,
        name: "ALGOL Transportschiff",
        costTitan: 700,
        costSilicon: 180,
        costPVC: 500,
        structure: 50,
        shield: 50,
        weapon: 9,
        regeneration: 0,
        capacity: 15000,
        experience: false
    },
    {
        id: 4,
        name: "AMYNA Drohne",
        costTitan: 4750,
        costSilicon: 2000,
        costPVC: 3500,
        structure: 3400,
        shield: 1700,
        weapon: 1,
        regeneration: 0,
        capacity: 500,
        experience: true
    },
    {
        id: 5,
        name: "ANDORIA Mysticum",
        costTitan: 670000,
        costSilicon: 500000,
        costPVC: 480000,
        structure: 110000,
        shield: 86000,
        weapon: 0,
        regeneration: 0,
        capacity: 0,
        experience: true
    },
    {
        id: 6,
        name: "ANDROMEDA Kampfstern",
        costTitan: 20000000,
        costSilicon: 10000000,
        costPVC: 12000000,
        structure: 8500000,
        shield: 9000000,
        weapon: 8550000,
        regeneration: 0,
        capacity: 6000000,
        experience: true
    },
    {
        id: 7,
        name: "ANDROMEDA Mysticum",
        costTitan: 58000,
        costSilicon: 67000,
        costPVC: 37500,
        structure: 5000,
        shield: 5000,
        weapon: 0,
        regeneration: 0,
        capacity: 0,
        experience: true
    },
    {
        id: 8,
        name: "ANTARES Jäger",
        costTitan: 750,
        costSilicon: 575,
        costPVC: 420,
        structure: 330,
        shield: 60,
        weapon: 153,
        regeneration: 0,
        capacity: 500,
        experience: true
    },
    {
        id: 9,
        name: "ATLAS Transporter",
        costTitan: 2000,
        costSilicon: 2000,
        costPVC: 23000,
        structure: 300,
        shield: 500,
        weapon: 27,
        regeneration: 0,
        capacity: 325000,
        experience: false
    },
    {
        id: 10,
        name: "AURIGA Explorer",
        costTitan: 1000,
        costSilicon: 800,
        costPVC: 0,
        structure: 50,
        shield: 20,
        weapon: 0,
        regeneration: 0,
        capacity: 200,
        experience: false
    },
    {
        id: 11,
        name: "AURORA Sonde",
        costTitan: 20000,
        costSilicon: 18000,
        costPVC: 9000,
        structure: 1,
        shield: 1,
        weapon: 1,
        regeneration: 0,
        capacity: 60000,
        experience: false
    },
    {
        id: 12,
        name: "BELL Zerstörer",
        costTitan: 60000,
        costSilicon: 5000,
        costPVC: 9000,
        structure: 7000,
        shield: 30000,
        weapon: 5350,
        regeneration: 0,
        capacity: 40000,
        experience: true
    },
    {
        id: 13,
        name: "CARDASSIA Mutterschiff",
        costTitan: 42000,
        costSilicon: 27500,
        costPVC: 16000,
        structure: 10000,
        shield: 6000,
        weapon: 113,
        regeneration: 16000,
        capacity: 1500,
        experience: true
    },
    {
        id: 14,
        name: "CARDASSIA Mysticum",
        costTitan: 670000,
        costSilicon: 500000,
        costPVC: 480000,
        structure: 110000,
        shield: 86000,
        weapon: 0,
        regeneration: 0,
        capacity: 0,
        experience: true
    },
    {
        id: 15,
        name: "CENTAURI Mysticum",
        costTitan: 670000,
        costSilicon: 500000,
        costPVC: 480000,
        structure: 110000,
        shield: 86000,
        weapon: 0,
        regeneration: 0,
        capacity: 0,
        experience: true
    },
    {
        id: 16,
        name: "DAEDALUS Jäger",
        costTitan: 13900,
        costSilicon: 7000,
        costPVC: 7000,
        structure: 8000,
        shield: 5000,
        weapon: 2000,
        regeneration: 0,
        capacity: 12000,
        experience: true
    },
    {
        id: 17,
        name: "DEMETER Transporter",
        costTitan: 23000,
        costSilicon: 8300,
        costPVC: 1500,
        structure: 300,
        shield: 500,
        weapon: 27,
        regeneration: 0,
        capacity: 375000,
        experience: false
    },
    {
        id: 18,
        name: "ELNATH Gassauger",
        costTitan: 20000,
        costSilicon: 7500,
        costPVC: 15000,
        structure: 650,
        shield: 800,
        weapon: 0,
        regeneration: 0,
        capacity: 15000,
        experience: false
    },
    {
        id: 19,
        name: "ENERGIJA Solarsatellit",
        costTitan: 300,
        costSilicon: 1500,
        costPVC: 100,
        structure: 100,
        shield: 50,
        weapon: 0,
        regeneration: 0,
        capacity: 0,
        experience: false
    },
    {
        id: 20,
        name: "EOS Transporter",
        costTitan: 2000,
        costSilicon: 23000,
        costPVC: 2000,
        structure: 300,
        shield: 500,
        weapon: 27,
        regeneration: 0,
        capacity: 325000,
        experience: false
    },
    {
        id: 21,
        name: "EUROPA Fighter",
        costTitan: 20000,
        costSilicon: 11000,
        costPVC: 8000,
        structure: 6250,
        shield: 12500,
        weapon: 6750,
        regeneration: 0,
        capacity: 22000,
        experience: true
    },
    {
        id: 22,
        name: "FERENGI Mysticum",
        costTitan: 670000,
        costSilicon: 500000,
        costPVC: 480000,
        structure: 110000,
        shield: 86000,
        weapon: 0,
        regeneration: 0,
        capacity: 0,
        experience: true
    },
    {
        id: 23,
        name: "FORNAX Asteroidensammler",
        costTitan: 15000,
        costSilicon: 5000,
        costPVC: 9000,
        structure: 250,
        shield: 1000,
        weapon: 50,
        regeneration: 0,
        capacity: 17500,
        experience: false
    },
    {
        id: 24,
        name: "GAIA Transporter",
        costTitan: 3500,
        costSilicon: 1000,
        costPVC: 1250,
        structure: 750,
        shield: 300,
        weapon: 50,
        regeneration: 0,
        capacity: 3000,
        experience: false
    },
    {
        id: 25,
        name: "GOMEISA Nebelsauger",
        costTitan: 60000,
        costSilicon: 28000,
        costPVC: 60000,
        structure: 800,
        shield: 1000,
        weapon: 5,
        regeneration: 0,
        capacity: 40000,
        experience: false
    },
    {
        id: 26,
        name: "HAARP Spionagesonde",
        costTitan: 1000,
        costSilicon: 1000,
        costPVC: 500,
        structure: 0,
        shield: 1,
        weapon: 0,
        regeneration: 0,
        capacity: 5,
        experience: true
    },
    {
        id: 27,
        name: "HADAR Schlachtschiff",
        costTitan: 50000,
        costSilicon: 31500,
        costPVC: 12500,
        structure: 28200,
        shield: 7100,
        weapon: 11700,
        regeneration: 0,
        capacity: 8500,
        experience: true
    },
    {
        id: 28,
        name: "HELIOS Drohne",
        costTitan: 2500,
        costSilicon: 6200,
        costPVC: 2300,
        structure: 1,
        shield: 0,
        weapon: 5400,
        regeneration: 0,
        capacity: 500,
        experience: true
    },
    {
        id: 29,
        name: "HYPOS Drohne",
        costTitan: 500,
        costSilicon: 300,
        costPVC: 200,
        structure: 10,
        shield: 0,
        weapon: 1,
        regeneration: 0,
        capacity: 300,
        experience: true
    },
    {
        id: 30,
        name: "IKAROS Jäger",
        costTitan: 4000,
        costSilicon: 2000,
        costPVC: 2000,
        structure: 350,
        shield: 2750,
        weapon: 1125,
        regeneration: 0,
        capacity: 20000,
        experience: true
    },
    {
        id: 31,
        name: "IMPERIALER Kreuzer",
        costTitan: 750000,
        costSilicon: 600000,
        costPVC: 365000,
        structure: 355000,
        shield: 85000,
        weapon: 451500,
        regeneration: 0,
        capacity: 230000,
        experience: true
    },
    {
        id: 32,
        name: "LORIAL Transportschiff",
        costTitan: 15000,
        costSilicon: 10000,
        costPVC: 5000,
        structure: 200,
        shield: 500,
        weapon: 45,
        regeneration: 0,
        capacity: 600000,
        experience: false
    },
    {
        id: 33,
        name: "MARAUDER Transporter",
        costTitan: 23000,
        costSilicon: 2000,
        costPVC: 2000,
        structure: 300,
        shield: 500,
        weapon: 27,
        regeneration: 0,
        capacity: 325000,
        experience: false
    },
    {
        id: 34,
        name: "MINBARI Jäger",
        costTitan: 20500,
        costSilicon: 13500,
        costPVC: 10000,
        structure: 12000,
        shield: 4500,
        weapon: 5500,
        regeneration: 0,
        capacity: 15000,
        experience: true
    },
    {
        id: 35,
        name: "MINBARI Mysticum",
        costTitan: 670000,
        costSilicon: 500000,
        costPVC: 480000,
        structure: 110000,
        shield: 86000,
        weapon: 0,
        regeneration: 0,
        capacity: 0,
        experience: true
    },
    {
        id: 36,
        name: "NILAM Fighter",
        costTitan: 7150,
        costSilicon: 4000,
        costPVC: 3000,
        structure: 2900,
        shield: 2000,
        weapon: 2250,
        regeneration: 0,
        capacity: 5000,
        experience: true
    },
    {
        id: 37,
        name: "ONEFIGHT Kampfdrohne",
        costTitan: 200,
        costSilicon: 700,
        costPVC: 300,
        structure: 0,
        shield: 0,
        weapon: 585,
        regeneration: 0,
        capacity: 300,
        experience: true
    },
    {
        id: 38,
        name: "ORION Fighter",
        costTitan: 35000,
        costSilicon: 10500,
        costPVC: 5500,
        structure: 7500,
        shield: 7000,
        weapon: 12600,
        regeneration: 0,
        capacity: 17500,
        experience: true
    },
    {
        id: 39,
        name: "ORION Mysticum",
        costTitan: 670000,
        costSilicon: 500000,
        costPVC: 480000,
        structure: 110000,
        shield: 86000,
        weapon: 0,
        regeneration: 0,
        capacity: 0,
        experience: true
    },
    {
        id: 40,
        name: "PEGASUS Gassauger",
        costTitan: 130000,
        costSilicon: 60000,
        costPVC: 100000,
        structure: 4000,
        shield: 4000,
        weapon: 50,
        regeneration: 0,
        capacity: 120000,
        experience: false
    },
    {
        id: 41,
        name: "POLLUX Bomber",
        costTitan: 9700,
        costSilicon: 21000,
        costPVC: 8500,
        structure: 2600,
        shield: 500,
        weapon: 16200,
        regeneration: 0,
        capacity: 2000,
        experience: true
    },
    {
        id: 42,
        name: "PROMETHEUS Recycler",
        costTitan: 10000,
        costSilicon: 8000,
        costPVC: 25000,
        structure: 800,
        shield: 1000,
        weapon: 5,
        regeneration: 0,
        capacity: 90000,
        experience: false
    },
    {
        id: 43,
        name: "REGULUS Trümmersammler",
        costTitan: 300,
        costSilicon: 200,
        costPVC: 800,
        structure: 80,
        shield: 120,
        weapon: 2,
        regeneration: 0,
        capacity: 1500,
        experience: true
    },
    {
        id: 44,
        name: "RIGEL Dreadnought",
        costTitan: 3350000,
        costSilicon: 2975000,
        costPVC: 750000,
        structure: 1000000,
        shield: 1350000,
        weapon: 1575000,
        regeneration: 0,
        capacity: 600000,
        experience: true
    },
    {
        id: 45,
        name: "RIGELIA Bomber",
        costTitan: 85000,
        costSilicon: 40000,
        costPVC: 40000,
        structure: 25000,
        shield: 6500,
        weapon: 12500,
        regeneration: 0,
        capacity: 15000,
        experience: true
    },
    {
        id: 46,
        name: "RIGELIA Mysticum",
        costTitan: 670000,
        costSilicon: 500000,
        costPVC: 480000,
        structure: 110000,
        shield: 86000,
        weapon: 0,
        regeneration: 0,
        capacity: 0,
        experience: true
    },
    {
        id: 47,
        name: "RUTICULUS Sammler",
        costTitan: 12800,
        costSilicon: 4800,
        costPVC: 8000,
        structure: 50,
        shield: 2,
        weapon: 0,
        regeneration: 0,
        capacity: 18000,
        experience: false
    },
    {
        id: 48,
        name: "SAIPH Transporter",
        costTitan: 2000,
        costSilicon: 2000,
        costPVC: 2000,
        structure: 300,
        shield: 500,
        weapon: 27,
        regeneration: 0,
        capacity: 325000,
        experience: false
    },
    {
        id: 49,
        name: "SCORPIUS OMEGA Trägerschiff",
        costTitan: 750000,
        costSilicon: 525000,
        costPVC: 325000,
        structure: 1,
        shield: 1,
        weapon: 1,
        regeneration: 0,
        capacity: 1000,
        experience: true
    },
    {
        id: 50,
        name: "SCORPIUS PHOENIX Trägerschiff",
        costTitan: 6500,
        costSilicon: 3500,
        costPVC: 1900,
        structure: 1,
        shield: 1,
        weapon: 1,
        regeneration: 0,
        capacity: 1000,
        experience: true
    },
    {
        id: 51,
        name: "SCORPIUS POLARIS Trägerschiff",
        costTitan: 1000,
        costSilicon: 700,
        costPVC: 500,
        structure: 1,
        shield: 1,
        weapon: 1,
        regeneration: 0,
        capacity: 1000,
        experience: true
    },
    {
        id: 52,
        name: "SCORPIUS SPICA Trägerschiff",
        costTitan: 800,
        costSilicon: 475,
        costPVC: 425,
        structure: 1,
        shield: 1,
        weapon: 1,
        regeneration: 0,
        capacity: 1000,
        experience: true
    },
    {
        id: 53,
        name: "SCORPIUS ZIBAL Trägerschiff",
        costTitan: 3900,
        costSilicon: 3100,
        costPVC: 1500,
        structure: 1,
        shield: 1,
        weapon: 1,
        regeneration: 0,
        capacity: 1000,
        experience: true
    },
    {
        id: 54,
        name: "SERA Kreuzer",
        costTitan: 6000,
        costSilicon: 3750,
        costPVC: 2500,
        structure: 1500,
        shield: 2500,
        weapon: 2000,
        regeneration: 0,
        capacity: 8000,
        experience: true
    },
    {
        id: 55,
        name: "SERRAKIN Mysticum",
        costTitan: 800000,
        costSilicon: 580000,
        costPVC: 450000,
        structure: 85000,
        shield: 95000,
        weapon: 0,
        regeneration: 0,
        capacity: 0,
        experience: true
    },
    {
        id: 56,
        name: "SIRIUS Invasionsschiff",
        costTitan: 80000,
        costSilicon: 35000,
        costPVC: 40500,
        structure: 2000,
        shield: 3000,
        weapon: 162,
        regeneration: 0,
        capacity: 20000,
        experience: true
    },
    {
        id: 57,
        name: "SIRRAH Schlachter",
        costTitan: 275000,
        costSilicon: 190000,
        costPVC: 90000,
        structure: 125000,
        shield: 80500,
        weapon: 108000,
        regeneration: 0,
        capacity: 150000,
        experience: true
    },
    {
        id: 58,
        name: "STARLIGHT Jäger",
        costTitan: 4900,
        costSilicon: 3400,
        costPVC: 2100,
        structure: 2100,
        shield: 1100,
        weapon: 1710,
        regeneration: 0,
        capacity: 800,
        experience: true
    },
    {
        id: 59,
        name: "SUPRANALIS Bomber",
        costTitan: 48500000,
        costSilicon: 10500000,
        costPVC: 5750000,
        structure: 1300000,
        shield: 250000,
        weapon: 8100000,
        regeneration: 0,
        capacity: 0,
        experience: true
    },
    {
        id: 60,
        name: "SUPRANALIS Dreadnought",
        costTitan: 33500000,
        costSilicon: 29750000,
        costPVC: 17500000,
        structure: 10000000,
        shield: 13500000,
        weapon: 15750000,
        regeneration: 0,
        capacity: 600000,
        experience: true
    },
    {
        id: 61,
        name: "SUPRANALIS Jäger",
        costTitan: 2450000,
        costSilicon: 1700000,
        costPVC: 1200000,
        structure: 1050000,
        shield: 500000,
        weapon: 855000,
        regeneration: 0,
        capacity: 0,
        experience: true
    },
    {
        id: 62,
        name: "SUPRANALIS Kampfstern",
        costTitan: 100000000,
        costSilicon: 50000000,
        costPVC: 60000000,
        structure: 46750000,
        shield: 49500000,
        weapon: 47025000,
        regeneration: 0,
        capacity: 0,
        experience: true
    },
    {
        id: 63,
        name: "SUPRANALIS Ultra",
        costTitan: 1000000000,
        costSilicon: 500000000,
        costPVC: 600000000,
        structure: 500000000,
        shield: 500000000,
        weapon: 450000000,
        regeneration: 0,
        capacity: 0,
        experience: true
    },
    {
        id: 64,
        name: "TAURUS Besiedlungsschiff",
        costTitan: 8000,
        costSilicon: 10500,
        costPVC: 5000,
        structure: 1000,
        shield: 500,
        weapon: 100,
        regeneration: 0,
        capacity: 10000,
        experience: true
    },
    {
        id: 65,
        name: "TEREBELLUM Analysator",
        costTitan: 2000,
        costSilicon: 4500,
        costPVC: 3000,
        structure: 100,
        shield: 200,
        weapon: 1,
        regeneration: 0,
        capacity: 500,
        experience: false
    },
    {
        id: 66,
        name: "TERRANIA Mysticum",
        costTitan: 670000,
        costSilicon: 500000,
        costPVC: 480000,
        structure: 110000,
        shield: 86000,
        weapon: 0,
        regeneration: 0,
        capacity: 0,
        experience: true
    },
    {
        id: 67,
        name: "TERRANIA Zerstörer",
        costTitan: 85000,
        costSilicon: 40000,
        costPVC: 40000,
        structure: 20000,
        shield: 20000,
        weapon: 55000,
        regeneration: 0,
        capacity: 50000,
        experience: true
    },
    {
        id: 68,
        name: "wfTitan Transporter",
        costTitan: 14000,
        costSilicon: 4000,
        costPVC: 3000,
        structure: 50,
        shield: 20,
        weapon: 1,
        regeneration: 0,
        capacity: 190000,
        experience: false
    },
    {
        id: 69,
        name: "UNUKALHAI Transportschiff",
        costTitan: 6000,
        costSilicon: 1400,
        costPVC: 2100,
        structure: 400,
        shield: 100,
        weapon: 27,
        regeneration: 0,
        capacity: 65000,
        experience: false
    },
    {
        id: 70,
        name: "VORGONIA Mysticum",
        costTitan: 670000,
        costSilicon: 500000,
        costPVC: 480000,
        structure: 110000,
        shield: 86000,
        weapon: 0,
        regeneration: 0,
        capacity: 0,
        experience: true
    },
    {
        id: 71,
        name: "VORGONIA Vernichter",
        costTitan: 943000,
        costSilicon: 543000,
        costPVC: 760000,
        structure: 295000,
        shield: 520000,
        weapon: 409000,
        regeneration: 0,
        capacity: 350000,
        experience: true
    },
    {
        id: 72,
        name: "WEZEA Fighter",
        costTitan: 2800,
        costSilicon: 1400,
        costPVC: 1600,
        structure: 1450,
        shield: 700,
        weapon: 1144,
        regeneration: 0,
        capacity: 2500,
        experience: true
    },
    {
        id: 73,
        name: "ZAVIJAH Spionagesonde",
        costTitan: 100,
        costSilicon: 300,
        costPVC: 80,
        structure: 10,
        shield: 1,
        weapon: 1,
        regeneration: 0,
        capacity: 150,
        experience: true
    },
    {
        id: 74,
        name: "ZELOS Kreuzer",
        costTitan: 121000,
        costSilicon: 44000,
        costPVC: 45400,
        structure: 15000,
        shield: 56500,
        weapon: 45000,
        regeneration: 0,
        capacity: 16000,
        experience: true
    },
    {
        id: 75,
        name: "EASTER Hunter",
        costTitan: 0,
        costSilicon: 0,
        costPVC: 0,
        structure: 7000,
        shield: 5500,
        weapon: 100,
        regeneration: 0,
        capacity: 40000,
        experience: true
    }
];

const defences: Defence[] = [
    {
        id: 2,
        name: "KAPPA Minen",
        costTitan: 500,
        costSilicon: 300,
        costPVC: 100,
        structure: 5,
        shield: 5,
        weapon: 500,
        regeneration: 0,
        experience: true
    },
    {
        id: 3,
        name: "MAGNETRON Störsender",
        costTitan: 20000,
        costSilicon: 50000,
        costPVC: 15000,
        structure: 15000,
        shield: 1200,
        weapon: 0,
        regeneration: 0,
        experience: true
    },
    {
        id: 4,
        name: "NEKKAR Plasmawerfer",
        costTitan: 25000000,
        costSilicon: 20000000,
        costPVC: 12000000,
        structure: 14000000,
        shield: 9500000,
        weapon: 14500000,
        regeneration: 0,
        experience: true
    },
    {
        id: 5,
        name: "OMEGA Geschütz",
        costTitan: 750000,
        costSilicon: 525000,
        costPVC: 325000,
        structure: 300000,
        shield: 350000,
        weapon: 275000,
        regeneration: 0,
        experience: true
    },
    {
        id: 6,
        name: "OMEGA Geschütz M",
        costTitan: 750000,
        costSilicon: 525000,
        costPVC: 325000,
        structure: 300000,
        shield: 350000,
        weapon: 275000,
        regeneration: 0,
        experience: true
    },
    {
        id: 7,
        name: "PHOENIX Reparaturplattform",
        costTitan: 6500,
        costSilicon: 3500,
        costPVC: 1900,
        structure: 3150,
        shield: 1900,
        weapon: 1700,
        regeneration: 825,
        experience: true
    },
    {
        id: 8,
        name: "PHOENIX Reparaturplattform M",
        costTitan: 6500,
        costSilicon: 3500,
        costPVC: 1900,
        structure: 3150,
        shield: 1900,
        weapon: 1700,
        regeneration: 825,
        experience: true
    },
    {
        id: 9,
        name: "POLARIS Raketengeschütz",
        costTitan: 1000,
        costSilicon: 700,
        costPVC: 500,
        structure: 450,
        shield: 325,
        weapon: 350,
        regeneration: 0,
        experience: true
    },
    {
        id: 10,
        name: "POLARIS Raketengeschütz M",
        costTitan: 1000,
        costSilicon: 700,
        costPVC: 500,
        structure: 450,
        shield: 325,
        weapon: 350,
        regeneration: 0,
        experience: true
    },
    {
        id: 11,
        name: "SAGITTARIUS Plasmashield",
        costTitan: 1350000,
        costSilicon: 1000000,
        costPVC: 625000,
        structure: 1400000,
        shield: 2100000,
        weapon: 0,
        regeneration: 0,
        experience: true
    },
    {
        id: 1,
        name: "CASTOR Hochenergieschild",
        costTitan: 95000,
        costSilicon: 40000,
        costPVC: 25000,
        structure: 52500,
        shield: 105000,
        weapon: 0,
        regeneration: 0,
        experience: true
    },
    {
        id: 12,
        name: "SIGMA Hochenergieshield",
        costTitan: 250000000,
        costSilicon: 20000000,
        costPVC: 5000000,
        structure: 25000000,
        shield: 225000000,
        weapon: 0,
        regeneration: 0,
        experience: true
    },
    {
        id: 13,
        name: "SPICA Flakkanone",
        costTitan: 800,
        costSilicon: 475,
        costPVC: 425,
        structure: 300,
        shield: 150,
        weapon: 250,
        regeneration: 0,
        experience: true
    },
    {
        id: 14,
        name: "SPICA Flakkanone M",
        costTitan: 800,
        costSilicon: 475,
        costPVC: 425,
        structure: 300,
        shield: 150,
        weapon: 250,
        regeneration: 0,
        experience: true
    },
    {
        id: 15,
        name: "VEGA Hochenergieshield",
        costTitan: 3000,
        costSilicon: 1200,
        costPVC: 600,
        structure: 1200,
        shield: 3500,
        weapon: 0,
        regeneration: 0,
        experience: true
    },
    {
        id: 16,
        name: "ZIBAL Laserturm",
        costTitan: 3900,
        costSilicon: 3100,
        costPVC: 1500,
        structure: 1500,
        shield: 2000,
        weapon: 1800,
        regeneration: 0,
        experience: true
    },
    {
        id: 17,
        name: "ZIBAL Laserturm M",
        costTitan: 3900,
        costSilicon: 3100,
        costPVC: 1500,
        structure: 1500,
        shield: 2000,
        weapon: 1800,
        regeneration: 0,
        experience: true
    }
];

export {ships, defences}