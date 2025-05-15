import { Component, OnInit } from '@angular/core';
import { VehiculeSayfeddineThabetService } from '../vehiculesayfeddinethabetservice.service';
import { vehicule } from '../../models/vehicule';

@Component({
  selector: 'app-vehicule-sayfeddinethabet-component',
  templateUrl: './vehicule-sayfeddinethabet-component.component.html',
  styleUrls: ['./vehicule-sayfeddinethabet-component.component.css']
})
export class VehiculeSayfeddinethabetComponentComponent implements OnInit {
  vehicules: vehicule[] = [];
  selectedVehicule: vehicule | null = null;

  constructor(private vehiculeService: VehiculeSayfeddineThabetService) {}

  ngOnInit() {
    this.loadVehicules();
  }

  loadVehicules() {
    this.vehiculeService.getVehicules().subscribe(data => {
      this.vehicules = data;
    });
  }

  showDetails(veh: vehicule) {
    this.selectedVehicule = veh;
  }

  deleteVehicule(id: number) {
    this.vehiculeService.deleteVehicule(id).subscribe(() => {
      this.loadVehicules();
      this.selectedVehicule = null;
    });
  }
}
