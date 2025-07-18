import { Card } from './ui/card';
import { Button } from './ui/button';
import { BarChart3, Building2, TrendingUp, Globe } from 'lucide-react';
import JustfaIcon from '../imports/JustfaIcon-2002-45';

interface AdviserPortalProps {
  onNavigate: (page: string) => void;
}

export function AdviserPortal({ onNavigate }: AdviserPortalProps) {
  const adviserTiles = [
    {
      id: 'justfa-back-office',
      title: 'JustFA Back Office',
      description: 'Login to Back Office to manage your clients',
      icon: Building2,
      color: '#161616',
      bgColor: 'rgba(22, 22, 22, 0.1)',
      available: true,
      isExternal: true,
      externalUrl: 'https://sit.justdemo.uk/back-office/auth/login',
    },
    {
      id: 'portfolio-performance',
      title: 'Portfolios Historical Performance',
      description: 'Analyze portfolio performance across different risk levels and time periods',
      icon: BarChart3,
      color: '#0f62fe',
      bgColor: 'rgba(15, 98, 254, 0.1)',
      available: true,
      isExternal: false,
    },
    {
      id: 'cash-flow-planning',
      title: 'Cash Flow Planning',
      description: 'Create projection of client\'s cash flow and portfolio valuation',
      icon: TrendingUp,
      color: '#24a148',
      bgColor: 'rgba(36, 161, 72, 0.1)',
      available: false,
      isExternal: false,
    },
  ];

  const internalResourcesTiles = [
    {
      id: 'lno-intranet',
      title: 'LNO Intranet',
      description: 'Access company intranet and internal resources',
      icon: Globe,
      color: '#6366f1',
      bgColor: 'rgba(99, 102, 241, 0.1)',
      available: true,
      isExternal: true,
      externalUrl: 'https://wealthinity.sharepoint.com/sites/LNO-PoC/SitePages/CollabHome.aspx',
    },
  ];

  const handleTileClick = (tile: typeof adviserTiles[0]) => {
    if (tile.available) {
      if (tile.isExternal && tile.externalUrl) {
        window.open(tile.externalUrl, '_blank');
      } else {
        onNavigate(tile.id);
      }
    }
  };

  const renderTileGrid = (tiles: typeof adviserTiles) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiles.map((tile) => {
          const IconComponent = tile.icon;
          return (
            <Card
              key={tile.id}
              className={`relative p-6 border border-[#e0e0e0] shadow-[0px_2px_6px_-2px_rgba(0,0,0,0.1)] transition-all duration-200 ${
                tile.available
                  ? 'cursor-pointer hover:shadow-[0px_4px_12px_-2px_rgba(0,0,0,0.15)] hover:border-[#0f62fe]'
                  : 'opacity-60 cursor-not-allowed'
              }`}
              onClick={() => handleTileClick(tile)}
            >
              {!tile.available && (
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] text-[#6e6e6e] bg-[#f4f4f4] px-2 py-1 rounded-full font-semibold">
                    COMING SOON
                  </span>
                </div>
              )}
              
              <div className="flex flex-col h-full">
                <div className="flex-1 space-y-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: tile.bgColor }}
                  >
                    <IconComponent
                      className="w-6 h-6"
                      style={{ color: tile.color }}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-[16px] text-[#161616] font-semibold leading-[24px]">
                      {tile.title}
                    </h3>
                    <p className="text-[14px] text-[#6e6e6e] leading-[20px] font-normal">
                      {tile.description}
                    </p>
                  </div>
                </div>
                
                {tile.available && (
                  <div className="mt-4 pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#0f62fe] hover:bg-[rgba(15,98,254,0.1)] p-0 h-auto font-semibold"
                    >
                      Open Tool →
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <div className="p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header Section with Logo */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex-shrink-0">
              <JustfaIcon />
            </div>
            <div className="space-y-2">
              <h1 className="text-[25px] text-[rgba(0,0,0,0.87)] leading-[36px] font-bold">
                Adviser Portal
              </h1>
              <p className="text-[16px] text-[#6e6e6e] leading-[24px] font-normal">
                Welcome to your comprehensive adviser dashboard. Select a tool below to get started.
              </p>
            </div>
          </div>

          {/* Quick Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="p-4 border border-[#e0e0e0] shadow-[0px_2px_6px_-2px_rgba(0,0,0,0.1)]">
              <div className="space-y-1">
                <p className="text-[12px] text-[#6e6e6e] font-semibold uppercase tracking-wide">
                  Active Clients
                </p>
                <p className="text-[19px] text-[#161616] font-bold">
                  127
                </p>
              </div>
            </Card>
            <Card className="p-4 border border-[#e0e0e0] shadow-[0px_2px_6px_-2px_rgba(0,0,0,0.1)]">
              <div className="space-y-1">
                <p className="text-[12px] text-[#6e6e6e] font-semibold uppercase tracking-wide">
                  Assets Under Management
                </p>
                <p className="text-[19px] text-[#161616] font-bold">
                  £24.8M
                </p>
              </div>
            </Card>
            <Card className="p-4 border border-[#e0e0e0] shadow-[0px_2px_6px_-2px_rgba(0,0,0,0.1)]">
              <div className="space-y-1">
                <p className="text-[12px] text-[#6e6e6e] font-semibold uppercase tracking-wide">
                  This Month's Performance
                </p>
                <p className="text-[19px] text-[#24a148] font-bold">
                  +2.4%
                </p>
              </div>
            </Card>
            <Card className="p-4 border border-[#e0e0e0] shadow-[0px_2px_6px_-2px_rgba(0,0,0,0.1)]">
              <div className="space-y-1">
                <p className="text-[12px] text-[#6e6e6e] font-semibold uppercase tracking-wide">
                  Pending Reviews
                </p>
                <p className="text-[19px] text-[#f57c00] font-bold">
                  8
                </p>
              </div>
            </Card>
          </div>

          {/* Adviser Tools Section */}
          <div>
            <h2 className="text-[19px] text-[#161616] font-bold leading-[28px] mb-6">
              Adviser Tools
            </h2>
            {renderTileGrid(adviserTiles)}
          </div>

          {/* Internal Resources Section */}
          <div>
            <h2 className="text-[19px] text-[#161616] font-bold leading-[28px] mb-6">
              Internal Resources
            </h2>
            {renderTileGrid(internalResourcesTiles)}
          </div>
        </div>
      </div>
    </div>
  );
}