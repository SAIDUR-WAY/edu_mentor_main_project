
import { NextResponse } from "next/server";
import connect from "@/utils/db";
import { Tutors } from "@/models/Tutors";

export const GET = async (request, { params }) => {
  try {
    // console.log('get', params)
    const { 'tutor-id': tutorId } = params; // Extract the tutorId from params using square brackets
    const validTutorId = mongoose.Types.ObjectId(tutorId);
    console.log("Tutor ID:", tutor-id);
   

    // Rest of your code to retrieve tutor data by ID
    await connect();

    const tutor = await Tutors.findById(validTutorId);

    if (!tutor) {
      return new NextResponse("Tutor not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(tutor), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Internal Server Error", 500);
  }
};
