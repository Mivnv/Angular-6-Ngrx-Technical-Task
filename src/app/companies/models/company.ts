export interface RevenuePerWeek {
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday: number
};

export interface Company {
  id: number;
  name: string;
  type: string;
  revenuePerWeek: RevenuePerWeek;
  revenue: number;
  monthRevenue: number
};

export interface ProcessedCompany {
  id: number;
  name: string;
  category: string;
  weekStats: RevenuePerWeek;
  balance: number;
  monthBalance: number  
};

export interface CompaniesJSON {
  companies: Company[]
}