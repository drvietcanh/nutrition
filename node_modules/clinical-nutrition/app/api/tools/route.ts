import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    tools: [
      { id: "malnutrition-screening", title: "Malnutrition Screening", type: "screener" },
      { id: "energy-protein-calculator", title: "Energy & Protein Calculator", type: "calculator" },
      { id: "intake-assessment", title: "Intake Assessment", type: "worksheet" },
    ],
  });
}

