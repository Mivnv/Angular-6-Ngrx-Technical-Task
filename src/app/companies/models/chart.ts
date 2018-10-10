export interface ChartType {
	type: string;
}

export interface ChartTitle {
	text: string;
}

export interface ChartCredits {
	enabled: boolean;
}

export interface ChartSeries {
	name: string;
	data: number[];
}

export interface ChartxAxis {
	categories: string[];
}

export interface ChartSettings {
	chart: ChartType;
	title: ChartTitle;
	credits: ChartCredits;
	series: ChartSeries[];
	xAxis: ChartxAxis;
}