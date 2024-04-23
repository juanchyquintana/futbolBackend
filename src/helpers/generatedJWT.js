import jwt from "jsonwebtoken";
import "dotenv/config";

const generatedJWT = async (uid, email) => {
  try {
    const payload = { uid, email };
    const token = await jwt.sign(payload, process.env.SECRET_JWT, {
      expiresIn: "3h",
    });

    return token;
  } catch (error) {
    console.log("Error to generated the token:", error.message);
    throw new Error("Token could not be Generated");
  }
};

export default generatedJWT;