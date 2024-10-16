import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ChartOptions, ChartType, ChartDataset, registerables, ChartData } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, BaseChartDirective],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  mascotasTratamiento: number | undefined;
  numAtenciones: number | undefined;
  precioTotal: number | undefined;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: string[] = ['Mascotas en Tratamiento', 'Atenciones Realizadas', 'Costo Total'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataset[] = [
    { data: [0, 0, 0], label: 'Estadísticas de la Clínica' }
  ];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: string[] = [];
  public pieChartData: ChartData<'pie'> = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40','#B8FF33','#2009A0']
      }
    ]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;

  public medCostChartOptions: ChartOptions = {
    responsive: true,
    indexAxis: 'y',
  };
  public medCostChartLabels: string[] = [];
  public medCostChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        label: 'Costo de Medicamentos',
        data: [],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40']
      }
    ]
  };
  public medCostChartType: ChartType = 'bar';

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getActivePetsCount().subscribe(data => {
      this.mascotasTratamiento = data;
      this.updateBarChartData();
    });

    this.adminService.getTotalTreatmentsCount().subscribe(data => {
      this.numAtenciones = data;
      this.updateBarChartData();
    });

    this.adminService.getTotalTreatmentCost().subscribe(data => {
      this.precioTotal = data;
      this.updateBarChartData();
    });

    this.adminService.getSpecialtiesDistribution().subscribe(data => {
      this.pieChartLabels = Object.keys(data);
      this.pieChartData = {
        labels: this.pieChartLabels,
        datasets: [
          {
            data: Object.values(data),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#B8FF33','#2009A0','#f10202']
          }
        ]
      };
    });

    this.adminService.getTopPricedMedications().subscribe(data => {
      console.log('Datos de medicamentos más caros:', data);
      this.medCostChartLabels = data.map((med: any) => med.nombre);
      this.medCostChartData = {
        labels: this.medCostChartLabels,
        datasets: [
          {
            label: 'Costo de Medicamentos',
            data: data.map((med: any) => med.precio_compra),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40']
          }
        ]
      };
    });
  }

  updateBarChartData(): void {
    if (this.mascotasTratamiento !== undefined && this.numAtenciones !== undefined && this.precioTotal !== undefined) {
      this.barChartData[0].data = [this.mascotasTratamiento, this.numAtenciones, this.precioTotal];
    }
  }
}