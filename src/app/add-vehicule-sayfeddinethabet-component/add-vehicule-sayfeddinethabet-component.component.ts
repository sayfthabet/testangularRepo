import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiculeSayfeddineThabetService } from '../vehiculesayfeddinethabetservice.service';

@Component({
  selector: 'app-add-vehicule-sayfeddinethabet-component',
  templateUrl: './add-vehicule-sayfeddinethabet-component.component.html',
  styleUrls: ['./add-vehicule-sayfeddinethabet-component.component.css']
})
export class AddVehiculeSayfeddinethabetComponentComponent implements OnInit {
  addform!: FormGroup;
  submitted = false;

  constructor(
    private vehiculeService: VehiculeSayfeddineThabetService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addform = new FormGroup({
      Matricule: new FormControl('', [Validators.required, Validators.pattern('^[A-Z].*')]),
      Description: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Marque: new FormControl('', Validators.required),
      Disponible: new FormControl(true),
      nbrInteresse: new FormControl(0)
    });
  }

  get Matricule() { return this.addform.get('Matricule'); }
  get Description() { return this.addform.get('Description'); }
  get Marque() { return this.addform.get('Marque'); }

  add() {
    this.submitted = true;
    if (this.addform.invalid) return;
    this.vehiculeService.addVehicule(this.addform.value).subscribe(() => {
      this.router.navigate(['/vehicules']);
    });
  }
}
