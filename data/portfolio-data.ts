// Updated portfolio performance data with actual values
export interface RawPortfolioData {
  portfolioName: string;
  date: string;
  portfolioValue: number;
  percentageChange: number | null;
}

export interface RawBaseRateData {
  date: string;
  rate: number;
}

export interface RawCPIData {
  date: string;
  cpiIndex: number;
}

export interface RawPropertyData {
  date: string;
  percentageChange: number;
}

export const rawPortfolioData: RawPortfolioData[] = [
  // JustFA Passive 1
  { portfolioName: "JustFA Passive 1", date: "01.07.2014", portfolioValue: 10000000000, percentageChange: null },
  { portfolioName: "JustFA Passive 1", date: "01.10.2014", portfolioValue: 10228504250, percentageChange: 2.29 },
  { portfolioName: "JustFA Passive 1", date: "01.01.2015", portfolioValue: 10652521863, percentageChange: 4.15 },
  { portfolioName: "JustFA Passive 1", date: "01.04.2015", portfolioValue: 11060667562, percentageChange: 3.83 },
  { portfolioName: "JustFA Passive 1", date: "01.07.2015", portfolioValue: 10694059636, percentageChange: -3.31 },
  { portfolioName: "JustFA Passive 1", date: "01.10.2015", portfolioValue: 10680343411, percentageChange: -0.13 },
  { portfolioName: "JustFA Passive 1", date: "01.01.2016", portfolioValue: 10858349773, percentageChange: 1.67 },
  { portfolioName: "JustFA Passive 1", date: "01.04.2016", portfolioValue: 11104824398, percentageChange: 2.27 },
  { portfolioName: "JustFA Passive 1", date: "01.07.2016", portfolioValue: 11775485514, percentageChange: 6.04 },
  { portfolioName: "JustFA Passive 1", date: "01.10.2016", portfolioValue: 12248931808, percentageChange: 4.02 },
  { portfolioName: "JustFA Passive 1", date: "01.01.2017", portfolioValue: 12254630091, percentageChange: 0.05 },
  { portfolioName: "JustFA Passive 1", date: "01.04.2017", portfolioValue: 12483437906, percentageChange: 1.87 },
  { portfolioName: "JustFA Passive 1", date: "01.07.2017", portfolioValue: 12490061680, percentageChange: 0.05 },
  { portfolioName: "JustFA Passive 1", date: "01.10.2017", portfolioValue: 12514264348, percentageChange: 0.19 },
  { portfolioName: "JustFA Passive 1", date: "01.01.2018", portfolioValue: 12839475188, percentageChange: 2.60 },
  { portfolioName: "JustFA Passive 1", date: "01.04.2018", portfolioValue: 12532341472, percentageChange: -2.39 },
  { portfolioName: "JustFA Passive 1", date: "01.07.2018", portfolioValue: 12934261325, percentageChange: 3.21 },
  { portfolioName: "JustFA Passive 1", date: "01.10.2018", portfolioValue: 13009347021, percentageChange: 0.58 },
  { portfolioName: "JustFA Passive 1", date: "01.01.2019", portfolioValue: 12647730216, percentageChange: -2.78 },
  { portfolioName: "JustFA Passive 1", date: "01.04.2019", portfolioValue: 13293323951, percentageChange: 5.10 },
  { portfolioName: "JustFA Passive 1", date: "01.07.2019", portfolioValue: 13702517323, percentageChange: 3.08 },
  { portfolioName: "JustFA Passive 1", date: "01.10.2019", portfolioValue: 14112366756, percentageChange: 2.99 },
  { portfolioName: "JustFA Passive 1", date: "01.01.2020", portfolioValue: 13969223190, percentageChange: -1.01 },
  { portfolioName: "JustFA Passive 1", date: "01.04.2020", portfolioValue: 13094203525, percentageChange: -6.26 },
  { portfolioName: "JustFA Passive 1", date: "01.07.2020", portfolioValue: 14110884428, percentageChange: 7.76 },
  { portfolioName: "JustFA Passive 1", date: "01.10.2020", portfolioValue: 14215694708, percentageChange: 0.74 },
  { portfolioName: "JustFA Passive 1", date: "01.01.2021", portfolioValue: 14707382454, percentageChange: 3.46 },
  { portfolioName: "JustFA Passive 1", date: "01.04.2021", portfolioValue: 14600553706, percentageChange: -0.73 },
  { portfolioName: "JustFA Passive 1", date: "01.07.2021", portfolioValue: 14966111508, percentageChange: 2.50 },
  { portfolioName: "JustFA Passive 1", date: "01.10.2021", portfolioValue: 15074706733, percentageChange: 0.73 },
  { portfolioName: "JustFA Passive 1", date: "01.01.2022", portfolioValue: 15478238838, percentageChange: 2.68 },
  { portfolioName: "JustFA Passive 1", date: "01.04.2022", portfolioValue: 14903989519, percentageChange: -3.71 },
  { portfolioName: "JustFA Passive 1", date: "01.07.2022", portfolioValue: 14006475203, percentageChange: -6.02 },
  { portfolioName: "JustFA Passive 1", date: "01.10.2022", portfolioValue: 13282884406, percentageChange: -5.17 },
  { portfolioName: "JustFA Passive 1", date: "01.01.2023", portfolioValue: 13493225703, percentageChange: 1.58 },
  { portfolioName: "JustFA Passive 1", date: "01.04.2023", portfolioValue: 13796672044, percentageChange: 2.25 },
  { portfolioName: "JustFA Passive 1", date: "01.07.2023", portfolioValue: 13700827962, percentageChange: -0.69 },
  { portfolioName: "JustFA Passive 1", date: "01.10.2023", portfolioValue: 13705462377, percentageChange: 0.03 },
  { portfolioName: "JustFA Passive 1", date: "01.01.2024", portfolioValue: 14506338638, percentageChange: 5.84 },
  { portfolioName: "JustFA Passive 1", date: "01.04.2024", portfolioValue: 14740918560, percentageChange: 1.62 },
  { portfolioName: "JustFA Passive 1", date: "01.07.2024", portfolioValue: 14781904491, percentageChange: 0.28 },
  { portfolioName: "JustFA Passive 1", date: "01.10.2024", portfolioValue: 15247696792, percentageChange: 3.15 },
  { portfolioName: "JustFA Passive 1", date: "01.01.2025", portfolioValue: 15215147238, percentageChange: -0.21 },
  { portfolioName: "JustFA Passive 1", date: "01.04.2025", portfolioValue: 15438519739, percentageChange: 1.47 },
  { portfolioName: "JustFA Passive 1", date: "01.07.2025", portfolioValue: 15675970807, percentageChange: 1.54 },

  // JustFA Passive 2
  { portfolioName: "JustFA Passive 2", date: "01.07.2014", portfolioValue: 10000000000, percentageChange: -36.21 },
  { portfolioName: "JustFA Passive 2", date: "01.10.2014", portfolioValue: 10208570949, percentageChange: 2.09 },
  { portfolioName: "JustFA Passive 2", date: "01.01.2015", portfolioValue: 10653831864, percentageChange: 4.36 },
  { portfolioName: "JustFA Passive 2", date: "01.04.2015", portfolioValue: 11195329829, percentageChange: 5.08 },
  { portfolioName: "JustFA Passive 2", date: "01.07.2015", portfolioValue: 10778090982, percentageChange: -3.73 },
  { portfolioName: "JustFA Passive 2", date: "01.10.2015", portfolioValue: 10592275320, percentageChange: -1.72 },
  { portfolioName: "JustFA Passive 2", date: "01.01.2016", portfolioValue: 10907737262, percentageChange: 2.98 },
  { portfolioName: "JustFA Passive 2", date: "01.04.2016", portfolioValue: 11133244657, percentageChange: 2.07 },
  { portfolioName: "JustFA Passive 2", date: "01.07.2016", portfolioValue: 11905761409, percentageChange: 6.94 },
  { portfolioName: "JustFA Passive 2", date: "01.10.2016", portfolioValue: 12531521690, percentageChange: 5.26 },
  { portfolioName: "JustFA Passive 2", date: "01.01.2017", portfolioValue: 12710568642, percentageChange: 1.43 },
  { portfolioName: "JustFA Passive 2", date: "01.04.2017", portfolioValue: 13091942464, percentageChange: 3.00 },
  { portfolioName: "JustFA Passive 2", date: "01.07.2017", portfolioValue: 13147327069, percentageChange: 0.42 },
  { portfolioName: "JustFA Passive 2", date: "01.10.2017", portfolioValue: 13228496685, percentageChange: 0.62 },
  { portfolioName: "JustFA Passive 2", date: "01.01.2018", portfolioValue: 13652665091, percentageChange: 3.21 },
  { portfolioName: "JustFA Passive 2", date: "01.04.2018", portfolioValue: 13201396555, percentageChange: -3.31 },
  { portfolioName: "JustFA Passive 2", date: "01.07.2018", portfolioValue: 13781340306, percentageChange: 4.39 },
  { portfolioName: "JustFA Passive 2", date: "01.10.2018", portfolioValue: 13960998001, percentageChange: 1.30 },
  { portfolioName: "JustFA Passive 2", date: "01.01.2019", portfolioValue: 13283156504, percentageChange: -4.86 },
  { portfolioName: "JustFA Passive 2", date: "01.04.2019", portfolioValue: 14145025868, percentageChange: 6.49 },
  { portfolioName: "JustFA Passive 2", date: "01.07.2019", portfolioValue: 14710267557, percentageChange: 4.00 },
  { portfolioName: "JustFA Passive 2", date: "01.10.2019", portfolioValue: 15110279127, percentageChange: 2.72 },
  { portfolioName: "JustFA Passive 2", date: "01.01.2020", portfolioValue: 15050886754, percentageChange: -0.39 },
  { portfolioName: "JustFA Passive 2", date: "01.04.2020", portfolioValue: 13500430302, percentageChange: -10.30 },
  { portfolioName: "JustFA Passive 2", date: "01.07.2020", portfolioValue: 15022897189, percentageChange: 11.28 },
  { portfolioName: "JustFA Passive 2", date: "01.10.2020", portfolioValue: 15222752480, percentageChange: 1.33 },
  { portfolioName: "JustFA Passive 2", date: "01.01.2021", portfolioValue: 15973829297, percentageChange: 4.93 },
  { portfolioName: "JustFA Passive 2", date: "01.04.2021", portfolioValue: 16066079772, percentageChange: 0.58 },
  { portfolioName: "JustFA Passive 2", date: "01.07.2021", portfolioValue: 16636117458, percentageChange: 3.55 },
  { portfolioName: "JustFA Passive 2", date: "01.10.2021", portfolioValue: 16731614399, percentageChange: 0.57 },
  { portfolioName: "JustFA Passive 2", date: "01.01.2022", portfolioValue: 17353180726, percentageChange: 3.71 },
  { portfolioName: "JustFA Passive 2", date: "01.04.2022", portfolioValue: 16741635471, percentageChange: -3.52 },
  { portfolioName: "JustFA Passive 2", date: "01.07.2022", portfolioValue: 15646264218, percentageChange: -6.54 },
  { portfolioName: "JustFA Passive 2", date: "01.10.2022", portfolioValue: 14964269137, percentageChange: -4.36 },
  { portfolioName: "JustFA Passive 2", date: "01.01.2023", portfolioValue: 15338783571, percentageChange: 2.50 },
  { portfolioName: "JustFA Passive 2", date: "01.04.2023", portfolioValue: 15751446577, percentageChange: 2.69 },
  { portfolioName: "JustFA Passive 2", date: "01.07.2023", portfolioValue: 15720518054, percentageChange: -0.20 },
  { portfolioName: "JustFA Passive 2", date: "01.10.2023", portfolioValue: 15747887316, percentageChange: 0.17 },
  { portfolioName: "JustFA Passive 2", date: "01.01.2024", portfolioValue: 16710839206, percentageChange: 6.11 },
  { portfolioName: "JustFA Passive 2", date: "01.04.2024", portfolioValue: 17227705356, percentageChange: 3.09 },
  { portfolioName: "JustFA Passive 2", date: "01.07.2024", portfolioValue: 17362207710, percentageChange: 0.78 },
  { portfolioName: "JustFA Passive 2", date: "01.10.2024", portfolioValue: 17859111336, percentageChange: 2.86 },
  { portfolioName: "JustFA Passive 2", date: "01.01.2025", portfolioValue: 17878433281, percentageChange: 0.11 },
  { portfolioName: "JustFA Passive 2", date: "01.04.2025", portfolioValue: 18069081021, percentageChange: 1.07 },
  { portfolioName: "JustFA Passive 2", date: "01.07.2025", portfolioValue: 18485396143, percentageChange: 2.30 },

  // JustFA Passive 3
  { portfolioName: "JustFA Passive 3", date: "01.07.2014", portfolioValue: 10000000000, percentageChange: -45.90 },
  { portfolioName: "JustFA Passive 3", date: "01.10.2014", portfolioValue: 10218577283, percentageChange: 2.19 },
  { portfolioName: "JustFA Passive 3", date: "01.01.2015", portfolioValue: 10678903566, percentageChange: 4.50 },
  { portfolioName: "JustFA Passive 3", date: "01.04.2015", portfolioValue: 11309760785, percentageChange: 5.91 },
  { portfolioName: "JustFA Passive 3", date: "01.07.2015", portfolioValue: 10872191557, percentageChange: -3.87 },
  { portfolioName: "JustFA Passive 3", date: "01.10.2015", portfolioValue: 10488330747, percentageChange: -3.53 },
  { portfolioName: "JustFA Passive 3", date: "01.01.2016", portfolioValue: 10910872445, percentageChange: 4.03 },
  { portfolioName: "JustFA Passive 3", date: "01.04.2016", portfolioValue: 11141474018, percentageChange: 2.11 },
  { portfolioName: "JustFA Passive 3", date: "01.07.2016", portfolioValue: 12024065147, percentageChange: 7.92 },
  { portfolioName: "JustFA Passive 3", date: "01.10.2016", portfolioValue: 12767307371, percentageChange: 6.18 },
  { portfolioName: "JustFA Passive 3", date: "01.01.2017", portfolioValue: 13126657781, percentageChange: 2.81 },
  { portfolioName: "JustFA Passive 3", date: "01.04.2017", portfolioValue: 13643696121, percentageChange: 3.94 },
  { portfolioName: "JustFA Passive 3", date: "01.07.2017", portfolioValue: 13706661163, percentageChange: 0.46 },
  { portfolioName: "JustFA Passive 3", date: "01.10.2017", portfolioValue: 13842305199, percentageChange: 0.99 },
  { portfolioName: "JustFA Passive 3", date: "01.01.2018", portfolioValue: 14408616390, percentageChange: 4.09 },
  { portfolioName: "JustFA Passive 3", date: "01.04.2018", portfolioValue: 13806791249, percentageChange: -4.18 },
  { portfolioName: "JustFA Passive 3", date: "01.07.2018", portfolioValue: 14584760854, percentageChange: 5.63 },
  { portfolioName: "JustFA Passive 3", date: "01.10.2018", portfolioValue: 14862839786, percentageChange: 1.91 },
  { portfolioName: "JustFA Passive 3", date: "01.01.2019", portfolioValue: 13870642007, percentageChange: -6.68 },
  { portfolioName: "JustFA Passive 3", date: "01.04.2019", portfolioValue: 14950874834, percentageChange: 7.79 },
  { portfolioName: "JustFA Passive 3", date: "01.07.2019", portfolioValue: 15642682067, percentageChange: 4.63 },
  { portfolioName: "JustFA Passive 3", date: "01.10.2019", portfolioValue: 16011812920, percentageChange: 2.36 },
  { portfolioName: "JustFA Passive 3", date: "01.01.2020", portfolioValue: 16102685693, percentageChange: 0.57 },
  { portfolioName: "JustFA Passive 3", date: "01.04.2020", portfolioValue: 13783349792, percentageChange: -14.40 },
  { portfolioName: "JustFA Passive 3", date: "01.07.2020", portfolioValue: 15737345099, percentageChange: 14.18 },
  { portfolioName: "JustFA Passive 3", date: "01.10.2020", portfolioValue: 16041318019, percentageChange: 1.93 },
  { portfolioName: "JustFA Passive 3", date: "01.01.2021", portfolioValue: 17069776949, percentageChange: 6.41 },
  { portfolioName: "JustFA Passive 3", date: "01.04.2021", portfolioValue: 17399927964, percentageChange: 1.93 },
  { portfolioName: "JustFA Passive 3", date: "01.07.2021", portfolioValue: 18151477684, percentageChange: 4.32 },
  { portfolioName: "JustFA Passive 3", date: "01.10.2021", portfolioValue: 18223927302, percentageChange: 0.40 },
  { portfolioName: "JustFA Passive 3", date: "01.01.2022", portfolioValue: 19044823111, percentageChange: 4.50 },
  { portfolioName: "JustFA Passive 3", date: "01.04.2022", portfolioValue: 18479929686, percentageChange: -2.97 },
  { portfolioName: "JustFA Passive 3", date: "01.07.2022", portfolioValue: 17297678066, percentageChange: -6.40 },
  { portfolioName: "JustFA Passive 3", date: "01.10.2022", portfolioValue: 16836176857, percentageChange: -2.67 },
  { portfolioName: "JustFA Passive 3", date: "01.01.2023", portfolioValue: 17317518512, percentageChange: 2.86 },
  { portfolioName: "JustFA Passive 3", date: "01.04.2023", portfolioValue: 17780167219, percentageChange: 2.67 },
  { portfolioName: "JustFA Passive 3", date: "01.07.2023", portfolioValue: 17913923847, percentageChange: 0.75 },
  { portfolioName: "JustFA Passive 3", date: "01.10.2023", portfolioValue: 18030461640, percentageChange: 0.65 },
  { portfolioName: "JustFA Passive 3", date: "01.01.2024", portfolioValue: 19067100887, percentageChange: 5.75 },
  { portfolioName: "JustFA Passive 3", date: "01.04.2024", portfolioValue: 19905278653, percentageChange: 4.40 },
  { portfolioName: "JustFA Passive 3", date: "01.07.2024", portfolioValue: 20269398476, percentageChange: 1.83 },
  { portfolioName: "JustFA Passive 3", date: "01.10.2024", portfolioValue: 20799455947, percentageChange: 2.62 },
  { portfolioName: "JustFA Passive 3", date: "01.01.2025", portfolioValue: 20907879281, percentageChange: 0.52 },
  { portfolioName: "JustFA Passive 3", date: "01.04.2025", portfolioValue: 21010560777, percentageChange: 0.49 },
  { portfolioName: "JustFA Passive 3", date: "01.07.2025", portfolioValue: 21626622761, percentageChange: 2.93 },

  // JustFA Passive 4
  { portfolioName: "JustFA Passive 4", date: "01.07.2014", portfolioValue: 10000000000, percentageChange: -53.76 },
  { portfolioName: "JustFA Passive 4", date: "01.10.2014", portfolioValue: 10185468641, percentageChange: 1.85 },
  { portfolioName: "JustFA Passive 4", date: "01.01.2015", portfolioValue: 10593971255, percentageChange: 4.01 },
  { portfolioName: "JustFA Passive 4", date: "01.04.2015", portfolioValue: 11306867455, percentageChange: 6.73 },
  { portfolioName: "JustFA Passive 4", date: "01.07.2015", portfolioValue: 10869352056, percentageChange: -3.87 },
  { portfolioName: "JustFA Passive 4", date: "01.10.2015", portfolioValue: 10269849831, percentageChange: -5.52 },
  { portfolioName: "JustFA Passive 4", date: "01.01.2016", portfolioValue: 10770565202, percentageChange: 4.88 },
  { portfolioName: "JustFA Passive 4", date: "01.04.2016", portfolioValue: 10998463683, percentageChange: 2.12 },
  { portfolioName: "JustFA Passive 4", date: "01.07.2016", portfolioValue: 11910767324, percentageChange: 8.29 },
  { portfolioName: "JustFA Passive 4", date: "01.10.2016", portfolioValue: 12707356292, percentageChange: 6.69 },
  { portfolioName: "JustFA Passive 4", date: "01.01.2017", portfolioValue: 13167513812, percentageChange: 3.62 },
  { portfolioName: "JustFA Passive 4", date: "01.04.2017", portfolioValue: 13807450096, percentageChange: 4.86 },
  { portfolioName: "JustFA Passive 4", date: "01.07.2017", portfolioValue: 13910868704, percentageChange: 0.75 },
  { portfolioName: "JustFA Passive 4", date: "01.10.2017", portfolioValue: 14114728392, percentageChange: 1.47 },
  { portfolioName: "JustFA Passive 4", date: "01.01.2018", portfolioValue: 14759808859, percentageChange: 4.57 },
  { portfolioName: "JustFA Passive 4", date: "01.04.2018", portfolioValue: 14071102129, percentageChange: -4.67 },
  { portfolioName: "JustFA Passive 4", date: "01.07.2018", portfolioValue: 14919198339, percentageChange: 6.03 },
  { portfolioName: "JustFA Passive 4", date: "01.10.2018", portfolioValue: 15244244846, percentageChange: 2.18 },
  { portfolioName: "JustFA Passive 4", date: "01.01.2019", portfolioValue: 14047343041, percentageChange: -7.85 },
  { portfolioName: "JustFA Passive 4", date: "01.04.2019", portfolioValue: 15233073920, percentageChange: 8.44 },
  { portfolioName: "JustFA Passive 4", date: "01.07.2019", portfolioValue: 15996919878, percentageChange: 5.01 },
  { portfolioName: "JustFA Passive 4", date: "01.10.2019", portfolioValue: 16252082848, percentageChange: 1.60 },
  { portfolioName: "JustFA Passive 4", date: "01.01.2020", portfolioValue: 16505994228, percentageChange: 1.56 },
  { portfolioName: "JustFA Passive 4", date: "01.04.2020", portfolioValue: 13633231207, percentageChange: -17.40 },
  { portfolioName: "JustFA Passive 4", date: "01.07.2020", portfolioValue: 15829603728, percentageChange: 16.11 },
  { portfolioName: "JustFA Passive 4", date: "01.10.2020", portfolioValue: 16245110788, percentageChange: 2.62 },
  { portfolioName: "JustFA Passive 4", date: "01.01.2021", portfolioValue: 17480127823, percentageChange: 7.60 },
  { portfolioName: "JustFA Passive 4", date: "01.04.2021", portfolioValue: 18014522598, percentageChange: 3.06 },
  { portfolioName: "JustFA Passive 4", date: "01.07.2021", portfolioValue: 18851578101, percentageChange: 4.65 },
  { portfolioName: "JustFA Passive 4", date: "01.10.2021", portfolioValue: 18814636729, percentageChange: -0.20 },
  { portfolioName: "JustFA Passive 4", date: "01.01.2022", portfolioValue: 19663395778, percentageChange: 4.51 },
  { portfolioName: "JustFA Passive 4", date: "01.04.2022", portfolioValue: 19161753706, percentageChange: -2.55 },
  { portfolioName: "JustFA Passive 4", date: "01.07.2022", portfolioValue: 18033827231, percentageChange: -5.89 },
  { portfolioName: "JustFA Passive 4", date: "01.10.2022", portfolioValue: 17677992314, percentageChange: -1.97 },
  { portfolioName: "JustFA Passive 4", date: "01.01.2023", portfolioValue: 18266769058, percentageChange: 3.33 },
  { portfolioName: "JustFA Passive 4", date: "01.04.2023", portfolioValue: 18722044633, percentageChange: 2.49 },
  { portfolioName: "JustFA Passive 4", date: "01.07.2023", portfolioValue: 18901939922, percentageChange: 0.96 },
  { portfolioName: "JustFA Passive 4", date: "01.10.2023", portfolioValue: 19069424859, percentageChange: 0.89 },
  { portfolioName: "JustFA Passive 4", date: "01.01.2024", portfolioValue: 20079248463, percentageChange: 5.30 },
  { portfolioName: "JustFA Passive 4", date: "01.04.2024", portfolioValue: 21071498202, percentageChange: 4.94 },
  { portfolioName: "JustFA Passive 4", date: "01.07.2024", portfolioValue: 21639227378, percentageChange: 2.69 },
  { portfolioName: "JustFA Passive 4", date: "01.10.2024", portfolioValue: 22230181856, percentageChange: 2.73 },
  { portfolioName: "JustFA Passive 4", date: "01.01.2025", portfolioValue: 22481885362, percentageChange: 1.13 },
  { portfolioName: "JustFA Passive 4", date: "01.04.2025", portfolioValue: 22418234212, percentageChange: -0.28 },
  { portfolioName: "JustFA Passive 4", date: "01.07.2025", portfolioValue: 23168734420, percentageChange: 3.35 },

  // JustFA Passive 5
  { portfolioName: "JustFA Passive 5", date: "01.07.2014", portfolioValue: 10000000000, percentageChange: -56.84 },
  { portfolioName: "JustFA Passive 5", date: "01.10.2014", portfolioValue: 10130609406, percentageChange: 1.31 },
  { portfolioName: "JustFA Passive 5", date: "01.01.2015", portfolioValue: 10474363345, percentageChange: 3.39 },
  { portfolioName: "JustFA Passive 5", date: "01.04.2015", portfolioValue: 11279691441, percentageChange: 7.69 },
  { portfolioName: "JustFA Passive 5", date: "01.07.2015", portfolioValue: 10881565112, percentageChange: -3.53 },
  { portfolioName: "JustFA Passive 5", date: "01.10.2015", portfolioValue: 10078217921, percentageChange: -7.38 },
  { portfolioName: "JustFA Passive 5", date: "01.01.2016", portfolioValue: 10582219433, percentageChange: 5.00 },
  { portfolioName: "JustFA Passive 5", date: "01.04.2016", portfolioValue: 10782442084, percentageChange: 1.89 },
  { portfolioName: "JustFA Passive 5", date: "01.07.2016", portfolioValue: 11745332900, percentageChange: 8.93 },
  { portfolioName: "JustFA Passive 5", date: "01.10.2016", portfolioValue: 12642972370, percentageChange: 7.64 },
  { portfolioName: "JustFA Passive 5", date: "01.01.2017", portfolioValue: 13176257020, percentageChange: 4.22 },
  { portfolioName: "JustFA Passive 5", date: "01.04.2017", portfolioValue: 13935652504, percentageChange: 5.76 },
  { portfolioName: "JustFA Passive 5", date: "01.07.2017", portfolioValue: 14086937513, percentageChange: 1.09 },
  { portfolioName: "JustFA Passive 5", date: "01.10.2017", portfolioValue: 14354073585, percentageChange: 1.90 },
  { portfolioName: "JustFA Passive 5", date: "01.01.2018", portfolioValue: 15085509260, percentageChange: 5.10 },
  { portfolioName: "JustFA Passive 5", date: "01.04.2018", portfolioValue: 14300807212, percentageChange: -5.20 },
  { portfolioName: "JustFA Passive 5", date: "01.07.2018", portfolioValue: 15231063685, percentageChange: 6.50 },
  { portfolioName: "JustFA Passive 5", date: "01.10.2018", portfolioValue: 15528643474, percentageChange: 1.95 },
  { portfolioName: "JustFA Passive 5", date: "01.01.2019", portfolioValue: 14110717068, percentageChange: -9.13 },
  { portfolioName: "JustFA Passive 5", date: "01.04.2019", portfolioValue: 15430791521, percentageChange: 9.36 },
  { portfolioName: "JustFA Passive 5", date: "01.07.2019", portfolioValue: 16237949866, percentageChange: 5.23 },
  { portfolioName: "JustFA Passive 5", date: "01.10.2019", portfolioValue: 16389675778, percentageChange: 0.93 },
  { portfolioName: "JustFA Passive 5", date: "01.01.2020", portfolioValue: 16775446483, percentageChange: 2.35 },
  { portfolioName: "JustFA Passive 5", date: "01.04.2020", portfolioValue: 13215783378, percentageChange: -21.22 },
  { portfolioName: "JustFA Passive 5", date: "01.07.2020", portfolioValue: 15561731445, percentageChange: 17.75 },
  { portfolioName: "JustFA Passive 5", date: "01.10.2020", portfolioValue: 15987754283, percentageChange: 2.74 },
  { portfolioName: "JustFA Passive 5", date: "01.01.2021", portfolioValue: 17477347336, percentageChange: 9.32 },
  { portfolioName: "JustFA Passive 5", date: "01.04.2021", portfolioValue: 18194250633, percentageChange: 4.10 },
  { portfolioName: "JustFA Passive 5", date: "01.07.2021", portfolioValue: 19099848619, percentageChange: 4.98 },
  { portfolioName: "JustFA Passive 5", date: "01.10.2021", portfolioValue: 18995547420, percentageChange: -0.55 },
  { portfolioName: "JustFA Passive 5", date: "01.01.2022", portfolioValue: 19850256616, percentageChange: 4.50 },
  { portfolioName: "JustFA Passive 5", date: "01.04.2022", portfolioValue: 19461787751, percentageChange: -1.96 },
  { portfolioName: "JustFA Passive 5", date: "01.07.2022", portfolioValue: 18242699155, percentageChange: -6.26 },
  { portfolioName: "JustFA Passive 5", date: "01.10.2022", portfolioValue: 17959587917, percentageChange: -1.55 },
  { portfolioName: "JustFA Passive 5", date: "01.01.2023", portfolioValue: 18739321664, percentageChange: 4.34 },
  { portfolioName: "JustFA Passive 5", date: "01.04.2023", portfolioValue: 19242529680, percentageChange: 2.69 },
  { portfolioName: "JustFA Passive 5", date: "01.07.2023", portfolioValue: 19405633158, percentageChange: 0.85 },
  { portfolioName: "JustFA Passive 5", date: "01.10.2023", portfolioValue: 19599181853, percentageChange: 1.00 },
  { portfolioName: "JustFA Passive 5", date: "01.01.2024", portfolioValue: 20562867492, percentageChange: 4.92 },
  { portfolioName: "JustFA Passive 5", date: "01.04.2024", portfolioValue: 21748185762, percentageChange: 5.76 },
  { portfolioName: "JustFA Passive 5", date: "01.07.2024", portfolioValue: 22482872634, percentageChange: 3.38 },
  { portfolioName: "JustFA Passive 5", date: "01.10.2024", portfolioValue: 23066519765, percentageChange: 2.60 },
  { portfolioName: "JustFA Passive 5", date: "01.01.2025", portfolioValue: 23424507198, percentageChange: 1.55 },
  { portfolioName: "JustFA Passive 5", date: "01.04.2025", portfolioValue: 23201270512, percentageChange: -0.95 },
  { portfolioName: "JustFA Passive 5", date: "01.07.2025", portfolioValue: 24106056261, percentageChange: 3.90 },

  // JustFA Champions 1
  { portfolioName: "JustFA Champions 1", date: "01.07.2017", portfolioValue: 10039201350, percentageChange: -58.35 },
  { portfolioName: "JustFA Champions 1", date: "01.10.2017", portfolioValue: 10062780605, percentageChange: 0.23 },
  { portfolioName: "JustFA Champions 1", date: "01.01.2018", portfolioValue: 10261982513, percentageChange: 1.98 },
  { portfolioName: "JustFA Champions 1", date: "01.04.2018", portfolioValue: 10062479541, percentageChange: -1.94 },
  { portfolioName: "JustFA Champions 1", date: "01.07.2018", portfolioValue: 10239697143, percentageChange: 1.76 },
  { portfolioName: "JustFA Champions 1", date: "01.10.2018", portfolioValue: 10297586859, percentageChange: 0.57 },
  { portfolioName: "JustFA Champions 1", date: "01.01.2019", portfolioValue: 10037727740, percentageChange: -2.52 },
  { portfolioName: "JustFA Champions 1", date: "01.04.2019", portfolioValue: 10467134952, percentageChange: 4.28 },
  { portfolioName: "JustFA Champions 1", date: "01.07.2019", portfolioValue: 10816426779, percentageChange: 3.34 },
  { portfolioName: "JustFA Champions 1", date: "01.10.2019", portfolioValue: 11030491363, percentageChange: 1.98 },
  { portfolioName: "JustFA Champions 1", date: "01.01.2020", portfolioValue: 10992511695, percentageChange: -0.34 },
  { portfolioName: "JustFA Champions 1", date: "01.04.2020", portfolioValue: 10285076244, percentageChange: -6.44 },
  { portfolioName: "JustFA Champions 1", date: "01.07.2020", portfolioValue: 11041118457, percentageChange: 7.35 },
  { portfolioName: "JustFA Champions 1", date: "01.10.2020", portfolioValue: 11205030929, percentageChange: 1.48 },
  { portfolioName: "JustFA Champions 1", date: "01.01.2021", portfolioValue: 11533206223, percentageChange: 2.93 },
  { portfolioName: "JustFA Champions 1", date: "01.04.2021", portfolioValue: 11424446703, percentageChange: -0.94 },
  { portfolioName: "JustFA Champions 1", date: "01.07.2021", portfolioValue: 11721571477, percentageChange: 2.60 },
  { portfolioName: "JustFA Champions 1", date: "01.10.2021", portfolioValue: 11742426522, percentageChange: 0.18 },
  { portfolioName: "JustFA Champions 1", date: "01.01.2022", portfolioValue: 11910951296, percentageChange: 1.44 },
  { portfolioName: "JustFA Champions 1", date: "01.04.2022", portfolioValue: 11448944690, percentageChange: -3.88 },
  { portfolioName: "JustFA Champions 1", date: "01.07.2022", portfolioValue: 10899592479, percentageChange: -4.80 },
  { portfolioName: "JustFA Champions 1", date: "01.10.2022", portfolioValue: 10548026215, percentageChange: -3.23 },
  { portfolioName: "JustFA Champions 1", date: "01.01.2023", portfolioValue: 10664010227, percentageChange: 1.10 },
  { portfolioName: "JustFA Champions 1", date: "01.04.2023", portfolioValue: 10887914068, percentageChange: 2.10 },
  { portfolioName: "JustFA Champions 1", date: "01.07.2023", portfolioValue: 10845628271, percentageChange: -0.39 },
  { portfolioName: "JustFA Champions 1", date: "01.10.2023", portfolioValue: 10812473096, percentageChange: -0.31 },
  { portfolioName: "JustFA Champions 1", date: "01.01.2024", portfolioValue: 11396504849, percentageChange: 5.40 },
  { portfolioName: "JustFA Champions 1", date: "01.04.2024", portfolioValue: 11561312506, percentageChange: 1.45 },
  { portfolioName: "JustFA Champions 1", date: "01.07.2024", portfolioValue: 11602288528, percentageChange: 0.35 },
  { portfolioName: "JustFA Champions 1", date: "01.10.2024", portfolioValue: 11936043930, percentageChange: 2.88 },
  { portfolioName: "JustFA Champions 1", date: "01.01.2025", portfolioValue: 11963603327, percentageChange: 0.23 },
  { portfolioName: "JustFA Champions 1", date: "01.04.2025", portfolioValue: 12026370821, percentageChange: 0.52 },
  { portfolioName: "JustFA Champions 1", date: "01.07.2025", portfolioValue: 12304029239, percentageChange: 2.31 },

  // JustFA Champions 2
  { portfolioName: "JustFA Champions 2", date: "01.07.2017", portfolioValue: 10045862398, percentageChange: -18.35 },
  { portfolioName: "JustFA Champions 2", date: "01.10.2017", portfolioValue: 10083937578, percentageChange: 0.38 },
  { portfolioName: "JustFA Champions 2", date: "01.01.2018", portfolioValue: 10359404382, percentageChange: 2.73 },
  { portfolioName: "JustFA Champions 2", date: "01.04.2018", portfolioValue: 10082202690, percentageChange: -2.68 },
  { portfolioName: "JustFA Champions 2", date: "01.07.2018", portfolioValue: 10356992416, percentageChange: 2.73 },
  { portfolioName: "JustFA Champions 2", date: "01.10.2018", portfolioValue: 10484825860, percentageChange: 1.23 },
  { portfolioName: "JustFA Champions 2", date: "01.01.2019", portfolioValue: 9995582662, percentageChange: -4.67 },
  { portfolioName: "JustFA Champions 2", date: "01.04.2019", portfolioValue: 10511280909, percentageChange: 5.16 },
  { portfolioName: "JustFA Champions 2", date: "01.07.2019", portfolioValue: 10893048755, percentageChange: 3.63 },
  { portfolioName: "JustFA Champions 2", date: "01.10.2019", portfolioValue: 11115358358, percentageChange: 2.04 },
  { portfolioName: "JustFA Champions 2", date: "01.01.2020", portfolioValue: 11144842489, percentageChange: 0.27 },
  { portfolioName: "JustFA Champions 2", date: "01.04.2020", portfolioValue: 10136893979, percentageChange: -9.04 },
  { portfolioName: "JustFA Champions 2", date: "01.07.2020", portfolioValue: 11095929808, percentageChange: 9.46 },
  { portfolioName: "JustFA Champions 2", date: "01.10.2020", portfolioValue: 11252635174, percentageChange: 1.41 },
  { portfolioName: "JustFA Champions 2", date: "01.01.2021", portfolioValue: 11766491978, percentageChange: 4.57 },
  { portfolioName: "JustFA Champions 2", date: "01.04.2021", portfolioValue: 11803395497, percentageChange: 0.31 },
  { portfolioName: "JustFA Champions 2", date: "01.07.2021", portfolioValue: 12159547603, percentageChange: 3.02 },
  { portfolioName: "JustFA Champions 2", date: "01.10.2021", portfolioValue: 12196534218, percentageChange: 0.30 },
  { portfolioName: "JustFA Champions 2", date: "01.01.2022", portfolioValue: 12447535029, percentageChange: 2.06 },
  { portfolioName: "JustFA Champions 2", date: "01.04.2022", portfolioValue: 12005559040, percentageChange: -3.55 },
  { portfolioName: "JustFA Champions 2", date: "01.07.2022", portfolioValue: 11291763193, percentageChange: -5.95 },
  { portfolioName: "JustFA Champions 2", date: "01.10.2022", portfolioValue: 10948802223, percentageChange: -3.04 },
  { portfolioName: "JustFA Champions 2", date: "01.01.2023", portfolioValue: 11137386195, percentageChange: 1.72 },
  { portfolioName: "JustFA Champions 2", date: "01.04.2023", portfolioValue: 11400267738, percentageChange: 2.36 },
  { portfolioName: "JustFA Champions 2", date: "01.07.2023", portfolioValue: 11446645145, percentageChange: 0.41 },
  { portfolioName: "JustFA Champions 2", date: "01.10.2023", portfolioValue: 11410924175, percentageChange: -0.31 },
  { portfolioName: "JustFA Champions 2", date: "01.01.2024", portfolioValue: 12038705654, percentageChange: 5.50 },
  { portfolioName: "JustFA Champions 2", date: "01.04.2024", portfolioValue: 12409023340, percentageChange: 3.08 },
  { portfolioName: "JustFA Champions 2", date: "01.07.2024", portfolioValue: 12520676515, percentageChange: 0.90 },
  { portfolioName: "JustFA Champions 2", date: "01.10.2024", portfolioValue: 12879634716, percentageChange: 2.87 },
  { portfolioName: "JustFA Champions 2", date: "01.01.2025", portfolioValue: 12972875912, percentageChange: 0.72 },
  { portfolioName: "JustFA Champions 2", date: "01.04.2025", portfolioValue: 12842407576, percentageChange: -1.01 },
  { portfolioName: "JustFA Champions 2", date: "01.07.2025", portfolioValue: 13209186756, percentageChange: 2.86 },

  // JustFA Champions 3
  { portfolioName: "JustFA Champions 3", date: "01.07.2017", portfolioValue: 10077835857, percentageChange: -23.71 },
  { portfolioName: "JustFA Champions 3", date: "01.10.2017", portfolioValue: 10132537348, percentageChange: 0.54 },
  { portfolioName: "JustFA Champions 3", date: "01.01.2018", portfolioValue: 10507394935, percentageChange: 3.70 },
  { portfolioName: "JustFA Champions 3", date: "01.04.2018", portfolioValue: 10139460561, percentageChange: -3.50 },
  { portfolioName: "JustFA Champions 3", date: "01.07.2018", portfolioValue: 10587505351, percentageChange: 4.42 },
  { portfolioName: "JustFA Champions 3", date: "01.10.2018", portfolioValue: 10799918993, percentageChange: 2.01 },
  { portfolioName: "JustFA Champions 3", date: "01.01.2019", portfolioValue: 10117733416, percentageChange: -6.32 },
  { portfolioName: "JustFA Champions 3", date: "01.04.2019", portfolioValue: 10725820531, percentageChange: 6.01 },
  { portfolioName: "JustFA Champions 3", date: "01.07.2019", portfolioValue: 11175456505, percentageChange: 4.19 },
  { portfolioName: "JustFA Champions 3", date: "01.10.2019", portfolioValue: 11394175059, percentageChange: 1.96 },
  { portfolioName: "JustFA Champions 3", date: "01.01.2020", portfolioValue: 11517898474, percentageChange: 1.09 },
  { portfolioName: "JustFA Champions 3", date: "01.04.2020", portfolioValue: 9948387334, percentageChange: -13.63 },
  { portfolioName: "JustFA Champions 3", date: "01.07.2020", portfolioValue: 11186638242, percentageChange: 12.45 },
  { portfolioName: "JustFA Champions 3", date: "01.10.2020", portfolioValue: 11344781092, percentageChange: 1.41 },
  { portfolioName: "JustFA Champions 3", date: "01.01.2021", portfolioValue: 12128213979, percentageChange: 6.91 },
  { portfolioName: "JustFA Champions 3", date: "01.04.2021", portfolioValue: 12311809278, percentageChange: 1.51 },
  { portfolioName: "JustFA Champions 3", date: "01.07.2021", portfolioValue: 12807393048, percentageChange: 4.03 },
  { portfolioName: "JustFA Champions 3", date: "01.10.2021", portfolioValue: 12886955517, percentageChange: 0.62 },
  { portfolioName: "JustFA Champions 3", date: "01.01.2022", portfolioValue: 13286737224, percentageChange: 3.10 },
  { portfolioName: "JustFA Champions 3", date: "01.04.2022", portfolioValue: 12878639477, percentageChange: -3.07 },
  { portfolioName: "JustFA Champions 3", date: "01.07.2022", portfolioValue: 12000198387, percentageChange: -6.82 },
  { portfolioName: "JustFA Champions 3", date: "01.10.2022", portfolioValue: 11752088105, percentageChange: -2.07 },
  { portfolioName: "JustFA Champions 3", date: "01.01.2023", portfolioValue: 12010182244, percentageChange: 2.20 },
  { portfolioName: "JustFA Champions 3", date: "01.04.2023", portfolioValue: 12347856139, percentageChange: 2.81 },
  { portfolioName: "JustFA Champions 3", date: "01.07.2023", portfolioValue: 12467448246, percentageChange: 0.97 },
  { portfolioName: "JustFA Champions 3", date: "01.10.2023", portfolioValue: 12467686269, percentageChange: 0.00 },
  { portfolioName: "JustFA Champions 3", date: "01.01.2024", portfolioValue: 13177469788, percentageChange: 5.69 },
  { portfolioName: "JustFA Champions 3", date: "01.04.2024", portfolioValue: 13745423088, percentageChange: 4.31 },
  { portfolioName: "JustFA Champions 3", date: "01.07.2024", portfolioValue: 13946576180, percentageChange: 1.46 },
  { portfolioName: "JustFA Champions 3", date: "01.10.2024", portfolioValue: 14280948932, percentageChange: 2.40 },
  { portfolioName: "JustFA Champions 3", date: "01.01.2025", portfolioValue: 14437176262, percentageChange: 1.09 },
  { portfolioName: "JustFA Champions 3", date: "01.04.2025", portfolioValue: 14217687797, percentageChange: -1.52 },
  { portfolioName: "JustFA Champions 3", date: "01.07.2025", portfolioValue: 14746083526, percentageChange: 3.72 },

  // JustFA Champions 4
  { portfolioName: "JustFA Champions 4", date: "01.07.2017", portfolioValue: 10072524223, percentageChange: -31.69 },
  { portfolioName: "JustFA Champions 4", date: "01.10.2017", portfolioValue: 10181236991, percentageChange: 1.08 },
  { portfolioName: "JustFA Champions 4", date: "01.01.2018", portfolioValue: 10591772108, percentageChange: 4.03 },
  { portfolioName: "JustFA Champions 4", date: "01.04.2018", portfolioValue: 10178039560, percentageChange: -3.91 },
  { portfolioName: "JustFA Champions 4", date: "01.07.2018", portfolioValue: 10620437536, percentageChange: 4.35 },
  { portfolioName: "JustFA Champions 4", date: "01.10.2018", portfolioValue: 10899042063, percentageChange: 2.62 },
  { portfolioName: "JustFA Champions 4", date: "01.01.2019", portfolioValue: 10017921793, percentageChange: -8.08 },
  { portfolioName: "JustFA Champions 4", date: "01.04.2019", portfolioValue: 10779537383, percentageChange: 7.60 },
  { portfolioName: "JustFA Champions 4", date: "01.07.2019", portfolioValue: 11258853300, percentageChange: 4.45 },
  { portfolioName: "JustFA Champions 4", date: "01.10.2019", portfolioValue: 11468389074, percentageChange: 1.86 },
  { portfolioName: "JustFA Champions 4", date: "01.01.2020", portfolioValue: 11678899905, percentageChange: 1.84 },
  { portfolioName: "JustFA Champions 4", date: "01.04.2020", portfolioValue: 9803349742, percentageChange: -16.06 },
  { portfolioName: "JustFA Champions 4", date: "01.07.2020", portfolioValue: 11213706381, percentageChange: 14.39 },
  { portfolioName: "JustFA Champions 4", date: "01.10.2020", portfolioValue: 11428549609, percentageChange: 1.92 },
  { portfolioName: "JustFA Champions 4", date: "01.01.2021", portfolioValue: 12241050982, percentageChange: 7.11 },
  { portfolioName: "JustFA Champions 4", date: "01.04.2021", portfolioValue: 12585987113, percentageChange: 2.82 },
  { portfolioName: "JustFA Champions 4", date: "01.07.2021", portfolioValue: 13214816600, percentageChange: 5.00 },
  { portfolioName: "JustFA Champions 4", date: "01.10.2021", portfolioValue: 13296975772, percentageChange: 0.62 },
  { portfolioName: "JustFA Champions 4", date: "01.01.2022", portfolioValue: 13852542135, percentageChange: 4.18 },
  { portfolioName: "JustFA Champions 4", date: "01.04.2022", portfolioValue: 13521685328, percentageChange: -2.39 },
  { portfolioName: "JustFA Champions 4", date: "01.07.2022", portfolioValue: 12569913428, percentageChange: -7.04 },
  { portfolioName: "JustFA Champions 4", date: "01.10.2022", portfolioValue: 12438609389, percentageChange: -1.04 },
  { portfolioName: "JustFA Champions 4", date: "01.01.2023", portfolioValue: 12759689304, percentageChange: 2.58 },
  { portfolioName: "JustFA Champions 4", date: "01.04.2023", portfolioValue: 13103495561, percentageChange: 2.69 },
  { portfolioName: "JustFA Champions 4", date: "01.07.2023", portfolioValue: 13280593958, percentageChange: 1.35 },
  { portfolioName: "JustFA Champions 4", date: "01.10.2023", portfolioValue: 13336382512, percentageChange: 0.42 },
  { portfolioName: "JustFA Champions 4", date: "01.01.2024", portfolioValue: 14096648173, percentageChange: 5.70 },
  { portfolioName: "JustFA Champions 4", date: "01.04.2024", portfolioValue: 14842347617, percentageChange: 5.29 },
  { portfolioName: "JustFA Champions 4", date: "01.07.2024", portfolioValue: 15078769505, percentageChange: 1.59 },
  { portfolioName: "JustFA Champions 4", date: "01.10.2024", portfolioValue: 15414517075, percentageChange: 2.23 },
  { portfolioName: "JustFA Champions 4", date: "01.01.2025", portfolioValue: 15670234956, percentageChange: 1.66 },
  { portfolioName: "JustFA Champions 4", date: "01.04.2025", portfolioValue: 15348473735, percentageChange: -2.05 },
  { portfolioName: "JustFA Champions 4", date: "01.07.2025", portfolioValue: 15949281327, percentageChange: 3.91 },

  // JustFA Champions 5
  { portfolioName: "JustFA Champions 5", date: "01.07.2017", portfolioValue: 10099479645, percentageChange: -36.68 },
  { portfolioName: "JustFA Champions 5", date: "01.10.2017", portfolioValue: 10256218972, percentageChange: 1.55 },
  { portfolioName: "JustFA Champions 5", date: "01.01.2018", portfolioValue: 10774807576, percentageChange: 5.06 },
  { portfolioName: "JustFA Champions 5", date: "01.04.2018", portfolioValue: 10245605863, percentageChange: -4.91 },
  { portfolioName: "JustFA Champions 5", date: "01.07.2018", portfolioValue: 10881501926, percentageChange: 6.21 },
  { portfolioName: "JustFA Champions 5", date: "01.10.2018", portfolioValue: 11212421952, percentageChange: 3.04 },
  { portfolioName: "JustFA Champions 5", date: "01.01.2019", portfolioValue: 10019043339, percentageChange: -10.64 },
  { portfolioName: "JustFA Champions 5", date: "01.04.2019", portfolioValue: 10919569388, percentageChange: 8.99 },
  { portfolioName: "JustFA Champions 5", date: "01.07.2019", portfolioValue: 11494304964, percentageChange: 5.26 },
  { portfolioName: "JustFA Champions 5", date: "01.10.2019", portfolioValue: 11668566800, percentageChange: 1.52 },
  { portfolioName: "JustFA Champions 5", date: "01.01.2020", portfolioValue: 11946680718, percentageChange: 2.38 },
  { portfolioName: "JustFA Champions 5", date: "01.04.2020", portfolioValue: 9561652200, percentageChange: -19.96 },
  { portfolioName: "JustFA Champions 5", date: "01.07.2020", portfolioValue: 11305077338, percentageChange: 18.23 },
  { portfolioName: "JustFA Champions 5", date: "01.10.2020", portfolioValue: 11597239392, percentageChange: 2.58 },
  { portfolioName: "JustFA Champions 5", date: "01.01.2021", portfolioValue: 12586540360, percentageChange: 8.53 },
  { portfolioName: "JustFA Champions 5", date: "01.04.2021", portfolioValue: 13164534486, percentageChange: 4.59 },
  { portfolioName: "JustFA Champions 5", date: "01.07.2021", portfolioValue: 13917536340, percentageChange: 5.72 },
  { portfolioName: "JustFA Champions 5", date: "01.10.2021", portfolioValue: 14008772500, percentageChange: 0.66 },
  { portfolioName: "JustFA Champions 5", date: "01.01.2022", portfolioValue: 14775007544, percentageChange: 5.47 },
  { portfolioName: "JustFA Champions 5", date: "01.04.2022", portfolioValue: 14452026490, percentageChange: -2.19 },
  { portfolioName: "JustFA Champions 5", date: "01.07.2022", portfolioValue: 13382343120, percentageChange: -7.40 },
  { portfolioName: "JustFA Champions 5", date: "01.10.2022", portfolioValue: 13381426884, percentageChange: -0.01 },
  { portfolioName: "JustFA Champions 5", date: "01.01.2023", portfolioValue: 13675714864, percentageChange: 2.20 },
  { portfolioName: "JustFA Champions 5", date: "01.04.2023", portfolioValue: 14087741364, percentageChange: 3.01 },
  { portfolioName: "JustFA Champions 5", date: "01.07.2023", portfolioValue: 14433307126, percentageChange: 2.45 },
  { portfolioName: "JustFA Champions 5", date: "01.10.2023", portfolioValue: 14514687136, percentageChange: 0.56 },
  { portfolioName: "JustFA Champions 5", date: "01.01.2024", portfolioValue: 15365211611, percentageChange: 5.86 },
  { portfolioName: "JustFA Champions 5", date: "01.04.2024", portfolioValue: 16413256147, percentageChange: 6.82 },
  { portfolioName: "JustFA Champions 5", date: "01.07.2024", portfolioValue: 16835465531, percentageChange: 2.57 },
  { portfolioName: "JustFA Champions 5", date: "01.10.2024", portfolioValue: 17137026095, percentageChange: 1.79 },
  { portfolioName: "JustFA Champions 5", date: "01.01.2025", portfolioValue: 17529896330, percentageChange: 2.29 },
  { portfolioName: "JustFA Champions 5", date: "01.04.2025", portfolioValue: 17158486568, percentageChange: -2.12 },
  { portfolioName: "JustFA Champions 5", date: "01.07.2025", portfolioValue: 17948151988, percentageChange: 4.60 },
];

// Simplified Bank of England Base Rate data
export const rawBaseRateData: RawBaseRateData[] = [
  { date: "08 May 25", rate: 4.25 },
  { date: "06 Feb 25", rate: 4.50 },
  { date: "07 Nov 24", rate: 4.75 },
  { date: "01 Aug 24", rate: 5.00 },
  { date: "03 Aug 23", rate: 5.25 },
  { date: "22 Jun 23", rate: 5.00 },
  { date: "11 May 23", rate: 4.50 },
  { date: "23 Mar 23", rate: 4.25 },
  { date: "02 Feb 23", rate: 4.00 },
  { date: "15 Dec 22", rate: 3.50 },
  { date: "03 Nov 22", rate: 3.00 },
  { date: "22 Sep 22", rate: 2.25 },
  { date: "04 Aug 22", rate: 1.75 },
  { date: "16 Jun 22", rate: 1.25 },
  { date: "05 May 22", rate: 1.00 },
  { date: "17 Mar 22", rate: 0.75 },
  { date: "03 Feb 22", rate: 0.50 },
  { date: "16 Dec 21", rate: 0.25 },
  { date: "19 Mar 20", rate: 0.10 },
  { date: "11 Mar 20", rate: 0.25 },
  { date: "02 Aug 18", rate: 0.75 },
  { date: "02 Nov 17", rate: 0.50 },
  { date: "04 Aug 16", rate: 0.25 },
  { date: "05 Mar 09", rate: 0.50 },
];

// Simplified CPI data
export const rawCPIData: RawCPIData[] = [
  { date: "2024", cpiIndex: 3.30 },
  { date: "2023", cpiIndex: 6.85 },
  { date: "2022", cpiIndex: 7.90 },
  { date: "2021", cpiIndex: 2.50 },
  { date: "2020", cpiIndex: 1.00 },
  { date: "2019", cpiIndex: 1.70 },
  { date: "2018", cpiIndex: 2.30 },
  { date: "2017", cpiIndex: 2.60 },
  { date: "2016", cpiIndex: 1.00 },
  { date: "2015", cpiIndex: 0.40 },
  { date: "2014", cpiIndex: 1.50 },
];

// Simplified Property data
export const rawPropertyData: RawPropertyData[] = [
  { date: "2025-01", percentageChange: 4.0 },
  { date: "2024-01", percentageChange: -1.9 },
  { date: "2023-01", percentageChange: 5.2 },
  { date: "2022-01", percentageChange: 8.6 },
  { date: "2021-02", percentageChange: 7.8 },
  { date: "2021-01", percentageChange: 6.9 },
  { date: "2020-01", percentageChange: 1.6 },
  { date: "2019-01", percentageChange: 1.7 },
  { date: "2018-01", percentageChange: 4.3 },
  { date: "2017-01", percentageChange: 4.8 },
  { date: "2016-01", percentageChange: 7.8 },
  { date: "2015-01", percentageChange: 7.0 },
];

// Function to parse date from DD.MM.YYYY format to ISO format
export function parseDate(dateString: string): string {
  const [day, month, year] = dateString.split('.');
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

// Function to parse Bank of England date format (e.g., "08 May 25")
export function parseBaseRateDate(dateString: string): string {
  const months = {
    'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04', 'May': '05', 'Jun': '06',
    'Jul': '07', 'Aug': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'
  };
  
  const [day, month, yearShort] = dateString.split(' ');
  const year = parseInt(yearShort) > 50 ? `19${yearShort}` : `20${yearShort}`;
  const monthNum = months[month as keyof typeof months];
  
  return `${year}-${monthNum}-${day.padStart(2, '0')}`;
}

// Function to parse CPI date format (e.g., "2024")
export function parseCPIDate(dateString: string): string {
  return `${dateString}-01-01`;
}

// Function to parse Property date format (e.g., "2025-01")
export function parsePropertyDate(dateString: string): string {
  return `${dateString}-01`;
}

// Function to get portfolio key for ChartData interface
export function getPortfolioKey(portfolioName: string): string {
  if (portfolioName.includes('Passive 1')) return 'passive1';
  if (portfolioName.includes('Passive 2')) return 'passive2';
  if (portfolioName.includes('Passive 3')) return 'passive3';
  if (portfolioName.includes('Passive 4')) return 'passive4';
  if (portfolioName.includes('Passive 5')) return 'passive5';
  if (portfolioName.includes('Champions 1')) return 'champions1';
  if (portfolioName.includes('Champions 2')) return 'champions2';
  if (portfolioName.includes('Champions 3')) return 'champions3';
  if (portfolioName.includes('Champions 4')) return 'champions4';
  if (portfolioName.includes('Champions 5')) return 'champions5';
  return '';
}

// Function to scale portfolio values to user's starting value
export function scalePortfolioValues(startingValue: number): { [key: string]: { [date: string]: number } } {
  const portfolioValues: { [key: string]: { [date: string]: number } } = {};
  
  // Group data by portfolio
  const portfolioGroups: { [key: string]: RawPortfolioData[] } = {};
  rawPortfolioData.forEach(record => {
    const key = getPortfolioKey(record.portfolioName);
    if (key) {
      if (!portfolioGroups[key]) {
        portfolioGroups[key] = [];
      }
      portfolioGroups[key].push(record);
    }
  });
  
  // Scale values for each portfolio
  Object.keys(portfolioGroups).forEach(portfolioKey => {
    const records = portfolioGroups[portfolioKey].sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateA.localeCompare(dateB);
    });
    
    portfolioValues[portfolioKey] = {};
    const baseValue = records[0]?.portfolioValue || 10000000000; // Use first value as base
    
    records.forEach(record => {
      const isoDate = parseDate(record.date);
      // Scale the portfolio value proportionally to user's starting value
      const scaledValue = (record.portfolioValue / baseValue) * startingValue;
      portfolioValues[portfolioKey][isoDate] = scaledValue;
    });
  });
  
  return portfolioValues;
}

// Function to calculate reference benchmark values
export function calculateReferenceValues(startingValue: number): { [key: string]: { [date: string]: number } } {
  const referenceValues: { [key: string]: { [date: string]: number } } = {
    baseRate: {},
    cpi: {},
    property: {}
  };
  
  // Process Bank of England Base Rate - convert to cumulative investment value
  const baseRateData = rawBaseRateData.map(record => ({
    date: parseBaseRateDate(record.date),
    rate: record.rate
  })).sort((a, b) => a.date.localeCompare(b.date));
  
  let baseRateValue = startingValue;
  let lastBaseRateDate = '';
  
  baseRateData.forEach(record => {
    if (lastBaseRateDate) {
      const daysDiff = Math.floor((new Date(record.date).getTime() - new Date(lastBaseRateDate).getTime()) / (1000 * 60 * 60 * 24));
      const annualRate = record.rate / 100;
      const growth = Math.pow(1 + annualRate, daysDiff / 365);
      baseRateValue = baseRateValue * growth;
    }
    
    referenceValues.baseRate[record.date] = baseRateValue;
    lastBaseRateDate = record.date;
  });
  
  // Process CPI - convert to cumulative investment value (inflation-adjusted)
  const cpiData = rawCPIData.map(record => ({
    date: parseCPIDate(record.date),
    cpiIndex: record.cpiIndex
  })).sort((a, b) => a.date.localeCompare(b.date));
  
  let cpiValue = startingValue;
  
  cpiData.forEach((record, index) => {
    if (index > 0) {
      // Apply annual inflation rate
      const annualInflation = record.cpiIndex / 100;
      cpiValue = cpiValue * (1 + annualInflation);
    }
    
    referenceValues.cpi[record.date] = cpiValue;
  });
  
  // Process Property - use percentage changes directly
  const propertyData = rawPropertyData.map(record => ({
    date: parsePropertyDate(record.date),
    percentageChange: record.percentageChange / 100
  })).sort((a, b) => a.date.localeCompare(b.date));
  
  let propertyValue = startingValue;
  
  propertyData.forEach((record, index) => {
    if (index > 0) {
      propertyValue = propertyValue * (1 + record.percentageChange);
    }
    referenceValues.property[record.date] = Math.max(propertyValue, startingValue * 0.5);
  });
  
  return referenceValues;
}

// Updated function name for consistency
export const calculateCumulativeValues = scalePortfolioValues;