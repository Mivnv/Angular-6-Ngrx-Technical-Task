import {
	Input,
	Output,
	ChangeDetectionStrategy,
	Component,
	OnInit,
	EventEmitter
} from '@angular/core';

import { Observable } from 'rxjs';

import { Chart } from 'angular-highcharts';
import { CompaniesService } from '../../../services/companies.service'
import { ProcessedCompany } from '../../models/company';
import { ChartSettings, ChartSeries } from '../../models/chart';

@Component({
	selector: 'app-companies-chart',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './companies-chart.component.html',
	styleUrls: ['./companies-chart.component.css']
})

export class CompaniesChartComponent implements OnInit {

	@Input() items: ProcessedCompany[];
	@Output() onItemSelected: EventEmitter<ProcessedCompany> = new EventEmitter<ProcessedCompany>();


	chart: Chart;
	selectedCategory: string = 'All categories';
	selectedEntry: string = 'All entries';
	selectedItemsBalance: number = 0;
	selectedItemsMonthBalance: number = 0;
	selectedItem: ProcessedCompany = null;
	hideOpenCompanyButton: boolean = true;

	constructor() { }

	ngOnInit() {
	}

	ngOnChanges(changes) {
		if (changes.items && this.items.length) {
			this.createChart(this.items);
		}
	}

	createChart(items: ProcessedCompany[]): void {
		let chartSettings: ChartSettings = {
			chart: {
				type: 'line'
			},
			title: {
				text: 'Companies statistics'
			},
			credits: {
				enabled: false
			},
			xAxis: {
				categories: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
			},

			series: this.createSeries(items)
		};

		this.chart = new Chart(chartSettings);
		this.calcSelectedBalance(items);
		this.calcSelectedMonthBalance(items);
	}

	createSeries(items: ProcessedCompany[]): ChartSeries[] {
		return items
			.map((item: ProcessedCompany): ChartSeries => {
				let data: number[] = [];
				let name: string = item.name;

				for (let dailyStats in item.weekStats) {
					data.push(item.weekStats[dailyStats])
				}

				return {
					data,
					name
				}

			});
	}

	calcSelectedBalance(items): void {
		let balance: number = 0;

		items.map((item: ProcessedCompany) => {
			balance += item.balance;
		})

		this.selectedItemsBalance = balance;
	}

	calcSelectedMonthBalance(items) {
		let monthBalance: number = 0;
    
		items.map((item: ProcessedCompany) => {
			monthBalance += item.monthBalance;
		})

		this.selectedItemsMonthBalance = monthBalance;
	}

  get categories(): string[] {
    let allCategories = this.items.map((item: ProcessedCompany) => item.category);
    allCategories.unshift('All categories');    
    return allCategories.filter((item, pos) => allCategories.indexOf(item) === pos); // Remove duplicate values from array

  }

	selectCategory(event): void {
		let items: ProcessedCompany[] = event.value !== 'All categories'
			? this.items.filter((item) => item.category === event.value)
			: this.items;

		this.createChart(items);
	}

	selectCompany(event): void {
		let isAllEntries = event.value === 'All entries'
		this.selectedItem = this.items.filter((item) => item.id === event.value)[0];
		this.hideOpenCompanyButton = isAllEntries ? true : false;

		this.createChart(!isAllEntries ? [this.selectedItem] : this.items);

	}

	openCompany(event): void {
		this.onItemSelected.emit(this.selectedItem);
	}

}