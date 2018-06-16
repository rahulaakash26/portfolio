import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidenavitems',
  templateUrl: './sidenavitems.component.html',
  styleUrls: ['./sidenavitems.component.css']
})
export class SidenavitemsComponent implements OnInit {

  menu = [
    {'name': 'Home', 'compattached': 'home', 'icon': 'home'},
    {'name': 'About', 'compattached': 'about', 'icon': 'person'},
    {'name': 'Education', 'compattached': 'education', 'icon': 'school'},
    {'name': 'Skills', 'compattached': 'skills', 'icon': 'build'},
    {'name': 'Projects', 'compattached': 'projects', 'icon': 'books'},
    {'name': 'Workshops', 'compattached': 'workshops', 'icon': 'work'},
    {'name': 'Achievements', 'compattached': 'achievements', 'icon': 'sentiment_satisfied_alt'},
    {'name': 'Internships', 'compattached': 'internship', 'icon': 'laptop'},
    {'name': 'Contact', 'compattached': 'contact', 'icon': 'mail_outline'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
