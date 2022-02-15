import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
})
export class ClassesComponent implements OnInit {
  subjectName1: string = '';
  subjectName2: string = '';
  subjectName3: string = '';
  subjectName4: string = '';

  constructor() {}

  ngOnInit() {}

  ninethClassSubject = [
    'Hindi',
    'English',
    'Science',
    'Social Science',
    'Maths',
    'Sanskrit',
  ];
  tenthClassSubject = [
    'Hindi',
    'English',
    'Science',
    'Social Science',
    'Maths',
    'Sanskrit',
  ];
  eleventhClassSubject = ['Hindi', 'English', 'Maths', 'Physics', 'Chemistry'];
  twelvethClassSubject = ['Hindi', 'English', 'Maths', 'Physics', 'Chemistry'];

}
