
import User from "../models/User.js";
import Car from "../models/Car.js";

export const changeRoleToOwner = async (req, res) => {
  try {
    const { _id } = req.user; 

    await User.findByIdAndUpdate(_id, { role: "owner" });

    return res.json({
      success: true,
      message: "Now you can list cars",
    });
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};

export const addCar = async (req, res) => {
  try {
    const { _id } = req.user;


    if (!req.file) {
      return res.json({
        success: false,
        message: "Image is required",
      });
    }

    let carData = {};
    try {
      carData = JSON.parse(req.body.carData || "{}");
    } catch (err) {
      return res.json({
        success: false,
        message: "Invalid carData JSON",
      });
    }

    if (!carData.brand || !carData.model || !carData.pricePerDay) {
      return res.json({
        success: false,
        message: "brand, model and pricePerDay are required",
      });
    }

    const newCar = await Car.create({
      ...carData,
      owner: _id,
      image: req.file.filename, 
    });

    return res.json({
      success: true,
      message: "Car added successfully",
      car: newCar,
    });
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};
