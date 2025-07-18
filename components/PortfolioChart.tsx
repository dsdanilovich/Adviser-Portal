import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartData, PortfolioType, RiskLevel, ReferenceType } from '../App';

interface PortfolioChartProps {
  data: ChartData[];
  selectedPortfolio: PortfolioType;
  selectedRiskLevel: RiskLevel;
  selectedReferences: ReferenceType[];
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const formatDate = (dateString: string) => {
  return new Date(dateString).getFullYear().toString();
};

export function PortfolioChart({ data, selectedPortfolio, selectedRiskLevel, selectedReferences }: PortfolioChartProps) {
  const getPortfolioDataKey = () => {
    return `${selectedPortfolio}${selectedRiskLevel}` as keyof ChartData;
  };

  const getPortfolioColor = () => {
    const colors = {
      1: '#24a148', // Green - Conservative
      2: '#0f62fe', // Blue - Moderate
      3: '#6366f1', // Purple - Balanced
      4: '#f57c00', // Orange - Growth
      5: '#da1e28', // Red - Aggressive
    };
    return colors[selectedRiskLevel];
  };

  const getPortfolioName = () => {
    const portfolioNames = {
      passive: 'JustFA Passive',
      champions: 'JustFA Champions',
    };
    return `${portfolioNames[selectedPortfolio]} - Risk Level ${selectedRiskLevel}`;
  };

  const referenceConfig = {
    baseRate: {
      color: '#9333ea',
      name: 'Bank of England Base Rate',
      strokeWidth: 2,
      strokeDasharray: '5 5',
    },
    cpi: {
      color: '#8e8e8e',
      name: 'CPI (Inflation)',
      strokeWidth: 2,
      strokeDasharray: '10 5',
    },
    property: {
      color: '#525252',
      name: 'Property Investment',
      strokeWidth: 2,
      strokeDasharray: '15 5',
    },
  };

  const shouldShowReference = (reference: ReferenceType) => {
    return selectedReferences.includes(reference);
  };

  const hasAnySelection = selectedPortfolio && selectedRiskLevel;

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-[19px] text-[#161616] font-bold leading-[28px] mb-2">
          Historical Performance Analysis
        </h3>
        <p className="text-[14px] text-[#6e6e6e] leading-[20px] font-normal">
          {hasAnySelection ? `Showing performance for ${getPortfolioName()}` : 'Select a portfolio and risk level to view performance'}
        </p>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 40, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis 
              dataKey="date"
              tickFormatter={formatDate}
              stroke="#6e6e6e"
              fontSize={12}
              fontFamily="'Inter', sans-serif"
              fontWeight="400"
            />
            <YAxis 
              tickFormatter={formatCurrency}
              stroke="#6e6e6e"
              fontSize={12}
              fontFamily="'Inter', sans-serif"
              fontWeight="400"
            />
            <Tooltip 
              formatter={(value: number, name: string) => [formatCurrency(value), name]}
              labelFormatter={(label: string) => `Year: ${formatDate(label)}`}
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '12px',
                fontFamily: "'Inter', sans-serif",
                boxShadow: '0px 2px 6px -2px rgba(0, 0, 0, 0.1)',
                color: '#161616'
              }}
            />
            <Legend 
              wrapperStyle={{
                fontSize: '12px',
                fontFamily: "'Inter', sans-serif",
                color: '#161616'
              }}
            />
            
            {/* Selected Portfolio Line */}
            {hasAnySelection && (
              <Line
                type="monotone"
                dataKey={getPortfolioDataKey()}
                stroke={getPortfolioColor()}
                strokeWidth={3}
                name={getPortfolioName()}
                dot={false}
                activeDot={{ r: 5, fill: getPortfolioColor() }}
              />
            )}

            {/* Reference Lines */}
            {shouldShowReference('baseRate') && (
              <Line
                type="monotone"
                dataKey="baseRate"
                stroke={referenceConfig.baseRate.color}
                strokeWidth={referenceConfig.baseRate.strokeWidth}
                strokeDasharray={referenceConfig.baseRate.strokeDasharray}
                name={referenceConfig.baseRate.name}
                dot={false}
                activeDot={{ r: 4, fill: referenceConfig.baseRate.color }}
              />
            )}

            {shouldShowReference('cpi') && (
              <Line
                type="monotone"
                dataKey="cpi"
                stroke={referenceConfig.cpi.color}
                strokeWidth={referenceConfig.cpi.strokeWidth}
                strokeDasharray={referenceConfig.cpi.strokeDasharray}
                name={referenceConfig.cpi.name}
                dot={false}
                activeDot={{ r: 4, fill: referenceConfig.cpi.color }}
              />
            )}

            {shouldShowReference('property') && (
              <Line
                type="monotone"
                dataKey="property"
                stroke={referenceConfig.property.color}
                strokeWidth={referenceConfig.property.strokeWidth}
                strokeDasharray={referenceConfig.property.strokeDasharray}
                name={referenceConfig.property.name}
                dot={false}
                activeDot={{ r: 4, fill: referenceConfig.property.color }}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {!hasAnySelection && (
        <div className="flex items-center justify-center h-24 text-[#6e6e6e] bg-[#f4f4f4] rounded-lg mt-4">
          <p className="text-[14px] font-normal">Please select a portfolio and risk level to display</p>
        </div>
      )}
    </div>
  );
}