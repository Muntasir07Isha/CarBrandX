import axios from "axios";

export async function fetchCarsByVIN(vin: string) {
  try {
    const response = await axios.get(
      `https://car-api2.p.rapidapi.com/api/vin/${vin}`,
      {
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST!,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching car by VIN:", error);
    return null;
  }
}
