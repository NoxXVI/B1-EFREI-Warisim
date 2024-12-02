"use strict";

import {
  createFooter,
  createFooterSection,
  createScrollContent,
} from "./footer.js";

/*test data */

const testData = {
  tank: {
    name: "Tank",
    description:
      "Aute culpa proident laboris sit nostrud ea ullamco esse nulla tempor pariatur. Eiusmod ipsum officia proident nisi consectetur. Minim qui amet est nostrud id ipsum ullamco laboris. Est voluptate ad voluptate labore sunt adipisicing ipsum anim. Minim id reprehenderit laboris amet nulla pariatur eu anim anim excepteur.",
    damage: 5000,
    life: 30000,
    cost: 5000,
  },
  car: {
    name: "Voiture",
    description:
      "Tempor laborum sunt in occaecat cillum. Occaecat nulla sit sit et sint cupidatat pariatur occaecat dolore proident ea mollit consectetur. Ea irure dolore aliqua aute incididunt eiusmod excepteur nostrud laboris minim qui aliqua elit. Esse sit pariatur nulla aute proident ut nisi et exercitation fugiat tempor aliqua eiusmod.",
    damage: 0,
    life: 8000,
    cost: 1000,
  },
  artillery: {
    name: "Artillerie",
    description:
      "Duis magna esse culpa id amet cillum eiusmod esse. Pariatur eiusmod laboris sit eiusmod cillum reprehenderit aute. Adipisicing veniam velit id ea ad consequat excepteur velit adipisicing deserunt labore quis. Minim aliqua culpa do excepteur anim fugiat aliquip ea anim consectetur exercitation laboris consectetur exercitation. Eu nulla esse duis qui sint do consectetur ea elit non. Mollit sint mollit eu amet voluptate do. Commodo veniam ullamco nostrud ut sit incididunt non.",
    damage: 20000,
    life: 5000,
    cost: 15000,
  },
  infantery: {
    name: "Infanterie",
    description:
      "Nisi nisi est quis minim cupidatat veniam nulla ipsum voluptate deserunt aliqua amet. Ea quis laborum laboris in ut cillum excepteur elit eu. Reprehenderit occaecat amet quis Lorem occaecat pariatur aliquip aliqua anim sunt deserunt culpa consectetur eu. Est sunt cupidatat officia pariatur nisi quis veniam esse non consequat ex veniam ad commodo.",
    damage: 1000,
    life: 8000,
    cost: 500,
  },
};

/*___*/
