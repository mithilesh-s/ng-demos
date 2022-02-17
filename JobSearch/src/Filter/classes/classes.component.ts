import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
})
export class ClassesComponent implements OnInit {


  constructor() {}

  ngOnInit() {}

  ninethClassSubjectData = ['Hindi','English','Science','Social Science','Maths','Sanskrit'];
  tenthClassSubjectData = ['Hindi','English','Science','Social Science','Maths','Sanskrit'];
  eleventhClassSubjectData = ['Hindi', 'English', 'Maths', 'Physics', 'Chemistry'];
  twelvethClassSubjectData = ['Hindi', 'English', 'Maths', 'Physics', 'Chemistry'];
  classStandardData=[9,10,11,12];
  noOfNinethClassIndexZeroStudents=2;
  noOfNinethClassIndexZeroStudentsName=['mithilesh','suresh'];


}
