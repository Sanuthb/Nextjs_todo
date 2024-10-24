import { ConnectDB } from "@/lib/config/db";
import { Todomodel } from "@/lib/model/Todomodel";
import { NextResponse } from "next/server";

const LoadDb = async () => {
  await ConnectDB();
};

LoadDb();

export async function GET(request: Request) {
  const alldata = await Todomodel.find({});

  return NextResponse.json({ alldata: alldata });
}

export async function POST(request: Request) {
  const { title, description } = await request.json();
  await Todomodel.create({
    title,
    description,
  });
  return NextResponse.json({
    message: "Data added successfully",
  });
}


export async function DELETE(request: Request) {
  const { id } = await request.json();
  await Todomodel.findByIdAndDelete(id);
  return NextResponse.json({
    message: "Data deleted successfully",
  });
}


export async function PUT(request: Request) {
  const { id } = await request.json();
  await Todomodel.findByIdAndUpdate(id, { $set:{isCompleted:true} });
  return NextResponse.json({
    message: "Data updated successfully",
  });
}