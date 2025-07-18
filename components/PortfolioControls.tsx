import { Label } from './ui/label';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';
import { Download } from 'lucide-react';
import { PortfolioType, RiskLevel, ReferenceType } from '../App';

interface PortfolioControlsProps {
  selectedPortfolio: PortfolioType;
  onPortfolioChange: (portfolio: PortfolioType) => void;
  selectedRiskLevel: RiskLevel;
  onRiskLevelChange: (riskLevel: RiskLevel) => void;
  selectedReferences: ReferenceType[];
  onReferenceToggle: (reference: ReferenceType) => void;
  startingValue: number;
  onStartingValueChange: (value: number) => void;
  dateRange: { from: string; to: string };
  onDateRangeChange: (range: { from: string; to: string }) => void;
  onExportToPDF: () => void;
}

export function PortfolioControls({
  selectedPortfolio,
  onPortfolioChange,
  selectedRiskLevel,
  onRiskLevelChange,
  selectedReferences,
  onReferenceToggle,
  startingValue,
  onStartingValueChange,
  dateRange,
  onDateRangeChange,
  onExportToPDF,
}: PortfolioControlsProps) {
  const handleStartingValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value.replace(/[^0-9]/g, '')) || 0;
    onStartingValueChange(value);
  };

  const handleFromYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const year = parseInt(e.target.value) || 2014;
    onDateRangeChange({ ...dateRange, from: `${year}-07-01` });
  };

  const handleToYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const year = parseInt(e.target.value) || 2025;
    onDateRangeChange({ ...dateRange, to: `${year}-07-01` });
  };

  const portfolioOptions = [
    {
      id: 'passive' as PortfolioType,
      label: 'JustFA Passive',
    },
    {
      id: 'champions' as PortfolioType,
      label: 'JustFA Champions',
    }
  ];

  const riskLevelOptions = [
    {
      level: 1 as RiskLevel,
      label: 'Risk Level 1',
      color: '#24a148',
    },
    {
      level: 2 as RiskLevel,
      label: 'Risk Level 2',
      color: '#0f62fe',
    },
    {
      level: 3 as RiskLevel,
      label: 'Risk Level 3',
      color: '#6366f1',
    },
    {
      level: 4 as RiskLevel,
      label: 'Risk Level 4',
      color: '#f57c00',
    },
    {
      level: 5 as RiskLevel,
      label: 'Risk Level 5',
      color: '#da1e28',
    }
  ];

  const referenceOptions = [
    {
      id: 'baseRate' as ReferenceType,
      label: 'Bank of England Base Rate',
      color: '#9333ea',
    },
    {
      id: 'cpi' as ReferenceType,
      label: 'CPI (Consumer Price Index)',
      color: '#8e8e8e',
    },
    {
      id: 'property' as ReferenceType,
      label: 'Property Investment',
      color: '#525252',
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-[19px] text-[#161616] font-bold leading-[28px]">
            Analysis Configuration
          </h4>
        </div>
        <Button 
          onClick={onExportToPDF}
          className="flex items-center gap-2 bg-[#0f62fe] text-white hover:bg-[#0043ce] h-10 px-4 py-2 rounded-md"
        >
          <Download className="w-4 h-4" />
          Export to PDF
        </Button>
      </div>

      {/* Main Selection Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Portfolio Selection */}
        <div className="space-y-3">
          <h5 className="text-[14px] text-[#161616] font-semibold leading-[20px]">Portfolio</h5>
          <div className="space-y-2">
            {portfolioOptions.map((option) => (
              <div key={option.id} className="flex items-center gap-3 p-3 border border-[#e0e0e0] rounded-lg hover:bg-[#f4f4f4] transition-colors">
                <input
                  type="radio"
                  id={`portfolio-${option.id}`}
                  name="portfolio"
                  checked={selectedPortfolio === option.id}
                  onChange={() => onPortfolioChange(option.id)}
                  className="w-4 h-4 text-[#0f62fe] border-[#c6c6c6] focus:ring-[#0f62fe]"
                />
                <Label 
                  htmlFor={`portfolio-${option.id}`} 
                  className="text-[14px] text-[#161616] font-semibold cursor-pointer leading-[20px]"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Level Selection */}
        <div className="space-y-3">
          <h5 className="text-[14px] text-[#161616] font-semibold leading-[20px]">Risk Level</h5>
          <div className="space-y-2">
            {riskLevelOptions.map((option) => (
              <div key={option.level} className="flex items-center gap-3 p-3 border border-[#e0e0e0] rounded-lg hover:bg-[#f4f4f4] transition-colors">
                <input
                  type="radio"
                  id={`risk-${option.level}`}
                  name="riskLevel"
                  checked={selectedRiskLevel === option.level}
                  onChange={() => onRiskLevelChange(option.level)}
                  className="w-4 h-4 text-[#0f62fe] border-[#c6c6c6] focus:ring-[#0f62fe]"
                />
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-0.5 rounded-full" 
                    style={{ backgroundColor: option.color }}
                  />
                  <Label 
                    htmlFor={`risk-${option.level}`} 
                    className="text-[14px] text-[#161616] font-semibold cursor-pointer leading-[20px]"
                  >
                    {option.label}
                  </Label>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reference Benchmarks */}
        <div className="space-y-3">
          <h5 className="text-[14px] text-[#161616] font-semibold leading-[20px]">Reference Benchmarks</h5>
          <div className="space-y-2">
            {referenceOptions.map((option) => (
              <div key={option.id} className="flex items-center gap-3 p-3 border border-[#e0e0e0] rounded-lg hover:bg-[#f4f4f4] transition-colors">
                <Checkbox
                  id={option.id}
                  checked={selectedReferences.includes(option.id)}
                  onCheckedChange={() => onReferenceToggle(option.id)}
                  className="border-[#c6c6c6] data-[state=checked]:bg-[#0f62fe] data-[state=checked]:border-[#0f62fe]"
                />
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-0.5 border-t-2 border-dashed" 
                    style={{ borderColor: option.color }}
                  />
                  <Label 
                    htmlFor={option.id} 
                    className="text-[12px] text-[#161616] font-semibold cursor-pointer leading-[16px]"
                  >
                    {option.label}
                  </Label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Parameters Section */}
      <div className="border-t border-[#e0e0e0] pt-6">
        <h5 className="text-[14px] text-[#161616] font-semibold leading-[20px] mb-4">Analysis Parameters</h5>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Starting Portfolio Value */}
          <div className="space-y-2">
            <Label htmlFor="starting-value" className="text-[12px] text-[#161616] font-semibold leading-[16px]">
              Starting Portfolio Value
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6e6e6e] text-[14px]">£</span>
              <Input
                id="starting-value"
                type="text"
                value={startingValue.toLocaleString()}
                onChange={handleStartingValueChange}
                className="pl-8 bg-[#f4f4f4] border-[#c6c6c6] rounded-md h-10 focus:ring-[#0f62fe] focus:border-[#0f62fe] text-[14px]"
                placeholder="500,000"
              />
            </div>
          </div>

          {/* From Year */}
          <div className="space-y-2">
            <Label htmlFor="year-from" className="text-[12px] text-[#161616] font-semibold leading-[16px]">
              From Year
            </Label>
            <Input
              id="year-from"
              type="number"
              min="2014"
              max="2025"
              value={new Date(dateRange.from).getFullYear()}
              onChange={handleFromYearChange}
              className="bg-[#f4f4f4] border-[#c6c6c6] rounded-md h-10 focus:ring-[#0f62fe] focus:border-[#0f62fe] text-[14px]"
              placeholder="2014"
            />
          </div>

          {/* To Year */}
          <div className="space-y-2">
            <Label htmlFor="year-to" className="text-[12px] text-[#161616] font-semibold leading-[16px]">
              To Year
            </Label>
            <Input
              id="year-to"
              type="number"
              min="2014"
              max="2025"
              value={new Date(dateRange.to).getFullYear()}
              onChange={handleToYearChange}
              className="bg-[#f4f4f4] border-[#c6c6c6] rounded-md h-10 focus:ring-[#0f62fe] focus:border-[#0f62fe] text-[14px]"
              placeholder="2025"
            />
          </div>
        </div>
      </div>
    </div>
  );
}