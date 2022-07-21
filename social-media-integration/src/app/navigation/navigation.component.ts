import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private route:ActivatedRoute, private router:Router) {}
  table(){
    this.router.navigate(['table'],{relativeTo:this.route})
  }
  tree(){
    this.router.navigate(['tree'],{relativeTo:this.route})
  }
  dragAndDrop(){
    this.router.navigate(['drag-and-drop'],{relativeTo:this.route})
  }
  address(){
    this.router.navigate(['address'],{relativeTo:this.route})
  }
  dashboard(){
    this.router.navigate(['dashboard1'],{relativeTo:this.route})
  }
  greeting(){
    this.router.navigate(['/navigation'])
  }

}
