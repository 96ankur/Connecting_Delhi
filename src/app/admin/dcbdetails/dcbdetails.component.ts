import { Component, OnInit } from '@angular/core';
import { ComplaintsCountService } from '../Services/complaints-count.service';

@Component({
  selector: 'app-dcbdetails',
  templateUrl: './dcbdetails.component.html',
  styleUrls: ['./dcbdetails.component.scss']
})
export class DCBdetailsComponent implements OnInit {
  
    public complaintsCount={}
  //total complaints graphs logic
  public chartTypeTotal:string = 'bar';
  public chartDatasetsTotal:Array<any> = [
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Total Complaints'}
    ];
  public chartLabelsTotal:Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sept','Oct','Nov','Dec'];
  public chartColorsTotal:Array<any> = [
       {
            backgroundColor: 'rgba(151,187,205,0.2)',
            borderColor: 'rgba(151,187,205,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(151,187,205,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(151,187,205,1)'
        }
    ];
  public chartOptionsTotal:any = {
        responsive: true
    };

  //solved complaints graph
  public chartTypeSolved:string = 'bar';
  public chartDatasetsSolved:Array<any> = [
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Solved Complaints'}
    ];
  public chartLabelsSolved:Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sept','Oct','Nov','Dec'];
  public chartColorsSolved:Array<any> = [
       {
            backgroundColor: 'rgba(87, 167, 12,0.2)',
            borderColor: 'rgba(87, 167, 12,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(87, 167, 12,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(87, 167, 12,1)'
        }
    ];
  public chartOptionsSolved:any = {
        responsive: true
    };
  
  //Pending complaints graphs logic  
  public chartTypePending:string='bar';
  public chartDatasetsPending:Array<any> = [
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Pending Complaints'}
];
public chartLabelsPending:Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sept','Oct','Nov','Dec'];
public chartColorsPending:Array<any> = [
   {
        backgroundColor: 'rgba(255, 87, 51,0.2)',
        borderColor: 'rgba(255, 87, 51,1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 87, 51,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 87, 51,1)'
    }
];
public chartOptionsPending:any = {
    responsive: true
};
  //Pending complaints graphs logic  
  public chartTypeCategory:string='pie';
  public chartDataCategory:Array<any> = [300, 50, 100, 40, 120];

    public chartLabelsCategory:Array<any> = ['Sewage', 'Water', 'Roads', 'Electricity', 'Others'];

    public chartColorsCategory:Array<any> = [{
        hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
        hoverBorderWidth: 0,
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5","#616774"]
    }];

    public chartOptions:any = {
        responsive: true
    };

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }


  constructor(private complaintsCountService:ComplaintsCountService) { }

  ngOnInit() {

      this.complaintsCountService.count('DCB').subscribe((res:any)=>{
          if(res.success){
              this.complaintsCount=res.count
          }else{
              window.alert(res.msg)

          }
      })
  }

}
