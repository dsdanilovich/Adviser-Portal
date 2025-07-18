import { useState } from "react";
import { PortfolioChart } from "./PortfolioChart";
import { PortfolioControls } from "./PortfolioControls";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { scalePortfolioValues, calculateReferenceValues, parseDate, rawPortfolioData } from "../data/portfolio-data";

export type PortfolioType = "passive" | "champions";
export type RiskLevel = 1 | 2 | 3 | 4 | 5;
export type ReferenceType = "baseRate" | "cpi" | "property";

export interface ChartData {
  date: string;
  passive1: number;
  passive2: number;
  passive3: number;
  passive4: number;
  passive5: number;
  champions1: number;
  champions2: number;
  champions3: number;
  champions4: number;
  champions5: number;
  baseRate: number;
  cpi: number;
  property: number;
}

interface PortfolioPerformancePageProps {
  onBack: () => void;
}

// Process real portfolio data with real reference benchmarks
const processRealPortfolioData = (
  startValue: number,
  startDate: string,
  endDate: string,
): ChartData[] => {
  const portfolioValues = scalePortfolioValues(startValue);
  const referenceValues = calculateReferenceValues(startValue);
  
  // Get all unique dates from portfolio data and filter by date range
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);
  
  const allDates = new Set<string>();
  
  // Add portfolio dates
  rawPortfolioData.forEach(record => {
    const isoDate = parseDate(record.date);
    const recordDate = new Date(isoDate);
    if (recordDate >= startDateObj && recordDate <= endDateObj) {
      allDates.add(isoDate);
    }
  });
  
  // Add reference data dates
  Object.keys(referenceValues).forEach(referenceType => {
    Object.keys(referenceValues[referenceType]).forEach(date => {
      const recordDate = new Date(date);
      if (recordDate >= startDateObj && recordDate <= endDateObj) {
        allDates.add(date);
      }
    });
  });
  
  const sortedDates = Array.from(allDates).sort();
  
  const chartData: ChartData[] = sortedDates.map(date => {
    // Get portfolio values for this date, using last known value if not available
    const getPortfolioValue = (portfolioKey: string): number => {
      if (portfolioValues[portfolioKey] && portfolioValues[portfolioKey][date]) {
        return portfolioValues[portfolioKey][date];
      }
      
      // Find the most recent value before this date
      const availableDates = Object.keys(portfolioValues[portfolioKey] || {}).sort();
      const lastKnownDate = availableDates.reverse().find(d => d <= date);
      
      if (lastKnownDate && portfolioValues[portfolioKey]) {
        return portfolioValues[portfolioKey][lastKnownDate];
      }
      
      return startValue; // Fallback to starting value
    };
    
    // Get reference values for this date
    const getReferenceValue = (referenceKey: 'baseRate' | 'cpi' | 'property'): number => {
      if (referenceValues[referenceKey] && referenceValues[referenceKey][date]) {
        return referenceValues[referenceKey][date];
      }
      
      // Find the most recent reference value before this date
      const availableDates = Object.keys(referenceValues[referenceKey] || {}).sort();
      const lastKnownDate = availableDates.reverse().find(d => d <= date);
      
      if (lastKnownDate && referenceValues[referenceKey]) {
        return referenceValues[referenceKey][lastKnownDate];
      }
      
      return startValue; // Fallback
    };
    
    return {
      date,
      passive1: getPortfolioValue('passive1'),
      passive2: getPortfolioValue('passive2'),
      passive3: getPortfolioValue('passive3'),
      passive4: getPortfolioValue('passive4'),
      passive5: getPortfolioValue('passive5'),
      champions1: getPortfolioValue('champions1'),
      champions2: getPortfolioValue('champions2'),
      champions3: getPortfolioValue('champions3'),
      champions4: getPortfolioValue('champions4'),
      champions5: getPortfolioValue('champions5'),
      baseRate: getReferenceValue('baseRate'),
      cpi: getReferenceValue('cpi'),
      property: getReferenceValue('property'),
    };
  });
  
  return chartData;
};

export function PortfolioPerformancePage({ onBack }: PortfolioPerformancePageProps) {
  const [selectedPortfolio, setSelectedPortfolio] = useState<PortfolioType>("passive");
  const [selectedRiskLevel, setSelectedRiskLevel] = useState<RiskLevel>(3);
  const [selectedReferences, setSelectedReferences] = useState<ReferenceType[]>([]);
  const [startingValue, setStartingValue] = useState<number>(500000);
  const [dateRange, setDateRange] = useState({
    from: "2014-07-01",
    to: "2025-07-01",
  });

  const portfolioData = processRealPortfolioData(startingValue, dateRange.from, dateRange.to);

  const handlePortfolioChange = (portfolio: PortfolioType) => {
    setSelectedPortfolio(portfolio);
  };

  const handleRiskLevelChange = (riskLevel: RiskLevel) => {
    setSelectedRiskLevel(riskLevel);
  };

  const handleReferenceToggle = (reference: ReferenceType) => {
    setSelectedReferences((prev) =>
      prev.includes(reference)
        ? prev.filter((r) => r !== reference)
        : [...prev, reference],
    );
  };

  const handleExportToPDF = () => {
    const dataStr = JSON.stringify(
      {
        portfolioData,
        selectedPortfolio,
        selectedRiskLevel,
        selectedReferences,
        startingValue,
        dateRange,
        exportDate: new Date().toISOString(),
      },
      null,
      2,
    );

    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `portfolio-performance-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    alert("Chart data exported successfully! In a real application, this would generate a PDF.");
  };

  return (
    <div className="bg-[#ffffff] min-h-screen">
      <div className="p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header Section with Back Button */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={onBack}
              className="flex items-center gap-2 text-[#0f62fe] hover:bg-[rgba(15,98,254,0.1)] p-2 h-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portal
            </Button>
            <div>
              <h1 className="text-[25px] text-[rgba(0,0,0,0.87)] leading-[36px] font-bold">
                JustFA Portfolios Performance Dashboard
              </h1>
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-white rounded-lg border border-[#e0e0e0] p-6 shadow-[0px_2px_6px_-2px_rgba(0,0,0,0.1)]">
            <PortfolioChart
              data={portfolioData}
              selectedPortfolio={selectedPortfolio}
              selectedRiskLevel={selectedRiskLevel}
              selectedReferences={selectedReferences}
            />
          </div>

          {/* Controls Section */}
          <div className="bg-white rounded-lg border border-[#e0e0e0] p-6 shadow-[0px_2px_6px_-2px_rgba(0,0,0,0.1)]">
            <PortfolioControls
              selectedPortfolio={selectedPortfolio}
              onPortfolioChange={handlePortfolioChange}
              selectedRiskLevel={selectedRiskLevel}
              onRiskLevelChange={handleRiskLevelChange}
              selectedReferences={selectedReferences}
              onReferenceToggle={handleReferenceToggle}
              startingValue={startingValue}
              onStartingValueChange={setStartingValue}
              dateRange={dateRange}
              onDateRangeChange={setDateRange}
              onExportToPDF={handleExportToPDF}
            />
          </div>
        </div>
      </div>
    </div>
  );
}