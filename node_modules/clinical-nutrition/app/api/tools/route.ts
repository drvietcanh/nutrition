import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    tools: [
      { id: "malnutrition-screening", title: "Malnutrition screening", type: "screener" },
      { id: "energy-protein-calculator", title: "Energy & Protein calculator", type: "calculator" },
      { id: "intake-assessment", title: "Intake assessment", type: "worksheet" },
    ],
  });
}

