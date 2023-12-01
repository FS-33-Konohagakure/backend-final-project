const roles = {
  admin: {
    permissions: [
      "addDokter",
      "editDokterById",
      "deleteDokterById",
      "addFood",
      "editFoodById",
      "deleteFoodById",
    ],
  },
  user: {
    permissions: ["getAllDokter", "getDokterById", "getAllFood", "getFoodById"],
  },
};

module.exports = roles;


