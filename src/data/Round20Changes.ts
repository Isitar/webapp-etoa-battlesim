import {RoundChange} from "@/models/RoundChange";

const Round20Changes: RoundChange = {
    id: 20,
    shipChanges: [
        {id: 1,  experience: false, repairFactor: 1, costTitan: 15_000, costSilicon: 7_500, costPVC: 10_000, costTricium: 5_000, capacity: 75_000}, //ain
        {id: 2,  experience: false, repairFactor: 1},
        {id: 3,  experience: false, repairFactor: 1},
        {id: 9,  experience: false, repairFactor: 1},
        {id: 10, experience: false, repairFactor: 1},
        {id: 11, experience: false, repairFactor: 1, capacity: 90_000}, //aurora
        {id: 17, experience: false, repairFactor: 1},
        {id: 19, experience: false, repairFactor: 1},
        {id: 20, experience: false, repairFactor: 1},
        {id: 24, experience: false, repairFactor: 1},
        {id: 32, experience: false, repairFactor: 1},
        {id: 33, experience: false, repairFactor: 1},
        {id: 42, experience: false, repairFactor: 1, costTitan: 9_000, costSilicon: 8_000, costPVC: 4_200, costTricium:1_500, capacity: 50_000}, //prometheus
        {id: 43, experience: false, repairFactor: 1},
        {id: 48, experience: false, repairFactor: 1},
        {id: 64, experience: false, repairFactor: 1},
        {id: 65, experience: false, repairFactor: 1},
        {id: 68, experience: false, repairFactor: 1, capacity: 200_000}, // titan transporter
        {id: 69, experience: false, repairFactor: 1},
        {id: 12, structure: 30_000, shield: 7_000}, // bell
        {
            id: 76,
            name: "ASTERIO Recycler",
            costTitan: 3200,
            costSilicon: 1200,
            costPVC: 2000,
            structure: 50,
            shield: 2,
            weapon: 1,
            regeneration: 0,
            capacity: 11000,
            experience: false,
            repairFactor: 1
        },
        {id: 49, costTitan: 650_000, costSilicon: 425_000, costPVC: 425_000, costTricium: 265_000}, // omega m
        {id: 50, costTitan: 6_000, costSilicon: 3_000, costPVC: 2_900}, // phoenix m

    ],
    defenceChanges: [
        {id: 5, costTitan: 650_000, costSilicon: 425_000, costPVC: 425_000, costTricium: 265_000}, // omega
        {id: 6, costTitan: 650_000, costSilicon: 425_000, costPVC: 425_000, costTricium: 265_000}, // omega m
        {id: 7, costTitan: 6_000, costSilicon: 3_000, costPVC: 2_900}, // phoenix
        {id: 8, costTitan: 6_000, costSilicon: 3_000, costPVC: 2_900}, // phoenix m
    ],
    maxHeal: 1
};

export {Round20Changes}