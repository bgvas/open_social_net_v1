import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beneficiary-list',
  templateUrl: './beneficiary-list.component.html',
  styleUrls: ['./beneficiary-list.component.scss']
})
export class BeneficiaryListComponent implements OnInit {

  beneficiaries = [];
  current_page = 1;


  constructor() { }

  ngOnInit(): void {
    this.beneficiaries = [
      {'recid': 1, 'name' : 'Ανδρέας Ανδρέου', 'amka' : '1708752234', 'nationality' : 'Ελληνική', 'enabled' : true},
      {'recid': 2, 'name' : 'Βασίλειος Βασιλείου', 'amka' : '1708752234', 'nationality' : 'Ελληνική', 'enabled' : true},
      {'recid': 3, 'name' : 'Γεώργιος Γεωργίου', 'amka' : '1708752234', 'nationality' : 'Ελληνική', 'enabled' : false},
      {'recid': 4, 'name' : 'Δημήτριος Δημητρίου', 'amka' : '1708752234', 'nationality' : 'Ελληνική', 'enabled' : true},
      {'recid': 5, 'name' : 'Νικόλαος Νικολάου', 'amka' : '1708752234', 'nationality' : 'Ελληνική', 'enabled' : true},
      {'recid': 6, 'name' : 'Πέτρος Πέτρου', 'amka' : '1708752234', 'nationality' : 'Ελληνική', 'enabled' : false},
      {'recid': 7, 'name' : 'Κώστας Κωνσταντίνου', 'amka' : '1708752234', 'nationality' : 'Ελληνική', 'enabled' : true},
      {'recid': 8, 'name' : 'Γιάννης Ιωάννου', 'amka' : '1708752234', 'nationality' : 'Ελληνική', 'enabled' : true},
      {'recid': 9, 'name' : 'Χρήστος Χρήστου', 'amka' : '1708752234', 'nationality' : 'Ελληνική', 'enabled' : true},
      {'recid': 10, 'name' : 'Μαρία Νικολάου', 'amka' : '1708752234', 'nationality' : 'Ελληνική', 'enabled' : false},
      {'recid': 11, 'name' : 'Καίτη Μπλίκα', 'amka' : '1708752234', 'nationality' : 'Ελληνική', 'enabled' : true},
      {'recid': 12, 'name' : 'Χασάν Χασάν', 'amka' : '1708752234', 'nationality' : 'Ελληνική', 'enabled' : true},
      {'recid': 13, 'name' : 'Απντούλ Απντούλ', 'amka' : '1708752234', 'nationality' : 'Ελληνική', 'enabled' : true}
    ]
  }

}
